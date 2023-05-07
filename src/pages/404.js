import dynamic from "next/dynamic";
const NavBar = dynamic(import("../components/NavBarHome"), { ssr: false });

export default function Custom404() {
    return (
        <div className="bg-grayish-100 flex flex-col h-screen w-full">
            <div className="h-14">
                <NavBar />
            </div>
            <div className="grid grow place-content-center text-center">
                <h1 className=" text-2xl"><span className="text-red-400">404</span> | Page Not Found</h1>
            </div>
        </div>
    )
}