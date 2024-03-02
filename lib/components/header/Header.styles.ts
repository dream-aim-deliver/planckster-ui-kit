import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* Background color: Pantone 328 (approximated by #116657) */
  background-color: #116657;
  color: #fff;

  /* Padding for content spacing */
  padding: 15px;

  /* Display options */
  display: flex;
  justify-content: space-between; /* Align items horizontally */
  align-items: center; /* Center content vertically */

  /* Top and bottom borders for a divider effect */
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  /* Thicker text */
  font-weight: bold; /* Increase font weight for thicker text */
`;
