import Wrapper from "@/components/Wrapper/Wrapper";
import "../globals.scss";
import Fonts from "@/components/Fonts/Fonts"; // Ensure the path is correct
import Header from "@/components/Header/Header";

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
