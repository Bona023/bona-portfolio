import * as React from "react";
import Seo from "../components/Seo";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }: PageProps<Queries.DataQuery>) {
    const projectInfo = data.allMdx.nodes;
    const backendLogos = data.allFile.nodes.slice(0, 2);
    const deployLogos = data.allFile.nodes.slice(2, 4);
    const frontLogos = data.allFile.nodes.slice(4);
    return (
        <div className="bg-[#7C9D96] text-white">
            <div className=" h-[30vh] text-center">
                <h1 className="text-7xl pt-10 md:text-8xl font-extrabold">PORTFOLIO</h1>
                <div className="bg-white h-px mx-8 my-6" />
                <div className="flex justify-center items-center gap-8 text-lg font-bold">
                    <a
                        className="hover:text-[#7743DB]"
                        href="#about-me"
                    >
                        About Me
                    </a>
                    <a
                        className="hover:text-[#7743DB]"
                        href="#skill"
                    >
                        Skill
                    </a>
                    <a
                        className="hover:text-[#7743DB]"
                        href="#project"
                    >
                        Projects
                    </a>
                    <a
                        className="hover:text-[#7743DB]"
                        href="#links"
                    >
                        Links
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="bg-[#7C9D96] py-12 px-10 flex flex-col h-[70vh] font-semibold w-full md:w-1/2 items-start justify-center md:px-20">
                    <span className="text-5xl mb-4">안녕하세요.</span>
                    <span className="text-4xl mb-3">신입 프론트엔드 개발자</span>
                    <span className="text-5xl">김보나 입니다.</span>
                </div>
                <div className="h-[70vh] py-12 px-10 w-full md:w-1/2  flex flex-col justify-center items-start md:px-20">
                    <span className="text-2xl font-extrabold">꿈을 향해 걸어가는 사람</span>
                    <p className="text-lg font-medium my-3">
                        대학 졸업 후 방문교사, 매장 매니저, 학습 매니저 등 여러 일을 거치며 제가 진정 하고 싶은 일이 뭔지 찾았습니다.
                        <br />
                        그러다가 프로그래밍 언어를 접하고 코드를 만들어 보면서 애플리케이션을 만드는 즐거움을 알게 되었습니다.
                        <br />
                        개발자라는 꿈을 가지게 되었고, 독학과 6개월 간의 교육과정을 거치면서 개발자는 계속 공부하는 사람이라는 생각을 하게 되었습니다.
                        <br />
                        새로운 것을 배우고 만들어내는 것이 즐겁습니다.
                        <br />
                        사용자에게 즐겁고 쾌적한 경험을 주는 UX/UI를 만드는 것이 저의 새로운 꿈입니다.
                        <br />
                    </p>
                </div>
            </div>
            <div className="bg-white h-px mx-8" />
            <div
                id="about-me"
                className="grid grid-cols-1 lg:grid-cols-3"
            >
                <div className="h-[50vh] px-16 py-14">
                    <h1 className="font-Great text-7xl ">About</h1>
                    <h1 className="font-Great text-7xl ">Me</h1>
                </div>
                <div className="h-[50vh] w-[480px] px-10 py-14 grid grid-cols-4">
                    <div className="w-24 h-10 text-2xl flex items-end font-semibold border-r-2 ">이름</div>
                    <div className="w-58 h-10 text-2xl flex items-end font-semibold col-span-3 px-2">김보나</div>
                    <div className="w-24 h-10 text-2xl flex items-end font-semibold border-r-2">Email</div>
                    <div className="w-58 h-10 text-2xl flex items-end font-semibold col-span-3 px-2">bona2324@gmail.com</div>
                    <div className="w-24 h-10 text-2xl flex items-end font-semibold border-r-2">Github</div>
                    <div className="w-58 h-10 text-xl flex items-end font-semibold col-span-3 px-2">
                        <a
                            className="hover:text-[#7743DB]"
                            target="_blank"
                            href="https://github.com/Bona023"
                        >
                            https://github.com/Bona023
                        </a>
                    </div>
                </div>
                <div className="h-[50vh] w-[480px] px-10 py-14 grid grid-cols-4">
                    <div className="w-24 h-10 text-2xl flex items-end font-semibold border-r-2 ">학력</div>
                    <div className="w-58 h-10 text-xl flex items-end font-semibold col-span-3 px-2">
                        <span>가톨릭대학교</span>
                        <span className="text-base">(아동학, 심리학)</span>
                    </div>
                    <div className="w-24 h-10 text-xl flex items-end font-semibold border-r-2">교육이수</div>
                    <div className="w-58 h-12 flex flex-col justify-end font-semibold col-span-3 px-2">
                        <span>이젠아카데미-Java웹프로그래밍과정</span>
                        <span>(2022.09 ~ 2023.02)</span>
                    </div>
                    <div className="w-24 h-10 text-xl flex items-end font-semibold border-r-2">자격증</div>
                    <div className="w-58 h-12 flex flex-col justify-end font-semibold col-span-3 px-2">
                        <span>정보처리 산업기사 (2023.05.29)</span>
                        <span>SQLD - sql개발자 (2023.04.14)</span>
                    </div>
                </div>
            </div>
            <div className="bg-white h-px mx-8" />
            <div
                id="skill"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
                <div className="px-16 py-14 w-full md:row-span-3 lg:row-span-2">
                    <h1 className="font-Great text-7xl">Skill</h1>
                </div>
                <div className="min-h-[50vh] px-16 py-14 w-full grid grid-cols-2 gap-4 lg:row-span-3">
                    <div>
                        <h3 className="text-2xl font-semibold">Frontend</h3>
                        <div className="border-t w-full">
                            {frontLogos.map((img) => (
                                <GatsbyImage
                                    className="w-72 rounded-md shadow-md mt-4"
                                    image={getImage(img.childImageSharp!.gatsbyImageData!) as any}
                                    alt={img.base}
                                    key={img.childImageSharp?.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="min-h-[50vh] px-16 py-14 w-full grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Backend</h3>
                        <div className="border-t w-full">
                            {backendLogos.map((img) => (
                                <GatsbyImage
                                    className="w-72 rounded-md shadow-md mt-4"
                                    image={getImage(img.childImageSharp!.gatsbyImageData!) as any}
                                    alt={img.base}
                                    key={img.childImageSharp?.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="min-h-[50vh] px-16 py-14 w-full grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Deployment</h3>
                        <div className="border-t w-full">
                            {deployLogos.map((img) => (
                                <GatsbyImage
                                    className="w-72 rounded-md shadow-md mt-4"
                                    image={getImage(img.childImageSharp!.gatsbyImageData!) as any}
                                    alt={img.base}
                                    key={img.childImageSharp?.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-px mx-8" />
            <div
                id="project"
                className="flex flex-col"
            >
                <div className="px-16 py-14 w-full">
                    <h1 className="font-Great text-7xl mb-20">Project</h1>
                </div>
                <div>
                    {projectInfo.map((info) => (
                        <div className="flex flex-col justify-center items-center mb-20 md:flex-row">
                            <div className="bg-slate-300 px-2 py-4 w-[400px] flex justify-center items-center">
                                <GatsbyImage
                                    className="w-[380px]"
                                    image={getImage(info.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!) as any}
                                    alt={info.frontmatter?.headerImage?.base!}
                                    key={info.frontmatter?.headerImage?.childImageSharp?.id}
                                />
                            </div>
                            <div className="flex flex-col px-4 py-6 w-[400px] font-semibold gap-3 text-xl">
                                <span className="text-3xl">Title : {info.frontmatter?.title}</span>
                                <span>Date : {info.frontmatter?.date}</span>
                                <span>Tech : {info.frontmatter?.skill}</span>
                                <span>{info.frontmatter?.description}</span>
                                <Link
                                    className="bg-[#E9B384] text-center rounded-md py-2 font-bold hover:bg-[#7743DB]"
                                    to={`project-info/${info.frontmatter?.slug}`}
                                >
                                    더 알아보기
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="links">
                <div className="h-28 bg-[#E9B384] flex justify-center items-center gap-40">
                    <div className="bg-[#7C9D96] h-14 w-14 rounded-full flex justify-center items-center group hover:bg-[#7743DB] cursor-pointer shadow-md">
                        <a
                            href="https://github.com/Bona023"
                            target="_blank"
                        >
                            <svg
                                className="w-12 h-12 fill-[#E9B384] group-hover:fill-white"
                                viewBox="-2.5 0 19 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z" />
                            </svg>
                        </a>
                    </div>
                    <a
                        className="group shadow-md hover:bg-white rounded-lg"
                        target="_blank"
                        href="https://velog.io/@bona023/posts"
                    >
                        <svg
                            className="w-14 h-14 cursor-pointer fill-[#7C9D96] group-hover:fill-[#7743DB]"
                            viewBox="0 0 192 192"
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
            </div>
        </div>
    );
}

export const query = graphql`
    query Data {
        allFile(filter: { sourceInstanceName: { eq: "skill-img" } }, sort: { absolutePath: ASC }) {
            nodes {
                childImageSharp {
                    gatsbyImageData
                    id
                }
                base
            }
        }
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY.MM")
                    description
                    headerImage {
                        childImageSharp {
                            gatsbyImageData
                            id
                        }
                        base
                    }
                    skill
                    slug
                    title
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Home" />;
