import React from 'react';
import { getEvents } from "@/app/lib/events";
import Link from 'next/link';
import NavbarClient from '../ui/navbar/navbar-client';
import NavbarServer from '../ui/navbar/navbar-server';
import Image from 'next/image';

export default async function EventsPage(): Promise<React.ReactElement> {
    const events = await getEvents();

    return (
        <>
            <NavbarClient>
                <NavbarServer />
            </NavbarClient>
        
            <div className="relative min-h-screen">
                <div className="fixed inset-0 mainBG -z-10"></div>
                <div className="container mx-auto py-8 px-4 relative z-10">
                    <div className="flex flex-wrap justify-center items-start gap-6">
                        {events.map((event) => (
                            <div key={event.id} className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
                                <div className="flex flex-col h-full bg-white shadow-md rounded-xl overflow-hidden">
                                    <div className="relative h-56 overflow-hidden">
                                        {event.image && event.image.trim() !== '' ? (
                                            <Image
                                                src={event.image}
                                                alt="card-image"
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <Image
                                                src="/bg1.jpeg"
                                                alt="card-image"
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {event.title}
                                        </h5>
                                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mb-4">{event.description}</p>
                                        <p className="mb-1">{new Date(event.date).toLocaleDateString()}</p>
                                        <p className="mb-4">{event.location}</p>
                                    </div>
                                    <div className="p-6 pt-0 mt-auto">
                                        {event.ticketLink ? (
                                        <Link
                                            href={event.ticketLink}
                                            target="_blank"
                                            className="block w-full text-center align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        >
                                            Køb billetter
                                        </Link>
                                        ) : (
                                            <button className="w-full btn btn-primary">Ingen billetter tilgængelige</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
} 