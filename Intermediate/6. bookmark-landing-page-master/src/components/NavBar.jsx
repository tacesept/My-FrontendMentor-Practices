export default function NavBar() {
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
    <nav>
      <ul>
        {navItems.map((item) => (
            <li key={item.label}>
                <a href={item.href}>{item.label}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}