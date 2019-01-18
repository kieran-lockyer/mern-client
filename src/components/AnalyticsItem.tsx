import React, { Component } from "react";
import {
  Icon,
  Colors,
  Popover,
  Button,
  PopoverInteractionKind
} from "@blueprintjs/core";

class AnalyticsItem extends Component {
  popoverContent() {
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
  render() {
    return (
      <div className="analytics__item">
        <div className="analytics__item-icon">
          <Icon color={Colors.LIGHT_GRAY1} icon="tag" iconSize={25} />
        </div>
        <div className="analytics__item-details">
          <p className="analytics__item-title">Basketball</p>
          <p className="analytics__item-count">700 Images</p>
        </div>
        <div className="analytics__item-options">
          <Popover
            popoverClassName="bp3-popover-content-sizing bp3-dark"
            interactionKind={PopoverInteractionKind.HOVER}
            content={this.popoverContent()}
          >
            <Icon icon="layout-linear" iconSize={24} />
          </Popover>
        </div>
      </div>
    );
  }
}

export default AnalyticsItem;
