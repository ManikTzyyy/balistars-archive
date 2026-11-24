const MenuIcon = ({ menu, isCollapse, isActive = false }) => {
  return (
    <a
      className={`flex gap-3   py-2 px-2 rounded-lg
        ${isActive ? "bg-green-600 text-white hover:bg-green-700" : "text-stone-600 hover:bg-stone-50"}
        `}
      href="/">
      {menu.icon}
      <span className={`${isCollapse && ("hidden")}`}>{menu.label}</span>
    </a>
  );
};

export { MenuIcon };
