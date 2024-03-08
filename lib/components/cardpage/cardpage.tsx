// cardpage.tsx
import React from "react";
import { Card } from "@/components/card";
import { Navbar } from "../navbar";
import * as styles from "./cardpage.styles"; // Import styles

const CardPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.cardPageContainer}>
        <div className={styles.cardContainer}>
          <Card
            title="Canada Wildfires"
            description="Disaster management expert"
            data-testid="card"
          />
          <Card
            title="Hurricane Fiona"
            description="Ecological damage assesment"
            data-testid="card"
          />
          <Card
            title="Mauii Widlfires"
            description="Real-time heatmaps analysis"
            data-testid="card"
          />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
