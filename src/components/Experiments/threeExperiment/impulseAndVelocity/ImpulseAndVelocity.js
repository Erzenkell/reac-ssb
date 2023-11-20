import { Box, Plane } from "@react-three/drei";
import React from "react";
import { Canvas } from "react-three-fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import niceColors from 'nice-color-palettes';
import "./ImpulseAndVelocity.css";

const PhyPlane = ({ color, ...props }) => {
    const [ref] = usePlane(() => ({ ...props }));
  
    return (
        <Plane args={[1000, 1000]} ref={ref}>
          <meshStandardMaterial color={color} />
        </Plane>
    );
}

const PhyBox = (props) => {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));
  
    return (
        <Box
            args={[1, 1, 1]}
            ref={ref}
            onClick={() =>
                api.applyImpulse([0, 5, -10], [0.5, 0.5, 0.5]) // This launch the cube when clicking -> applyImpulse(impulse, [offset])                         
                //api.velocity.set(0, 2, 0) // This makes the object fly in a direction when clicked on -> velocity.set(x, y, z)
            }
        >
          <meshNormalMaterial />
        </Box>
    );
}

const ImpulseAndVelocity = () => {
    return (
        <div className='three-iav-container'>
            Impulse and velocity test <br/>
            Click on the cube to launch it
            <Canvas camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}>
                <Physics gravity={[0, -10, 0]}>
                    <PhyPlane
                        color={niceColors[17][5]}
                        position={[0, -2, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <PhyPlane color={niceColors[17][2]} position={[0, 0, -10]} />
                    <PhyPlane color={niceColors[17][3]} position={[-6, 0, -10]} rotation={[0, 2, 0]} />
                    <PhyPlane color={niceColors[17][1]} position={[6, 0, -10]} rotation={[0, -2, 0]} />
                    <PhyBox position={[2, 0, -5]} />
                    <PhyBox position={[0, 0, -5]} />
                    <PhyBox position={[-2, 0, -5]} />
                </Physics>
                <ambientLight intensity={0.3} />
                <pointLight intensity={0.8} position={[5, 0, 5]} />
            </Canvas>
        </div>
    );
}

export default ImpulseAndVelocity;