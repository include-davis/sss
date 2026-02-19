import Navbar from "../Navbar/Nav.jsx";
export default function Page() {
    return (
      <main>
        <Navbar
        logoSrc="/favicon.png"
        logoAlt="Space and Satellite Systems"
        pages={[
          { label: "Home", href: "/" },
          { label: "Missions", href: "/missions" },
          { label: "Teams", href: "/teams" },
          { label: "Sponsor Us", href: "/sponsor" },
          { label: "Join Us", href: "/join" },
        ]}
        />
      </main>
    );
  }