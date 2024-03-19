import React from "react";
import { Card } from "@/components/card";
import { Navbar } from "../navbar";
import * as styles from "./ResearchContextPage.styles";
import { useState, useEffect } from "react";
import axios from "axios";
interface CardData {
  id: string;
  title: string;
}

interface ResearchContextPageProps {
  cards: CardData[];
}

const ResearchContextPage: React.FC<ResearchContextPageProps> = ({ cards }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rcontexts, setRContexts] = useState<CardData[]>([]);

  useEffect(() => {
    // Fetch data from backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/researchcontexts");
        setRContexts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar activePage="Research Context" />
      <div className={styles.cardPageContainer}>
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <Card
              id={card.id}
              title={card.title}
              data-testid={`card-${card.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchContextPage;
