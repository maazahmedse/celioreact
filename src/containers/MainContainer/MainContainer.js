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
                <p className="content-group-lg">{props.children}</p>

                {/* <form className="form-horizontal" action="#">

                        <fieldset className="content-group">
                            <legend className="text-bold">Text options</legend>

                            <div className="form-group">
                                <label className="control-label col-md-2">Light text</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control text-light" placeholder="Input with light text" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-2">Semibold text</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control text-semibold" placeholder="Input with semibold text" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-2">Bold text</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control text-bold" placeholder="Input with bold text" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-2">Capitalized text</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control text-capitalize" placeholder="Input with capitalized text" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-2">Centered text</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control text-center" placeholder="Input with centered text" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-2">Right aligned text</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control text-right" placeholder="Input with right aligned text" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-2">Uppercase text</label>
                                <div className="col-md-10">
                                    <div className="form-group">
                                        <input type="text" className="form-control text-uppercase" placeholder="Input with uppercase text" />
                                    </div>

                                </div>
                            </div>
                        </fieldset>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">Submit <i className="icon-arrow-right14 position-right"></i></button>
                        </div>
                    </form> */}
            </div>
        </div>

    )
}

export default MainContainer