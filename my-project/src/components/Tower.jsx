import React from 'react'
import Secretroom from './Secretroom'

const Tower = ({message1, handleReply}) => {
  return (
    <div>
        Tower
      <Secretroom message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Tower
