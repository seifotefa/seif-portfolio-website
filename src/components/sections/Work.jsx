import React from 'react';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { BottomBar } from '../BottomBar';

export const Work = () => {
  return (
    <>
      <Experience showBottomBar={false} />
      <Projects showBottomBar={false} />
      <BottomBar />
    </>
  );
};
