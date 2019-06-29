// Component to display the header of the component
import React from "react";

export default function PageTitle(props) {
  return (
    <div>
      <p
        className="text-primary font-weight-bold"
        style={{ fontSize: "1.5rem" }}
      >
        {props.title}
      </p>
    </div>
  );
}
