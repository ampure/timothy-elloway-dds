import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false,
});

const VideoIntro = ({ props }) => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    // console.warn(props);

    return (
        <React.Fragment>
            <div className="video-wrap">
                <Tabs>
                    {props?.tabs?.map((tab, index) => {
                        return (
                            <TabPanel key={index}>
                                <div
                                    className="video-area"
                                    style={{
                                        backgroundImage: `url(${props?.background?.sourceUrl})`,
                                        // opacity: '.5',
                                    }}
                                >
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <div className="container">
                                                <div className="video-item">
                                                    <div
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            openModal();
                                                        }}
                                                        className="popup-youtube"
                                                    >
                                                        <i className="icofont-ui-play"></i>
                                                    </div>

                                                    <div className="video-content">
                                                        <h3>{tab?.header}</h3>
                                                        <p>{tab?.content} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        );
                    })}

                    <TabList>
                        {props?.tabs?.map((tab) => {
                            return (
                                <>
                                    <Tab>{tab.title}</Tab>
                                </>
                            );
                        })}
                    </TabList>
                </Tabs>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel="youtube"
                isOpen={!isOpen}
                videoId={props?.youtubeVideoId}
                onClose={() => setIsOpen(!isOpen)}
            />
        </React.Fragment>
    );
};

export default VideoIntro;
