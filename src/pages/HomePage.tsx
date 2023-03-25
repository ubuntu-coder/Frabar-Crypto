import { CurrencyTable } from "../components/section/home/CurrencyTable";
import { LargeHeading } from "../components/UI/LargeHeading";

function HomePage() {
  return (
    <div className="container max-w-7xl mx-auto w-full md:p-10">
      <LargeHeading className="my-10 flex items-center justify-center">
        Welcome back
      </LargeHeading>
      <CurrencyTable />
    </div>
  );
}

export default HomePage;
