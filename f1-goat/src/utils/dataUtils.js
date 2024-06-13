import axios from 'axios';
import { csvParse } from 'd3';

export const fetchCSVData = async (path) => {
  const response = await axios.get(path);
  return csvParse(response.data);
};

const calculateDriverStats = (data) => {
  const driverStats = {};

  data.forEach(entry => {
    const { driverId, points, year, position } = entry;

    if (!driverStats[driverId]) {
      driverStats[driverId] = {
        id: driverId,
        name: `${entry.forename} ${entry.surname}`,
        totalPoints: 0,
        championships: 0,
        years: new Set(),
      };
    }

    driverStats[driverId].totalPoints += parseFloat(points);
    driverStats[driverId].years.add(year);

    if (parseInt(position) === 1) {
      driverStats[driverId].championships += 1;
    }
  });

  return Object.values(driverStats).map(driver => ({
    id: driver.id,
    name: driver.name,
    totalPoints: driver.totalPoints,
    championships: driver.championships,
    years: driver.years.size,
  }));
};

const calculateTeamStats = (data) => {
  const teamStats = {};

  data.forEach(entry => {
    const { constructorId, points, year, position } = entry;

    if (!teamStats[constructorId]) {
      teamStats[constructorId] = {
        id: constructorId,
        name: entry.constructorName,
        totalPoints: 0,
        championships: 0,
        years: new Set(),
      };
    }

    teamStats[constructorId].totalPoints += parseFloat(points);
    teamStats[constructorId].years.add(year);

    if (parseInt(position) === 1) {
      teamStats[constructorId].championships += 1;
    }
  });

  return Object.values(teamStats).map(team => ({
    id: team.id,
    name: team.name,
    totalPoints: team.totalPoints,
    championships: team.championships,
    years: team.years.size,
  }));
};

const calculateEngineStats = (data) => {
  const engineStats = {};

  data.forEach(entry => {
    const { engineId, points, year, position } = entry;

    if (!engineStats[engineId]) {
      engineStats[engineId] = {
        id: engineId,
        name: entry.engineName,
        totalPoints: 0,
        championships: 0,
        years: new Set(),
      };
    }

    engineStats[engineId].totalPoints += parseFloat(points);
    engineStats[engineId].years.add(year);

    if (parseInt(position) === 1) {
      engineStats[engineId].championships += 1;
    }
  });

  return Object.values(engineStats).map(engine => ({
    id: engine.id,
    name: engine.name,
    totalPoints: engine.totalPoints,
    championships: engine.championships,
    years: engine.years.size,
  }));
};

export const processDriverData = async (driversPath, resultsPath) => {
  const driversData = await fetchCSVData(driversPath);
  const resultsData = await fetchCSVData(resultsPath);

  // Merge driver data with results data
  const mergedData = resultsData.map(result => {
    const driver = driversData.find(d => d.driverId === result.driverId);
    return { ...result, forename: driver?.forename, surname: driver?.surname };
  });

  return calculateDriverStats(mergedData);
};

export const processTeamData = async (teamsPath, resultsPath) => {
  const teamsData = await fetchCSVData(teamsPath);
  const resultsData = await fetchCSVData(resultsPath);

  // Merge team data with results data
  const mergedData = resultsData.map(result => {
    const team = teamsData.find(t => t.constructorId === result.constructorId);
    return { ...result, constructorName: team?.name };
  });

  return calculateTeamStats(mergedData);
};

export const processEngineData = async (enginesPath, resultsPath) => {
  const enginesData = await fetchCSVData(enginesPath);
  const resultsData = await fetchCSVData(resultsPath);

  // Merge engine data with results data
  const mergedData = resultsData.map(result => {
    const engine = enginesData.find(e => e.engineId === result.engineId);
    return { ...result, engineName: engine?.name };
  });

  return calculateEngineStats(mergedData);
};
