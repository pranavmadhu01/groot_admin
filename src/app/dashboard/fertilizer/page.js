"use client";
import AddCard from "@/components/cards/AddCard/AddCard";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { getAllFertilzers } from "@/api";
import DisplayCard from "@/components/cards/DisplayCard/DisplayCard";
import AddFertilizerDrawer from "@/components/drawers/AddFertilizerDrawer/AddFertilizerDrawer";

export default function Fertilizer() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [fertilizers, setFertilizers] = useState([]);
  useEffect(() => {
    getAllFertilzers().then((response) => setFertilizers(response.data.data));
  }, [opened]);

  return (
    <SimpleGrid cols={3}>
      {fertilizers.map(({ name, price, _id }) => (
        <DisplayCard subtitle={price} title={name} key={_id} />
      ))}
      <AddFertilizerDrawer opened={opened} close={close} />
      <AddCard onClick={open} name="Add Fertilizer" />
    </SimpleGrid>
  );
}
