"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ResearchCard, ResearchCardProps } from "@/components/researchcard";
import { Navbar } from "../navbar";
import { Rcmodal } from "@/components/rcmodal";

export interface CardData {
  id: number;
  title: string;
  description: string;
}

export interface ResearchContextPageProps {
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
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
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

  const addResearchContext = async (title: string, description: string) => {
    try {
      const response = await axios.post("/api/researchcontexts", {
        title,
        description,
      });
      const newContext: CardData = response.data;
      setRContexts([...rcontexts, newContext]);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding research context:", error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSourcesClick = (id: number) => {
    console.log(`Sources clicked for card with id ${id}`);
  };

  const handleConversationsClick = (id: number) => {
    console.log(`Conversations clicked for card with id ${id}`);
  };

  return (
    <div>
      <Navbar role="Research Context" onSearch={handleSearch} />
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col items-center">
        <div className="flex flex-col gap-5">
          {filteredCards.map((card) => (
            <ResearchCard
              title={card.title}
              description={card.description}
              id={card.id}
              onSourcesClick={() => handleSourcesClick(card.id)}
              onConversationsClick={() => handleConversationsClick(card.id)}
              data-testid={`card-${card.id}`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          setShowModal(true);
          onAddContextClick();
        }}
        className="fixed bottom-10 right-10 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        + New Research Context
      </button>
      <Rcmodal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        addResearchContext={addResearchContext}
      />
    </div>
  );
};

export default ResearchContextPage;
