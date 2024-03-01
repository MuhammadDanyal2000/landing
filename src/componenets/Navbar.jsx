import React from "react";
// import logo from "../../assets/logo-02.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faCaretDown,
//     faBars,
//     faXmark,
// } from "@fortawesome/free-solid-svg-icons";
import image_21 from "../Assessts/image_21.jpeg"

const Navbar = () => {
    const [togglePrimary, setTogglePrimary] = React.useState({
        features: false,
        madeFor: false,
        resources: false,
    });

    const handleToggle = (arg) => {
        setTogglePrimary((preValue) => {
            return { [arg]: !preValue[arg] };
        });
    };

    const [toggleSecondary, setToggleSecondary] = React.useState(false);
    const handleBarsClick = () => {
        setToggleSecondary((preValue) => {
            return !preValue;
        });
    };

    return (
        <nav className="flex-col bg-sky-950 ">
            
            <main className="h-[20vh] hidden lg:flex justify-evenly items-center space-x-8">
                <Link
                    to="/"
                    className="h-full flex justify-between items-center text-discountBackground"
                >
                    <img src={"j"} alt="" className="w-12 h-12" />
                </Link>
                <ul className="flex justify-center items-center space-x-12 ">
                    <li className="hover:text-discountBackground relative">
                        <Link
                            className="space-x-2"
                            onClick={() => handleToggle("features")}
                        >
                            <span className="text-gray-400 font-[600] hover:text-gray-300">
                                Features
                            </span>
                            <FontAwesomeIcon
                                icon={"faCaretDown"}
                                size={"lg"}
                                className={`text-discountBackground transition-transform transform ${
                                    togglePrimary.features ? "rotate-180" : ""
                                }`}
                            />
                        </Link>
                    </li>
                    <li className="hover:text-discountBackground">
                        <Link
                            className="space-x-2"
                            onClick={() => handleToggle("madeFor")}
                        >
                            <span className="text-gray-400 font-[600] hover:text-gray-300">
                                Made For
                            </span>
                            <FontAwesomeIcon
                                icon={"faCaretDown"}
                                size={"lg"}
                                className={`text-discountBackground transition-transform transform ${
                                    togglePrimary.madeFor ? "rotate-180" : ""
                                }`}
                            />
                        </Link>
                    </li>
                    <li className="hover:text-discountBackground">
                        <Link
                            className="space-x-2"
                            onClick={() => handleToggle("resources")}
                        >
                            <span className="text-gray-400 font-[600] hover:text-gray-300">
                                Resources
                            </span>
                            <FontAwesomeIcon
                                icon={"faCaretDown"}
                                size={"lg"}
                                className={`text-discountBackground transition-transform transform ${
                                    togglePrimary.resources ? "rotate-180" : ""
                                }`}
                            />
                        </Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link
                            to="/pricing"
                            className="text-gray-400 font-[600] hover:text-gray-300"
                        >
                            Pricing
                        </Link>
                    </li>
                    <li className="hover:text-discountBackground">
                        <Link
                            to="/contact"
                            className="text-gray-400 font-[600] hover:text-gray-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="h-full flex justify-center items-center space-x-4">
                    <Link
                        to="/signin"
                        className="hover:text-gray-300 text-gray-400 font-[600] "
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="px-6 py-4 bg-discountBackground rounded-[30px] text-white font-semibold"
                    >
                        Get Started
                    </Link>
                </div>

                {togglePrimary.features && (
                    <div className="absolute top-[170px] 2xl:top-[250px] left-[2rem] bg-white rounded-[20px] shadow-formShahow p-12 z-10 w-[770px] 2xl:left-[30rem]">
                        <h3 className="text-discountBackground text-2xl font-bold pb-8">
                            Features
                        </h3>
                        <div className="flex items-center gap-8 flex-wrap">
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        E-Signature
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Chat
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Calender
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Task
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Property and Tenant Management
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Automatic Payment
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Document Management
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Expense and Income Control
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Check in and Check out Protocol
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {togglePrimary.madeFor && (
                    <div className="absolute top-[170px] 2xl:top-[250px] left-[15rem] bg-white rounded-[20px] shadow-formShahow p-12 z-10 w-[400px] 2xl:left-[50rem]">
                        <h3 className="text-discountBackground text-2xl font-bold pb-8">
                            Made For
                        </h3>
                        <div className="flex items-center gap-8 flex-wrap">
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Single Rental and Rental of multiple
                                        houses
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Dormitory and Shared Housing
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Larger Property Managers
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {togglePrimary.resources && (
                    <div className="absolute top-[170px] 2xl:top-[250px] left-[20rem] bg-white rounded-[20px] shadow-formShahow p-12 z-10 w-[400px] 2xl:left-[60rem]">
                        <h3 className="text-discountBackground text-2xl font-bold pb-8">
                            Resources
                        </h3>
                        <div className="flex items-center gap-8 flex-wrap">
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Support
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Blog
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 w-[300px]">
                                <img
                                    src={image_21}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                                <div className="flex flex-col items-start justify-center space-y-2">
                                    <h3 className="text-primarfont font-bold text-lg">
                                        Become a Partner (Affiliate)
                                    </h3>
                                    <p className="break-words text-landingpagecolor font-semibold text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Expedita aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* mobile navbar */}
            <section
                className={`relative lg:hidden  h-[15vh] w-full justify-between flex items-center px-6 ${toggleSecondary}?"bg-white":"" z-10 pt-8`}
            >
                <Link
                    to="/"
                    className="h-full flex justify-between items-center text-discountBackground"
                >
                    <img src={"logo"} alt="" className="w-[120px] h-[120px]" />
                </Link>
                <div onClick={handleBarsClick}>
                    {!toggleSecondary ? (
                       " all"
                    ) : (
                      " not"
                    )}
                </div>
            </section>
            {toggleSecondary && (
                <main className="absolute top-0 bg-white w-full h-[5000px] z-[5]">
                    <ul className="mt-[8rem] pl-[3rem] flex flex-col justify-start items-start space-y-8">
                        <li className="">
                            <div
                                className="space-x-2 hover:text-discountBackground"
                                onClick={() => handleToggle("features")}
                            >
                                <span className="font-bold text-primaryfont">
                                    Features
                                </span>
                                <FontAwesomeIcon
                                    icon={"faCaretDown"}
                                    size={"lg"}
                                    className={`text-discountBackground transition-transform transform ${
                                        togglePrimary.features
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                            {togglePrimary.features && (
                                <div className="pt-4 z-10 w-[80%]">
                                    <h3 className="text-discountBackground text-xl font-bold pb-8">
                                        Features
                                    </h3>
                                    <div className="flex items-center gap-8 flex-wrap">
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    E-Signature
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Chat
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Calender
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Task
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Property and Tenant
                                                    Management
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Automatic Payment
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Document Management
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Expense and Income Control
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[200px]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-md">
                                                    Check in and Check out
                                                    Protocol
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="">
                            <div
                                className="space-x-2 hover:text-discountBackground"
                                onClick={() => handleToggle("madeFor")}
                            >
                                <span className="font-bold text-primaryfont">
                                    Made For
                                </span>
                                <FontAwesomeIcon
                                    icon={"faCaretDown"}
                                    size={"lg"}
                                    className={`text-discountBackground transition-transform transform ${
                                        togglePrimary.madeFor
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                            {togglePrimary.madeFor && (
                                <div className="pt-4 z-10 w-[60%]">
                                    <h3 className="text-discountBackground text-lg font-bold pb-8">
                                        Made For
                                    </h3>
                                    <div className="flex items-center gap-8 flex-wrap">
                                        <div className="flex items-start space-x-2 w-[100%]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-sm">
                                                    Single Rental and Rental of
                                                    multiple houses
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[100%]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-sm">
                                                    Dormitory and Shared Housing
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[100%]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-sm">
                                                    Larger Property Managers
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="">
                            <div
                                className="space-x-2 hover:text-discountBackground"
                                onClick={() => handleToggle("resources")}
                            >
                                <span className="font-bold text-primaryfont">
                                    Resources
                                </span>
                                <FontAwesomeIcon
                                    icon={"faCaretDown"}
                                    size={"lg"}
                                    className={`text-discountBackground transition-transform transform ${
                                        togglePrimary.resources
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                            {togglePrimary.resources && (
                                <div className="pt-4 z-10 w-[60%]">
                                    <h3 className="text-discountBackground text-lg font-bold pb-8">
                                        Resources
                                    </h3>
                                    <div className="flex items-center gap-8 flex-wrap">
                                        <div className="flex items-start space-x-2 w-[100%]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-sm">
                                                    Support
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[100%]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-sm">
                                                    Blog
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 w-[100%]">
                                            <img
                                                src={image_21}
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <h3 className="text-primarfont font-bold text-sm">
                                                    Become a Partner (Affiliate)
                                                </h3>
                                                <p className="break-words text-landingpagecolor font-semibold text-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Expedita aspernatur
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="hover:text-discountBackground">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="hover:text-discountBackground">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </main>
            )}
        </nav>
    );
};

export default Navbar;