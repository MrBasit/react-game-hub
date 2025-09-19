import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Prop {
  onSortSelection: (sortItem: SortItem) => void;
  selectedSort: SortItem | null;
}

export interface SortItem {
  label: string;
  value: string;
}

export default function SortSelector({ onSortSelection, selectedSort }: Prop) {
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
            Sort By: {selectedSort ? selectedSort.label : "Relevence"}
            <FaChevronDown></FaChevronDown>
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {SortList.map((sortItem) => {
                return (
                  <Menu.Item
                    onClick={() => onSortSelection(sortItem)}
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
