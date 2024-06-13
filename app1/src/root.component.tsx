import React from 'react';
import { eventBus } from '../../verint-root/utils/event-bus/src/event-bus'

const App1: React.FC = () => {

  const sendMessage = () => {
    console.log("hello")
    eventBus.sendMessage('Hello from App1');
  };


  return (
    <div>
      <h1>App1</h1>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App1;