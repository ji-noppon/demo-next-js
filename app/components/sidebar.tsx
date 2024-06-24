import Link from "next/link";
/* "Electronics",
"Jewelery",
"Men's clothing",
"Women's clothing", */

export default function Sidebar() {
  const sideBarMenu2 = [
    {
      name: "Home",
      isActive: false,
      path: "/",
    },
    {
      name: "Products",
      isActive: false,
      path: "/products",
    },
  ];

  return (
    <div className="sidebar">
      {sideBarMenu2.map((menu, index) => (
        <div key={index}>
          <Link className="sidebar__menu w-full block" href={menu.path}>{menu.name}</Link>
        </div>
      ))}
    </div>
  );
}
