export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full min-h-screen pt-[70px] flex items-center px-7">{children}</div>;
}
