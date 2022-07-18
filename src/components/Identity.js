import profil from '../assets/Portrait thib.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Identity() {
  return (
    <div className='identity'>
      <div className='identityContent'>
        <img src={profil} alt='profil' className='profil' />
        <div className='flexContainer'>
          <div className='flexWrapper'>
            <div className='info'>
              <h1 className='name'>Thibault Dilman</h1>
              <h2 className='function'>Front-End Developer</h2>
            </div>
            <div className='contact'>
              <i>
                <EmailIcon />
              </i>
              <div className='Email'>thibault&#8203;.dilman&#8203;@protonmail&#8203;.com</div>
              <i>
                <PhoneIcon />
              </i>
              <div className='Phone'>+33 6 45 42 25 75</div>
            </div>
          </div>
          <p className='Description'>
            Self-motivated and autodidact developer, who is willing to learn and create outstanding
            UI applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Identity;
