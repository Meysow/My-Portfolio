import Backdrop from './Backdrop';

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()} className='modalContainer'>
        <p>Modal Content</p>
      </div>
    </Backdrop>
  );
};

export default Modal;
