import React, { useCallback } from 'react'
import { loadFull } from 'tsparticles';
import config from "./config"
import Particles from 'react-tsparticles';

const ParticleBackgrounf = () => {
    const particlesInit = useCallback(async engine => {
       await console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
        

    }, []);
  return (
    <Particles
    id="tsparticles"
    className='particles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={config}
/>
  )
}

export default ParticleBackgrounf