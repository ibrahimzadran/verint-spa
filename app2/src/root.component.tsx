import React, { useEffect, useState } from 'react';
import { eventBus } from '../../verint-root/utils/event-bus/src/event-bus'

const App2: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const subscription = eventBus.getMessage().subscribe((msg) => {
      console.log("hello")
      setMessage(msg);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>App2</h1>
      <p>Message: {message}</p>
    </div>
  );
};

export default App2;