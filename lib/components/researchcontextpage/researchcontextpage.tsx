// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card } from "@/components/card";
// import { Navbar } from "../navbar";
// import { Rcmodal } from "@/components/rcmodal"; // Import the Modal component

// interface CardData {
//   id: string;
//   title: string;
// }

// interface ResearchContextPageProps {
//   cards: CardData[];
//   apiUrl: string;
//   onAddContextClick: () => void;
// }

// const ResearchContextPage: React.FC<ResearchContextPageProps> = ({
//   cards,
//   apiUrl,
//   onAddContextClick,
// }) => {
//   const [rcontexts, setRContexts] = useState<CardData[]>([]);
//   const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

//   useEffect(() => {
//     // Fetch data from backend when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setRContexts(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   // Function to add a new research context
//   const addResearchContext = async (title: string, description: string) => {
//     try {
//       const response = await axios.post("/api/researchcontexts", {
//         title,
//         description,
//       });
//       const newContext: CardData = response.data;
//       setRContexts([...rcontexts, newContext]);
//       setShowModal(false); // Close the modal after adding context
//     } catch (error) {
//       console.error("Error adding research context:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar role="Research Context" />
//       <div className="max-w-screen-lg mx-auto p-8 flex flex-col items-center">
//         <div className="flex flex-col gap-5">
//           {cards.map((card) => (
//             <Card
//               id={card.id}
//               title={card.title}
//               key={card.id}
//               data-testid={`card-${card.id}`}
//             />
//           ))}
//         </div>
//       </div>
//       {/* New Research Context Button */}
//       <button
//         onClick={() => {
//           setShowModal(true);
//           onAddContextClick();
//         }}
//         className="fixed bottom-10 right-10 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         + New Research Context
//       </button>
//       {/* Modal for adding a new research context */}
//       <Rcmodal
//         isOpen={showModal}
//         closeModal={() => setShowModal(false)}
//         addResearchContext={addResearchContext}
//       />
//     </div>
//   );
// };

// export default ResearchContextPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card } from "@/components/card";
// import { Navbar } from "../navbar";
// import { Rcmodal } from "@/components/rcmodal"; // Import the Modal component

// interface CardData {
//   id: string;
//   title: string;
// }

// interface ResearchContextPageProps {
//   cards: CardData[];
//   apiUrl: string;
//   onAddContextClick: () => void;
// }

// const ResearchContextPage: React.FC<ResearchContextPageProps> = ({
//   cards,
//   apiUrl,
//   onAddContextClick,
// }) => {
//   const [rcontexts, setRContexts] = useState<CardData[]>([]);
//   const [showModal, setShowModal] = useState(false); // State for controlling modal visibility
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   useEffect(() => {
//     // Fetch data from backend when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setRContexts(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   // Function to add a new research context
//   const addResearchContext = async (title: string, description: string) => {
//     try {
//       const response = await axios.post("/api/researchcontexts", {
//         title,
//         description,
//       });
//       const newContext: CardData = response.data;
//       setRContexts([...rcontexts, newContext]);
//       setShowModal(false); // Close the modal after adding context
//     } catch (error) {
//       console.error("Error adding research context:", error);
//     }
//   };

//   // Function to filter cards based on search query
//   const filteredCards = cards.filter((card) =>
//     card.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <Navbar role="Research Context" />
//       <div className="max-w-screen-lg mx-auto p-8 flex flex-col items-center">
//         {/* Search bar */}
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
//         />
//         <div className="flex flex-col gap-5">
//           {/* Render filtered cards */}
//           {filteredCards.map((card) => (
//             <Card
//               id={card.id}
//               title={card.title}
//               key={card.id}
//               data-testid={`card-${card.id}`}
//             />
//           ))}
//         </div>
//       </div>
//       {/* New Research Context Button */}
//       <button
//         onClick={() => {
//           setShowModal(true);
//           onAddContextClick();
//         }}
//         className="fixed bottom-10 right-10 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         + New Research Context
//       </button>
//       {/* Modal for adding a new research context */}
//       <Rcmodal
//         isOpen={showModal}
//         closeModal={() => setShowModal(false)}
//         addResearchContext={addResearchContext}
//       />
//     </div>
//   );
// };

// export default ResearchContextPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { Navbar } from "../navbar";
import { Rcmodal } from "@/components/rcmodal"; // Import the Modal component

interface CardData {
  id: string;
  title: string;
}

interface ResearchContextPageProps {
  cards: CardData[];
  apiUrl: string;
  onAddContextClick: () => void;
}

const ResearchContextPage: React.FC<ResearchContextPageProps> = ({
  cards,
  apiUrl,
  onAddContextClick,
}) => {
  const [rcontexts, setRContexts] = useState<CardData[]>([]);
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Fetch data from backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setRContexts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  // Function to add a new research context
  const addResearchContext = async (title: string, description: string) => {
    try {
      const response = await axios.post("/api/researchcontexts", {
        title,
        description,
      });
      const newContext: CardData = response.data;
      setRContexts([...rcontexts, newContext]);
      setShowModal(false); // Close the modal after adding context
    } catch (error) {
      console.error("Error adding research context:", error);
    }
  };

  // Function to handle search query changes
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filtered cards based on search query
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <Navbar role="Research Context" onSearch={handleSearch} />
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col items-center">
        <div className="flex flex-col gap-5">
          {/* Render filtered cards */}
          {filteredCards.map((card) => (
            <Card
              id={card.id}
              title={card.title}
              key={card.id}
              data-testid={`card-${card.id}`}
            />
          ))}
        </div>
      </div>
      {/* New Research Context Button */}
      <button
        onClick={() => {
          setShowModal(true);
          onAddContextClick();
        }}
        className="fixed bottom-10 right-10 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        + New Research Context
      </button>
      {/* Modal for adding a new research context */}
      <Rcmodal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        addResearchContext={addResearchContext}
      />
    </div>
  );
};

export default ResearchContextPage;
