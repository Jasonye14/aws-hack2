import React, { useState, useEffect } from 'react';
import './co2Card.css';
import JsonData from '../../data/carbon-footprint-by-country-2023.json'

const CO2Card = ({ countryName }) => {
    const maxGrowthRate = 0.08; // Maximum expected growth rate
    const maxDensity = 500; 
    const [co2Data, setCo2Data] = useState({
        place: 0,
        pop2023: 0,
        growthRate: 0,
        area: 0,
        country: "",
        cca3: "",
        cca2: "",
        ccn3: 0,
        region: "",
        unMember: null,
        officialName: "",
        landAreaKm: 0,
        density: 0,
        densityMi: 0,
        Rank: 0,
        carbonFootprintByCountry_totCO2_2020: 0,
        carbonFootprintByCountry_totCO2_2017: 0,
        carbonFootprintByCountry_co2PerCapita2020: 0,
        carbonFootprintByCountry_co2PerCapita2017: 0
    });

    useEffect(() => {
        const data = JsonData.find(countryData => countryData.country === countryName);
        if (data) {
            setCo2Data({
              place: data.place,
              population: data.pop2023,
              growthRate: data.growthRate,
              area: data.area,
              country: data.country,
              cca3: data.cca3,
              cca2: data.cca2,
              ccn3: data.ccn3,
              region: data.region,
              unMember: data.unMember,
              officialName: data.officialName,
              landAreaKm: data.landAreaKm,
              density: data.density,
              densityMi: data.densityMi,
              rank: data.Rank,
              co2PerCapita2020: data.carbonFootprintByCountry_co2PerCapita2020,
              totalCO22020: data.carbonFootprintByCountry_totCO2_2020,
              co2PerCapita2017: data.carbonFootprintByCountry_co2PerCapita2017,
              totalCO22017: data.carbonFootprintByCountry_totCO2_2017
            });
            console.log(data);
        }
    }, [countryName]);

    // const calculateProgress = (current, previous) => {
    //     if (previous === 0) return 0;
    //     return (current / previous) * 100;
    // };

    const calculateGrowthRateBar = (growthRate) => {
        const scaledGrowthRate = growthRate / maxGrowthRate * 100;
        const barWidth = Math.abs(scaledGrowthRate);
        const barOffset = scaledGrowthRate >= 0 ? 50 : 50 - barWidth;
        return { width: `${barWidth}%`, left: `${barOffset}%` };
    };

    const calculateDensityBar = (density) => {
        const scaledDensity = (density / maxDensity) * 100;
        return Math.min(scaledDensity, 100); // Ensuring it doesn't exceed 100%
    };

    return (
        <div className="card">
            <h2>CO2 Emissions Tracking</h2>
            <h4>CO2 Emissions Rank: {co2Data.rank}</h4>
            <h4>Population in 2023: {co2Data.population ? co2Data.population.toLocaleString('en-US') : ''}</h4>
            <div className="stat stat-total-emissions">
                <div className="stat-title">Total Emissions in 2020</div>
                <div className="stat-value">{co2Data.totalCO22020}k tons</div>
                <div className="stat-bar">
                    <div className="stat-progress" style={{ width: `${(co2Data.totalCO22020 / co2Data.totalCO22017) * 100}%` }}></div>
                </div>
            </div>
            <div className="stat stat-reduction-target">
                <div className="stat-title">Emission Per Capita in 2020</div>
                <div className="stat-value">{co2Data.co2PerCapita2020}k tons</div>
                <div className="stat-bar">
                    <div className="stat-progress" style={{ width: `${(co2Data.co2PerCapita2020 / co2Data.co2PerCapita2017) * 100}%` }}></div>
                </div>
            </div>
            <div className="stat stat-offset-projects">
                <div className="stat-title">Population Growth Rate</div>
                <div className="stat-value">{co2Data.growthRate}%</div>
                <div className="stat-bar" style={{ position: 'relative', backgroundColor: '#eee' }}>
                    <div className="stat-progress" style={{
                        position: 'absolute',
                        backgroundColor: co2Data.growthRate >= 0 ? 'green' : 'red',
                        ...calculateGrowthRateBar(co2Data.growthRate)
                    }}></div>
                </div>
            </div>
            <div className="stat stat-offset-projects">
                <div className="stat-title">Density</div>
                <div className="stat-value">{co2Data.density} per km²</div>
                <div className="stat-bar">
                    <div className="stat-progress" style={{ width: `${calculateDensityBar(co2Data.density)}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default CO2Card;
