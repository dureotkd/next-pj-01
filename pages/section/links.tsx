import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Links() {
  const router = useRouter(); // link 대체

  React.useEffect(() => {
    router.prefetch("/section/getStaticProps");
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <Link href="/section/getStaticProps">/getStaticProps</Link>

      <button
        onClick={() => {
          router.push("/section/getStaticProps");
        }}
      >
        /getStaticProps button
      </button>
    </main>
  );
}

export default Links;
