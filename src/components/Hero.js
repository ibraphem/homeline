import { useState, useEffect } from "react";
import Select from "react-select";
import heroBg from "../assets/img/hero-bg.jpg";
import { allLgas } from "../mockData/lgas";
import { states } from "../mockData/state";

const Hero = () => {
    const [stateId, setStateId] = useState("")
    const [lgas, setLgas] = useState([])

    const fetchLgas = () => {
        const res = allLgas.filter((lga) => lga?.stateId === stateId)
        setLgas(res)
    }


    useEffect(() => {
     if(stateId?.length > 0) {
        fetchLgas()
     }else{
        setLgas([])
     }
    }, [stateId])
    


    // console.log(stateId);

  return (
    <section
      className="hero-section set-bg"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="hero-warp">
          <form className="main-search-form">
            <div className="search-type">
              <div className="st-item">
                <input type="radio" name="st" id="rent" />
                <label htmlFor="rent">Rent</label>
              </div>
              <div className="st-item">
                <input type="radio" name="st" id="buy" defaultChecked />
                <label htmlFor="buy">Buy</label>
              </div>
              <div className="st-item">
                <input type="radio" name="st" id="property" />
                <label htmlFor="property">To Let</label>
              </div>
              <div className="st-item">
                <input type="radio" name="st" id="sell" />
                <label htmlFor="sell">Sell</label>
              </div>
            </div>

            {/* <input type="text" placeholder="Search State..." /> */}
         
            <div className="row gy-5">
              <div className="col-md-5" style={{marginBottom: "10px"}}>

                <Select label="Single select" options={states} placeholder={<div>Search States...</div>} onChange={(value) => setStateId(value?.value)} />
              </div> 

              <div className="col-md-5" style={{marginBottom: "10px"}}>
                
                <Select label="Single select" options={lgas} placeholder={<div>Search Local Governments Area...</div>} />
              </div>

              <div className="col-md-2">
              <button className="btn btn-primary btn-md">Search</button> 
              </div>
            </div>
     
            {/* <input
                type="text"
                placeholder="Search Local Government Area..."
              /> */}
            {/* <button className="site-btn">Search</button> */}

            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.{" "}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
