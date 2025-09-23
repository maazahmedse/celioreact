import TopLevelContainerDashboard from "../../containers/TopLevelContainerDashboard";
import { useEffect } from "react";
import Header from "../../containers/Header/Header";
import LeftNavBar from "../../containers/LeftNavBar/LeftNavBar";
import PageTitle from "../../components/Dashboard/PageTitle";
import MainContainer from "../../containers/MainContainer/MainContainer";
import Footer from "../../containers/Footer/Footer";

export default function Backend(props) {
    useEffect(() => {

    });
    return (
        <>
            <TopLevelContainerDashboard>
                <Header></Header>
                <div className="page-container">
                    <div className="page-content">
                        <LeftNavBar></LeftNavBar>
                        <div className="content-wrapper">
                            {!props.hidePageHeader && (
                                <PageTitle title={props?.pageheading ? props?.pageheading : "No Name"}></PageTitle>
                            )}
                            <div className="content">
                                <MainContainer>{props.children}</MainContainer>
                                {!props.hideFooter && (
                                    <Footer></Footer>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </TopLevelContainerDashboard>
        </>
    );
}
