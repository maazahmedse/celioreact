import React from 'react'

function MainContainer(props) {
    return (

        <div className="panel panel-flat">
            <div className="panel-heading">
                <h5 className="panel-title">Basic form inputs</h5>
                <div className="heading-elements">
                    <ul className="icons-list">
                        <li><a data-action="collapse"></a></li>
                        <li><a data-action="reload"></a></li>
                        <li><a data-action="close"></a></li>
                    </ul>
                </div>
            </div>

            <div className="panel-body">
                {props.children}
            </div>
        </div>

    )
}

export default MainContainer