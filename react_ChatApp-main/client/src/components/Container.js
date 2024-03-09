import React, { useEffect } from 'react'

import ChatList from "./ChatList"
import ChatForm from "./ChatForm"
import { useChat } from "../context/ChatContext"

import styles from "./styles.module.css"
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";

function Container() {
  const { setMessages } = useChat();

  useEffect(()=>{
    init()

    subscribeInitialMessages((messages)=>{
      setMessages(messages)
    })

    subscribeChat((message)=>{
      setMessages((prevState)=>[...prevState, {message}]);
    });

  }, [])

  return (
    <div className={styles.App}>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container