import "./Paginator.scss"
import React from "react"
import { Button } from "@mui/material";

const Pagination = ({page, totalPages, onLeftClick, onRightClick}) => {
    return (
        <div className="pagination-container">
            <Button variant="text" onClick={onLeftClick}>Back</Button>
            <div>{page} of {totalPages}</div>
            <Button variant="text" onClick={onRightClick}>Next</Button>
        </div>
    )
}

export default Pagination;