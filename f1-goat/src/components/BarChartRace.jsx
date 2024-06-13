import React, { useEffect, useState } from 'react';
import { processDriverLifetimePoints } from '../utils/dataUtils';
import * as d3 from 'd3';

const BarChartRace = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await processDriverLifetimePoints('/data/drivers.csv', '/data/results.csv');
      setData(data);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const svg = d3.select('#bar-chart-race');
    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 30, bottom: 40, left: 90 };

    svg.attr('width', width).attr('height', height);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.totalPoints)])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);

    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(width / 80))
      .call(g => g.select('.domain').remove());

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickSizeOuter(0))
      .call(g => g.select('.domain').remove());

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    svg.append('g')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', margin.left)
      .attr('y', d => y(d.name))
      .attr('width', d => x(d.totalPoints) - margin.left)
      .attr('height', y.bandwidth());

    const update = () => {
      const t = svg.transition().duration(750);

      svg.selectAll('rect')
        .data(data)
        .join('rect')
        .transition(t)
        .attr('x', margin.left)
        .attr('y', d => y(d.name))
        .attr('width', d => x(d.totalPoints) - margin.left)
        .attr('height', y.bandwidth());
    };

    update();
  }, [data]);

  return (
    <div>
      <h2>F1 Drivers Total Lifetime Points</h2>
      <svg id="bar-chart-race"></svg>
    </div>
  );
};

export default BarChartRace;
