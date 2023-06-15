import { LayoutProps } from "../types/layout";

export default function LayoutContainer({ children }: LayoutProps) {
  return <main className="flex-1 p-4">{children}</main>;
}
