const Pagination = ({ numPages, setPageIndex, pageIndex }) => {
  return (
    <div className='my-7 flex mx-6'>
      <div>
        {pageIndex >= 1 && (
          <button
            onClick={() => setPageIndex((prev) => prev - 1)}
            className='border px-2 py-1 bg-blue-600 text-white'
          >
            Previous
          </button>
        )}
      </div>
      {Array.from(Array(numPages).keys()).map((item) => {
        return (
          <span
            key={item}
            className='mx-2 cursor-pointer shadow-sm px-2 py-1  bg-stone-100'
            onClick={() => setPageIndex(() => item)}
          >
            {item + 1}
          </span>
        );
      })}
      <div>
        {/* subtracted numPages from 2 */}
        {/* because we have to subtract 1 for getting the length while we using zero based indexes */}
        {/* and 1 another to see if this is the last page or not */}
        {pageIndex <= numPages - 2 && (
          <button
            onClick={() => setPageIndex((prev) => prev + 1)}
            className='border px-2 py-1 bg-blue-600 text-white'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
