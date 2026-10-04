import { cn } from "@/lib/utils";
import type { BlogBlock } from "@/lib/data";

function TableBlock({
  caption,
  headers,
  rows,
  compact,
}: {
  caption?: string;
  headers: string[];
  rows: string[][];
  compact?: boolean;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_8px_28px_rgba(15,17,21,0.04)]",
        compact ? "mt-1" : "my-1",
      )}
    >
      {caption ? (
        <figcaption className="border-b border-[var(--line)] bg-[#F3F5F7] px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[20rem] border-collapse text-left text-[0.92rem] sm:min-w-0">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[#FAFBFC]">
              {headers.map((header, hi) => (
                <th
                  key={`h-${hi}-${header || "col"}`}
                  className="px-4 py-2.5 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]"
                >
                  {header || "\u00a0"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                className="border-b border-[var(--line)] last:border-b-0 even:bg-[#FAFBFC]/70"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className={cn(
                      "px-4 py-2.5 align-top leading-relaxed text-[var(--ink-soft)]",
                      cellIndex === 0 && "font-medium text-[var(--ink)]",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function renderInner(blocks: BlogBlock[], keyPrefix: string) {
  return blocks.map((block, i) => {
    const key = `${keyPrefix}-${i}`;
    if (block.type === "h2") {
      return (
        <h2
          key={key}
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    }
    if (block.type === "list") {
      return (
        <ul
          key={key}
          className="space-y-2.5 text-[0.98rem] leading-7 text-[var(--ink-soft)]"
        >
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    if (block.type === "callout") {
      return (
        <p
          key={key}
          className="border-l-2 border-[var(--accent)] pl-4 text-[1.02rem] font-medium leading-relaxed text-[var(--ink)]"
        >
          {block.text}
        </p>
      );
    }
    if (block.type === "table") {
      return (
        <TableBlock
          key={key}
          caption={block.caption}
          headers={block.headers}
          rows={block.rows}
          compact
        />
      );
    }
    if (block.type === "p") {
      return (
        <p
          key={key}
          className="text-[1.02rem] leading-[1.8] text-[var(--ink-soft)] sm:text-[1.05rem] sm:leading-[1.85]"
        >
          {block.text}
        </p>
      );
    }
    return null;
  });
}

export function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
      {blocks.map((block, i) => {
        if (block.type === "split") {
          return (
            <div
              key={`split-${i}`}
              className="grid items-start gap-8 border-t border-[var(--line)] pt-10 lg:grid-cols-2 lg:gap-0 lg:pt-12"
            >
              <div className="min-w-0 space-y-5 lg:pr-10">
                {renderInner(block.left, `l-${i}`)}
              </div>
              <div className="min-w-0 space-y-5 border-[var(--line)] lg:border-l lg:pl-10">
                {renderInner(block.right, `r-${i}`)}
              </div>
            </div>
          );
        }

        if (block.type === "features") {
          return (
            <section
              key={`feat-${i}`}
              className="border-t border-[var(--line)] pt-10 sm:pt-12"
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-[2rem]">
                {block.title}
              </h2>
              {block.lead ? (
                <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-[var(--muted)]">
                  {block.lead}
                </p>
              ) : null}
              <div className="mt-8 grid gap-0 border-t border-[var(--line)] lg:grid-cols-3">
                {block.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className={cn(
                      "border-[var(--line)] py-6 sm:py-8",
                      idx > 0 && "border-t lg:border-t-0 lg:border-l",
                      "lg:px-6",
                      idx === 0 && "lg:pl-0",
                      idx === block.items.length - 1 && "lg:pr-0",
                    )}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--ink)] sm:text-lg">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-6 text-[var(--ink-soft)]">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        if (block.type === "h2") {
          return (
            <h2
              key={`h2-${i}`}
              className="border-t border-[var(--line)] pt-10 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] sm:pt-12 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "table") {
          return (
            <TableBlock
              key={`table-${i}`}
              caption={block.caption}
              headers={block.headers}
              rows={block.rows}
            />
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`list-${i}`}
              className="space-y-2.5 text-[1.02rem] leading-7 text-[var(--ink-soft)]"
            >
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "callout") {
          return (
            <p
              key={`callout-${i}`}
              className="border-l-2 border-[var(--accent)] pl-4 text-[1.05rem] font-medium leading-relaxed text-[var(--ink)]"
            >
              {block.text}
            </p>
          );
        }

        return (
          <p
            key={`p-${i}`}
            className="max-w-3xl text-[1.05rem] leading-[1.8] text-[var(--ink-soft)] sm:text-[1.1rem] sm:leading-[1.85]"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
