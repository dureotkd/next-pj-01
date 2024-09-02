import dynamic from "next/dynamic";
import React from "react";

const NoSSR = dynamic(() => import("./noSSR"), { ssr: false });

function getCSR() {
  const [data, setData] = React.useState<number>(0);

  React.useEffect(() => {
    (async () => {
      const random: number = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(Math.random());
        }, 2000);
      });

      setData(random);
    })();
  }, []);

  return (
    <div>
      getCSR : {data} <NoSSR />
    </div>
  );
}

export default getCSR;
