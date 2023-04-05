import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

interface UserResponse {
  username: string;
  name: string;
  url: string;
}

interface ConversationResponse {
  name: string;
  participants: string[];
  last_message: {
    content: string;
    timestamp: string;
  };
}


export function Conversations() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [conversations, setConversations] = useState<ConversationResponse[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("http://127.0.0.1:8000/users/", {
        headers: {
          Authorization: `Token ${user?.token}`,
        },
      });
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, [user]);


  useEffect(() => {
    async function fetchConversations() {
      const res = await fetch("http://127.0.0.1:8000/conversations/", {
        headers: {
          Authorization: `Token ${user?.token}`,
        },
      });
      const data = await res.json();
      setConversations(data);
    }
    fetchConversations();
  }, [user]);
  
  

  return (
    <div>
      {conversations
        .map((u) => (
          <Link
            key={u.name}
            to={`chats/${u.name}`}
          >
            <div>{u.name}</div>
          </Link>
        ))}
    </div>
  );
}
