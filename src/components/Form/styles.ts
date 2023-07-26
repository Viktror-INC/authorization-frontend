import { colors } from "@/shared/styles/colors";
import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 600px;
`;

export const FormTitleStyle = styled.h1`
  display: flex;
  margin: 0 auto;
  color: ${colors["blue[500]"]};
  font-size: 24px;
`;
