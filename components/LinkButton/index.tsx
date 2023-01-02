import Link from "next/link";

type Props = {
  target?: string;
  href: string;
  children: React.ReactNode;
};

export const LinkButton = ({ href, target, children }: Props) => {
  return (
    <Link
      className="bg-CTA text-Black text-lg p-2 rounded-md w-fit mx-auto"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};
