import React from 'react';
import ProgressBar from './ProgressBar';
import useViewport from './hooks/Viewport';

const Skills = () => {
  const { width } = useViewport();
  const breakpoint = 1130;

  const languages = [
    { id: 1, value: 'React', xp: 9 },
    { id: 3, value: 'Next', xp: 7 },
    { id: 4, value: 'Typescript', xp: 5 },
    { id: 2, value: 'Javascript', xp: 11 },
    { id: 5, value: 'SASS', xp: 11 },
  ];
  const backend = [
    { id: 6, value: 'Sanity', xp: 6 },
    { id: 7, value: 'MongoDB', xp: 5 },
    { id: 8, value: 'Express', xp: 4 },
    { id: 9, value: 'Mongoose', xp: 5 },
    { id: 10, value: 'Cloudinary', xp: 4 },
  ];

  return width <= breakpoint ? (
    <ProgressBar title='FRONT END' languages={languages} className='languageDisplay' />
  ) : (
    <div className='skills'>
      <ProgressBar title='FRONT END' languages={languages} className='languageDisplay' />
      <ProgressBar title='BACK END' languages={backend} className='designDisplay' />
    </div>
  );
};

export default Skills;
