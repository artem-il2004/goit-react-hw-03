import c from "./Contact.module.css";

function Contact({ data, onDelete }) {
  const { name, number } = data; 

  return (
    <div className={c.wrapper}>
      <div className={c.infoWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={c.deleteBTN} onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}

export default Contact;

