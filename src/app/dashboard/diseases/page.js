"use client";
import AddCard from "@/components/cards/AddCard/AddCard";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { getAllDiseases } from "@/api";
import DisplayCard from "@/components/cards/DisplayCard/DisplayCard";
import AddDiseaseDrawer from "@/components/drawers/AddDiseaseDrawer/AddDiseaseDrawer";

export default function Diseases() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    getAllDiseases().then((response) => setDiseases(response.data.data));
  }, [opened]);

  return (
    <SimpleGrid cols={3} mah="100%" style={{ overflow: "auto" }}>
      <AddCard onClick={open} name="Add Disease" />
      {diseases
        .map(({ name, type, _id }) => (
          <DisplayCard subtitle={type} title={name} key={_id} />
        ))
        .reverse()}
      <AddDiseaseDrawer opened={opened} close={close} />
    </SimpleGrid>
  );
}
