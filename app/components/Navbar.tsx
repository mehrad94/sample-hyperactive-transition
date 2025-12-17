import Link from "next/link";

/* nav{
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.25rem;
  z-index: 2;
}
nav a{
  padding: 0.5rem 0.75rem;
  border-radius: 0.2rem;
  transition: transform 200ms ease-in-out;
  background-color: antiquewhite;
  font-weight: bold;
} */

const navItems = [
  { href: "/", title: "Brave" },
  { href: "/midway", title: "Midway" },
  { href: "/accountant", title: "Accountant" },
  { href: "/avengers", title: "Avengers" },
];

const Navbar = () => {
  return (
    <nav className="py-2 px-3 flex gap-1 fixed bottom-20 left-[50%] -translate-x-1/2 z-2">
      {navItems.map((item) => (
        <Link
          className="rounded-xl transition-transform duration-200 ease-in-out bg-cyan-50 font-bold flex justify-center items-center uppercase text-sm leading-none
"
          key={item.href}
          href={item.href}
        >
          <p className="rounded-xl p-2!">{item.title}</p>
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
