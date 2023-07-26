import { colors } from "@/shared/styles/colors";
import { WrapperStyles } from "@/shared/styles/styles";
import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  background: ${colors["blue[900]"]};
`;

export const HeaderWrapped = styled(WrapperStyles)`
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

export const MenuStyles = styled.ul`
  display: flex;
  column-gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;
