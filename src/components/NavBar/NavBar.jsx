import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul id='navBarEl'>
        <li className="navBarEl"> <Link className="navBarEl" to='/'>Home</Link> </li>
        <li className="navBarEl"> <Link className="navBarEl" to='/mailbox'>Mailbox</Link></li>
        <li className="navBarEl"> <Link className="navBarEl" to='/new-mailbox'>New Mailbox</Link></li>
        </ul>
      </nav>
    </>
  );
}
