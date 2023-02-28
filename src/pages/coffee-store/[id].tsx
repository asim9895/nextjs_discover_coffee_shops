import React from "react";
import { useRouter } from "next/router";

const SingleCoffeeStore = () => {
  const {
    query: { id },
  } = useRouter();
  console.log("route", id);
  return (
    <div>
      <h1>Single Coffee Store</h1>
    </div>
  );
};

export default SingleCoffeeStore;
