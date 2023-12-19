import React from 'react'

export default function ChatInput() {
  return (
    <div className="sticky inset-x-10 bottom-5 m-2 rounded-2xl shadow-lg">
      <div>
        <input
          type="text"
          className="w-full rounded-2xl border border-slate-500 p-3 px-5"
          placeholder="Start typing your query here..."
        />

        <div className="absolute inset-y-3 right-4 flex gap-4 text-gray-400">
          <button className="transition-all duration-200 hover:text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </button>

          <button className="transition-all duration-200 hover:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
