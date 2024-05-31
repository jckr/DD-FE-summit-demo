export const Action = (props: { action: () => void; label: string }) => (
  <button className="action" onClick={props.action}>
    {props.label}
  </button>
);
