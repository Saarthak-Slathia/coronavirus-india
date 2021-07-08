import React, {useEffect, useState} from 'react'
import "./covid.css"
import State from "./State";

const Covid = () => {

    const [data, setData] = useState([]);
    const [andamanData, andaman] = useState([]);
    const [andhraData, andhra] = useState([]);
    const [arunachalData, arunachal] = useState([]);
    const [assamData, assam] = useState([]);
    const [biharData, bihar] = useState([]);
    const [chandigarhData, chandigarh] = useState([]);
    const [chhatisgarhData, chhatisgarh] = useState([]);
    const [delhiData, delhi] = useState([]);
    const [goaData, goa] = useState([]);
    const [gujaratData, gujarat] = useState([]);
    const [haryanaData, haryana] = useState([]);
    const [hpData, hp] = useState([]);
    const [jkData, jk] = useState([]);
    const [jData, j] = useState([]);
    const [karnatakaData, karnataka] = useState([]);
    const [kerelaData, kerela] = useState([]);
    const [ladakhData, ladakh] = useState([]);
    const [mpData, mp] = useState([]);
    const [maharashtraData, maharashtra] = useState([]);
    const [manipurData, manipur] = useState([]);
    const [meghalayaData, meghalaya] = useState([]);
    const [mizoramData, mizoram] = useState([]);
    const [lakshwadeepData, lakshwadeep] = useState([]);
    const [nagalandData, nagaland] = useState([]);
    const [odishaData, odisha] = useState([]);
    const [pcData, pc] = useState([]);
    const [punjabData, punjab] = useState([]);
    const [rajasthanData, rajasthan] = useState([]);
    const [sikkimData, sikkim] = useState([]);
    const [tnData, tn] = useState([]);
    const [dadranagarData, dadranagar] = useState([]);
    const [telanganaData, telangana] = useState([]);
    const [tripuraData, tripura] = useState([]);
    const [upData, up] = useState([]);
    
    const getCovidData = async () => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const actualData = await res.json();
            setData(actualData.statewise[0]);
            andaman(actualData.statewise[1]);
            // console.log(actualData.statewise[1]);
            andhra(actualData.statewise[2]);
            arunachal(actualData.statewise[3]);
            assam(actualData.statewise[4]);
            bihar(actualData.statewise[5]);
            chandigarh(actualData.statewise[6]);
            chhatisgarh(actualData.statewise[7]);
            dadranagar(actualData.statewise[8]);
            delhi(actualData.statewise[9]);
            goa(actualData.statewise[10]);
            gujarat(actualData.statewise[11]);
            haryana(actualData.statewise[12]);
            hp(actualData.statewise[13]);
            jk(actualData.statewise[14]);
            j(actualData.statewise[15]);
            karnataka(actualData.statewise[16]);
            kerela(actualData.statewise[17]);
            ladakh(actualData.statewise[18]);
            lakshwadeep(actualData.statewise[19]);
            mp(actualData.statewise[20]);
            maharashtra(actualData.statewise[21]);
            manipur(actualData.statewise[22]);
            meghalaya(actualData.statewise[23]);
            mizoram(actualData.statewise[24]);
            nagaland(actualData.statewise[25]);
            odisha(actualData.statewise[26]);
            pc(actualData.statewise[27]);
            punjab(actualData.statewise[28]);
            rajasthan(actualData.statewise[29]);
            sikkim(actualData.statewise[30]);
            tn(actualData.statewise[32]);
            telangana(actualData.statewise[33]);
            tripura(actualData.statewise[34]);
            up(actualData.statewise[35]);
        }
        catch(err){
            console.log(err);
        }
    }

    let dayactive = data.deltaconfirmed - (data.deltarecovered - data.deltadeaths);
    
    useEffect(() => {
        getCovidData();
    }, []);
    
    return (
        <>
            <section id="main">
                <div id="head">
                    <h2 id="title">Coronavirus Outbreak in India</h2><br />
                    <h3 className="subtitle">Get Vaccinated, Wear Mask, Stay Safe</h3>
                </div>
                <section>
                    <ul>
                        <li className="card">
                            <div className="card__main">
                                <div className="card_inner">
                                    <p className="card_name redcolor">Confirmed <small id="totalsmall" className="bluecolor">{data.deltaconfirmed}</small></p>
                                    <p className="card_total card-small">{data.confirmed}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card__main">
                                <div className="card_inner">
                                    <p className="card_name bluecolor">Active <small className="no" id="totalsmall">{dayactive}</small></p>
                                    <p className="card_total card-small">{data.active}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card__main">
                                <div className="card_inner">
                                    <p className="card_name greencolor">Recovered <small id="totalsmall">{data.deltarecovered}</small></p>
                                    <p className="card_total card-small">{data.recovered}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card__main">
                                <div className="card_inner">
                                    <p className="card_name greycolor">Deceased <small id="totalsmall">{data.deltadeaths}</small></p>
                                    <p className="card_total card-small">{data.deaths}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <div className="animation">
                    <img src="https://image.flaticon.com/icons/png/64/2913/2913604.png" alt="" />
                    <a href="#scroll">
                        <div id="scroll">
                            <h3>Scroll For Details</h3>
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </section>
            <section id="statewise">
                <State className="state" 
                    name="Andaman and Nicobar Islands"
                    confirmed={andamanData.confirmed}
                    deltaconfirmed={andamanData.deltaconfirmed}
                    deltarecovered={andamanData.deltarecovered}
                    deltadeaths={andamanData.deltadeaths}
                    active={andamanData.active}
                    recovered={andamanData.recovered}
                    deaths={andamanData.deaths}
                />
                
                <State className="state" 
                    name="Andhra Pradesh"
                    confirmed={andhraData.confirmed}
                    active={andhraData.active}
                    deltaconfirmed={andhraData.deltaconfirmed}
                    deltarecovered={andhraData.deltarecovered}
                    deltadeaths={andhraData.deltadeaths}
                    recovered={andhraData.recovered}
                    deaths={andhraData.deaths}
                />

                <State className="state" 
                    name="Arunachal Pradesh"
                    confirmed={arunachalData.confirmed}
                    active={arunachalData.active}
                    deltaconfirmed={arunachalData.deltaconfirmed}
                    deltarecovered={arunachalData.deltarecovered}
                    deltadeaths={arunachalData.deltadeaths}
                    recovered={arunachalData.recovered}
                    deaths={arunachalData.deaths}
                />

                <State className="state" 
                    name="Assam"
                    confirmed={assamData.confirmed}
                    active={assamData.active}
                    deltaconfirmed={assamData.deltaconfirmed}
                    deltarecovered={assamData.deltarecovered}
                    deltadeaths={assamData.deltadeaths}
                    recovered={assamData.recovered}
                    deaths={assamData.deaths}
                />

                <State className="state" 
                    name="Bihar"
                    confirmed={biharData.confirmed}
                    active={biharData.active}
                    recovered={biharData.recovered}
                    deltaconfirmed={biharData.deltaconfirmed}
                    deltarecovered={biharData.deltarecovered}
                    deltadeaths={biharData.deltadeaths}
                    deaths={biharData.deaths}
                />
                
                <State className="state" 
                    name="Chandigarh"
                    confirmed={chandigarhData.confirmed}
                    active={chandigarhData.active}
                    recovered={chandigarhData.recovered}
                    deaths={chandigarhData.deaths}
                    deltaconfirmed={chandigarhData.deltaconfirmed}
                    deltarecovered={chandigarhData.deltarecovered}
                    deltadeaths={chandigarhData.deltadeaths}
                />

                <State className="state" 
                    name="Chhattisgarh"
                    confirmed={chhatisgarhData.confirmed}
                    active={chhatisgarhData.active}
                    recovered={chhatisgarhData.recovered}
                    deaths={chhatisgarhData.deaths}
                    deltaconfirmed={chhatisgarhData.deltaconfirmed}
                    deltarecovered={chhatisgarhData.deltarecovered}
                    deltadeaths={chhatisgarhData.deltadeaths}
                />

                <State className="state" 
                    name="Dadra and Nagar Haveli & Daman and Diu"
                    confirmed={dadranagarData.confirmed}
                    active={dadranagarData.active}
                    recovered={dadranagarData.recovered}
                    deaths={dadranagarData.deaths}
                    deltaconfirmed={dadranagarData.deltaconfirmed}
                    deltarecovered={dadranagarData.deltarecovered}
                    deltadeaths={dadranagarData.deltadeaths}
                />
                <State className="state" 
                    name="Delhi"
                    confirmed={delhiData.confirmed}
                    active={delhiData.active}
                    recovered={delhiData.recovered}
                    deaths={delhiData.deaths}
                    deltaconfirmed={delhiData.deltaconfirmed}
                    deltarecovered={delhiData.deltarecovered}
                    deltadeaths={delhiData.deltadeaths}
                />
                <State className="state" 
                    name="Goa"
                    confirmed={goaData.confirmed}
                    active={goaData.active}
                    recovered={goaData.recovered}
                    deaths={goaData.deaths}
                    deltaconfirmed={goaData.deltaconfirmed}
                    deltarecovered={goaData.deltarecovered}
                    deltadeaths={goaData.deltadeaths}
                />
                
                <State className="state" 
                    name="Gujarat"
                    confirmed={gujaratData.confirmed}
                    active={gujaratData.active}
                    recovered={gujaratData.recovered}
                    deaths={gujaratData.deaths}
                    deltaconfirmed={gujaratData.deltaconfirmed}
                    deltarecovered={gujaratData.deltarecovered}
                    deltadeaths={gujaratData.deltadeaths}
                />
                
                <State className="state" 
                    name="Haryana"
                    confirmed={haryanaData.confirmed}
                    active={haryanaData.active}
                    recovered={haryanaData.recovered}
                    deaths={haryanaData.deaths}
                    deltaconfirmed={haryanaData.deltaconfirmed}
                    deltarecovered={haryanaData.deltarecovered}
                    deltadeaths={haryanaData.deltadeaths}
                />

                <State className="state" 
                    name="Himachal Pradesh"
                    confirmed={hpData.confirmed}
                    active={hpData.active}
                    recovered={hpData.recovered}
                    deaths={hpData.deaths}
                    deltaconfirmed={hpData.deltaconfirmed}
                    deltarecovered={hpData.deltarecovered}
                    deltadeaths={hpData.deltadeaths}
                />
                
                <State className="state" 
                    name="Jammu & Kashmir"
                    confirmed={jkData.confirmed}
                    active={jkData.active}
                    recovered={jkData.recovered}
                    deaths={jkData.deaths}
                    deltaconfirmed={jkData.deltaconfirmed}
                    deltarecovered={jkData.deltarecovered}
                    deltadeaths={jkData.deltadeaths}
                />
                
                <State className="state" 
                    name="Jharkhand"
                    confirmed={jData.confirmed}
                    active={jData.active}
                    recovered={jData.recovered}
                    deaths={jData.deaths}
                    deltaconfirmed={jData.deltaconfirmed}
                    deltarecovered={jData.deltarecovered}
                    deltadeaths={jData.deltadeaths}
                />
                
                <State className="state" 
                    name="Karnataka"
                    confirmed={karnatakaData.confirmed}
                    active={karnatakaData.active}
                    recovered={karnatakaData.recovered}
                    deaths={karnatakaData.deaths}
                    deltaconfirmed={karnatakaData.deltaconfirmed}
                    deltarecovered={karnatakaData.deltarecovered}
                    deltadeaths={karnatakaData.deltadeaths}
                />
                
                <State className="state" 
                    name="Kerela"
                    confirmed={kerelaData.confirmed}
                    active={kerelaData.active}
                    recovered={kerelaData.recovered}
                    deaths={kerelaData.deaths}
                    deltaconfirmed={kerelaData.deltaconfirmed}
                    deltarecovered={kerelaData.deltarecovered}
                    deltadeaths={kerelaData.deltadeaths}
                />
                
                <State className="state" 
                    name="Ladakh"
                    confirmed={ladakhData.confirmed}
                    active={ladakhData.active}
                    recovered={ladakhData.recovered}
                    deaths={ladakhData.deaths}
                    deltaconfirmed={ladakhData.deltaconfirmed}
                    deltarecovered={ladakhData.deltarecovered}
                    deltadeaths={ladakhData.deltadeaths}
                />
                
                <State className="state" 
                    name="Lakshwadeep"
                    confirmed={lakshwadeepData.confirmed}
                    active={lakshwadeepData.active}
                    recovered={lakshwadeepData.recovered}
                    deaths={lakshwadeepData.deaths}
                    deltaconfirmed={lakshwadeepData.deltaconfirmed}
                    deltarecovered={lakshwadeepData.deltarecovered}
                    deltadeaths={lakshwadeepData.deltadeaths}
                />
                <State className="state" 
                    name="Madhya Pradesh"
                    confirmed={mpData.confirmed}
                    active={mpData.active}
                    recovered={mpData.recovered}
                    deaths={mpData.deaths}
                    deltaconfirmed={mpData.deltaconfirmed}
                    deltarecovered={mpData.deltarecovered}
                    deltadeaths={mpData.deltadeaths}
                />
                <State className="state" 
                    name="Maharashtra"
                    confirmed={maharashtraData.confirmed}
                    active={maharashtraData.active}
                    recovered={maharashtraData.recovered}
                    deaths={maharashtraData.deaths}
                    deltaconfirmed={maharashtraData.deltaconfirmed}
                    deltarecovered={maharashtraData.deltarecovered}
                    deltadeaths={maharashtraData.deltadeaths}
                />
                <State className="state" 
                    name="Manipur"
                    confirmed={manipurData.confirmed}
                    active={manipurData.active}
                    recovered={manipurData.recovered}
                    deaths={manipurData.deaths}
                    deltaconfirmed={manipurData.deltaconfirmed}
                    deltarecovered={manipurData.deltarecovered}
                    deltadeaths={manipurData.deltadeaths}
                />
                <State className="state" 
                    name="Meghalaya"
                    confirmed={meghalayaData.confirmed}
                    active={meghalayaData.active}
                    recovered={meghalayaData.recovered}
                    deaths={meghalayaData.deaths}
                    deltaconfirmed={meghalayaData.deltaconfirmed}
                    deltarecovered={meghalayaData.deltarecovered}
                    deltadeaths={meghalayaData.deltadeaths}
                />
                <State className="state" 
                    name="Mizoram"
                    confirmed={mizoramData.confirmed}
                    active={mizoramData.active}
                    recovered={mizoramData.recovered}
                    deaths={mizoramData.deaths}
                    deltaconfirmed={mizoramData.deltaconfirmed}
                    deltarecovered={mizoramData.deltarecovered}
                    deltadeaths={mizoramData.deltadeaths}
                />
                <State className="state" 
                    name="Nagaland"
                    confirmed={nagalandData.confirmed}
                    active={nagalandData.active}
                    recovered={nagalandData.recovered}
                    deaths={nagalandData.deaths}
                    deltaconfirmed={nagalandData.deltaconfirmed}
                    deltarecovered={nagalandData.deltarecovered}
                    deltadeaths={nagalandData.deltadeaths}
                />
                <State className="state" 
                    name="Odisha"
                    confirmed={odishaData.confirmed}
                    active={odishaData.active}
                    recovered={odishaData.recovered}
                    deaths={odishaData.deaths}
                    deltaconfirmed={odishaData.deltaconfirmed}
                    deltarecovered={odishaData.deltarecovered}
                    deltadeaths={odishaData.deltadeaths}
                />
                <State className="state" 
                    name="Puducherry"
                    confirmed={pcData.confirmed}
                    active={pcData.active}
                    recovered={pcData.recovered}
                    deaths={pcData.deaths}
                    deltaconfirmed={pcData.deltaconfirmed}
                    deltarecovered={pcData.deltarecovered}
                    deltadeaths={pcData.deltadeaths}
                />
                <State className="state" 
                    name="Punjab"
                    confirmed={punjabData.confirmed}
                    active={punjabData.active}
                    recovered={punjabData.recovered}
                    deaths={punjabData.deaths}
                    deltaconfirmed={punjabData.deltaconfirmed}
                    deltarecovered={punjabData.deltarecovered}
                    deltadeaths={punjabData.deltadeaths}
                />
                <State className="state" 
                    name="Rajasthan"
                    confirmed={rajasthanData.confirmed}
                    active={rajasthanData.active}
                    recovered={rajasthanData.recovered}
                    deaths={rajasthanData.deaths}
                    deltaconfirmed={rajasthanData.deltaconfirmed}
                    deltarecovered={rajasthanData.deltarecovered}
                    deltadeaths={rajasthanData.deltadeaths}
                />
                <State className="state" 
                    name="Sikkim"
                    confirmed={sikkimData.confirmed}
                    active={sikkimData.active}
                    recovered={sikkimData.recovered}
                    deaths={sikkimData.deaths}
                    deltaconfirmed={sikkimData.deltaconfirmed}
                    deltarecovered={sikkimData.deltarecovered}
                    deltadeaths={sikkimData.deltadeaths}
                />
                <State className="state" 
                    name="Tamil Nadu"
                    confirmed={tnData.confirmed}
                    active={tnData.active}
                    recovered={tnData.recovered}
                    deaths={tnData.deaths}
                    deltaconfirmed={tnData.deltaconfirmed}
                    deltarecovered={tnData.deltarecovered}
                    deltadeaths={tnData.deltadeaths}
                />
                <State className="state" 
                    name="Telangana"
                    confirmed={telanganaData.confirmed}
                    active={telanganaData.active}
                    recovered={telanganaData.recovered}
                    deaths={telanganaData.deaths}
                    deltaconfirmed={telanganaData.deltaconfirmed}
                    deltarecovered={telanganaData.deltarecovered}
                    deltadeaths={telanganaData.deltadeaths}
                />
                <State className="state" 
                    name="Tripura"
                    confirmed={tripuraData.confirmed}
                    active={tripuraData.active}
                    recovered={tripuraData.recovered}
                    deaths={tripuraData.deaths}
                    deltaconfirmed={tripuraData.deltaconfirmed}
                    deltarecovered={tripuraData.deltarecovered}
                    deltadeaths={tripuraData.deltadeaths}
                />
                <State className="state" 
                    name="Uttar Pradesh"
                    confirmed={upData.confirmed}
                    active={upData.active}
                    recovered={upData.recovered}
                    deaths={upData.deaths}
                    deltaconfirmed={upData.deltaconfirmed}
                    deltarecovered={upData.deltarecovered}
                    deltadeaths={upData.deltadeaths}
                />
            </section>
            <br />

            <footer>
                <p>Data from <a href="https://api.covid19india.org/" target = "#">https://api.covid19india.org/</a></p>
            </footer>
        </>
    )
}

export default Covid
