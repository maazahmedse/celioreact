import React, { useState } from "react";
import OpenAI from "openai";


const client = new OpenAI({
    apiKey: "", // for testing only
    dangerouslyAllowBrowser: true,
});

function Chatgpt() {


    const [input, setInput] = useState("");
    const [reply, setReply] = useState("");

    // 👇 make this async
    const handleSend = async () => {
        try {
            const response = await client.chat.completions.create({
                model: "gpt-4o",
                messages: [{ role: "user", content: input }],
            });
            setReply(response.choices[0].message.content);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div style={{ padding: 20 }}>
            <h2>ChatGPT Demo</h2>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
            />
            <button onClick={handleSend}>Send</button>
            <p><strong>GPT:</strong> {reply}</p>
        </div>
    );
}

export default Chatgpt