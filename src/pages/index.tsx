import Head from "next/head";
import Link from "next/link";

// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Brandon Smith
      </h1>
    </div>
  );
}
