import React from "react";
import Seo from "../../components/Seo";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

const MyH1 = (props: any) => (
    <h1
        style={{ fontWeight: "bold", fontSize: "36px", paddingBottom: "10px", marginBottom: "40px" }}
        {...props}
    />
);
const MyH3 = (props: any) => (
    <h3
        style={{ fontWeight: "bold", fontSize: "24px", borderBottom: "1px solid black", paddingBottom: "10px", marginBottom: "10px", fontStyle: "italic" }}
        {...props}
    />
);
const MyUl = (props: any) => (
    <ul
        style={{ fontSize: "18px", lineHeight: 1.5, marginBottom: "40px", listStyle: "disc", paddingLeft: "20px" }}
        {...props}
    />
);
const MyLi = (props: any) => (
    <li
        style={{ marginBottom: "20px", marginTop: "20px", fontWeight: 500 }}
        {...props}
    />
);
const MyLink = (props: any) => (
    <a
        style={{ color: "#7743DB", fontWeight: "bold" }}
        {...props}
    />
);
const MyImg = (props: any) => (
    <img
        style={{ marginBottom: "20px" }}
        {...props}
    />
);

const components = {
    h1: MyH1,
    h3: MyH3,
    ul: MyUl,
    li: MyLi,
    a: MyLink,
    img: MyImg,
};

interface IProjectPostProps {
    data: Queries.ProjectDetailQuery;
    children: any;
}

export default function ProjectDetail({ children }: IProjectPostProps) {
    return (
        <div className="bg-[#E9B384]">
            <div className="px-10 py-14 max-w-screen-sm mx-auto">
                <Link
                    className="bg-[#A1CCD1] text-2xl font-bold px-6 py-3 rounded-md shadow-md hover:bg-[#7743DB] hover:text-white"
                    to="/"
                >
                    Home
                </Link>
                <div className="w-full h-10"></div>
                <MDXProvider components={components}>{children}</MDXProvider>
            </div>
        </div>
    );
}

export const query = graphql`
    query ProjectDetail($frontmatter__slug: String) {
        mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
            frontmatter {
                title
            }
        }
    }
`;

export const Head = ({ data }: IProjectPostProps) => <Seo title={data.mdx?.frontmatter?.title!} />;
