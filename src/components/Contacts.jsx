import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-3xl">Contacts</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phone}</p>
        <a href="mailto:bogdan_ilchenko@ukr.net">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contacts;
