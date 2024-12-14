// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import Loading from './components/Loading';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoading(false);
//     };

//     if (document.readyState === 'complete') {
//       handleLoad();
//     } else {
//       window.addEventListener('load', handleLoad);
//     }

//     return () => {
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div>
//           <Header />
//           <Home />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a delay of 2 seconds (2000ms) before hiding the loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust this time to make the loading screen appear longer
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;


