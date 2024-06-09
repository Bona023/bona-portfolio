import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { cls } from "../lib/utility";
import { Link } from "gatsby";

export default function ProjectPage() {
    const [portClicked, setPortClicked] = React.useState(false);
    const portActive = () => setPortClicked(!portClicked);
    const [bwitterClicked, setBwitterClicked] = React.useState(false);
    const bwitterActive = () => setBwitterClicked(!bwitterClicked);
    const [planerClicked, setPlanerClicked] = React.useState(false);
    const planerActive = () => setPlanerClicked(!planerClicked);
    const [campClicked, setCampClicked] = React.useState(false);
    const campActive = () => setCampClicked(!campClicked);
    return (
        <Layout>
            <div className="w-full">
                <div className="w-full text-center mt-14 py-2">
                    <span className="text-7xl font-extrabold">PROJECT</span>
                </div>
                <div className="w-full pt-6 pb-10 px-8 flex flex-col gap-5 lg:grid lg:grid-cols-2">
                    <div
                        className={cls("h-[38vh] relative cardWrap cursor-pointer", portClicked ? "wrapFlip" : "")}
                        onClick={() => portActive()}
                    >
                        <div className="bg-mainPurple projectCardFront">
                            <StaticImage
                                className="rounded-xl"
                                src="../../project-info/portfolio/portfolio-head.png"
                                alt="portfolio-site"
                                width={380}
                            />
                        </div>
                        <div className="bg-mainPurple projectCardBack">
                            <span className="text-2xl font-bold">Title : Portfolio Site</span>
                            <span className="text-lg font-semibold">Date : 2024.03 ~</span>
                            <span className="text-lg font-semibold">Tech : Gastby, React, TypeScript, Netlify</span>
                            <span className="text-lg font-semibold">Gastby를 이용해서 만든 포트폴리오 사이트 입니다.</span>
                            <div className="text-center">
                                <Link
                                    className="bg-[#E88D67] text-[#006989] text-center rounded-md py-2 text-sm px-3 font-semibold shadow-lg focus:ring-2 focus:ring-yellow-500"
                                    to="/project-info/portfolio-site"
                                >
                                    더 알아보기
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cls("h-[35vh] relative cardWrap cursor-pointer", bwitterClicked ? "wrapFlip" : "")}
                        onClick={() => bwitterActive()}
                    >
                        <div className="bg-mainMint projectCardFront">
                            <StaticImage
                                className="rounded-xl"
                                src="../../project-info/bwitter/bwitter-head.png"
                                alt="bwitter"
                                height={240}
                            />
                        </div>
                        <div className="bg-mainMint projectCardBack">
                            <span className="text-2xl font-bold">Title : bwitter</span>
                            <span className="text-lg font-semibold">Date : 2023.12</span>
                            <span className="text-lg font-semibold">Tech : Vite, React, TypeScript, Firebase</span>
                            <span className="text-lg font-semibold">twitter를 클론 코딩해보았습니다.</span>
                            <div className="text-center">
                                <Link
                                    className="bg-[#E88D67] text-[#006989] text-center rounded-md py-2 text-sm px-3 font-semibold shadow-lg focus:ring-2 focus:ring-yellow-500"
                                    to="/project-info/bwitter"
                                >
                                    더 알아보기
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cls("h-[35vh] relative cardWrap cursor-pointer", planerClicked ? "wrapFlip" : "")}
                        onClick={() => planerActive()}
                    >
                        <div className="bg-mainPink projectCardFront">
                            <StaticImage
                                className="rounded-xl"
                                src="../../project-info/scheduler/scheduler-head.png"
                                alt="scheduler"
                                width={380}
                            />
                        </div>
                        <div className="bg-mainPink projectCardBack">
                            <span className="text-2xl font-bold">Title : Scheduler App</span>
                            <span className="text-lg font-semibold">Date : 2023.11</span>
                            <span className="text-lg font-semibold">Tech : React, TypeScript</span>
                            <span className="text-lg font-semibold">react로 만든 weekly todo 앱입니다.</span>
                            <div className="text-center">
                                <Link
                                    className="bg-[#E88D67] text-[#006989] text-center rounded-md py-2 text-sm px-3 font-semibold shadow-lg focus:ring-2 focus:ring-yellow-500"
                                    to="/project-info/scheduler-app"
                                >
                                    더 알아보기
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cls("h-[35vh] relative cardWrap cursor-pointer", campClicked ? "wrapFlip" : "")}
                        onClick={() => campActive()}
                    >
                        <div className="bg-mainOrange projectCardFront">
                            <StaticImage
                                className="rounded-xl"
                                src="../../project-info/campinga/campinga-head.png"
                                alt="campinga"
                                width={380}
                            />
                        </div>
                        <div className="bg-mainOrange projectCardBack">
                            <span className="text-2xl font-bold">Title : Campinga</span>
                            <span className="text-lg font-semibold">Date : 2023.02</span>
                            <span className="text-lg font-semibold">Tech : JAVA, Spring boot, OricleDB, Tomcat, JQuery, JSP, Javascript</span>
                            <span className="text-lg font-semibold">(팀프로젝트) Spring boot로 구현한 캠핑장 예약 사이트 입니다.</span>
                            <div className="text-center">
                                <Link
                                    className="bg-[#E88D67] text-[#006989] text-center rounded-md py-2 text-sm px-3 font-semibold shadow-lg focus:ring-2 focus:ring-yellow-500"
                                    to="/project-info/campinga"
                                >
                                    더 알아보기
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export const Head = () => <Seo title="Projects" />;
