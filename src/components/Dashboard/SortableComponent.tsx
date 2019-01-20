import * as React from "react";
import AnalyticsCard from "./AnalyticsCard";
import {
  arrayMove,
  SortableContainer,
  SortableElement
} from "react-sortable-hoc";

const SortableColumn = SortableElement(
  ({ title, tags, index }: { title: string; tags: Array<any>; index: any }) => (
    <>
      <AnalyticsCard title={title} tags={tags} index={index} />
    </>
  )
);

const SortableArea = SortableContainer(
  ({ columns }: { columns: Array<any> }) => {
    return (
      <div className="analytics">
        {columns.map((value, index) => (
          <SortableColumn
            key={`item-${index}`}
            index={index}
            title={value.title}
            tags={value.tags}
          />
        ))}
      </div>
    );
  }
);

class SortableComponent extends React.Component<{}, {}> {
  state = {
    columns: [
      {
        title: "Most Popular",
        tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]
      },
      {
        title: "Most Recent",
        tags: ["Tag 4", "Tag 5", "Tag 6", "Tag 4", "Tag 5"]
      },
      {
        title: "Trending Now",
        tags: ["Tag 7", "Tag 8", "Tag 9", "Tag 4", "Tag 5"]
      },
      {
        title: "Flagged",
        tags: ["Tag 10", "Tag 11", "Tag 12", "Tag 4", "Tag 5"]
      }
    ]
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
