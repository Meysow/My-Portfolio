import Layout from "../components/layout/Layout";
import SmallLayout from "../components/layout/SmallLayout";
import useViewport from "../components/hooks/Viewport";
import Nav from "../components/Nav";

const Responsive = () => {
  const { width } = useViewport();
  const breakpoint = 1130;

  return width <= breakpoint ? (
    <>
      <Nav chemin={"/contacts"}>Contact Me</Nav>
      <SmallLayout />
    </>
  ) : (
    <div className="superWrapper">
      <Nav chemin={"/contacts"}>Contact Me</Nav>
      <Layout />
    </div>
  );
};

export default Responsive;
