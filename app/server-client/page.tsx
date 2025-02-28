import React from "react";
import { getItems } from "../actions/items.actions";
import ExampleList from "./ExampleList";

const ServerClientPage = async () => {
  const listItems = await getItems();

  return (
    <div className="bg-blue-200 text-gray-900 min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl">ServerClientPage</h1>
      <p>This is also SERVER SIDE rendered</p>
      {/* client side */}
      <ExampleList listItems={listItems} />
    </div>
  );
};

export default ServerClientPage;

export const dynamic = "force-dynamic";
