import { NextPage } from "next";
import React from "react";

interface Props {
  data: number;
}

const Example = (props: Props) => {
  const { data } = props;

  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>data : {data}</p>
    </main>
  );
};

export async function getStaticProps() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });

  return {
    props: {
      data,
    },
    revalidate: 5, // 정적인 파일의 캐싱이 끝나는 시간
  };
}

export default Example;
