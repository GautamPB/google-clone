import Head from 'next/head'
import Header from '../components/Header'

const Search = () => {
    return (
        <div>
            <Head>
                <title>Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />
            {/* Search Results */}
        </div>
    )
}

export default Search
