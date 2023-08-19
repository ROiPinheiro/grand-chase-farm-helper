import { useCharactersStore } from "../store/character-store";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function DailyFarmList() {
  const { selectedCharacters } = useCharactersStore();

  console.log(selectedCharacters);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
          </Tr>
        </Thead>
        <Tbody>
          {selectedCharacters?.map((selectedChar) => (
            <Tr key={selectedChar.id}>
              <Td>
                <div>
                  <img
                    src={selectedChar.char.src}
                    alt={selectedChar.char.name}
                    width="32"
                    height="32"
                  />
                </div>
              </Td>
              <Td>
                <div className="flex ">
                  {selectedChar.selectedFarmPlaces.map((farmPlace) => (
                    <label key={farmPlace.name} htmlFor={farmPlace.name}>
                      {farmPlace.name}
                      <input
                        type="checkbox"
                        name="tot_check"
                        id="tot_check"
                        onChange={() =>
                          (farmPlace.completed = !farmPlace.completed)
                        }
                        checked={farmPlace.completed}
                      />
                    </label>
                  ))}
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
