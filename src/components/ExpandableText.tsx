import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string;
}
let ExpandableText = ({ children }: Prop) => {
  let [isExpanded, setExpanded] = useState(false);
  let charLimit = 300;

  if (!children) return null;

  if (children.length <= charLimit) return <Text>{children}</Text>;

  let showText = isExpanded
    ? children
    : children.substring(0, charLimit) + "...";

  return (
    <Text>
      {showText}{" "}
      <Button size={"xs"} onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
