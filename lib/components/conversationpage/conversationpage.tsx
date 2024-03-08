// import React, { useState } from 'react';
// import {Card} from '@/components/card';
// import {Modal} from '@/components/modal';

// import { Chatnavbar } from '../chatnavbar';

// interface Conversation {
//   id: number;
//   name: string;
//   description: string;
// }

// const ConversationPage: React.FC = () => {
//   const [conversations, setConversations] = useState<Conversation[]>([
//     { id: 1, name: 'Conversation 1', description: 'This is conversation 1.' },
//     { id: 2, name: 'Conversation 2', description: 'This is conversation 2.' },
//     { id: 3, name: 'Conversation 3', description: 'This is conversation 3.' },
//     { id: 4, name: 'Conversation 4', description: 'This is conversation 4.' }
//   ]);
//   const [showModal, setShowModal] = useState(false);

//   const addConversation = (name: string, description: string) => {
//     const newConversation: Conversation = {
//       id: conversations.length + 1,
//       name,
//       description
//     };
//     setConversations([newConversation, ...conversations]);
//     setShowModal(false);
//   };

//   return (
//     <div className="conversation-page">
//       <Chatnavbar/>
//       <h1 className="text-3xl font-semibold mb-4">Conversations</h1>

//       {/* Modal for adding new conversation */}
//       <Modal
//         isOpen={showModal}
//         closeModal={() => setShowModal(false)}
//         addConversation={addConversation}
//       />

//       {/* Button to open the modal */}
//       <button
//         onClick={() => setShowModal(true)}
//         className="block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         + New Conversation
//       </button>

//       {/* List of conversations */}
//       <div className="grid gap-4">
//         {conversations.map((conversation) => (
//           <Card key={conversation.id} title={conversation.name} description={conversation.description} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ConversationPage;
// import React, { useState } from 'react';
// import { Card } from '@/components/card';
// import { Modal } from '@/components/modal';

// import { Chatnavbar } from '../chatnavbar';

// interface Conversation {
//   id: number;
//   name: string;
//   description: string;
// }

// const ConversationPage: React.FC = () => {
//   const [conversations, setConversations] = useState<Conversation[]>([
//     { id: 1, name: 'Conversation 1', description: 'This is conversation 1.' },
//     { id: 2, name: 'Conversation 2', description: 'This is conversation 2.' },
//     { id: 3, name: 'Conversation 3', description: 'This is conversation 3.' },
//     { id: 4, name: 'Conversation 4', description: 'This is conversation 4.' },
//   ]);
//   const [showModal, setShowModal] = useState(false);

//   const addConversation = (name: string, description: string) => {
//     const newConversation: Conversation = {
//       id: conversations.length + 1,
//       name,
//       description,
//     };
//     setConversations([newConversation, ...conversations]);
//     setShowModal(false);
//   };

//   return (
//     <div className="conversation-page">
//       <Chatnavbar />
//       <h1 className="text-3xl font-semibold mb-4">Conversations</h1>

//       {/* Modal for adding new conversation */}
//       <Modal isOpen={showModal} closeModal={() => setShowModal(false)} addConversation={addConversation} />

//       {/* Button to open the modal */}
//       <button
//         onClick={() => setShowModal(true)}
//         className="block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         + New Conversation
//       </button>

//       {/* List of conversations */}
//       <div className="grid gap-4 justify-center">
//         {conversations.map((conversation) => (
//           <Card key={conversation.id} title={conversation.name} description={conversation.description} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ConversationPage;
// import React, { useState } from 'react';
// import { Card } from '@/components/card';
// import { Modal } from '@/components/modal';

// import { Chatnavbar } from '../chatnavbar';

// interface Conversation {
//   id: number;
//   name: string;
//   description: string;
// }

// const ConversationPage: React.FC = () => {
//   const [conversations, setConversations] = useState<Conversation[]>([
//     { id: 1, name: 'Conversation 1', description: 'This is conversation 1.' },
//     { id: 2, name: 'Conversation 2', description: 'This is conversation 2.' },
//     { id: 3, name: 'Conversation 3', description: 'This is conversation 3.' },
//     { id: 4, name: 'Conversation 4', description: 'This is conversation 4.' },
//   ]);
//   const [showModal, setShowModal] = useState(false);

//   const addConversation = (name: string, description: string) => {
//     const newConversation: Conversation = {
//       id: conversations.length + 1,
//       name,
//       description,
//     };
//     setConversations([newConversation, ...conversations]);
//     setShowModal(false);
//   };

//   return (
//     <div className="conversation-page relative">
//       <Chatnavbar />
//       {/* <h1 className="text-3xl font-semibold mb-4">Conversations</h1> */}

//       {/* List of conversations */}
//       <div className="grid justify-center gap-4">
//         {conversations.map((conversation) => (
//           <Card key={conversation.id} title={conversation.name} description={conversation.description} />
//         ))}
//       </div>

//       {/* Modal for adding new conversation */}
//       <Modal isOpen={showModal} closeModal={() => setShowModal(false)} addConversation={addConversation} />

//       {/* Button to open the modal */}
//       <button
//         onClick={() => setShowModal(true)}
//         className="fixed bottom-10 right-10 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         + New Conversation
//       </button>
//     </div>
//   );
// };

// export default ConversationPage;
import React, { useState, useRef } from "react";
import { Card } from "@/components/card";
import { Modal } from "@/components/modal";

import { Chatnavbar } from "../chatnavbar";

interface Conversation {
  id: number;
  name: string;
  description: string;
}

const ConversationPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "June Wildfires",
      description:
        "Analysis of wildfires in Western Canada from June 5-11 on Lambert Conformational projection relief map.",
    },
    // { id: 2, name: 'Conversation 2', description: 'This is conversation 2.' },
    // { id: 3, name: 'Conversation 3', description: 'This is conversation 3.' }
  ]);
  const [showModal, setShowModal] = useState(false);
  const conversationsRef = useRef<HTMLDivElement>(null); // Reference to the conversations container

  const addConversation = (name: string, description: string) => {
    const newConversation: Conversation = {
      id: conversations.length + 1,
      name,
      description,
    };
    setConversations([newConversation, ...conversations]);
    setShowModal(false);

    // Scroll to the top after adding a new conversation
    if (conversationsRef.current) {
      conversationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="conversation-page relative">
      <Chatnavbar />
      {/* <h1 className="text-3xl font-semibold mb-4">Conversations</h1> */}

      {/* List of conversations */}
      <div ref={conversationsRef} className="grid justify-center gap-4">
        {conversations.map((conversation) => (
          <Card
            key={conversation.id}
            title={conversation.name}
            description={conversation.description}
          />
        ))}
      </div>

      {/* Modal for adding new conversation */}
      <Modal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        addConversation={addConversation}
      />

      {/* Button to open the modal */}
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
