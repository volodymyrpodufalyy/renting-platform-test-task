import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Button, Card, Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import CountDown from "../components/functions/CountDown";

function Loading() {
  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <AnimationTitles title="Future of real estate investing" />
          <p className="text-white mt-3 fs-5">
            Our real estate is virtual property you can purchase on a metaverse
            platform
          </p>
          <Button className="m-0 my-3 px-5 py-2 fs-5 fw-bold">Explore</Button>
          <div
            className="d-none d-md-flex justify-content-between align-items-center my-4 text-white"
          >
            <div>
              <h5 className="fw-bold fs-1">12K+</h5>
              <span>properties</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">10K+</h5>
              <span>auction</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">12K+</h5>
              <span>developers</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-100 my-5"
        >
          <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/properties/house_big-1.webp")}
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Residence Rybna</h5>
                <p className="gray-90">@UA real estate agency</p>
                <div className="d-flex">
                  <div className="me-3">
                    <CountDown h={18} m={21} s={8} />
                    <span className="gray-90">Remaining Time</span>
                  </div>
                  <div>
                    <h6 className="text-white">29.71 ETH</h6>
                    <span className="gray-90">Current Bid</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/properties/house_big.webp")}
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Blue Sky</h5>
                <p className="gray-90">@ERA Ukraine Real Estate</p>
                <div className="d-flex">
                  <div className="me-3">
                    <CountDown h={23} m={16} s={11} />
                    <span className="gray-90">Remaining Time</span>
                  </div>
                  <div>
                    <h6 className="text-white">17.31 ETH</h6>
                    <span className="gray-90">Current Bid</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: "var(--text)" }}
          className="d-md-none d-flex justify-content-between align-items-center my-4 features"
        >
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span>properties</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">10K+</h5>
            <span>auction</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span>developers</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
