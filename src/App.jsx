import { ColorProvider } from "./context/ColorContext";
import ColorSelector from "./components/ColorSelector";
import NoteBoard from "./components/NoteBoard";
import "./index.css";

export default function App() {
  return (
    <ColorProvider>
      <div className="app">
        <ColorSelector />
        <NoteBoard />
      </div>
    </ColorProvider>
  );
}
