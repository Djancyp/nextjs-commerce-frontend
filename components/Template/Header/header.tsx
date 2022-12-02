interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  return (
    <>
      <header className={className}>{children} </header>
    </>
  );
};
export default Header;
