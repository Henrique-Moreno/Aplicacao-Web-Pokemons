import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#535bf2",
        padding: "1rem",
        textAlign: "center",
        color: "#fff",
        marginTop: "70px",
      }}
    >
      © {currentYear} Todos os direitos reservados.
    </footer>
  );
}
