import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from './components/NoteCard';
import Pagination from './components/Pagination';



const NOTES_URL = 'http://localhost:3001/notes';
const POSTS_PER_PAGE = 10;

function App() {
  const [notes, setNotes] = useState<any[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(NOTES_URL, {
      params: {
        _page: activePage,
        _limit: POSTS_PER_PAGE,
      },
      validateStatus: () => true,
    })
    .then((response) => {
      setNotes(response.data);
      const totalCount = Number(response.headers['x-total-count']);
      setTotalPages(Math.ceil(totalCount / POSTS_PER_PAGE));
    })
    .catch((error) => console.error('Error fetching notes:', error));
  }, [activePage]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Notes</h1>
      {notes.map(note => <NoteCard key={note.id} note={note} />)}
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={setActivePage}
      />
    </div>
  );
}

export default App;
