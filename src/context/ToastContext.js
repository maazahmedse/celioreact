import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = "success", duration = 3000) => {
        const id = Date.now();

        let finalMessage = message;

        // 🔹 Normalize Laravel-style error objects
        if (typeof message === "object" && message !== null) {
            try {
                // Laravel usually sends { email: ["..."], password: ["..."] }
                const firstError = Object.values(message).flat()[0];
                finalMessage = firstError || "Something went wrong";
            } catch (err) {
                finalMessage = "Something went wrong";
            }
        }

        setToasts((prev) => [...prev, { id, message: finalMessage, type, duration }]);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Render all active toasts */}
            {toasts.map((t) => (
                <Toast
                    key={t.id}
                    message={t.message}
                    type={t.type}
                    duration={t.duration}
                    onClose={() => removeToast(t.id)}
                />
            ))}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);