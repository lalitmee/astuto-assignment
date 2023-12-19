import React, { useState } from 'react'

const Accordion = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="px-2">
          <span className="text-sm text-gray-500">{title}</span>
        </div>
        <hr className="my-2 h-px w-full border-0 bg-gray-200 text-gray-500" />
        <button className="px-2 text-gray-500" onClick={toggleAccordion}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className={`h-4 w-4 transition-all duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div
          className={`overflow-hidden pb-4 pl-12 pt-2 transition-all duration-300 ${
            isExpanded ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="pb-1">{children}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion
