import React from 'react'

function Home() {
    return (
        <div>


            <div class="flex flex-col min-h-[100dvh] bg-[#f5f5f5]   ">

                <main class="flex-1">
                    <section class="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-r from-[blue] to-secondary">
                        <div class="container px-4 md:px-14">
                            <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div class="flex flex-col justify-center space-y-4">
                                    <div class="space-y-2">
                                        <h1 class="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl xl:text-6xl/none">
                                            Liver Disease And Metabolism Group
                                        </h1>
                                        <p class="max-w-[600px] text-white font-bold md:text-xl">
                                            Pioneering cutting-edge research and innovative solutions for a healthier world.
                                        </p>
                                    </div>
                                    <div class="flex flex-col gap-2 min-[400px]:flex-row">
                                        <a
                                            href="#"
                                            class="inline-flex bg-gray-200 h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <img
                                    src="https://img.freepik.com/free-vector/flat-illustration-world-hepatitis-day-awareness_23-2150420464.jpg?t=st=1718817836~exp=1718821436~hmac=3d29ce031ebfbb7ca2e0935c44a85a8de3accb36fcd7c7e3cf1ebc1d5dc2611d&w=740"
                                    width="550"
                                    height="550"
                                    alt="Hero"
                                    style={{}}
                                    class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                                />
                            </div>
                        </div>
                    </section>
                    <section id="services" class="w-full py-12 md:py-24 lg:py-32 border bg-gray-300 ">
                        <div class="container px-4 md:px-6">
                            <div class="space-y-2 text-center">
                                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                                <p class="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Acme Labs offers a wide range of cutting-edge research services to support your scientific endeavors.
                                </p>
                            </div>
                            <div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                                <div class="flex flex-col items-center justify-center space-y-4">
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
                                        class="h-12 w-12 text-primary"
                                    >
                                        <path d="M6 18h8"></path>
                                        <path d="M3 22h18"></path>
                                        <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                                        <path d="M9 14h2"></path>
                                        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                                        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                                    </svg>
                                    <h3 class="text-xl font-bold">Materials Analysis</h3>
                                    <p class="text-muted-foreground text-center">
                                        Our advanced analytical equipment and techniques provide in-depth material characterization.
                                    </p>
                                </div>
                                <div class="flex flex-col items-center justify-center space-y-4">
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
                                        class="h-12 w-12 text-primary"
                                    >
                                        <path d="M4.5 3h15"></path>
                                        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
                                        <path d="M6 14h12"></path>
                                    </svg>
                                    <h3 class="text-xl font-bold">Chemical Testing</h3>
                                    <p class="text-muted-foreground text-center">
                                        Leverage our state-of-the-art chemistry labs for all your testing needs.
                                    </p>
                                </div>
                                <div class="flex flex-col items-center justify-center space-y-4">
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
                                        class="h-12 w-12 text-primary"
                                    >
                                        <path d="M2 15c6.667-6 13.333 0 20-6"></path>
                                        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
                                        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
                                        <path d="m17 6-2.5-2.5"></path>
                                        <path d="m14 8-1-1"></path>
                                        <path d="m7 18 2.5 2.5"></path>
                                        <path d="m3.5 14.5.5.5"></path>
                                        <path d="m20 9 .5.5"></path>
                                        <path d="m6.5 12.5 1 1"></path>
                                        <path d="m16.5 10.5 1 1"></path>
                                        <path d="m10 16 1.5 1.5"></path>
                                    </svg>
                                    <h3 class="text-xl font-bold">Genomic Research</h3>
                                    <p class="text-muted-foreground text-center">
                                        Our genomics facility is equipped with the latest sequencing technologies.
                                    </p>
                                </div>
                                <div class="flex flex-col items-center justify-center space-y-4">
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
                                        class="h-12 w-12 text-primary"
                                    >
                                        <path d="m2 22 1-1h3l9-9"></path>
                                        <path d="M3 21v-3l9-9"></path>
                                        <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"></path>
                                    </svg>
                                    <h3 class="text-xl font-bold">Biological Testing</h3>
                                    <p class="text-muted-foreground text-center">
                                        Leverage our expertise in cell culture, microbiology, and molecular biology.
                                    </p>
                                </div>
                                <div class="flex flex-col items-center justify-center space-y-4">
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
                                        class="h-12 w-12 text-primary"
                                    >
                                        <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
                                        <path d="m13.56 11.747 4.332-.924"></path>
                                        <path d="m16 21-3.105-6.21"></path>
                                        <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
                                        <path d="m6.158 8.633 1.114 4.456"></path>
                                        <path d="m8 21 3.105-6.21"></path>
                                        <circle cx="12" cy="13" r="2"></circle>
                                    </svg>
                                    <h3 class="text-xl font-bold">Imaging Services</h3>
                                    <p class="text-muted-foreground text-center">
                                        Our advanced imaging technologies provide high-resolution visualization of your samples.
                                    </p>
                                </div>
                                <div class="flex flex-col items-center justify-center space-y-4">
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
                                        class="h-12 w-12 text-primary"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
                                        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
                                    </svg>
                                    <h3 class="text-xl font-bold">Materials Science</h3>
                                    <p class="text-muted-foreground text-center">
                                        Explore the properties and behavior of materials at the atomic and molecular level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="team" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div class="container px-4 md:px-6">
                            <div class="flex flex-col items-center justify-center space-y-4 text-center">
                                <div class="space-y-2">
                                    <div class="inline-block rounded-lg bg-muted px-3 py-1 text-5xl font-bold text-secondary">Our Team</div>
                                    <h2 class="text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
                                        Meet Our Talented Researchers
                                    </h2>
                                    <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Acme Laboratory is proud to have a team of world-class researchers and scientists dedicated to pushing
                                        the boundaries of scientific discovery.
                                    </p>
                                </div>
                            </div>
                            <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                                <div class="flex flex-col justify-center space-y-4 border bg-gray-200 rounded-lg p-4">
                                    <img
                                        src="https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?t=st=1718818913~exp=1718822513~hmac=c115bc4aa93aed27d3f996bd29aa44cd21da00ecdcbdda7fe8f13d53213c7be9&w=360"
                                        width="550"
                                        height="550"
                                        alt="Team Member"

                                        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                    />
                                    <div class="grid gap-1 text-center">
                                        <h3 class="text-xl font-bold text-secondary">Dr. Jane Doe</h3>
                                        <p class="text-muted-foreground">Principal Investigator, Biotechnology</p>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center space-y-4 border bg-gray-200 rounded-lg p-4">
                                    <img
                                        src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1718818927~exp=1718822527~hmac=70f7bfc74cb55646568dc2954bc18878eb88541c026cde7d224e42a289178bff&w=996"
                                        width="550"
                                        height="550"
                                        alt="Team Member"

                                        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                    />
                                    <div class="grid gap-1 text-center">
                                        <h3 class="text-xl font-bold text-secondary">Dr. John Smith</h3>
                                        <p class="text-muted-foreground">Senior Scientist, Materials Science</p>
                                    </div>
                                </div>
                                <div class="flex flex-col bg-gray-200 justify-center space-y-4 border rounded-lg p-4">
                                    <img
                                        src="https://img.freepik.com/free-photo/closeup-shot-laughing-male-model-outside-sun-rays_181624-53325.jpg?t=st=1718818946~exp=1718822546~hmac=b112eaa980833d5e715bde1b33062f0ce7d601470a65367178a5d018b585743c&w=740"
                                        width="550"
                                        height="550"

                                        alt="Team Member"
                                        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                    />
                                    <div class="grid gap-1 text-center">
                                        <h3 class="text-xl font-bold text-secondary">Dr. Sarah Lee</h3>
                                        <p class="text-muted-foreground">Research Scientist, Environmental Science</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="flex items-center justify-center min-h-screen bg-white">
                        <section className="w-full max-w-4xl container py-12 md:py-24 bg-white">
                            <div className="px-4 md:px-6">
                                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                    <div className="flex flex-col justify-center space-y-4">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact DPK Lab</h2>
                                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                                Have a question or interested in our services? Get in touch with our team today.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-6 w-6 text-primary"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                </svg>
                                                <a href="#" className="text-muted-foreground">
                                                    +1 (234) 567-890
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-6 w-6 text-primary"
                                                >
                                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                </svg>
                                                <a href="#" className="text-muted-foreground">
                                                    info@acmelabs.com
                                                </a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="mx-auto w-full p-3 border rounded-md bg-gray-100 max-w-sm space-y-2">
                                        <form className="flex flex-col gap-4">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                                                type="email"
                                                placeholder="Email"
                                            />
                                            <textarea
                                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                                                placeholder="Message"
                                            ></textarea>
                                            <button
                                                className="inline-flex bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Home
