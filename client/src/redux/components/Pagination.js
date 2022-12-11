import React from "react";

export default function Pagination({characterXpage, total, paginate}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / characterXpage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='pagination'>
            {
                pageNumbers && pageNumbers.map(n => (
                    <button className='button' key={n} onClick={() => paginate(n)}>
                        {n}
                    </button>
                ))
            }
    </div>
    )
}
