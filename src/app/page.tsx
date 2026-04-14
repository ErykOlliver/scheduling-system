import Image from "next/image";
import Auth from "../modules/auth/page";

export default function Home() {
  return (
    <section className=" bg-zinc-950 w-screen h-screen">
      <Auth />
    </section>
  );
}
