import React, { useState,useEffect } from 'react';
import iconNext from '../../../assets/images/icons/pagination/next.png';
import iconPrevius from '../../../assets/images/icons/pagination/previus.png';

export const Pagination = ({pages=1,page=1}) => {

    const [statePagination, setstatePagination] = useState({
        totalPages:pages,
        pageNum:page
    });

    const {totalPages,pageNum} = statePagination;


  return (
    <div className="row">
    <div className="col d-flex justify-content-center last-movements__pagination">
        <nav aria-label="page navigation example " className="movements__nav">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link page-previus" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                            <img className="pagination___img--previus"
                                src={iconPrevius} alt="Previus Icon" />
                        </span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">12</a></li>
                <li className="page-item">
                    <a className="page-link page-next" href="#" aria-label="Next">
                        <span aria-hidden="true">
                            <img className="pagination___img--next" src={iconNext}
                                alt="Next Icon" />
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
  )
}
