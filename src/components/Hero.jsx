import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import '../assets/css/home.css';

function LuxuryGem() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#C4A574"
          emissive="#8A7048"
          emissiveIntensity={0.15}
          metalness={0.95}
          roughness={0.08}
          distort={0.15}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function GoldRing() {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={ringRef} position={[2.5, -0.5, -1]} scale={1}>
        <torusGeometry args={[1, 0.08, 24, 100]} />
        <meshStandardMaterial
          color="#A68B5B"
          metalness={1}
          roughness={0.12}
          emissive="#5A4A30"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#FFF8F0" />
      <pointLight position={[3, 2, 4]} intensity={0.6} color="#C4A574" />
      <pointLight position={[-4, -2, 2]} intensity={0.3} color="#E8DFD4" />
      <LuxuryGem />
      <GoldRing />
    </>
  );
}

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-canvas">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene3D />
        </Canvas>
      </div>

      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={7}>
            <p className="hero-subtitle animate-fade-in">Haute Joaillerie & Crystal Couture</p>
            <h1 className="hero-title animate-fade-in-up">
              Alishba Sana Luxury
            </h1>
            <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              Exquisite handcrafted jewellery and bespoke crystal fashion bags —
              curated for the woman who defines elegance on her own terms.
            </p>
            <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/jewellery" className="btn-luxury btn-luxury-filled">
                Explore Jewellery
              </Link>
              <Link to="/bags" className="btn-luxury">
                Crystal Bags
              </Link>
            </div>

            <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <div className="hero-stat">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="hero-stat">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
              <div className="hero-stat">
                <h3>100%</h3>
                <p>Handcrafted</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
