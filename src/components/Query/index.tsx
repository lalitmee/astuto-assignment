import React from 'react'

const Query = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mb-4 flex items-center justify-start gap-4 rounded-lg bg-white p-4">
      {children}
    </div>
  )
}

export default Query
