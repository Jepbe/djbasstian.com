'use client'

export default function mailSendClient({ children }) {
    return (
        <div className="flex flex-col items-start">
            <label className="font-bold text-red-600 px-4">VIRKER IKKE (WIP)</label>
            <input type="text" placeholder="Navn" className="p-4 m-2 w-full rounded-sm" />
            <input type="email" placeholder="Email" className="p-4 m-2 w-full rounded-sm" />
            <input type="text" placeholder="Telefonnummer" className="p-4 m-2 w-full rounded-sm" />
            <textarea rows="8" cols="40" placeholder="Besked" className="p-4 m-2 w-full rounded-sm resize-none"></textarea>
            <button className="py-4 px-12 m-2 rounded-sm bg-blue-500 font-bold text-white">Send</button>
            { children }
        </div>
    );
}