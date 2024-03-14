import React, { useState, useEffect } from "react";
import { Card } from "@/components/card";
import { Navbar } from "../navbar";
import * as styles from "./researchcontextpage.styles"; // Import styles
import axios from "axios";

interface CardData {
  id: number;
  title: string;
  description: string;
}

const ResearchContextPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    // Fetch data from backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cards"); // Adjust the endpoint according to your backend API
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <Navbar activePage="Research Context" />
      <div className={styles.cardPageContainer}>
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              data-testid={`card-${card.id}`}
            />
          ))}
          <Card title="" description="" />
        </div>
      </div>
    </div>
  );
};

export default ResearchContextPage;
