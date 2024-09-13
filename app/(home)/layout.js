import Wrapper from "@/Components/Wrapper/Wrapper";
import "./globals.scss";
import Fonts from "@/Components/Fonts/Fonts"; // Ensure the path is correct
import Header from "@/Components/Header/Header";

export const metadata = {
  title: "Parcel Pro Connect",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Fonts />
        <Header />
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
