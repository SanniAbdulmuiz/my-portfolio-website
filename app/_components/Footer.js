function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-900 px-8 py-6 text-center text-blue-50">
      <p>&copy; {currentYear} Sanni Abdulmuiz A. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
