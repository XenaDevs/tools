export interface UuidButtonParams {
  value: string;
  setIsClicked: Function;
}

export const UuidButton = (params: UuidButtonParams) => {
  const { setIsClicked, value } = params;
  return (
    <button
      onClick={() => {
        setIsClicked(true);
        navigator.clipboard.writeText(value);
      }}
      style={{ position: "absolute", marginLeft: 380 }}
    >
      Copy
    </button>
  );
};
