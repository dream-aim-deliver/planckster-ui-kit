import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5; /* Light gray background */
  border-radius: 4px; /* Rounded corners */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 8px 16px; /* Padding for spacing */
`;

const InputField = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent; /* Transparent background */
  font-size: 14px;
  padding: 8px 16px; /* Padding for spacing */
  border-radius: 4px; /* Rounded corners */
  color: #333; /* Dark text color */
  transition: box-shadow 0.2s ease-in-out; /* Smooth transition for shadow */

  &:focus {
    box-shadow: 0 0 0 2px #e2e2e2; /* Subtle blue focus ring */
  }
`;

const SendButton = styled.button`
  background-color: #007bff; /* Blue background */
  color: white;
  border: none;
  padding: 8px 16px; /* Consistent padding */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; /* Smooth transition */

  &:hover {
    background-color: #0067cc; /* Darken blue on hover */
  }
`;
