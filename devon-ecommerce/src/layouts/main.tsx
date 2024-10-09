import { AppShell } from "@mantine/core";
import HeaderNavBar from "../components/molecules/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "../components/molecules/footer";
import { Suspense } from "react";
import { routes } from "../routes";

function MainLayout() {
  // const [opened, { toggle }] = useDisclosure();

  return (
    <BrowserRouter>
      <AppShell header={{ height: 50 }} padding="md">
        <AppShell.Header>
          <AppShell.Section>
            <HeaderNavBar />
          </AppShell.Section>
        </AppShell.Header>
        <AppShell.Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <FooterComponent />
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
}

export default MainLayout;
