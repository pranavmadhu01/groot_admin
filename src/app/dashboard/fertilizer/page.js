"use client";

import AddFertilizerForm from "@/components/modals/AddFertilizerForm";
import AddFertilizerCard from "@/components/cards/AddFertilizerCard";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Fertilizer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <SimpleGrid cols={3}>
      <AddFertilizerForm close={close} opened={opened} />
      <AddFertilizerCard onClick={open} />
    </SimpleGrid>
  );
}

{
  /* <Group position="center">
<AddFertilizerCard  />
</Group> */
}
