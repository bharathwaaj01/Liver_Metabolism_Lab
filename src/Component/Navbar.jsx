import React from 'react'

function Navbar() {
    return (
        <div>


            <header class="bg-[#0077b6] text-white px-4 py-3 md:px-6 md:py-4">
                <div class="container mx-auto flex items-center justify-between">
                    <a class="flex items-center gap-2" href="#" rel="ugc">
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
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="#" rel="ugc">
                            Home
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="#" rel="ugc">
                            About
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="#" rel="ugc">
                            Services
                        </a>
                        <a class="text-sm font-medium hover:text-[#e6e6e6] transition-colors" href="#" rel="ugc">
                            Contact
                        </a>
                    </nav>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
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
        </div>
    )
}

export default Navbar
