import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import queryStore from "../stores/queryStore";

export default function SortSelector() {
  let querySort = queryStore((s) => s.Sort);
  let updateQuerySort = queryStore((s) => s.updateSort);
  let SortList = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Date Released",
      value: "-released",
    },
    {
      label: "Date Added",
      value: "-added",
    },
    {
      label: "Rating",
      value: "-rating",
    },
  ];
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button marginBottom={"8px"} variant="surface" size="sm">
            Sort By: {querySort ? querySort.label : "Relevence"}
            <FaChevronDown></FaChevronDown>
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {SortList.map((sortItem) => {
                return (
                  <Menu.Item
                    onClick={() => updateQuerySort(sortItem)}
                    value={sortItem.value}
                    key={sortItem.value}
                  >
                    {sortItem.label}
                  </Menu.Item>
                );
              })}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}
