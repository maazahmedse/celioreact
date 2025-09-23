import "./Header.css";
import React, { useEffect } from "react";


const Header = () => {
    useEffect(() => {
        const toggleButton = document.querySelector(".sidebar-main-toggle");

        if (toggleButton) {

            const handleClick = (e) => {
                e.preventDefault();
                document.body.classList.toggle("sidebar-xs");
            };

            toggleButton.addEventListener("click", handleClick);

            // Cleanup on unmount
            return () => {
                toggleButton.removeEventListener("click", handleClick);
            };
        }
    }, []);

    return (
        <div>
            {/* <img
                className="parental_bg_overlay"
                src="/assets/img/form/1.png"
                alt=""
            /> */}
            <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html"><img src="/assets/img/logo_light.png" alt="" /></a>

                    <ul className="nav navbar-nav visible-xs-block">
                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
                        <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
                    </ul>
                </div>

                <div className="navbar-collapse collapse" id="navbar-mobile">
                    <ul className="nav navbar-nav">
                        <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a>
                        </li>

                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon-git-compare"></i>
                                <span className="visible-xs-inline-block position-right">Git updates</span>
                                <span className="badge bg-warning-400">9</span>
                            </a>

                            <div className="dropdown-menu dropdown-content">
                                <div className="dropdown-content-heading">
                                    Git updates
                                    <ul className="icons-list">
                                        <li><a href="#"><i className="icon-sync"></i></a></li>
                                    </ul>
                                </div>

                                <ul className="media-list dropdown-content-body width-350">
                                    <li className="media">
                                        <div className="media-left">
                                            <a href="#"
                                                className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm"><i
                                                    className="icon-git-pull-request"></i></a>
                                        </div>

                                        <div className="media-body">
                                            Drop the IE <a href="#">specific hacks</a> for temporal inputs
                                            <div className="media-annotation">4 minutes ago</div>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left">
                                            <a href="#"
                                                className="btn border-warning text-warning btn-flat btn-rounded btn-icon btn-sm"><i
                                                    className="icon-git-commit"></i></a>
                                        </div>

                                        <div className="media-body">
                                            Add full font overrides for popovers and tooltips
                                            <div className="media-annotation">36 minutes ago</div>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left">
                                            <a href="#"
                                                className="btn border-info text-info btn-flat btn-rounded btn-icon btn-sm"><i
                                                    className="icon-git-branch"></i></a>
                                        </div>

                                        <div className="media-body">
                                            <a href="#">Chris Arney</a> created a new <span className="text-semibold">Design</span>
                                            branch
                                            <div className="media-annotation">2 hours ago</div>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left">
                                            <a href="#"
                                                className="btn border-success text-success btn-flat btn-rounded btn-icon btn-sm"><i
                                                    className="icon-git-merge"></i></a>
                                        </div>

                                        <div className="media-body">
                                            <a href="#">Eugene Kopyov</a> merged <span className="text-semibold">Master</span> and
                                            <span className="text-semibold">Dev</span> branches
                                            <div className="media-annotation">Dec 18, 18:36</div>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left">
                                            <a href="#"
                                                className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm"><i
                                                    className="icon-git-pull-request"></i></a>
                                        </div>

                                        <div className="media-body">
                                            Have Carousel ignore keyboard events
                                            <div className="media-annotation">Dec 12, 05:46</div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="dropdown-content-footer">
                                    <a href="#" data-popup="tooltip" title="All activity"><i
                                        className="icon-menu display-block"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <p className="navbar-text"><span className="label bg-success">Online</span></p>

                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown language-switch">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <img src="/assets/img/flags/gb.png" className="position-left" alt="" />
                                English
                                <span className="caret"></span>
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="deutsch"><img src="/assets/img/flags/de.png" alt="" /> Deutsch</a></li>
                                <li><a className="ukrainian"><img src="/assets/img/flags/ua.png" alt="" /> Українська</a></li>
                                <li><a className="english"><img src="/assets/img/flags/gb.png" alt="" /> English</a></li>
                                <li><a className="espana"><img src="/assets/img/flags/es.png" alt="" /> España</a></li>
                                <li><a className="russian"><img src="/assets/img/flags/ru.png" alt="" /> Русский</a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon-bubbles4"></i>
                                <span className="visible-xs-inline-block position-right">Messages</span>
                                <span className="badge bg-warning-400">2</span>
                            </a>

                            <div className="dropdown-menu dropdown-content width-350">
                                <div className="dropdown-content-heading">
                                    Messages
                                    <ul className="icons-list">
                                        <li><a href="#"><i className="icon-compose"></i></a></li>
                                    </ul>
                                </div>

                                <ul className="media-list dropdown-content-body">
                                    <li className="media">
                                        <div className="media-left">
                                            <img src="./assets/img/placeholder.jpg" className="img-circle img-sm" alt="" />
                                            <span className="badge bg-danger-400 media-badge">5</span>
                                        </div>

                                        <div className="media-body">
                                            <a href="#" className="media-heading">
                                                <span className="text-semibold">James Alexander</span>
                                                <span className="media-annotation pull-right">04:58</span>
                                            </a>

                                            <span className="text-muted">who knows, maybe that would be the best thing for
                                                me...</span>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left">
                                            <img src="./assets/img/placeholder.jpg" className="img-circle img-sm" alt="" />
                                            <span className="badge bg-danger-400 media-badge">4</span>
                                        </div>

                                        <div className="media-body">
                                            <a href="#" className="media-heading">
                                                <span className="text-semibold">Margo Baker</span>
                                                <span className="media-annotation pull-right">12:16</span>
                                            </a>

                                            <span className="text-muted">That was something he was unable to do because...</span>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left"><img src="./assets/img/placeholder.jpg"
                                            className="img-circle img-sm" alt="" /></div>
                                        <div className="media-body">
                                            <a href="#" className="media-heading">
                                                <span className="text-semibold">Jeremy Victorino</span>
                                                <span className="media-annotation pull-right">22:48</span>
                                            </a>

                                            <span className="text-muted">But that would be extremely strained and
                                                suspicious...</span>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left"><img src="./assets/img/placeholder.jpg"
                                            className="img-circle img-sm" alt="" /></div>
                                        <div className="media-body">
                                            <a href="#" className="media-heading">
                                                <span className="text-semibold">Beatrix Diaz</span>
                                                <span className="media-annotation pull-right">Tue</span>
                                            </a>

                                            <span className="text-muted">What a strenuous career it is that I've chosen...</span>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <div className="media-left"><img src="./assets/img/placeholder.jpg"
                                            className="img-circle img-sm" alt="" /></div>
                                        <div className="media-body">
                                            <a href="#" className="media-heading">
                                                <span className="text-semibold">Richard Vango</span>
                                                <span className="media-annotation pull-right">Mon</span>
                                            </a>

                                            <span className="text-muted">Other travelling salesmen live a life of luxury...</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="dropdown-content-footer">
                                    <a href="#" data-popup="tooltip" title="All messages"><i
                                        className="icon-menu display-block"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="dropdown dropdown-user">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <img src="./assets/img/placeholder.jpg" alt="" />
                                <span>Victoria</span>
                                <i className="caret"></i>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#"><i className="icon-user-plus"></i> My profile</a></li>
                                <li><a href="#"><i className="icon-coins"></i> My balance</a></li>
                                <li><a href="#"><span className="badge bg-teal-400 pull-right">58</span> <i
                                    className="icon-comment-discussion"></i> Messages</a></li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="icon-cog5"></i> Account settings</a></li>
                                <li><a href="#"><i className="icon-switch2"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
