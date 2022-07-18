import Layout from '../components/layout/Layout';
import SmallLayout from '../components/layout/SmallLayout';
import useViewport from '../components/hooks/Viewport';
import Nav from '../components/Nav';
import { createContext, useState } from 'react';
import Modal from '../components/modal/Modal';

const Responsive = () => {
  const { width } = useViewport();
  const breakpoint = 1130;
  const [modalOpen, setModalOpen] = useState(true);

  const ModalContext = createContext();

  return width <= breakpoint ? (
    <>
      <div className='navigation'>
        <Nav chemin={'/random'} addClass={'notFoundNav'}>
          404
        </Nav>
        <Nav chemin={'/contacts'} addClass={'contactNav'}>
          Contact Me
        </Nav>
      </div>
      <SmallLayout />
      {modalOpen && <Modal handleClose={() => setModalOpen(false)} />}
    </>
  ) : (
    <div className='superWrapper'>
      <div className='navigation'>
        <Nav chemin={'/random'}>404</Nav>
        <Nav chemin={'/contacts'}>Contact Me</Nav>
      </div>
      <Layout />
      {modalOpen && <Modal handleClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default Responsive;
