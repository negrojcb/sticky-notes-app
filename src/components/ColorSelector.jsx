import { useColorContext } from "../context/ColorContext";

export default function ColorSelector() {
  const { defaultColor, setDefaultColor } = useColorContext();

  return (
    <div className="color-selector">
      <label htmlFor="colorPicker">Color por defecto: </label>
      <input
        id="colorPicker"
        type="color"
        value={defaultColor}
        onChange={(event) => setDefaultColor(event.target.value)}
      />
    </div>
  );
}
