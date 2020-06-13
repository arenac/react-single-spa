import React from "react";

export default function Root(props) {
  return (
    <div>
      <h1>Playground</h1>
      <section>{props.name} is mounted!</section>
    </div>
  );
}
