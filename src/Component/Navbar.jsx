import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showslidebar, setslidebarl] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const togglesidebar = () => {
        setslidebarl(!showslidebar);
    };

    const [activePage, setActivePage] = useState("");

    const handleNavigate = (path) => {
        setActivePage(path);
        navigate(path);
    };
    return (
        <div>


            <header class="bg-[#0077b6] text-white px-4 py-3 md:px-6 md:py-4">
                <div class="container mx-auto flex items-center justify-between">
                    <a class="flex items-center gap-2" href="/" rel="ugc">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                        >
                            <path d="M10 2v7.31"></path>
                            <path d="M14 9.3V1.99"></path>
                            <path d="M8.5 2h7"></path>
                            <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                            <path d="M5.52 16h12.96"></path>
                        </svg>
                        <span class="text-lg font-bold">Liver Disease And Metabolism</span>
                    </a>
                    <nav class="hidden md:flex items-center gap-6">
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/" rel="ugc">
                            Home
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/about" rel="ugc">
                            About
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/team" rel="ugc">
                            Team
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="publications" rel="ugc">
                            Publications
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/fundings" rel="ugc">
                            Fundings                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/collaboration" rel="ugc">
                            Collaboration
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/out-act" rel="ugc">
                            Outreach Activities
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/gallery" rel="ugc">
                            Gallery
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="/careers" rel="ugc">
                            Careers
                        </a>
                    </nav>
                    <button onClick={togglesidebar} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                        <span class="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </header>
            {showslidebar && (
                <div className="fixed inset-0 z-50  w-full h-full bg-black bg-opacity-500">
                    <div className=" p-4 w-full  ">
                        <div className="relative bg-white rounded-lg shadow h-[600px] ">
                            <div className="flex items-center justify-end p-4 md:p-5">
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center  "
                                    onClick={togglesidebar}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="w-full  px-4 ">
                                <div>
                                    <ul
                                        data-orientation="horizontal"
                                        className="group list-none  h-[500px] space-y-2 whitespace-nowrap"
                                        dir="ltr"
                                    >
                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors 
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                            onClick={() => { handleNavigate("/"); togglesidebar(); }}
                                        >
                                            Home
                                        </div>

                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        // onClick={() => { handleNavigate("/scriptures/BhagvadGeeta"); togglesidebar(); }}
                                        >
                                            About
                                        </div>

                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/team"); togglesidebar(); }}
                                        >
                                            Team
                                        </div>

                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/publications"); togglesidebar(); }}
                                        >
                                            Publications
                                        </div>

                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/funding"); togglesidebar(); }}
                                        >
                                            Funding

                                        </div>
                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/collaboration"); togglesidebar(); }}
                                        >
                                            Collaboration

                                        </div>
                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/out-act"); togglesidebar(); }}
                                        >
                                            Outreach Activities

                                        </div>
                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/gallery"); togglesidebar(); }}
                                        >
                                            Gallery


                                        </div>
                                        <div
                                            className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors "
                                                    ? "bg-[#e0e0e0] text-[#8b4513]"
                                                    : ""
                                                } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={() => { handleNavigate("/careers"); togglesidebar(); }}
                                        >

                                            Careers

                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
