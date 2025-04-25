export default function NavBar({ variant, layout }) {
    const navItems = [
        {
            label: 'Features',
            href: '#features'
        },
        {
            label: 'Pricing',
            href: '#pricing'
        },
        {
            label: 'Contact',
            href: '#contact'
        }
    ]

  return (
    <nav className="text-sm">
      <ul className={`flex items-center gap-x-12 ${layout}`}>
        {navItems.map((item) => (
          <li className={`${variant} hover:text-[#FA5959]`} key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}