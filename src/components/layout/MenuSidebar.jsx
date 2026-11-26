import { MenuIcon } from "../ui/MenuIcon";

const MenuSidebar = ({ menuGroup, submenu, isCollapse }) => {
 
  return (
    <div className="pb-8 border-t border-stone-200 pt-1 dark:border-stone-700">
      <div className={`py-2 ${isCollapse && "hidden"} text-stone-400`}>{menuGroup}</div>
      <div className="space-y-1">
        {submenu.map((e) => {
          return <MenuIcon key={e.label} menu={e} isCollapse={isCollapse}/>;
        })}
      </div>
    </div>
  );
};

export { MenuSidebar };
