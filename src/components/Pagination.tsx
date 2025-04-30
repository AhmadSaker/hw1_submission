function Pagination({
    activePage,
    totalPages,
    onPageChange,
  }: {
    activePage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) { // this function determines which page numbers to display based on the current active page and total pages
    const getVisiblePages = (): number[] => { 
      if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
      if (activePage < 3) return [1, 2, 3, 4, 5];
      if (activePage > totalPages - 3) return Array.from({ length: 5 }, (_, i) => totalPages - 4 + i);
      return [activePage - 2, activePage - 1, activePage, activePage + 1, activePage + 2];
    };
  
    const visiblePages = getVisiblePages();
  
    return (
      <div style={{ marginTop: '20px' }}>
        <button name="first" onClick={() => onPageChange(1)} disabled={activePage === 1}>
          First
        </button>
        <button name="previous" onClick={() => onPageChange(activePage - 1)} disabled={activePage === 1}>
          Prev
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            name={`page-${page}`}
            onClick={() => onPageChange(page)}
            disabled={page === activePage}
            style={{ fontWeight: page === activePage ? 'bold' : 'normal', margin: '0 4px' }}
          >
            {page}
          </button>
        ))}
        <button name="next" onClick={() => onPageChange(activePage + 1)} disabled={activePage === totalPages}>
          Next
        </button>
        <button name="last" onClick={() => onPageChange(totalPages)} disabled={activePage === totalPages}>
          Last
        </button>
      </div>
    );
  }
  
  export default Pagination;
  