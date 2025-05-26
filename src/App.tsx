import "./App.css";
import { SidebarProvider } from "./components/shadcn-ui/sidebar";
import Container from "./components/Container/Container";
import { useLayoutEffect, useState } from "react";

type THEME = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<THEME>("light");

  const themeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  const handleThemeChange = (evt: any) => {
    if (evt.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useLayoutEffect(() => {
    handleThemeChange(themeMatcher);
    themeMatcher.addEventListener("change", handleThemeChange);
  }, []);

  return (
    <div className={`${theme} text-black`}>
      <SidebarProvider>
        <Container />
      </SidebarProvider>
    </div>
  );
}

export default App;
