export interface HeadingComponentParams {
  text: string;
}

export const Heading = (params: HeadingComponentParams) => {
  const { text } = params;
  return <h2 style={{ textAlign: "center" }}>{text}</h2>;
};
