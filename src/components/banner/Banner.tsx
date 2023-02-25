import React from "react";
import { Button, SpecialText, SubTitle, Title } from "./banner.style";

interface BannerProps {
  buttonText: string;
  onClickButton: () => void;
}

const Banner: React.FC<BannerProps> = ({ buttonText, onClickButton }) => {
  return (
    <div>
      <Title>
        Coffee <SpecialText>Connoisseur</SpecialText>
      </Title>
      <SubTitle>Discover your local coffee shops</SubTitle>

      <Button onClick={onClickButton}>{buttonText}</Button>
    </div>
  );
};

export default Banner;
