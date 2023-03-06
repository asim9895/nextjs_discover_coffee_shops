import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, ShopName } from "./card.style";

const Card: React.FC<any> = ({ name, href, image_url }) => {
  return (
    <Container>
      <Link href={href}>
        <ShopName>{name}</ShopName>
        <Image
          src={image_url}
          alt="Shop Image"
          style={{
            width: 450,
            height: 250,
            borderRadius: 10,
            objectFit: "cover",
          }}
        />
      </Link>
    </Container>
  );
};

export default Card;
