interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    ticketLink: string;
    image: string;
}


export const getEvents = async (): Promise<Event[]> => {
    return [
        {
            id: "1",
            title: "Event 1",
            description: "Description 1",
            date: "2025-11-4",
            location: "Slagelse Badeanstalten",
            ticketLink: 'https://www.instagram.com/dj_basstian/',
            image: ""
        },
        {
            id: "2",
            title: "Event 2",
            description: "Description 2",
            date: "2025-11-4",
            location: "Slagelse Badeanstalten",
            ticketLink: 'https://www.instagram.com/dj_basstian/',
            image: ""
        },
    ];
};