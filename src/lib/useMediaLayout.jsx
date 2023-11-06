const { useState, useEffect } = require('react');

function useMediaLayout() {
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setLayout('mobile');
      } else if (
        screenWidth >= 768 &&
        screenWidth < 1024
      ) {
        setLayout('tablet');
      } else {
        setLayout('desktop');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return layout;
}

export default useMediaLayout;
