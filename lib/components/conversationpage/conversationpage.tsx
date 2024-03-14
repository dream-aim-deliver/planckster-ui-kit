import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { Modal } from "@/components/modal";
import { Navbar } from "../navbar";

interface Conversation {
  id: number;
  name: string;
  description: string;
}

const ConversationPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [showModal, setShowModal] = useState(false);
  const conversationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch conversations from backend when component mounts
    const fetchConversations = async () => {
      try {
        const response = await axios.get("/api/conversations");
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, []);

  const addConversation = async (name: string, description: string) => {
    try {
      const response = await axios.post("/api/conversations", {
        name,
        description,
      });
      const newConversation: Conversation = response.data;
      setConversations([newConversation, ...conversations]);
      setShowModal(false);

      // Scroll to the top after adding a new conversation
      if (conversationsRef.current) {
        conversationsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } catch (error) {
      console.error("Error adding conversation:", error);
    }
  };

  return (
    <div className="conversation-page relative">
      <Navbar activePage="Conversations" />

      <div ref={conversationsRef} className="grid justify-center gap-4 mt-8">
        {conversations.map((conversation) => (
          <Card
            key={conversation.id}
            title={conversation.name}
            description={conversation.description}
          />
        ))}
        <Card title="" description="" />
      </div>

      <Modal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        addConversation={addConversation}
      />

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-10 right-10 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        + New Conversation
      </button>
    </div>
  );
};

export default ConversationPage;
