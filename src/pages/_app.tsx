import React from "react";
import { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme, DarkTheme } from "baseui";
import { styletron, debug } from "styletron";
import Layout from "../components/Layout/Layout";
import { ThemeSwitcherProvider, THEME } from "../contexts/theme/theme.provider";
// external css
import "@glidejs/glide/dist/css/glide.core.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "public/css/reset.css";
import "react-flexbox-grid/dist/react-flexbox-grid.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "typeface-open-sans";

export default function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(THEME.light);
  React.useEffect(() => {
    let SAVED_THEME = localStorage.getItem("theme");
    if (SAVED_THEME === null) {
      SAVED_THEME = THEME.light;
    }
    setTheme(SAVED_THEME);
  }, []);

  return (
    <ThemeSwitcherProvider value={{ theme, setTheme }}>
      <StyletronProvider value={styletron} debugAfterHydration>
        <BaseProvider
          theme={
            theme === THEME.light
              ? { ...LightTheme, direction: "ltr" }
              : { ...DarkTheme, direction: "ltr" }
          }
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BaseProvider>
      </StyletronProvider>
    </ThemeSwitcherProvider>
  );
}
