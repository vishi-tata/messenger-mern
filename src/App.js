import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import axios from './axios';

import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/messages/sync');
      if (res.status !== 200) {
        throw new Error('error while fetching data')
      }
      setMessages(res.data);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    const pusher = new Pusher('92497045b7862b1ae285', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, []);

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
