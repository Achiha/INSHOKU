import {  Outlet } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="header">
        <Navbar />
      </header>

      <main>
        {/* Outlet コンポーネントは、親のルートで定義されたパスにマッチした場合に、
        そのパスに対応するコンポーネントを描画します。 */}
        <Outlet />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
