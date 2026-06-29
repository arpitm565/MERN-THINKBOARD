import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailsPage";

const App = () => {
  return (
    <div data-theme="luxury" className="min-h-screen relative">
      {/* Subtle bottom gold glow */}
      <div className="fixed bottom-0 left-0 right-0 h-40 z-0 pointer-events-none">
        <div
          className="absolute inset-0 blur-[100px]"
          style={{
            backgroundColor: "#B8860B",
            opacity: 0.4,
          }}
        />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;