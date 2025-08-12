const Footer = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm flex justify-center h-10 fixed bottom-0">
      <div className="wrapper flex w-full max-w-6xl">
        <div className="flex-1 w-full flex justify-center">
          <span className="mr-2 text-md"> réalisé par Jerome Bobin au</span>
          <a
            className="text-md hover:text-fuchsia-700"
            href="https://www.google.com/aclk?sa=l&ai=DChsSEwjmx8zLs_uOAxVaakECHXQFMwoYACICCAEQARoCd3M&ae=2&aspm=1&co=1&ase=2&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGAbtNav6HKKJ3wFq0NJ6WEMX-nogHM756ZxdH9iNx03PiI6-f20wwxoCliQQAvD_BwE&category=acrcp_v1_51&sig=AOD64_0PKuqqIGc5U8h-psuLNwycDMv9Kw&q&nis=4&adurl&ved=2ahUKEwjc7MDLs_uOAxUARaQEHeiDBFQQ0Qx6BAgKEAE"
          >
            Réacteur
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
