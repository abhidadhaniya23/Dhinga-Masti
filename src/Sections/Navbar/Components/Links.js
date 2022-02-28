const Links = ({ href, link }) => {
  return (
    <>
      <a className="mx-2" href={href}>
        {link}
      </a>
    </>
  );
};

export default Links;
