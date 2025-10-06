import React, { useEffect } from "react";
import { useLoader } from "../../context/LoaderContext";
import LoadableSection from "../../components/Spinner/LoadableSection";
import "./LeftNavBar.css";

function LeftNavBar() {
    const { showLoader, hideLoader } = useLoader();
    useEffect(() => {

        showLoader("navbar");
        setTimeout(() => hideLoader("navbar"), 4000);

        showLoader("navbarnew");
        setTimeout(() => hideLoader("navbarnew"), 4000);

        // Collapse all submenus on mount
        const allSubmenus = document.querySelectorAll(".navigation-main li ul");
        allSubmenus.forEach((submenu) => {
            submenu.style.display = "none";
        });

        const navLinks = document.querySelectorAll(
            ".navigation-main li:has(ul) > a"
        );

        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                const li = link.parentElement;

                if (!li.classList.contains("disabled")) {
                    // Toggle active state
                    const submenu = li.querySelector("ul");
                    const isActive = li.classList.contains("active");

                    // Close all siblings if accordion is enabled
                    const navigation = document.querySelector(".navigation-main");
                    if (navigation && navigation.classList.contains("navigation-accordion")) {
                        const siblings = Array.from(li.parentElement.children).filter(
                            (child) => child !== li
                        );
                        siblings.forEach((sib) => {
                            sib.classList.remove("active");
                            const sibUl = sib.querySelector("ul");
                            if (sibUl) sibUl.style.display = "none";
                        });
                    }

                    // Toggle current submenu
                    if (submenu) {
                        if (isActive) {
                            li.classList.remove("active");
                            submenu.style.display = "none";
                        } else {
                            li.classList.add("active");
                            submenu.style.display = "block";
                        }
                    }
                }
            });
        });

        // Cleanup on unmount
        return () => {
            navLinks.forEach((link) => {
                link.replaceWith(link.cloneNode(true));
            });
        };
    }, []);

    return (
        <>

            <div className="sidebar sidebar-main">
                <div className="sidebar-content">
                    <div className="sidebar-user">

                        <LoadableSection loaderKey="navbar" spinner>
                            <div className="category-content">
                                <div className="media">
                                    <a href="#" className="media-left"><img src="assets/img/placeholder.jpg"
                                        className="img-circle img-sm" alt="" /></a>
                                    <div className="media-body">
                                        <span className="media-heading text-semibold">Victoria Baker</span>
                                        <div className="text-size-mini text-muted">
                                            <i className="icon-pin text-size-small"></i> &nbsp;Santa Ana, CA
                                        </div>
                                    </div>

                                    <div className="media-right media-middle">
                                        <ul className="icons-list">
                                            <li>
                                                <a href="#"><i className="icon-cog3"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </LoadableSection>
                    </div>
                    {/* <!-- /user menu --> */}


                    {/* <!-- Main navigation --> */}
                    <div className="sidebar-category sidebar-category-visible">
                        <LoadableSection loaderKey="navbarnew" spinner>
                            <div className="category-content no-padding">
                                <ul className="navigation navigation-main navigation-accordion">

                                    {/* <!-- Main --> */}
                                    <li className="navigation-header"><span>Main</span> <i className="icon-menu"
                                        title="Main pages"></i></li>
                                    <li className="active"><a href="index.html"><i className="icon-home4"></i>
                                        <span>Dashboard</span></a></li>
                                    <li>
                                        <a href="#" className="has-ul"><i className="icon-stack2"></i> <span>Page layouts</span></a>
                                        <ul>
                                            <li><a href="layout_navbar_fixed.html">Fixed navbar</a></li>
                                            <li><a href="layout_navbar_sidebar_fixed.html">Fixed navbar &amp; sidebar</a>
                                            </li>
                                            <li><a href="layout_sidebar_fixed_native.html">Fixed sidebar native scroll</a>
                                            </li>
                                            <li><a href="layout_navbar_hideable.html">Hideable navbar</a></li>
                                            <li><a href="layout_navbar_hideable_sidebar.html">Hideable &amp; fixed
                                                sidebar</a></li>
                                            <li><a href="layout_footer_fixed.html">Fixed footer</a></li>
                                            <li className="navigation-divider"></li>
                                            <li><a href="boxed_default.html">Boxed with default sidebar</a></li>
                                            <li><a href="boxed_mini.html">Boxed with mini sidebar</a></li>
                                            <li><a href="boxed_full.html">Boxed full width</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="changelog.html"><i className="icon-list-unordered"></i> <span>Changelog <span
                                        className="label bg-blue-400">1.4</span></span></a></li>
                                    <li><a href="../../RTL/index.html"><i className="icon-width"></i> <span>RTL
                                        version</span></a></li>
                                </ul>
                            </div>
                        </LoadableSection>
                    </div>


                </div>
            </div>

        </>
    )
}

export default LeftNavBar