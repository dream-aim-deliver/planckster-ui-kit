import React from "react";
import styled from "styled-components";

// Import the HeaderContainer component
import { HeaderContainer } from "./Header.styles";

interface HeaderProps {
  conversationName: string;
  participants: string[];
  onlineStatus: boolean[];
}

const Header: React.FC<HeaderProps> = ({
  conversationName,
  participants,
  onlineStatus,
}) => {
  return (
    <HeaderContainer>
      <h2>{conversationName}</h2>
      <p>Participants: {participants.join(", ")}</p>
      <p>Online: {onlineStatus.filter(Boolean).length}</p>
    </HeaderContainer>
  );
};

export default Header;
