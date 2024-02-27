import Filter from "@/components/Filter";
import Projects from "@/components/Projects";
import MainLayout from "@/layouts/mainLayout";

export default function Raids() {
  return (
    <MainLayout
    className="relative"
   >
      <main className="flex w-full min-h-screen bg-black px-[200px] max-md:px-[24px]">
        <div className="flex flex-col w-full ">
            <Filter />
            <Projects />
        </div>
      </main>
    </MainLayout>
  );
}
