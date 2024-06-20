import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="bg-blue-300 py-6
             px-12 text-muted-foreground">
                <div className="container mx-auto lg:px-20 grid grid-cols-1 gap-20 px- sm:grid-cols-2 md:grid-cols-3">
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
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <p>Phone: (123) 456-7890<br />Email: info@liverdiseaselab.com</p>
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
