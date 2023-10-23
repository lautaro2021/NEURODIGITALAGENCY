import React, { useEffect, useState } from "react";

function ExternalProyect({ children, url, id }: any) {
  const [windowLoaded, setWindowLoaded] = useState(false);

  useEffect(() => {
    setWindowLoaded(true);
  }, []);
  return (
    <>
      {windowLoaded ? (
        <a href={url} id={id} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : <div id ={id}>{children}</div>}
      <style jsx>{`
        #proyects-content {
          min-width: 100vw;
          max-width: 100vw;
          width: 100%;
          min-height: 100vh;
          max-height: 100vh;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default ExternalProyect;
