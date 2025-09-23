import React from 'react'

function PageTitle(props) {
    return (
        <div className="page-header page-header-default">
            <div className="page-header-content">
                <div className="page-title">
                    <h4><i className="icon-arrow-left52 position-left"></i> <span className="text-semibold">{props.title}</span>
                        - Dashboard</h4>
                </div>

                <div className="heading-elements">
                    <div className="heading-btn-group">
                        <a href="#" className="btn btn-link btn-float has-text"><i
                            className="icon-bars-alt text-primary"></i><span>Statistics</span></a>
                        <a href="#" className="btn btn-link btn-float has-text"><i
                            className="icon-calculator text-primary"></i> <span>Invoices</span></a>
                        <a href="#" className="btn btn-link btn-float has-text"><i
                            className="icon-calendar5 text-primary"></i> <span>Schedule</span></a>
                    </div>
                </div>
            </div>

            <div className="breadcrumb-line">
                <ul className="breadcrumb">
                    <li><a href="index.html"><i className="icon-home2 position-left"></i> Home</a></li>
                    <li className="active">Dashboard</li>
                </ul>

                <ul className="breadcrumb-elements">
                    <li><a href="#"><i className="icon-comment-discussion position-left"></i> Support</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon-gear position-left"></i>
                            Settings
                            <span className="caret"></span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="#"><i className="icon-user-lock"></i> Account security</a></li>
                            <li><a href="#"><i className="icon-statistics"></i> Analytics</a></li>
                            <li><a href="#"><i className="icon-accessibility"></i> Accessibility</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="icon-gear"></i> All settings</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageTitle