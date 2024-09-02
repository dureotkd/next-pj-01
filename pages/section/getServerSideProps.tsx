import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  data: number;
}

function Example(props: Props) {
  const { data } = props;

  return <div>getServerSideProps : {data}</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });

  return {
    props: {
      data,
    },
  };
};

export default Example;
