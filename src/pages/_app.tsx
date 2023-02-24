import '@/styles/globals.scss'
import BaseLayout from '@/components/layouts/BaseLayout'
import { Provider } from "react-redux";
import { wrapper } from "@/store";
import type { AppProps } from 'next/app'

function App({ Component, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...rest.pageProps} />
      </BaseLayout>
    </Provider >
  )
}

export default App