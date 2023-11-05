import { Paragraph } from "grommet";
import { HeaderContainer } from "./styles";
import { FC } from "react";

type HeaderProps = {
  color?: string;
};

const Header: FC<HeaderProps> = ({ color = "#fff" }) => {
  return (
    <HeaderContainer color={color}>
      <Paragraph>
        <b>turkishairlines.com</b>
      </Paragraph>
      <Paragraph>
        search<b>Flight Challange</b>
      </Paragraph>
    </HeaderContainer>
  );
};

export default Header;
