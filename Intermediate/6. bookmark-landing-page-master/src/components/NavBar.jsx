export default function NavBar({ className }) {
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
    <nav className={className}>
      <ul className="flex items-center gap-x-12">
        {navItems.map((item) => (
            <li key={item.label}>
                <a href={item.href}>{item.label}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}