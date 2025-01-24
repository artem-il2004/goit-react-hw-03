import { useId } from "react";
import c from './SearchBox.module.css';

function SearchBox({ value, onFilter }) {
  const searchId = useId();

  return (
    <div className={c.wrapper}>
      <label htmlFor={searchId} >Search</label>
      <input
        id={searchId}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={c.inputField}
        placeholder="Search by name or phone number..."
      />
    </div>
  );
}

export default SearchBox;
