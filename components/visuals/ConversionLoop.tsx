type Step = { name: string; text: string };

/** The signature "Launch → Measure → Test → Improve" loop. */
export default function ConversionLoop({ steps }: { steps: Step[] }) {
  return (
    <div className="loopWrap stage">
      <div className="loopRing" aria-hidden="true" />
      <div className="loopRing loopRing--inner" aria-hidden="true" />
      <ol className="loopSteps">
        {steps.map((s, i) => (
          <li
            className={["loopStep", i === steps.length - 1 ? "loopStep--last" : ""].join(" ").trim()}
            key={s.name}
          >
            <span className="loopStep__num" aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <div className="loopStep__name">{s.name}</div>
              <div className="loopStep__text">{s.text}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
