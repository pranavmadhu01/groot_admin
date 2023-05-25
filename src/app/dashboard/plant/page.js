"use client";
import { getAllPlants } from "@/api";
import AddCard from "@/components/cards/AddCard/AddCard";
import PhotoCard from "@/components/cards/PhotoCard/PhotoCard";
import AddPlantDrawer from "@/components/drawers/AddPlantDrawer/AddPlantDrawer";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function Plant() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    getAllPlants()
      .then((response) => {
        console.log(response.data.data);
        setPlants(response.data.data);
      })
      .catch((error) => {
        notifications.show({
          title: "Error",
          message: error.response.data.message,
        });
      });
  }, [opened]);
  return (
    <SimpleGrid cols={3}>
      {plants.map(({ name, defaultph, image, seedrate, _id }) => (
        <PhotoCard
          defaultph={defaultph}
          image={image}
          name={name}
          seedrate={seedrate}
          key={_id}
        />
      ))}
      <AddPlantDrawer opened={opened} close={close} />
      <AddCard name="Add Plant" onClick={open} />
    </SimpleGrid>
  );
}
