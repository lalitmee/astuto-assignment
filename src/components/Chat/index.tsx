import React from 'react'

interface ChatProps {
  type?: string
  title?: string
  children?: React.ReactNode
}

const Chat = ({ title, type, children }: ChatProps) => {
  const classes = type === 'user' ? 'bg-slate-200' : 'bg-white'
  const imgSrc =
    type === 'user'
      ? 'https://unsplash.it/30/30/?random&gravity=center'
      : '/images/bot.png'
  return (
    <div className={`${classes} mb-4 rounded-lg p-4`}>
      <div
        className={`${classes} flex items-center justify-start gap-4 ${
          children ? 'pb-2' : 'pb-0'
        }`}
      >
        <img src={imgSrc} width={35} height={35} className="rounded-lg" />
        {title}
      </div>
      {children}
    </div>
  )
}

export default Chat
