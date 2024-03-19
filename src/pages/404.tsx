import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

const NotFoundPage = () => {
    return (
        <main className="bg-[#A1CCD1] p-20 w-full flex flex-col justify-center items-center mx-auto h-[100vh]">
            <h1 className="text-4xl font-bold py-10">404 not found</h1>
            <p className="text-xl font-semibold my-10">
                죄송합니다. <br />
                요청하신 페이지를 찾을 수 없습니다.😔
            </p>
            <Link
                className="bg-[#E9B384] px-6 py-2 rounded-md shadow-lg text-lg font-semibold hover:bg-[#F4F2DE]"
                to="/"
            >
                home으로 돌아가기
            </Link>
        </main>
    );
};

export default NotFoundPage;

export const Head = () => <Seo title="404 ERROR" />;
