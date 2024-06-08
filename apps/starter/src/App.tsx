import { DependencyInjectionContainer } from "@codescouts/di";
import { useEvents } from "@codescouts/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { buildDependencies } from "@/di";
import { OrderCreatedCorrectlyHandler } from "@/infrastructure/events/OrderCreatedCorrectlyHandler";
import { Header } from "@/ui/Header";
import { Auth } from "@/ui/pages/Auth";
import { Front } from "@/ui/pages/Front";
import { User } from "@/ui/pages/User";

export const App = () => {
  useEvents(OrderCreatedCorrectlyHandler);

  return (
    <DependencyInjectionContainer builder={buildDependencies}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DependencyInjectionContainer>
  );
};
