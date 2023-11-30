import React, { useEffect } from 'react';
import * as THREE from 'three';
import './../index.css';

const Snowfall = ({ konamiCodeActivated }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 0.015, 100);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // transparancy FINALLY !
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('snow-container').appendChild(renderer.domElement);

    // Snowflakes
    const snowflakeGeometry = new THREE.CircleGeometry(0.02, 18);

    const snowflakes = new THREE.Group();
    for (let i = 0; i < 1000; i++) {
      const randomColor = Math.random() * 0xFFFFFF;
      const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: konamiCodeActivated ? randomColor : 0xffffff });
      const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = Math.random() * 10;
      snowflake.position.set(x, y, z);
      snowflakes.add(snowflake);
    }

    scene.add(snowflakes);

    // Moon
    const moonGeometry = new THREE.CircleGeometry(1.5, 32);

    // Load the moon texture
    const moonTexture = new THREE.TextureLoader().load(konamiCodeActivated ? '/assets/train.png' : '/assets/moonTexture.png');
    moonTexture.wrapS = THREE.RepeatWrapping;
    moonTexture.wrapT = THREE.RepeatWrapping;

    const moonMaterial = new THREE.MeshBasicMaterial({
      map: moonTexture, // Set the texture map
      transparent: true, // Enable transparency
      side: THREE.DoubleSide, // Ensure the texture is visible from both sides
    });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(4, 5, -3); // Adjusted position
    scene.add(moon);

    // Add a spotlight to simulate moonlight
    const moonlight = new THREE.SpotLight(0xffffff, 0.5); // Adjust intensity as needed
    moonlight.position.copy(moon.position);
    moonlight.position.y += 5; // Adjusted position to be above the moon
    scene.add(moonlight);

    // Animation parameters
    const pulseSpeed = 0.002;
    let pulseDirection = 0.2;

    // Dark Forest with trees
    const forestGeometry = new THREE.PlaneGeometry(50, 50); // Adjusted size
    const forestMaterial = new THREE.MeshBasicMaterial({ color: konamiCodeActivated ? 0x83F52C :0x1f1830 });

    const forest = new THREE.Mesh(forestGeometry, forestMaterial);
    forest.rotation.x = -Math.PI / 2;
    forest.position.set(0, -5, 0); // Adjusted position
    scene.add(forest);

    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      // Pulse animation for the moon
      moon.scale.x += pulseDirection * pulseSpeed;
      moon.scale.y += pulseDirection * pulseSpeed;

      if (moon.scale.x > 1.1 || moon.scale.x < 1) {
        pulseDirection *= konamiCodeActivated ? 1 : -1;
        moon.rotation.z += konamiCodeActivated ? 0.03 : 0; // Adjust the rotation speed as needed
      }

      snowflakes.children.forEach((snowflake) => {
        // Ajout d'un mouvement aléatoire horizontal
        snowflake.position.x += (Math.random() - 1) * 0.004;
        snowflake.position.y -= konamiCodeActivated ? 0.02 : 0.004; // Ajustez la vitesse de la chute

        // Assurez-vous que les flocons restent dans la zone de visualisation
        if (snowflake.position.y < -5) {
          snowflake.position.y = 10; // Réinitialisez la position lorsque le flocon va en dessous de l'écran
          snowflake.position.x = (Math.random() - 0.5) * 10; // Réinitialisez la position horizontale
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.getElementById('snow-container').removeChild(renderer.domElement);
    };
  }, [konamiCodeActivated]);

  return (
    <div id="snow-container" style={{ background: konamiCodeActivated ? 'linear-gradient(#f409ff, #f4ff00)' : 'linear-gradient(#16092e, #7E87DE)' }}/>
  );
};


export default Snowfall;
