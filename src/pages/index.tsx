import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { cls } from "../lib/utility";
import { Link } from "gatsby";

export default function Home() {
    const [infoClicked, setInfoClicked] = React.useState(false);
    const infoActive = () => setInfoClicked(!infoClicked);
    const [skillClicked, setSkillClicked] = React.useState(false);
    const skillActive = () => setSkillClicked(!skillClicked);
    const [ProjectClicked, setProjectClicked] = React.useState(false);
    const projectActive = () => setProjectClicked(!ProjectClicked);
    return (
        <Layout>
            <div className="flex flex-col h-[200vh] lg:flex-row px-10 pt-[65px] py-12 lg:h-[100vh] gap-10">
                <div
                    className={cls("w-full rounded-2xl h-[88vh] relative cardWrap", infoClicked ? "wrapFlip" : "")}
                    onClick={() => infoActive()}
                >
                    <div className="bg-darkOrange w-full h-full rounded-2xl flex flex-col items-center justify-center text-white gap-5 cursor-pointer cardFront">
                        <div className="w-full h-1/2 flex justify-end items-end px-10">
                            <div className="w-[240px] h-[240px] flex justify-center items-center rounded-full bg-mainOrange shadow-xl shadow-[#CD5C08]">
                                <StaticImage
                                    src="../images/main.png"
                                    alt="mainImg"
                                    width={230}
                                ></StaticImage>
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex flex-col px-10 gap-3 justify-center">
                            <span className="text-5xl font-bold drop-shadow-md">안녕하세요!</span>
                            <span className="text-3xl font-bold drop-shadow-md">신입 개발자</span>
                            <span className="text-4xl font-bold drop-shadow-md">'김보나' 입니다!</span>
                        </div>
                    </div>
                    <div className="bg-mainOrange w-full h-full rounded-2xl flex flex-col gap-3 items-start justify-center cursor-pointer text-white px-8 cardBack">
                        <span className="font-bold text-4xl drop-shadow-md">저는...</span>
                        <p className="font-semibold text-lg drop-shadow-md break-keep">
                            대학 졸업 후 방문교사, 매장 매니저, 학습 매니저, 공무원 준비 등 다양한 방법으로 진로를 탐색했습니다.
                            <br />
                            그러다가 프로그래밍을 배우고 코드를 만들어 보면서 애플리케이션을 만드는 즐거움을 알게 되었습니다.
                            <br />
                            22년초부터 독학과 6개월 국비 교육과정을 거치면서 개발자라는 새로운 꿈이 생겼습니다.
                            <br />
                            사용자에게 즐겁고 쾌적한 경험을 주는 애플리케이션을 만드는 개발자가 되고 싶습니다.
                        </p>
                        <table className="mainTable">
                            <tr>
                                <th>이메일</th>
                                <td>bona2324@gmail.com</td>
                            </tr>
                            <tr>
                                <th>학력</th>
                                <td>가톨릭대학교(아동학,심리학)</td>
                            </tr>
                            <tr>
                                <th>교육</th>
                                <td>
                                    JAVA웹프로그래밍과정
                                    <br />
                                    (22.09~23.02)
                                </td>
                            </tr>
                            <tr>
                                <th>자격증</th>
                                <td>
                                    정보처리 산업기사(23.05)
                                    <br />
                                    SQLD-sql개발자(23.04)
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-5 gap-5 w-full h-[88vh]">
                    <div className="hidden lg:block col-span-3 text-[76px] font-bold font-titleFont text-center">
                        <span>PORTFOLIO</span>
                    </div>
                    <div
                        className={cls("col-span-2 lg:row-span-2 relative cardWrap", skillClicked ? "wrapFlip" : "")}
                        onClick={() => skillActive()}
                    >
                        <div className="bg-mainPink w-full h-full rounded-2xl flex justify-center items-center cursor-pointer cardFront">
                            <StaticImage
                                src="../images/skill.png"
                                alt="skillImg"
                                width={230}
                            />
                        </div>
                        <div className="bg-pink-600 w-full h-full rounded-2xl px-5 flex flex-col gap-2 justify-center items-center cursor-pointer text-white cardBack">
                            <span className="text-2xl font-bold drop-shadow-md">My Skill is...</span>
                            <p className="text-lg font-semibold px-4">
                                html, css, javascript <br />
                                react, typescript ...
                            </p>
                            <Link
                                to="/skill"
                                className="text-sm font-extrabold bg-mainMint text-mainPurple py-2 px-3 rounded-md drop-shadow-md hover:scale-110"
                            >
                                <span>더 알아보기</span>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-mainMint lg:row-span-2 rounded-2xl flex flex-col gap-8 justify-center items-center">
                        <a
                            href="https://github.com/Bona023"
                            target="_blank"
                        >
                            <svg
                                className="w-20 h-20 drop-shadow-lg cursor-pointer"
                                viewBox="0 0 73 73"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#FFB84C"
                                stroke="#FFB84C"
                            >
                                <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                />

                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>team-collaboration/version-control/github</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                                    <g
                                        id="team-collaboration/version-control/github"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        {" "}
                                        <g
                                            id="container"
                                            transform="translate(2.000000, 2.000000)"
                                            fill-rule="nonzero"
                                        >
                                            {" "}
                                            <rect
                                                id="mask"
                                                stroke="#F266AB"
                                                stroke-width="2"
                                                fill="#F266AB"
                                                x="-1"
                                                y="-1"
                                                width="71"
                                                height="71"
                                                rx="14"
                                            >
                                                {" "}
                                            </rect>{" "}
                                            <path
                                                d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z"
                                                id="Shape"
                                                fill="#2CD3E1"
                                            >
                                                {" "}
                                            </path>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </a>
                        <a
                            target="_blank"
                            href="https://velog.io/@bona023/posts"
                        >
                            <svg
                                className="w-20 h-20 drop-shadow-lg cursor-pointer"
                                viewBox="0 0 192 192"
                                fill="#F266AB"
                                stroke="#F266AB"
                            >
                                <path
                                    id="Website"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div
                        className={cls("col-span-3 lg:row-span-2 relative cardWrap", ProjectClicked ? "wrapFlip" : "")}
                        onClick={() => projectActive()}
                    >
                        <div className="bg-mainPurple w-full h-full rounded-2xl flex justify-center items-center cursor-pointer cardFront">
                            <span className="text-white text-5xl font-bold">
                                My
                                <br /> Projects
                            </span>
                        </div>
                        <div className="bg-mainOrange w-full h-full rounded-2xl flex gap-2 justify-center items-center cursor-pointer cardBack">
                            <StaticImage
                                src="../images/projects.png"
                                alt="projectsImg"
                                width={180}
                            />
                            <div className="text-white drop-shadow-lg">
                                <span className="text-2xl font-extrabold">1</span>
                                <span className="font-semibold">개의 팀프로젝트,</span>
                                <br />
                                <span className="text-2xl font-extrabold">3</span>
                                <span className="font-semibold">개의 개인 프로젝트</span>
                                <br />
                                <span className="font-semibold">그리고 계속...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export const Head = () => <Seo title="Home" />;
