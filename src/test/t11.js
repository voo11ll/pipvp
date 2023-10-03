export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={(e) => e.stopPropagation()}>
        <button onClick={(e) => {
          e.stopPropagation();
          alert('Playing!');
        }}>
          Play Movie
        </button>
        <button onClick={(e) => {
          e.stopPropagation();
          alert('Uploading!');
        }}>
          Upload Image
        </button>
      </div>
    );
  }
  