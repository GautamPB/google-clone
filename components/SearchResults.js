const SearchResults = ({ results }) => {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-500 text-md mb-5 mt-3">{`About ${results.searchInformation?.totalResults} results in (${results.searchInformation?.searchTime} seconds)`}</p>

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div>
                        <a href={result.link} className="text-sml">
                            {result.formattedUrl}
                        </a>
                    </div>

                    <div>{result.snippet}</div>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
