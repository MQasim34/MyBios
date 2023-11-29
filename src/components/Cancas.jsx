import { useRef, useEffect } from "react";

const Cancas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 1000;
      // Reset particle positions when the canvas is resized
      effect.width = canvas.width;
      effect.height = canvas.height;
      effect.particles.forEach((particle) => {
        particle.x =
          particle.radius +
          Math.random() * (effect.width - particle.radius * 2);
        particle.y =
          particle.radius +
          Math.random() * (effect.height - particle.radius * 2);
      });
    };

    const handleResize = () => {
      resizeCanvas();
      // Clear any existing animation frame and restart the animation
      cancelAnimationFrame(animationFrameId);
      animation();
    };

    window.addEventListener("resize", handleResize);

    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1, "green");
    ctx.strokeStyle = "white";

    class Particles {
      constructor(effect) {
        this.effect = effect;
        this.radius = Math.random() * 10 + 5;
        this.x =
          this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y =
          this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
      }

      draw(context) {
        context.fillStyle = "hsl(" + this.x * 0.5 + ",100%, 50%)";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }

      update() {
        this.x += this.vx;
        if (
          this.x > this.effect.width - this.radius ||
          this.x < 0 - this.radius
        ) {
          this.vx *= -1;
        }
        this.y += this.vy;
        if (
          this.y > this.effect.height - this.radius ||
          this.y < 0 - this.radius
        ) {
          this.vy *= -1;
        }
      }
    }

    class Effect {
      constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberofParticles = 300;
        this.createParticle();
      }

      createParticle() {
        for (let i = 0; i < this.numberofParticles; i++) {
          this.particles.push(new Particles(this));
        }
      }

      handleParticle(context) {
        this.connetParticles(context);
        this.particles.forEach((particle) => {
          particle.draw(context);
          particle.update();
        });
      }

      connetParticles(context) {
        const MaxDistance = 100;
        for (let a = 0; a < this.particles.length; a++) {
          for (let b = a; b < this.particles.length; b++) {
            const dx = this.particles[a].x - this.particles[b].x;
            const dy = this.particles[a].y - this.particles[b].y;
            const distance = Math.hypot(dx, dy);

            if (distance < MaxDistance) {
              context.save();
              const opacity = 1 - distance / MaxDistance;
              context.globalAlpha = opacity;
              context.beginPath();
              context.moveTo(this.particles[a].x, this.particles[a].y);
              context.lineTo(this.particles[b].x, this.particles[b].y);
              context.stroke();
              context.restore();
            }
          }
        }
      }
    }

    const effect = new Effect(canvas);

    const animation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.handleParticle(ctx);
      requestAnimationFrame(animation);
    };

    animation();

    resizeCanvas();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas ref={canvasRef} id="canvas" className="absolute top-0 left-0 md:block hidden" />
  );
};

export default Cancas;
