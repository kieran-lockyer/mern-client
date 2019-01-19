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
        title: "Popular Tags",
        tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]
      },
      {
        title: "Popular Tags",
        tags: ["Tag 4", "Tag 5", "Tag 6"]
      },
      {
        title: "Popular Tags",
        tags: ["Tag 7", "Tag 8", "Tag 9"]
      },
      {
        title: "Popular Tags",
        tags: ["Tag 10", "Tag 11", "Tag 12"]
      },
      {
        title: "Popular Tags",
        tags: ["Tag 13", "Tag 14", "Tag 15"]
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
