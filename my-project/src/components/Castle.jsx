import React from 'react'
import Tower from './Tower'

const Castle = ({message1, handleReply}) => {
  return (
    <div>
      Castle
      <Tower message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Castle
