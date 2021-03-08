const SuppliesMap = (props) => {
  return (
    <div className="supplies-map">
      <iframe
        title="hello"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72405.26033827537!2d-80.35016161677854!3d25.81162678290439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b907393b7129%3A0x663b467897705688!2sCostco!5e0!3m2!1ses-419!2smx!4v1615243828946!5m2!1ses-419!2smx"
        className="supplies-map-view"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SuppliesMap;
