import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { appWithTranslation,SSRConfig } from "next-i18next";
import { FC } from "react";

type MyAppProps = {
  session: Session;
};

const MyApp = ({ Component, pageProps }: AppProps<MyAppProps & SSRConfig>) => {
  return (
    // Higher order component
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  );
};

const AppWithI18n = appWithTranslation(MyApp as FC);

const AppWithSession = (props: AppProps<MyAppProps & SSRConfig>) => {
  const { pageProps } = props;
  console.log(props)
  return (
    <SessionProvider session={pageProps.session}>
      <AppWithI18n {...props} />
    </SessionProvider>
  );
};
export default AppWithSession;
