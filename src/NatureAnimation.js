export default function NatureAnimation({ opacity = 0.3, width = '100vw', height = '200px', zIndex = 0 }) {
  const containerStyle = {
    width: width,
    height: height,
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #ffffff09 0%, #ffffff67 50%, #ffffffff 100%)',
    opacity: opacity,
    zIndex: zIndex,
    bottom: 0,
    position: 'absolute',
  };

  return (
    <>
      <style jsx>{`
        .trees {
          position: absolute;
          bottom: 30px;
          width: 100%;
          height: 60px;
        }
        
        .tree {
          position: absolute;
          bottom: 0;
        }
        
        .tree-trunk {
          width: 6px;
          height: 20px;
          background: #555;
          margin: 0 auto;
        }
        
        .tree-crown {
          width: 30px;
          height: 40px;
          background: #777;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          margin: -5px auto 0;
          animation: sway 4s ease-in-out infinite;
        }
        
        .tree1 {
          left: 15%;
          animation-delay: 0s;
        }
        
        .tree2 {
          left: 35%;
          animation-delay: -1s;
        }
        
        .tree3 {
          left: 55%;
          animation-delay: -2s;
        }
        
        .tree4 {
          left: 75%;
          animation-delay: -3s;
        }
        
        .tree5 {
          left: 85%;
          animation-delay: -1.5s;
        }
        
        .grass {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(to top, #666 0%, #888 100%);
        }
        
        .grass-blade {
          position: absolute;
          bottom: 0;
          width: 2px;
          background: #999;
          animation: grassWave 3s ease-in-out infinite;
        }
        
        .clouds {
          position: absolute;
          top: 20px;
          width: 100%;
          height: 60px;
        }
        
        .cloud {
          position: absolute;
          background: #bbb;
          border-radius: 50px;
          opacity: 0.6;
          animation: float 20s linear infinite;
        }
        
        .cloud1 {
          width: 80px;
          height: 30px;
          top: 10px;
          left: -80px;
          animation-duration: 25s;
        }
        
        .cloud2 {
          width: 60px;
          height: 25px;
          top: 30px;
          left: -60px;
          animation-duration: 30s;
          animation-delay: -10s;
        }
        
        .cloud3 {
          width: 70px;
          height: 20px;
          top: 5px;
          left: -70px;
          animation-duration: 35s;
          animation-delay: -20s;
        }
        
        .birds {
          position: absolute;
          top: 40px;
          width: 100%;
          height: 40px;
        }
        
        .bird {
          position: absolute;
          width: 8px;
          height: 3px;
          background: #666;
          border-radius: 50%;
          animation: fly 15s linear infinite;
        }
        
        .bird1 {
          top: 15px;
          left: -20px;
          animation-delay: 0s;
        }
        
        .bird2 {
          top: 20px;
          left: -20px;
          animation-delay: -2s;
        }
        
        .bird3 {
          top: 10px;
          left: -20px;
          animation-delay: -5s;
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        
        @keyframes grassWave {
          0%, 100% { transform: scaleY(1) rotate(0deg); }
          33% { transform: scaleY(1.1) rotate(2deg); }
          66% { transform: scaleY(0.9) rotate(-1deg); }
        }
        
        @keyframes float {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes fly {
          0% { 
            transform: translateX(0) translateY(0);
            clip-path: polygon(0 50%, 30% 0%, 100% 50%, 30% 100%);
          }
          25% { 
            transform: translateX(25vw) translateY(-5px);
            clip-path: polygon(0 50%, 50% 20%, 100% 50%, 50% 80%);
          }
          50% { 
            transform: translateX(50vw) translateY(0);
            clip-path: polygon(0 50%, 30% 0%, 100% 50%, 30% 100%);
          }
          75% { 
            transform: translateX(75vw) translateY(5px);
            clip-path: polygon(0 50%, 50% 20%, 100% 50%, 50% 80%);
          }
          100% { 
            transform: translateX(100vw) translateY(0);
            clip-path: polygon(0 50%, 30% 0%, 100% 50%, 30% 100%);
          }
        }
        
        .grass-blade:nth-child(1) { left: 5%; height: 25px; animation-delay: 0s; }
        .grass-blade:nth-child(2) { left: 12%; height: 20px; animation-delay: -0.5s; }
        .grass-blade:nth-child(3) { left: 18%; height: 28px; animation-delay: -1s; }
        .grass-blade:nth-child(4) { left: 28%; height: 22px; animation-delay: -1.5s; }
        .grass-blade:nth-child(5) { left: 38%; height: 26px; animation-delay: -2s; }
        .grass-blade:nth-child(6) { left: 45%; height: 24px; animation-delay: -0.3s; }
        .grass-blade:nth-child(7) { left: 52%; height: 21px; animation-delay: -0.8s; }
        .grass-blade:nth-child(8) { left: 62%; height: 27px; animation-delay: -1.3s; }
        .grass-blade:nth-child(9) { left: 72%; height: 23px; animation-delay: -1.8s; }
        .grass-blade:nth-child(10) { left: 82%; height: 25px; animation-delay: -2.3s; }
        .grass-blade:nth-child(11) { left: 88%; height: 20px; animation-delay: -0.7s; }
        .grass-blade:nth-child(12) { left: 95%; height: 24px; animation-delay: -1.2s; }
      `}</style>
      
      <div style={containerStyle}>
        <div className="clouds">
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </div>
        
        <div className="birds">
          <div className="bird bird1"></div>
          <div className="bird bird2"></div>
          <div className="bird bird3"></div>
        </div>
        
        <div className="mountains">
          <div className="mountain mountain1"></div>
          <div className="mountain mountain2"></div>
          <div className="mountain mountain3"></div>
          <div className="mountain mountain4"></div>
        </div>
        
        <div className="trees">
          <div className="tree tree1">
            <div className="tree-crown"></div>
            <div className="tree-trunk"></div>
          </div>
          <div className="tree tree2">
            <div className="tree-crown"></div>
            <div className="tree-trunk"></div>
          </div>
          <div className="tree tree3">
            <div className="tree-crown"></div>
            <div className="tree-trunk"></div>
          </div>
          <div className="tree tree4">
            <div className="tree-crown"></div>
            <div className="tree-trunk"></div>
          </div>
          <div className="tree tree5">
            <div className="tree-crown"></div>
            <div className="tree-trunk"></div>
          </div>
        </div>
        
        <div className="grass">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="grass-blade"></div>
          ))}
        </div>
      </div>
    </>
  );
}