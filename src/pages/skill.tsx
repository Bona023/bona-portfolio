import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function SkillPage() {
    return (
        <Layout>
            <div className="w-full flex flex-col p-6 gap-6 lg:grid lg:grid-cols-2 lg:my-auto lg:h-full">
                <div className="lg:row-span-2 lg:h-full">
                    <div className="pt-10 pb-5 text-6xl text-center font-titleFont font-extrabold animate-popUp">S K I L L</div>
                    <div className="bg-mainMint rounded-2xl py-8 px-5 grid grid-cols-2 gap-3 lg:h-[78vh] animate-pulseOne">
                        <div className="col-span-2">
                            <span className="text-white text-xl font-semibold border-b-2 pb-1 px-2 w-1/2 ">Front-end</span>
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/html-css-js.png"
                                alt="html-css-js"
                            />
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/react.png"
                                alt="ReactJS"
                            />
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/recoil.png"
                                alt="Recoil"
                            />
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/typescript.png"
                                alt="Typescript"
                            />
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/nextjs.png"
                                alt="Next.js"
                            />
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/gatsby.png"
                                alt="Gatsby"
                            />
                        </div>
                        <div>
                            <StaticImage
                                className="rounded-xl shadow-lg"
                                src="../images/skill-img/tailwind.png"
                                alt="TailwindCSS"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-mainOrange rounded-2xl py-8 px-5 grid grid-cols-2 gap-3 animate-pulseOne">
                    <div className="col-span-2">
                        <span className="text-white text-xl font-semibold border-b-2 pb-1 px-2 w-1/2 ">Back-end</span>
                    </div>
                    <div>
                        <StaticImage
                            className="rounded-xl shadow-lg"
                            src="../images/skill-img/firebase.png"
                            alt="Firebase"
                        />
                    </div>
                    <div>
                        <StaticImage
                            className="rounded-xl shadow-lg"
                            src="../images/skill-img/graphql.png"
                            alt="GraphQL"
                        />
                    </div>
                </div>
                <div className="bg-mainPink rounded-2xl py-8 px-5 grid grid-cols-2 gap-3 animate-pulseOne">
                    <div className="col-span-2">
                        <span className="text-white text-xl font-semibold border-b-2 pb-1 px-2 w-1/2 ">Deployment</span>
                    </div>
                    <div>
                        <StaticImage
                            className="rounded-xl shadow-lg"
                            src="../images/skill-img/netlify.png"
                            alt="Netlify"
                        />
                    </div>
                    <div>
                        <StaticImage
                            className="rounded-xl shadow-lg"
                            src="../images/skill-img/vercel.png"
                            alt="Vercel"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export const Head = () => <Seo title="Skill" />;
