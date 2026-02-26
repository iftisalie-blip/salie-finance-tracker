export const metadata = {
  title: "Salie Finance Tracker",
  description: "Household finance app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
