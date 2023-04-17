import Layout from '../components/layout/Layout';
import SmallLayout from '../components/layout/SmallLayout';
import useViewport from '../components/hooks/Viewport';
import Nav from '../components/Nav';

const Responsive = () => {
  const { width } = useViewport();
  const breakpoint = 1130;

  return width <= breakpoint ? (
    <>
      <div className='navigation'>
        <Nav chemin={'/contacts'} addClass={'contactNav'}>
          Contact Me
        </Nav>
      </div>
      <SmallLayout />
    </>
  ) : (
    <div className='superWrapper'>
      <div className='navigation'>
        <Nav chemin={'/contacts'}>Contact Me</Nav>
      </div>
      <Layout />
    </div>
  );
};

export default Responsive;
