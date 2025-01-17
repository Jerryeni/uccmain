// "use client";

// import { useEffect, useRef } from "react";
// import styles from "./UsdtAnimation.module.css";

// export default function UsdtAnimation() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const usdtSrc = "/images/tether.svg";
//   const coinSrc = "/ucc-logo.svg";

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = 600;

//     const usdtImage = new Image();
//     const coinImage = new Image();

//     usdtImage.src = usdtSrc;
//     coinImage.src = coinSrc;

//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;

//     let angle = 0;
//     const radius = 200;
//     const usdtSizes = [20, 30, 25, 35, 28];
//     const depths = usdtSizes.map(() => Math.random() * 0.5 + 0.5);

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw the central coin
//       ctx.save();
//       ctx.translate(centerX, centerY);
//       draw3DImage(ctx, coinImage, -75, -75, 150, 150, 0);
//       ctx.restore();

//       // Draw revolving USDT tokens
//       for (let i = 0; i < usdtSizes.length; i++) {
//         const size = usdtSizes[i];
//         const depth = depths[i];
//         const phase = (angle + i * Math.PI / 3) % (Math.PI * 2);
//         const orbitRadius = radius * depth;

//         const x = centerX + orbitRadius * Math.cos(phase);
//         const y = centerY + orbitRadius * Math.sin(phase) * 0.5;

//         const adjustedSize = size * depth;

//         ctx.save();
//         ctx.translate(x, y);
//         draw3DImage(ctx, usdtImage, -adjustedSize / 2, -adjustedSize / 2, adjustedSize, adjustedSize, depth);
//         ctx.restore();
//       }

//       angle += 0.02;
//       requestAnimationFrame(draw);
//     }

//     // Ensure images are loaded before starting the animation
//     usdtImage.onload = () => {
//       coinImage.onload = () => {
//         draw();
//       };
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = 600;
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [usdtSrc, coinSrc]);

//   return (
//     <div className="relative">
//       <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[600px] z-0" />
//       <div className={`${styles.blinkingText} absolute top-0 left-0 w-full h-[600px] z-10`}>
//         {Array.from({ length: 20 }).map((_, i) => (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 2}s`,
//             }}
//             className={styles.blinkingAmount}
//           >
//             +$5
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Helper function to draw a 3D image with shading
// function draw3DImage(
//   ctx: CanvasRenderingContext2D,
//   image: HTMLImageElement,
//   x: number,
//   y: number,
//   width: number,
//   height: number,
//   depth: number
// ) {
//   const gradient = ctx.createRadialGradient(x + width / 2, y + height / 2, width / 4, x + width / 2, y + height / 2, width);
//   gradient.addColorStop(0, `rgba(255, 255, 255, ${1 - depth})`);
//   gradient.addColorStop(1, `rgba(0, 0, 0, ${0.5 * depth})`);

//   ctx.drawImage(image, x, y, width, height);
//   ctx.globalCompositeOperation = "multiply";
//   ctx.fillStyle = gradient;
//   ctx.fillRect(x, y, width, height);
//   ctx.globalCompositeOperation = "source-over";
// }
