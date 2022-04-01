const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 pb-8">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
