import { Link } from "react-router";

export default function Mailbox(props) {
  return (
    <>
      <h2>my mailbox</h2>
      <div id='allMail'>
        {props.mailbox.map((item) => (
        <div className="mailbox" key={item.id}>
            <li>{item.id}</li>
            <p>Title: <Link to={`/mailbox/${item.id}`}>  {item.title} </Link></p>
        </div>
      ))}
      </div>
      
    </>
  );
}
