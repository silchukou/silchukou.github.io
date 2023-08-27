import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function TextContainer({ children }) {
  if (typeof children === "string") {
    return (
      <ReactMarkdown
        className="max-w-screen-md m-auto text-lg"
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    );
  }

  return <div className="max-w-screen-md m-auto text-lg">{children}</div>;
}
