import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 px-3 flex gap-6">
      <Link href="/">Brave</Link>
      <Link href="/midway">Midway</Link>
      <Link href="/accountant">Accountant</Link>
      <Link href="/avengers">Avengers</Link>
    </nav>
  );
};
export default Navbar;
