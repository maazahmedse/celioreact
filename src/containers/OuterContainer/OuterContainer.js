import React from 'react'

function OuterContainer(props) {
    return (
        <div className={props.category} >
            <div className="page-container">
                <div className="page-content">
                    <div className="content-wrapper">
                        <div className="content">
                            <div>{props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OuterContainer;