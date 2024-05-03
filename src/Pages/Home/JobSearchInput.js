import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { cities } from '../../assets/Cities';
import { useSearchParams } from 'react-router-dom';

function JobSearchInput() {
    const [jobTitle, setJobTitle] = useState('');
    const [city, setCity] = useState('');
    const [cityInp, setCityInp] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();

    let jpi = searchParams.get('jpi') ? searchParams.get('jpi') : 1
    const handleJobSearch = (e) => {
        e.preventDefault();
        setSearchParams({ q: jobTitle, l: city, jpi: jpi })
    };



    const filteredCities = cities.filter((item) => item.name.toLowerCase() === city);

    useEffect(() => {
        setCityInp(filteredCities.length > 0);
    }, [filteredCities]);

    const selectCity = (selectedCity) => {
        setCity(selectedCity);
        setCityInp(false);
    };
    return (
        <>
            <div className="container1">
                <form onSubmit={handleJobSearch}>
                    <Row>
                        <div className="input-group">
                            <Col lg="5" md="5" sm="5" xs="12" className='input-group-inner'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    placeholder="Job title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className='border-right'
                                />

                            </Col>
                            <Col lg="5" md="5" sm="5" xs="12" className='input-group-inner'>
                                <i class="fa-solid fa-location-dot"></i>
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {
                                    cityInp && <div className='input-city-search'>
                                        {
                                            filteredCities.map((item) => {
                                                return (
                                                    <>
                                                        <p onClick={() => selectCity(item.name)}>{item.name}</p>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                }

                            </Col>
                            <Col lg="2" md="2" sm="2" xs="12" className='p-0'>
                                <button type="submit">Find Job</button>
                            </Col>

                        </div>
                    </Row>

                </form>
            </div >
        </>
    )
}

export default JobSearchInput