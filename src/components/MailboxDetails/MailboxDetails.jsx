import { useParams } from "react-router";

export default function MailboxDetails(props) {
    console.log(props); // check the prop that came in
    const { mailId } = useParams();
    console.log('id: ',mailId) // check if i got the correct id using useParams()

    // get the first item in the prop that has same id as the link
    const mailItem = props.mailbox.find(
        (item)=> item.id === Number(mailId)
    )

    return (
        <>
        <p>Mailbox details</p>
        <h2>Title: {mailItem.title}</h2>
        <h3>Created by: {mailItem.name}</h3>
        <h3>Mailbox size: {mailItem.size}</h3>
        </>
    )
}