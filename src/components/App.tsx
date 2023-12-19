import React from 'react'

import Accordion from './Accordion'
import Chat from './Chat'
import Query from './Query'
import ChatInput from './ChatInput'

function App() {
  return (
    <div className="h-screen w-full bg-slate-100 p-5">
      <Chat
        type="user"
        title="Top cloud costs by services in product account (#242424)"
      />
      <Query>
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Query>
      <Chat
        type="bot"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
      >
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Chat>
      <Chat type="user" title="How can i reduce $3 costs?" />
      <Chat
        type="bot"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
      >
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Chat>
      <Chat
        type="user"
        title="Top cloud costs by services in product account (#242424)"
      />
      <Query>
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Query>
      <Chat
        type="bot"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
      >
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Chat>
      <Chat type="user" title="How can i reduce $3 costs?" />
      <Chat
        type="user"
        title="Top cloud costs by services in product account (#242424)"
      />
      <Query>
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Query>
      <Chat
        type="bot"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
      >
        <Accordion title="Query">
          <p>Top cloud costs by services in product account (#242424)</p>
        </Accordion>
      </Chat>
      <Chat type="user" title="How can i reduce $3 costs?" />
      <ChatInput />
    </div>
  )
}

export default App
