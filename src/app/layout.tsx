import Styles from "./page.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Styles.MainBody}>{children}</body>
    </html>
  );
}
