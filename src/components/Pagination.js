const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="pagContainer">
        <div className='pagination'>
          {pageNumbers.map(number => (
            <div key={number} className='page-item'>
              <button onClick={() => paginate(number)}  className='page-link'>
                {number}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Pagination;