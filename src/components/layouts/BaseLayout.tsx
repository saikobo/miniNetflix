import Head from "next/head"
import Header from "@/components/partials/Header"

interface Props {
    children?: JSX.Element
}

export default function BaseLayout({children}: Props) {
    return (
        <>
            <Head>
                <title>Netflex</title>
                <meta name="description" content="An amazing netflix clone" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                {children}
            </main>
        </>
        
    )
}