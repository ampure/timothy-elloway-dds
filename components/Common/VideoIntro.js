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
    const [videoId, setVideoId] = React.useState(props?.youtubeVideoId);
    const openModal = (videoId) => {
        if (videoId) {
            setVideoId(videoId);
        }
        setIsOpen(!isOpen);
    };

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
                                        backgroundImage: `url(${
                                            tab?.background?.sourceUrl
                                                ? tab.background.sourceUrl
                                                : props?.background?.sourceUrl
                                        })`,
                                        // opacity: '.5',
                                    }}
                                >
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <div className="container">
                                                <div className="video-item">
                                                    {tab?.youtubeVideoId ? (
                                                        <div
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                openModal(
                                                                    tab?.youtubeVideoId
                                                                );
                                                            }}
                                                            className="popup-youtube"
                                                        >
                                                            <i className="icofont-ui-play"></i>
                                                        </div>
                                                    ) : null}

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
                        {props?.tabs.length > 1
                            ? props?.tabs?.map((tab) => {
                                  return (
                                      <>
                                          <Tab>{tab.title}</Tab>
                                      </>
                                  );
                              })
                            : null}
                    </TabList>
                </Tabs>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel="youtube"
                isOpen={!isOpen}
                videoId={videoId}
                onClose={() => setIsOpen(!isOpen)}
            />
        </React.Fragment>
    );
};

export default VideoIntro;
