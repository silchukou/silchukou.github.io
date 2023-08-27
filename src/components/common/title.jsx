export function Title(props) {
  const { children, className } = props;
  return (
    <div
      className={
        className + " flex justify-center mt-8 mb-8 xl:text-center p-1"
      }
    >
      <h1 className="xl:text-5xl text-4xl font-light">{children}</h1>
    </div>
  );
}
