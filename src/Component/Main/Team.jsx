import React from 'react'
import bharthwaaj from '../Image/Bharthwaaj.jpg'
function Team() {
    return (
        <div>
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
                    <div className='flex items-center py-5 justify-center'>

                        <div class=" grid max-w-5xl items-center gap-6 lg:py-12 lg:grid-cols-2 lg:gap-12">
                            <div class="flex flex-col justify-center space-y-4 border bg-gray-200 rounded-lg p-4">
                                <img
                                    src="https://pbs.twimg.com/profile_images/1766161871202299904/MoBU92mf_400x400.jpg"
                                    width="550"
                                    height="550"
                                    alt="Team Member"

                                    class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                                <div class="grid gap-1 text-center">
                                    <h3 class="text-xl font-bold text-secondary">Dr. Divya P. Kumar</h3>
                                    <p class="text-muted-foreground">Principal Investigator</p>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center space-y-4 border bg-gray-200 rounded-lg p-4">
                                <img
                                    src="https://loop.frontiersin.org/images/profile/1076061/203"
                                    width="550"
                                    height="550"
                                    alt="Team Member"

                                    class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                                <div class="grid gap-1 text-center">
                                    <h3 class="text-xl font-bold text-secondary">Akshtha N. Srinivas</h3>
                                    <p class="text-muted-foreground">Senior Research fellow, Daughter of DPK</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="mx-auto grid max-w-5xl items-center gap-6 lg:py-12 lg:grid-cols-3 lg:gap-12">
                        <div class="flex flex-col justify-center space-y-4 border bg-gray-200 rounded-lg p-4">
                            <img
                                src="https://pbs.twimg.com/profile_images/1766161871202299904/MoBU92mf_400x400.jpg"
                                width="550"
                                height="550"
                                alt="Team Member"

                                class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div class="grid gap-1 text-center">
                                <h3 class="text-xl font-bold text-secondary">Dr. Divya P. Kumar</h3>
                                <p class="text-muted-foreground">Principal Investigator</p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center space-y-4 border bg-gray-200 rounded-lg p-4">
                            <img
                                src={bharthwaaj}
                                width="550"
                                height="550"
                                alt="Team Member"

                                class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div class="grid gap-1 text-center">
                                <h3 class="text-xl font-bold text-secondary">Akshtha N. Srinivas</h3>
                                <p class="text-muted-foreground">Senior Research fellow, Daughter of DPK</p>
                            </div>
                        </div>
                        <div class="flex flex-col bg-gray-200 justify-center space-y-4 border rounded-lg p-4">
                            <img
                                src="https://i1.rgstatic.net/ii/profile.image/962699211059202-1606536786866_Q512/Diwakar-S.jpg"
                                width="550"
                                height="550"

                                alt="Team Member"
                                class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div class="grid gap-1 text-center">
                                <h3 class="text-xl font-bold text-secondary">Diwakar S</h3>
                                <p class="text-muted-foreground">ICMR FELLOW, Son of DPK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
