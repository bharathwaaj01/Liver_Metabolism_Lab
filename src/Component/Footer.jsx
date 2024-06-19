import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="bg-blue-300 py-6 px-12 text-muted-foreground">
                <div className="container mx-auto grid grid-cols-1 gap-8 px- sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Liver Disease And Metabolism Lab</h3>
                        <p>Our lab is dedicated to advancing the understanding and treatment of liver diseases through cutting-edge research and innovative approaches.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="grid gap-2">
                            <a className="hover:underline" href="#" rel="ugc">About</a>
                            <a className="hover:underline" href="#" rel="ugc">Research</a>
                            <a className="hover:underline" href="#" rel="ugc">Our Team</a>
                            <a className="hover:underline" href="#" rel="ugc">Contact</a>
                        </nav>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="flex gap-4">
                            <a aria-label="Twitter" href="#" rel="ugc">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a aria-label="Facebook" href="#" rel="ugc">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a aria-label="LinkedIn" href="#" rel="ugc">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a aria-label="Instagram" href="#" rel="ugc">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <p>123 Main Street<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@liverdiseaselab.com</p>
                    </div>
                </div>
                <div className="mt-4 border-t border-border pt-4 text-center text-sm">
                    <p>© 2024 Liver Disease And Metabolism Lab. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
