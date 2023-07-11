

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="h-[50px] text-center bg-sky-800 text-white text-xl py-3">
      <p>&copy; Univelcity {year}: All rights reserved </p>
    </footer>
  )
}

