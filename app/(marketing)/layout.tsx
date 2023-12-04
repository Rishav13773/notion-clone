import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
      {/* //here we wrapped all children so that out navbar will be on top of out children */}
    </div>
  );
};

export default MarketingLayout;
