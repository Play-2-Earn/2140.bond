import React, { useState, useEffect, useRef } from "react";
import {
  Bitcoin,
  Network,
  Cpu,
  Zap,
  Layers,
  Shield,
  Hexagon,
  Pyramid,
  Braces,
  Orbit,
} from "lucide-react";

const HyperInteractive2140Bond = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const nodes = [
    {
      id: 0,
      icon: <Bitcoin className="w-12 h-12 text-orange-500" />,
      title: "Crypto Singularity",
      description: "Converging monetary networks at Bitcoin's terminal point",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 1,
      icon: <Network className="w-12 h-12 text-blue-500" />,
      title: "DePIN Dynamics",
      description: "Decentralized infrastructure reshaping global economics",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "AI Convergence",
      description: "Distributed intelligence meets blockchain architecture",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      icon: <Layers className="w-12 h-12 text-purple-500" />,
      title: "Interchain Protocols",
      description: "Breaking barriers between digital ecosystems",
      color: "from-purple-500 to-pink-600",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const openB1tcoinAI = () => {
    window.open("https://www.b1tcoin.ai/", "_blank");
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59,130,246,0.2) 0%, 
              transparent 60%
            )
          `,
        }}
      >
        {/* Particle Effect */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1
            className="text-6xl md:text-8xl font-bold mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
            animate-text-shimmer"
          >
            2140.BOND
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
            Web3 leap into decentralized technological convergence
          </p>

          <button
            onClick={openB1tcoinAI}
            className="bg-gradient-to-r from-blue-600 to-purple-600 
            hover:from-blue-700 hover:to-purple-700 
            text-white font-bold py-3 px-6 rounded-xl 
            transition duration-300 transform hover:scale-110"
          >
            Explore B1tcoin.AI
          </button>
        </header>

        {/* Interactive Nodes */}
        <div
          className={`
          grid ${
            isMobile ? "grid-cols-1 gap-8" : "grid-cols-2 lg:grid-cols-4 gap-6"
          }
          relative z-20
        `}
        >
          {nodes.map((node, index) => (
            <div
              key={node.id}
              className={`
                relative group cursor-pointer
                transform transition duration-300
                ${activeNode === node.id ? "scale-105" : "hover:scale-105"}
              `}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Node Background */}
              <div
                className={`
                absolute inset-0 bg-gradient-to-br ${node.color} 
                opacity-20 group-hover:opacity-40 
                rounded-2xl transition duration-300
              `}
              />

              {/* Node Content */}
              <div
                className="relative z-10 bg-gray-900/60 backdrop-blur-lg 
                border border-gray-700 rounded-2xl p-6 
                transform transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {React.cloneElement(node.icon, {
                    className:
                      "w-12 h-12 group-hover:rotate-12 transition duration-300",
                  })}
                  <h2 className="ml-4 text-2xl font-semibold">{node.title}</h2>
                </div>
                <p className="text-gray-300">{node.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Interaction Zone */}
        {!isMobile && (
          <div className="mt-16 relative z-30">
            <div
              className="bg-gray-800/60 backdrop-blur-lg 
              border border-gray-700 rounded-2xl p-8 
              grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3
                  className="text-3xl font-bold mb-4 
                  bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-400 to-purple-600"
                >
                  Technological Horizon
                </h3>
                <p className="text-gray-300">
                  Bridging the final frontier of decentralized networks,
                  artificial intelligence, and cryptographic sovereignty.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 
                    opacity-20 rounded-full animate-pulse"
                  />
                  <div
                    className="absolute inset-4 bg-gray-900 rounded-full 
                    flex items-center justify-center"
                  >
                    <Orbit className="w-24 h-24 text-blue-400 animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-40 bg-black/30 py-6 text-center">
        <p className="text-gray-400">
          © 2140 Bond - Web3 Decentralized Frontier
        </p>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes text-shimmer {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-text-shimmer {
          background-size: 200% 100%;
          animation: text-shimmer 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HyperInteractive2140Bond;
