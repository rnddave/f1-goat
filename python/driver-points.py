import pandas as pd
import bar_chart_race as bcr

# Step 1: Gather the data (example data provided)
data = {
    'Driver': [
        'Lewis Hamilton', 'Michael Schumacher', 'Sebastian Vettel', 'Kimi Räikkönen', 
        'Fernando Alonso', 'Ayrton Senna', 'Alain Prost', 'Jenson Button', 
        'Nico Rosberg', 'David Coulthard', 'Felipe Massa', 'Rubens Barrichello',
        'Valtteri Bottas', 'Max Verstappen', 'Daniel Ricciardo', 'Sergio Perez'
    ],
    'Points': [
        4138, 1566, 3098, 1873, 
        2061, 614, 798, 1235, 
        1594, 535, 1167, 658,
        1790, 2170, 1285, 1323
    ]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Step 2: Create a suitable DataFrame for bar chart race
drivers = df['Driver']
years = range(1950, 2024)  # F1 started in 1950, update the end year as needed
points_per_year = {year: [0]*len(drivers) for year in years}

# Hardcode the points each driver earned over the years (example data, actual data should be collected)
points_years = {
    'Lewis Hamilton': {2007: 109, 2008: 98, 2009: 49, 2010: 240, 2011: 227, 2012: 190, 2013: 189, 2014: 384, 2015: 381, 2016: 380, 2017: 363, 2018: 408, 2019: 413, 2020: 347, 2021: 387, 2022: 240},
    'Michael Schumacher': {1991: 4, 1992: 53, 1993: 52, 1994: 92, 1995: 102, 1996: 59, 1997: 78, 1998: 86, 1999: 44, 2000: 108, 2001: 123, 2002: 144, 2003: 93, 2004: 148, 2005: 62, 2006: 72, 2010: 72, 2011: 76, 2012: 49},
    'Sebastian Vettel': {2007: 6, 2008: 35, 2009: 84, 2010: 256, 2011: 392, 2012: 281, 2013: 397, 2014: 167, 2015: 278, 2016: 212, 2017: 317, 2018: 320, 2019: 240, 2020: 33, 2021: 43, 2022: 37},
    'Kimi Räikkönen': {2001: 9, 2002: 4, 2003: 91, 2004: 45, 2005: 112, 2006: 65, 2007: 110, 2008: 75, 2009: 48, 2012: 207, 2013: 183, 2014: 55, 2015: 150, 2016: 145, 2017: 205, 2018: 251, 2019: 43, 2020: 4, 2021: 10},
    'Fernando Alonso': {2001: 0, 2003: 55, 2004: 59, 2005: 133, 2006: 134, 2007: 109, 2008: 61, 2009: 26, 2010: 252, 2011: 257, 2012: 278, 2013: 242, 2014: 161, 2015: 11, 2016: 54, 2017: 17, 2018: 50, 2021: 81, 2022: 81},
    'Ayrton Senna': {1984: 13, 1985: 38, 1986: 55, 1987: 57, 1988: 94, 1989: 60, 1990: 78, 1991: 96, 1992: 50, 1993: 73},
    'Alain Prost': {1980: 5, 1981: 43, 1982: 34, 1983: 57, 1984: 71, 1985: 73, 1986: 72, 1987: 46, 1988: 105, 1989: 81, 1990: 71, 1991: 34, 1993: 99},
    'Jenson Button': {2000: 12, 2001: 2, 2002: 14, 2003: 17, 2004: 85, 2005: 37, 2006: 56, 2007: 6, 2008: 3, 2009: 95, 2010: 214, 2011: 270, 2012: 188, 2013: 73, 2014: 126, 2015: 16, 2016: 21},
    'Nico Rosberg': {2006: 4, 2007: 20, 2008: 17, 2009: 34, 2010: 142, 2011: 89, 2012: 93, 2013: 171, 2014: 317, 2015: 322, 2016: 385},
    'David Coulthard': {1994: 14, 1995: 49, 1996: 18, 1997: 36, 1998: 56, 1999: 48, 2000: 73, 2001: 65, 2002: 41, 2003: 51, 2004: 24, 2005: 24, 2006: 14, 2007: 14, 2008: 8},
    'Felipe Massa': {2002: 4, 2004: 12, 2005: 11, 2006: 80, 2007: 94, 2008: 97, 2009: 22, 2010: 144, 2011: 118, 2012: 122, 2013: 112, 2014: 134, 2015: 121, 2016: 53, 2017: 43},
    'Rubens Barrichello': {1993: 2, 1994: 19, 1995: 11, 1996: 6, 1997: 6, 1998: 4, 1999: 21, 2000: 62, 2001: 56, 2002: 77, 2003: 65, 2004: 114, 2005: 38, 2006: 30, 2007: 0, 2008: 11, 2009: 77, 2010: 47, 2011: 4},
    'Valtteri Bottas': {2013: 4, 2014: 186, 2015: 136, 2016: 85, 2017: 305, 2018: 247, 2019: 326, 2020: 223, 2021: 226, 2022: 49},
    'Max Verstappen': {2015: 49, 2016: 204, 2017: 168, 2018: 249, 2019: 278, 2020: 214, 2021: 395, 2022: 454},
    'Daniel Ricciardo': {2012: 10, 2013: 20, 2014: 238, 2015: 92, 2016: 256, 2017: 200, 2018: 170, 2019: 54, 2020: 119, 2021: 115, 2022: 29},
    'Sergio Perez': {2011: 14, 2012: 66, 2013: 49, 2014: 59, 2015: 78, 2016: 101, 2017: 100, 2018: 62, 2019: 52, 2020: 125, 2021: 190, 2022: 305}
}

# Fill the points_per_year with cumulative sum
for driver, points_by_year in points_years.items():
    idx = drivers[drivers == driver].index[0]
    for year, points in points_by_year.items():
        if year in points_per_year:  # Ensure the year is within the valid range
            points_per_year[year][idx] += points

# Convert to cumulative sum DataFrame
df_cumulative = pd.DataFrame(points_per_year, index=drivers).T.cumsum()

# Fill any missing values with forward fill (if needed)
df_cumulative = df_cumulative.ffill()

# Step 3: Create the bar chart race
bcr.bar_chart_race(
    df=df_cumulative,
    filename='f1_driver_points.mp4',
    orientation='h',
    sort='desc',
    n_bars=10,
    fixed_order=False,
    fixed_max=True,
    steps_per_period=10,
    interpolate_period=False,
    label_bars=True,
    bar_size=0.95,
    period_label={'x': 0.95, 'y': 0.15, 'ha': 'right', 'va': 'center'},
    period_fmt='{x:.0f}',
    period_summary_func=lambda v, r: {'x': .99, 'y': .2,
                                      's': f'Total Points: {v.sum()}', 'ha': 'right', 'size': 8},
    perpendicular_bar_func='mean',
    figsize=(5, 3),
    dpi=144,
    cmap='dark12',
    title='F1 Driver Points Over Time',
    bar_label_size=7,
    tick_label_size=7,
    shared_fontdict={'color': '.1'},
    scale='linear',
    writer=None,
    fig=None,
    bar_kwargs={'alpha': .7},
    filter_column_colors=False
)
