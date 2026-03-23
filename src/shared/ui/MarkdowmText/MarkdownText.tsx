import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import classes from './MarkdownText.module.scss';

interface MarkdownRendererProps {
  content: string | undefined;
}

const MarkdownText = ({ content }: MarkdownRendererProps) => {
  return (
    // TODO: добавить копирование кода
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        ul({ children }) {
          return <ul>{children}</ul>;
        },

        ol({ children }) {
          return <ol>{children}</ol>;
        },

        li({ children }) {
          return <li className={classes.listItem}>{children}</li>;
        },

        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || '');

          if (match) {
            return (
              <SyntaxHighlighter
                language={match[1]}
                style={vscDarkPlus}
                className={classes.codeBlock}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          }

          return <code className={classes.inlineCode}>{children}</code>;
        },

        p({ children }) {
          return <p className={classes.text}>{children}</p>;
        },

        blockquote({ children }) {
          return <blockquote>{children}</blockquote>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownText;
