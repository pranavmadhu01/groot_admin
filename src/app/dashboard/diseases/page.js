"use client";
import AddCard from "@/components/cards/AddCard/AddCard";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { getAllFertilzers } from "@/api";
import DisplayCard from "@/components/cards/DisplayCard/DisplayCard";
import AddFertilizerDrawer from "@/components/drawers/AddFertilizerDrawer/AddFertilizerDrawer";

export default function Diseases() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    getAllDiseases().then((response) => setDiseases(response.data.data));
  }, [opened]);

  return (
    <SimpleGrid cols={3}>
      {diseases.map(({ name, price, _id }) => (
        <DisplayCard subtitle={price} title={name} key={_id} />
      ))}
      <AddDiseasesDrawer opened={opened} close={close} />
      <AddCard onClick={open} />
    </SimpleGrid>
  );
}
