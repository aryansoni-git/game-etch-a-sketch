import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <header className="text-4xl font-bold w-full text-center mt-10 lg:text-5xl">Etch-a-sketch</header>
      <MainSection />
      <footer className="h-[5vh] w-full flex justify-center items-center text-center font-medium">
        Copyright &copy; aryansoni-git
      </footer>
    </>
  );
}
