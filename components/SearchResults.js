import PaginationButtons from '../components/PaginationButtons'

const SearchResults = ({ results }) => {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-500 text-md mb-5 mt-3">{`About ${results.searchInformation?.totalResults} results in (${results.searchInformation?.searchTime} seconds)`}</p>

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="line-clamp-1 text-sml">
                            {result.formattedUrl}
                        </a>

                        <a href={result.link}>
                            <h2 className="truncate text-blue-800 group-hover:underline font-medium text-xl">
                                {result.title}
                            </h2>
                        </a>
                    </div>

                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}

            <PaginationButtons />
        </div>
    )
}

export default SearchResults
