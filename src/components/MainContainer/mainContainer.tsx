const MainContainer = () => {
  return (
    <main className="container-fluid">
      <input
        autoFocus
        type="search"
        placeholder="Search for pictures..."
      />
      <button type="submit" className="ms-2">
        Search
      </button>
      <h2 className="my-4">Search results</h2>
    </main>
  );
};

export default MainContainer;

