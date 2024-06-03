import React from "react";

type PropType = {
  selected: boolean;
  name: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, name } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="text-lg line-clamp-1 font-bold"
      >
        {name}
      </button>
    </div>
  );
};
