import erorr from "../../assets/imgs/Oops.svg";

export default function Error() {
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
      <img src={erorr} alt="erorr 404" className="w-50 mt-4" />
    </section>
  );
}
