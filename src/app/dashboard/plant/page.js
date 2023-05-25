"use client";
import AddFertilizerCard from "@/components/cards/AddCard/AddCard";
import AddPlantDrawer from "@/components/drawers/AddPlantDrawer/AddPlantDrawer";
import { SimpleGrid } from "@mantine/core";

export default function Plant() {
  return (
    <SimpleGrid cols={3}>
      {fertilizers.map(({ name, price, _id }) => (
        <DisplayCard price={price} title={name} key={_id} />
      ))}
      <AddPlantDrawer opened={opened} close={close} />
    </SimpleGrid>
  );
}
