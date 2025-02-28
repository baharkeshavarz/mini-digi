"use client";

import { ListItem } from "@/app/interfaces/item.interface";
import Link from "next/link";
import React, { useState } from "react";

const ExampleList = ({ listItems }: { listItems: ListItem[] }) => {
  const [user, setUser] = useState("");
  console.log("ExampleList rendered");
  const listItemClick = (item: ListItem) => {
    console.log("I was clicked:", item);
    setUser("Bahar");
  };
  return (
    <>
      <p>This is client side rendered </p>
      <h1> My Name is: {user}</h1>
      <ul className="flex flex-col gap-2 w-full max-w-xs mx-auto text-center">
        {listItems.map((item) => {
          return (
            <li
              className="max-w-xs py-1 px-3 border border-gray-600 rounded-md hover:bg-gray-200"
              onClick={() => {
                listItemClick(item);
              }}
              key={item.id}
            >
              <Link
                className="w-full h-full block"
                href={`/list-item/${item.id}`}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ExampleList;
