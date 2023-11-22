export default function FormContainer({ children, className }) {
  return (
    <section
      className={`bg-darkSecondary p-6 rounded-lg shadow-lg  ${className}`}
    >
      {children}
    </section>
  );
}
