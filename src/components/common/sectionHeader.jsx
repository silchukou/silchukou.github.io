export function SectionHeader({ children }) {
  return (
    <div className="flex justify-center mt-8 mb-8 xl:text-center p-1">
      <h2 className="xl:text-4xl text-3xl font-light">{children}</h2>
    </div>
  );
}
