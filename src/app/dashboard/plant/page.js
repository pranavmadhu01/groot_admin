"use client";
import AddCard from "@/components/cards/AddCard/AddCard";
import AddFertilizerCard from "@/components/cards/AddCard/AddCard";
import AddPlantDrawer from "@/components/drawers/AddPlantDrawer/AddPlantDrawer";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Plant() {
  const [opened, { open, close, toggle }] = useDisclosure(false);

  return (
    <SimpleGrid cols={3}>
      {/* {fertilizers.map(({ name, price, _id }) => (
        <DisplayCard price={price} title={name} key={_id} />
      ))} */}
      <AddPlantDrawer opened={opened} close={close} />
      <AddCard name="Add Plant" onClick={open} />
    </SimpleGrid>
  );
}
