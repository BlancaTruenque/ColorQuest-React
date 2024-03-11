// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("Prebas de Home", () => {
  it("tiene que existir el titulo y el nombre", () => {
    render(<Home />);
    const title = screen.getByText("React Evaluation");
    const name = screen.getByText("Blanca Truenque");
    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it("cuando le de click al boton Color Game debe llamar a la funcion del prop", async () => {
    const user = userEvent.setup();
    const changeToColorPage = vi.fn();
    render(<Home changeToColorPage={changeToColorPage} />);

    await user.click(screen.getByText("Color Game"));

    expect(changeToColorPage).toHaveBeenCalledTimes(1);
  });

  it("cuando le de click al boton Doable debe llamar a la funcion del prop", async () => {
    const user = userEvent.setup();
    const changeToDoablePage = vi.fn();
    render(<Home changeToDoablePage={changeToDoablePage} />);

    await user.click(screen.getByText("Doable"));

    expect(changeToDoablePage).toHaveBeenCalledTimes(1);
  });
});
