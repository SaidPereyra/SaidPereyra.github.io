import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canUseWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

export function AmbientScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    let cleanupScene: (() => void) | undefined;
    let mounted = true;

    if (!container || prefersReducedMotion() || !canUseWebGL()) {
      return;
    }

    const initializeScene = async () => {
      try {
        const {
          AdditiveBlending,
          BufferAttribute,
          BufferGeometry,
          Color,
          LineBasicMaterial,
          LineSegments,
          PerspectiveCamera,
          Points,
          PointsMaterial,
          Scene,
          WebGLRenderer,
        } = await import('three');

        if (!mounted) {
          return;
        }

        const scene = new Scene();
        const camera = new PerspectiveCamera(54, 1, 0.1, 100);
        camera.position.z = 12;

        const renderer = new WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setClearAlpha(0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
        container.appendChild(renderer.domElement);

        const compactScene = window.innerWidth < 640;

      const farNodeCount = 140;
      const farPositions = new Float32Array(farNodeCount * 3);

      for (let index = 0; index < farNodeCount; index += 1) {
        farPositions[index * 3] = (Math.random() - 0.5) * 22;
        farPositions[index * 3 + 1] = (Math.random() - 0.45) * 10;
        farPositions[index * 3 + 2] = -7 - Math.random() * 8;
      }

      const farPointsGeometry = new BufferGeometry();
      farPointsGeometry.setAttribute('position', new BufferAttribute(farPositions, 3));
      const farPointsMaterial = new PointsMaterial({
        color: new Color('#d0bcff'),
        size: 0.016 + Math.random() * 0.006,
        transparent: true,
        opacity: 0.16,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const farPoints = new Points(farPointsGeometry, farPointsMaterial);

      const violetNodeCount = compactScene ? 36 : 52;
      const violetPositions = new Float32Array(violetNodeCount * 3);

      for (let index = 0; index < violetNodeCount; index += 1) {
        violetPositions[index * 3] = (Math.random() - 0.22) * (compactScene ? 10 : 15);
        violetPositions[index * 3 + 1] = (Math.random() - 0.48) * (compactScene ? 8.5 : 9.5);
        violetPositions[index * 3 + 2] = -2 - Math.random() * 7;
      }

      const violetPointsGeometry = new BufferGeometry();
      violetPointsGeometry.setAttribute('position', new BufferAttribute(violetPositions, 3));
      const violetPointsMaterial = new PointsMaterial({
        color: new Color('#d0bcff'),
        size: compactScene ? 0.034 : 0.038,
        transparent: true,
        opacity: 0.38,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const violetPoints = new Points(violetPointsGeometry, violetPointsMaterial);

      const nearVioletNodeCount = compactScene ? 16 : 24;
      const nearVioletPositions = new Float32Array(nearVioletNodeCount * 3);

      for (let index = 0; index < nearVioletNodeCount; index += 1) {
        nearVioletPositions[index * 3] = (Math.random() - 0.15) * (compactScene ? 7.5 : 10);
        nearVioletPositions[index * 3 + 1] = (Math.random() - 0.48) * (compactScene ? 6.5 : 7.5);
        nearVioletPositions[index * 3 + 2] = 0.2 + Math.random() * 3.2;
      }

      const nearVioletPointsGeometry = new BufferGeometry();
      nearVioletPointsGeometry.setAttribute(
        'position',
        new BufferAttribute(nearVioletPositions, 3),
      );
      const nearVioletPointsMaterial = new PointsMaterial({
        color: new Color('#d0bcff'),
        size: compactScene ? 0.046 : 0.052,
        transparent: true,
        opacity: 0.34,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const nearVioletPoints = new Points(nearVioletPointsGeometry, nearVioletPointsMaterial);

      const nodeCount = 74;
      const positions = new Float32Array(nodeCount * 3);
      const linePositions: number[] = [];

      for (let index = 0; index < nodeCount; index += 1) {
        const radius = (compactScene ? 2.8 : 3.6) + Math.random() * (compactScene ? 3.9 : 5.2);
        const angle = Math.random() * Math.PI * 2;
        const depth = (Math.random() - 0.5) * (compactScene ? 9 : 11);
        const rightBias = compactScene ? -0.25 + Math.random() * 1.9 : 1.25 + Math.random() * 3.85;
        const upperBias =
          Math.random() > 0.4 ? (compactScene ? 0.2 : 0.65) + Math.random() * 1.25 : 0;

        positions[index * 3] = Math.cos(angle) * radius + rightBias;
        positions[index * 3 + 1] =
          Math.sin(angle) * radius * 0.58 + (Math.random() - 0.5) * 1.15 + upperBias;
        positions[index * 3 + 2] = depth;
      }

      for (let index = 0; index < nodeCount - 1; index += 1) {
        if (index % 5 === 0 || Math.random() > 0.78) {
          const nextIndex = (index + 2 + Math.floor(Math.random() * 5)) % nodeCount;
          linePositions.push(
            positions[index * 3],
            positions[index * 3 + 1],
            positions[index * 3 + 2],
            positions[nextIndex * 3],
            positions[nextIndex * 3 + 1],
            positions[nextIndex * 3 + 2],
          );
        }
      }

      const pointsGeometry = new BufferGeometry();
      pointsGeometry.setAttribute('position', new BufferAttribute(positions, 3));
      const pointsMaterial = new PointsMaterial({
        color: new Color('#00daf3'),
        size: compactScene ? 0.04 : 0.038,
        transparent: true,
        opacity: 0.46,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const points = new Points(pointsGeometry, pointsMaterial);

      const linesGeometry = new BufferGeometry();
      linesGeometry.setAttribute('position', new BufferAttribute(new Float32Array(linePositions), 3));
      const linesMaterial = new LineBasicMaterial({
        color: new Color('#5be9ad'),
        transparent: true,
        opacity: 0.095,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const lines = new LineSegments(linesGeometry, linesMaterial);

      scene.add(farPoints, violetPoints, nearVioletPoints, points, lines);

      const resize = () => {
        const { width, height } = container.getBoundingClientRect();
        const safeWidth = Math.max(width, 1);
        const safeHeight = Math.max(height, 1);

        camera.aspect = safeWidth / safeHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(safeWidth, safeHeight, false);
      };

      resize();
      window.addEventListener('resize', resize);

      let frameId = 0;
      const animate = () => {
        farPoints.rotation.y -= 0.00012;
        farPoints.rotation.x = Math.sin(Date.now() * 0.00008) * 0.01;
        violetPoints.rotation.y += 0.00018;
        nearVioletPoints.rotation.y -= 0.00022;
        nearVioletPoints.rotation.x = Math.sin(Date.now() * 0.0001) * 0.014;
        points.rotation.y += 0.00046;
        points.rotation.x = Math.sin(Date.now() * 0.00012) * 0.02;
        lines.rotation.copy(points.rotation);
        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      };
      frameId = window.requestAnimationFrame(animate);

        cleanupScene = () => {
          window.cancelAnimationFrame(frameId);
          window.removeEventListener('resize', resize);
          scene.remove(farPoints, violetPoints, nearVioletPoints, points, lines);
          farPointsGeometry.dispose();
          farPointsMaterial.dispose();
          violetPointsGeometry.dispose();
          violetPointsMaterial.dispose();
          nearVioletPointsGeometry.dispose();
          nearVioletPointsMaterial.dispose();
          pointsGeometry.dispose();
          pointsMaterial.dispose();
          linesGeometry.dispose();
          linesMaterial.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        cleanupScene = undefined;
      }
    };

    void initializeScene();

    return () => {
      mounted = false;
      cleanupScene?.();
    };
  }, []);

  return <div className="ambient-scene" ref={containerRef} aria-hidden="true" />;
}
