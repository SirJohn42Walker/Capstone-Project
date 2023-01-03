import {useEffect, useRef} from "react";

export function BubbleEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bubbles = [];

    window.addEventListener("click", event => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      createBubble(x, y);
    });

    function createBubble(x, y) {
      const bubble = {
        x,
        y,
        size: Math.random() * 22 + 10,
        speed: Math.random() * 0.9 + 0.8,
        sway: 0,
        swaySpeed: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.3 + 0.1),
      };
      bubbles.push(bubble);
    }

    function drawBubble(bubble) {
      ctx.beginPath();
      ctx.arc(bubble.x + bubble.sway, bubble.y, bubble.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(173, 217, 244, 0.7";
      ctx.globalAlpha = 0.5;
      ctx.fill();
      ctx.zIndex = "-1";
    }

    function updateBubble(bubble) {
      bubble.y -= bubble.speed;
      bubble.sway += bubble.swaySpeed;
      if (bubble.y + bubble.size < 0) {
        const index = bubbles.indexOf(bubble);
        bubbles.splice(index, 1);
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const bubble of bubbles) {
        drawBubble(bubble);
        updateBubble(bubble);
      }

      requestAnimationFrame(animate);
    }
    function updateCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    updateCanvasSize();

    window.addEventListener("resize", updateCanvasSize);

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div style={{position: "relative"}}>
      <canvas
        ref={canvasRef}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          background: "transparent",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
