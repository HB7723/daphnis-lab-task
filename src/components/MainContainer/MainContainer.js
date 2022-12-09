import React from "react";

import Card from "../Card/Card";

import "./MainContainer.css";

import med from "../../assets/medicine.png";

const MainContainer = () => {
  let data = [
    {
      id: 1,
      src: med,
      title: "Facipiravir 400mg (Fabiflu) Tablets",
      price: 1775,
      supplier: "Glenmark Pharmaceutical Limited",
      address: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      id: 2,
      src: med,
      title: "Facipiravir 400mg (Fabiflu) Tablets",
      price: 1775,
      supplier: "Glenmark Pharmaceutical Limited",
      address: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      id: 3,
      src: med,
      title: "Facipiravir 400mg (Fabiflu) Tablets",
      price: 1775,
      supplier: "Glenmark Pharmaceutical Limited",
      address: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      id: 4,
      src: med,
      title: "Facipiravir 400mg (Fabiflu) Tablets",
      price: 1775,
      supplier: "Glenmark Pharmaceutical Limited",
      address: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      id: 5,
      src: med,
      title: "Facipiravir 400mg (Fabiflu) Tablets",
      price: 1775,
      supplier: "Glenmark Pharmaceutical Limited",
      address: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      id: 6,
      src: med,
      title: "Facipiravir 400mg (Fabiflu) Tablets",
      price: 1775,
      supplier: "Glenmark Pharmaceutical Limited",
      address: "PARVAT PATIYA, SURAT, GUJRAT",
    },
  ];

  return (
    <>
      <div className="card-container">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              src={item.src}
              title={item.title}
              price={item.price}
              supplier={item.supplier}
              address={item.address}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainContainer;
