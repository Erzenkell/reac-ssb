import React, {useState, useEffect} from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { Box, Plane } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import niceColors from 'nice-color-palettes';
import './MovingObject.css'

const SPEED = 6;

const actionByKey = (key) => {
    const keys = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight'
    }
    return keys[key]
}

const useKeyboardControls = () => {
    const [movement, setMovement] = React.useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false
    })

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (actionByKey(e.code)) {
                setMovement((state) => ({...state, [actionByKey(e.code)]: true}))
            }
        }
        const handleKeyUp = (e) => {
            if (actionByKey(e.code)) {
                setMovement((state) => ({...state, [actionByKey(e.code)]: false}))
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [])

    return movement
}

const Person = (props) => {
    const { camera } = useThree();
    const { moveForward, moveBackward, moveLeft, moveRight } =
        useKeyboardControls();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        ...props,
    }));
    const velocity = React.useRef([0, 0, 0]);
    React.useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v));
    }, [api.velocity]);

    useFrame(() => {
        camera.position.copy(ref.current.position);
        const direction = new Vector3();

        const frontVector = new Vector3(
            0,
            0,
            Number(moveBackward) - Number(moveForward)
        );
        const sideVector = new Vector3(
            Number(moveLeft) - Number(moveRight),
            0,
            0
        );
        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation);

        api.velocity.set(direction.x, velocity.current[1], direction.z);
        ref.current.getWorldPosition(ref.current.position);
    });

    return (
        <>
            <mesh ref={ref} />
        </>
    );
}

const PhyPlane = ({ color, ...props }) => {
    const [ref] = usePlane(() => ({ ...props }));

    return (
        <Plane args={[1000, 1000]} ref={ref}>
        <meshStandardMaterial color={color} />
        </Plane>
    );
}

const MovingObject = () => {
    return (
        <div className="three-mv-container">
            <br/>
            Movement test
            <br/>
            Move with WASD
            <Canvas camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}>
                <Physics gravity={[0, -30, 0]}>
                    <PhyPlane
                                color={niceColors[17][5]}
                                position={[0, -2, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <PhyPlane color={niceColors[17][2]} position={[0, 0, -10]} />
                    <PhyPlane color={niceColors[17][3]} position={[-6, 0, -10]} rotation={[0, 2, 0]} />
                    <PhyPlane color={niceColors[17][1]} position={[6, 0, -10]} rotation={[0, -2, 0]} />
                    <Person position={[2, 0, -5]} />
                </Physics>
                <ambientLight intensity={0.3} />
                <pointLight intensity={0.8} position={[5, 0, 5]} />
            </Canvas>
        </div>
    );
}

export default MovingObject;