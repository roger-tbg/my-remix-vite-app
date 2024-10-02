import { createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";
import Component from "./_index";
import { json, LoaderFunctionArgs } from "@remix-run/node";

function fakeLoader({ params }: LoaderFunctionArgs) {
  console.log("in fake loader");
  console.log(params);
  return json([]);
}

test("Render Table", async () => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      Component,
      loader: fakeLoader,
    },
  ]);

  render(<RemixStub />);
  console.log(screen.debug());
});
