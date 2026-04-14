import { render, screen } from "@testing-library/react";
import { HeroSection } from "../hero-section";

describe("HeroSection", () => {
  it("renders the main headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/I build fast, scalable/i)
    ).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText(/View My Work/i)).toBeInTheDocument();
    expect(screen.getByText(/View Resume/i)).toBeInTheDocument();
  });
});