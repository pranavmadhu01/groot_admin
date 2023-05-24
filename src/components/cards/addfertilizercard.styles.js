import { createStyles, rem } from "@mantine/core";

const addFertilizerCardStyle = createStyles((theme) => ({
  header: {
    alignSelf: 'flex-start',
    width: '100%',
    cursor: 'pointer',
  },
  card: {
    width: '30%',
    height: '100%',
    padding: 24,
    paddingVertical: 32,
    backgroundColor: '#9ECC66',
    color: '#000',
    borderRadius: 15,
    borderColor: "green",
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    elevation: 3,
  },
}));
export { addFertilizerCardStyle };
