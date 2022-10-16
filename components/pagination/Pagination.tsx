//@ts-ignore
import React from "react";
import Pagination from '@mui/material/Pagination';
import { activePageAtom, pagesAtom } from "../../atoms";
import { useAtom } from "jotai";

export const PaginationFooter = () => {
  const [_sss, setActivePage] = useAtom(activePageAtom);
  const [pages,_setNumberOfPages] = useAtom(pagesAtom);
  
  return (
    <Pagination  count={pages} color="primary" onChange={(_event: React.ChangeEvent<unknown>, page: number) => {
      setActivePage(page - 1)
    }} />

  );
};