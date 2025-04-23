export default function Button({ children, variant = "", className = "" }) {
  return (
    <button
      className={`${variant} ${className} py-2.5 px-6 font-medium 
      cursor-pointer border rounded-sm text-sm shadow-xl`}
    >
      {children}
    </button>
  );
}
