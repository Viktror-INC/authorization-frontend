import { colors } from "@/shared/styles/colors";
import styled from "styled-components";

export const SwapWindowStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 500px;
  color: white;
  padding: 20px;
  background: ${colors["blue[850]"]};
  border-radius: 10px;
  border: 1px solid ${colors["blue[800]"]};
`;

export const SwapTopStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwapInputsWrapStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
`;
