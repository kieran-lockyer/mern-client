import * as React from "react";
import AnalyticsCard from "./AnalyticsCard";
import {
  arrayMove,
  SortableContainer,
  SortableElement
} from "react-sortable-hoc";

const SortableColumn = SortableElement(({ value }: { value: string }) => (
  <>
    <AnalyticsCard title={value} />
  </>
));

const SortableArea = SortableContainer(({ columns }: { columns: string[] }) => {
  return (
    <div className="analytics">
      {columns.map((value, index) => (
        <SortableColumn key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends React.Component<{}, {}> {
  state = {
    columns: ["Popular Tags", "Recent Tags", "Item 3", "Item 4", "Item 5"]
  };

  private onSortEnd = ({
    oldIndex,
    newIndex
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    this.setState({
      columns: arrayMove(this.state.columns, oldIndex, newIndex)
    });
  };

  public render() {
    return (
      <SortableArea
        columns={this.state.columns}
        onSortEnd={this.onSortEnd}
        useDragHandle
        helperClass="analytics-card"
        axis="xy"
      />
    );
  }
}
export default SortableComponent;
