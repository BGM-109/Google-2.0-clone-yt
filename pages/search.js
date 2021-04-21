import Head from 'next/head'
import Header from '../components/Header'
import HeaderOptions from '../components/HeaderOptions'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Respone'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'
function Search({ results }) {

    const router = useRouter();
    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <HeaderOptions />
            <SearchResults results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(respone => respone.json())

    return {
        props: {
            results: data,
        }
    }
}
