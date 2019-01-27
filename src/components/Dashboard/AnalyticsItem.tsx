import React from "react";
import {
  Icon,
  Colors,
  Popover,
  Button,
  PopoverInteractionKind
} from "@blueprintjs/core";

import {
  CardItem,
  CardLeft,
  CardRight,
  CardDetails,
  CardTitle,
  CardCount
} from "../../styles/AppStyles";

function popoverContent() {
  return (
    <div>
      <Button
        style={{ background: "red", color: "white", fontWeight: "bold" }}
        className="bp3-button bp3-popover-dismiss"
      >
        <Icon icon="trash" color={Colors.WHITE} iconSize={20} />
      </Button>
      <Button
        style={{
          background: "lightseagreen",
          color: "white",
          fontWeight: "bold",
          marginLeft: "5px"
        }}
        className="bp3-button bp3-popover-dismiss"
      >
        <Icon icon="flag" color={Colors.WHITE} iconSize={20} />
      </Button>
      <Button
        style={{
          background: "cornflowerblue",
          color: "white",
          fontWeight: "bold",
          marginLeft: "5px"
        }}
        className="bp3-button bp3-popover-dismiss"
      >
        <Icon icon="edit" color={Colors.WHITE} iconSize={20} />
      </Button>
    </div>
  );
}

export default ({ tag }) => {
  return (
    <CardItem>
      <CardLeft>
        <Icon color={Colors.LIGHT_GRAY1} icon="tag" iconSize={25} />
      </CardLeft>
      <CardDetails>
        <CardTitle>{tag}</CardTitle>
        <CardCount>700 Images</CardCount>
      </CardDetails>
      <CardRight>
        <Popover
          popoverClassName="bp3-popover-content-sizing bp3-dark"
          interactionKind={PopoverInteractionKind.HOVER}
          content={popoverContent()}
        >
          <Icon icon="more" iconSize={24} />
        </Popover>
      </CardRight>
    </CardItem>
  );
};
