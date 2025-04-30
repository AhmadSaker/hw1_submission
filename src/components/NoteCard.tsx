function NoteCard({ note }: { note: any }) {
    return (
      <div className="note" id={note.id.toString()} style={{ marginBottom: '20px' }}>
        <h2>{note.title}</h2>
        <small>By {note.author.name} ({note.author.email})</small>
        <p>{note.content}</p>
      </div>
    );
  }
  
  export default NoteCard;
  