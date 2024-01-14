import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagenation = () => {

    const handlePageClick=()=>{

    }
    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={100}
        previousLabel="Previous"
        // renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center mt-3 p-3'}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        breakClassName={"page-item"}
        activeClassName={"active"}
        />
    )
}

export default Pagenation
