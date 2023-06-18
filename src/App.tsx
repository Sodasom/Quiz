import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LayoutContainer from "./components/LayoutContainer";
import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-center before:w-full before:h-[320px] before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-teal-400 to-blue-900">
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </div>
    </Suspense>
  );
}

export default App;
