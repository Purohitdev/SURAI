"use client";

import {
  useRef,
  useState,
  useEffect,
  Suspense,
  useCallback,
  useMemo,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  Group,
  PerspectiveCamera as PerspectiveCameraImpl,
  Vector3,
} from "three";

// Components
import Navbar from "./Nav";
import Introduction from "./Sections/Introduction";
import Gallery from "./Sections/Gallery";
import Menu from "./Sections/Menu";
import Reservations from "./Sections/Reservations";
import Management from "./Sections/Management";
import Footer from "./Sections/Footer";
import SectionWrapper from "./SectionWrapper"; // 👈 Import the wrapper

export default function ScrollScene() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (isLoaded && scrollContainerRef.current) {
      setScrollY(scrollContainerRef.current.scrollTop);
    }
  }, [isLoaded]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const sections = useMemo(
    () => [
      <Introduction key="intro" />,
      <Gallery key="gallery" />,
      <Menu key="menu" />,
      <Reservations key="res" />,
      <Management key="manage" />,
      <Footer key="footer" />,
    ],
    []
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 -z-20">
        <Canvas shadows>
          {/* <color attach="background" args={["#403d39"]} /> */}
          <Environment files="https://www.shutterstock.com/image-photo/weather-dramatic-black-rain-clouds-600nw-2353892453.jpg" background />

          <ScrollController scrollY={scrollY} />
          <Environment preset="city" />
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <Suspense fallback={null}>
            <Model setIsLoaded={setIsLoaded} />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      {/* Navbar */}
      <Navbar />


      

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory z-10"
      >
        {sections.map((Section, index) => (
          <SectionWrapper key={index}>{Section}</SectionWrapper>
        ))}
      </div>

      {/* Loading Screen */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-white text-2xl font-semibold animate-pulse">
            Loading Model...
          </div>
        </div>
      )}
    </div>
  );
}

function ScrollController({ scrollY }: { scrollY: number }) {
  const cameraRef = useRef<PerspectiveCameraImpl | null>(null);

  useFrame(() => {
    if (cameraRef.current) {
      const totalScroll = 6 * window.innerHeight;
      const progress = Math.min(1, scrollY / totalScroll);

      const startPosition = new Vector3(0, 0, 12);
      const endPosition = new Vector3(0, 0, -20);
      const newPosition = startPosition.clone().lerp(endPosition, progress);

      cameraRef.current.position.copy(newPosition);

      if (progress === 1) {
        const extra = scrollY - totalScroll;
        const rotateAmount = (extra / window.innerHeight) * Math.PI * 0.5;
        cameraRef.current.rotation.y = rotateAmount;
      } else {
        cameraRef.current.lookAt(new Vector3(0, 0, newPosition.z - 2));
      }
    }
  });

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1, 15]} fov={50} />
  );
}

type GLTFResult = {
  scene: Group;
} & ReturnType<typeof useGLTF>;

function Model({ setIsLoaded }: { setIsLoaded: (loaded: boolean) => void }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/try1.glb") as GLTFResult;

  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    scene.position.set(0, 0, 0);
    scene.rotation.set(0, Math.PI / 2, 0);
    setIsLoaded(true);
  }, [scene, setIsLoaded]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (group.current) {
      targetRotation.current.x = mouse.current.y * 0.05;
      targetRotation.current.y = mouse.current.x * 0.1;

      group.current.rotation.x += (targetRotation.current.x - group.current.rotation.x) * 0.03; // ↓ from 0.05
      group.current.rotation.y += (targetRotation.current.y + Math.PI / 2 - group.current.rotation.y) * 0.03; // ↓ from 0.05
      
    }
  });

  return <primitive ref={group} object={scene} receiveShadow castShadow />;
}


