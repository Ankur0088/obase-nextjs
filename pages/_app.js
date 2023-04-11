import Sidebar from "@/js/components/sidebar/Sidebar";
import NoSSRWrapper from "@/js/helper/NoSSRWrapper";
import { theme } from "@/styles/Theme";
import "@/styles/globals.css";
import * as S from "@/styles/styles";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <NoSSRWrapper>
      <ThemeProvider theme={theme}>
        <S.mainContainer>
          <Sidebar />
          <Component {...pageProps} />
        </S.mainContainer>
      </ThemeProvider>
    </NoSSRWrapper>
  );
}
