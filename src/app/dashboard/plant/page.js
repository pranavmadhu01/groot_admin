"use client";
import { deletePlant, getAllFertilzers, getAllPlants } from "@/api";
import AddCard from "@/components/cards/AddCard/AddCard";
import PhotoCard from "@/components/cards/PhotoCard/PhotoCard";
import AddPlantDrawer from "@/components/drawers/AddPlantDrawer/AddPlantDrawer";
import { SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Plant() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [fertilizers, setFertilizers] = useState([]);
  const [plants, setPlants] = useState([]);
  const [editPlantId, setEditPlantId] = useState(null);
  const [edit, setEdit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getAllPlants()
      .then((response) => {
        setPlants(response.data.data);
      })
      .catch((error) => {
        notifications.show({
          title: "Error",
          message: "An error occurred!",
        });
      });
  }, [opened]);
  useEffect(() => {
    getAllFertilzers()
      .then((response) => {
        setFertilizers(response.data.data);
      })
      .catch((error) => {
        notifications.show({
          title: "Error",
          message:
            error.response.data.message +
            ". Add a fertilizer to add a plant and continue, since timeline require fertilizer",
        });
        router.push("/dashboard/fertilizer");
      });
  });

  const handleAdd = async () => {
    setEdit(false);
    setEditPlantId(null);

    open();
  };

  const handleDelete = async (plantId) => {
    try {
      await deletePlant(plantId);
      setPlants((prevPlants) =>
        prevPlants.filter((plant) => plant._id !== plantId)
      );

      notifications.show({
        title: "Success",
        message: "Plant deleted successfully",
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "An error occurred!",
      });
    }
  };

  const handleEdit = async (plantId) => {
    setEdit(true);
    setEditPlantId(plantId);

    open();
  };

  return (
    <SimpleGrid cols={3} mah="100%" style={{ overflow: "auto" }}>
      <AddCard name="Add Plant" onClick={handleAdd} />
      {plants
        .map(({ name, defaultph, image, seedrate, _id }) => (
          <PhotoCard
            defaultph={defaultph}
            image={image}
            name={name}
            seedrate={seedrate}
            id={_id}
            key={_id}
            handleDelete={() => handleDelete(_id)}
            handleEdit={() => handleEdit(_id)}
          />
        ))
        .reverse()}
      <AddPlantDrawer
        opened={opened}
        close={close}
        editPlantId={editPlantId}
        edit={edit}
      />
    </SimpleGrid>
  );
}
