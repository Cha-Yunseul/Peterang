function Footer() {
  return (
    <footer className="fixed bottom-0 z-10 w-full shadow-xl bg-base-300 h-12">
      <div className="text-center justify-center ">
        &copy; {new Date().getFullYear()} Peterang
      </div>
    </footer>
  );
}

export default Footer;
