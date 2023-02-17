import '@/styles/globals.scss'

import Mainlayout from "@/layouts/mainLayout";

export default function App({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}
