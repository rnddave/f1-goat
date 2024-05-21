import pandas as pd
import bar_chart_race as bcr

# Step 1: Gather the data
data = {
    'Driver': [
        'Michael Schumacher', 'Lewis Hamilton', 'Juan Manuel Fangio', 'Alain Prost', 
        'Sebastian Vettel', 'Ayrton Senna', 'Niki Lauda', 'Nelson Piquet', 
        'Jackie Stewart', 'Jack Brabham', 'Graham Hill', 'Emerson Fittipaldi', 
        'Fernando Alonso', 'Mika Häkkinen', 'Alberto Ascari', 'Jim Clark', 
        'Nico Rosberg', 'Damon Hill', 'Kimi Räikkönen', 'Jody Scheckter', 
        'Mario Andretti', 'Alan Jones', 'Jochen Rindt', 'John Surtees', 
        'James Hunt', 'Jacques Villeneuve', 'Keke Rosberg', 'Denny Hulme', 
        'Phil Hill', 'Mike Hawthorn'
    ],
    'Championships': [
        7, 7, 5, 4, 
        4, 3, 3, 3, 
        3, 3, 2, 2, 
        2, 2, 2, 2, 
        1, 1, 1, 1, 
        1, 1, 1, 1, 
        1, 1, 1, 1, 
        1, 1
    ]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Step 2: Create a suitable DataFrame for bar chart race
drivers = df['Driver']
years = range(1950, 2024)  # F1 started in 1950, update the end year as needed
championships_per_year = {year: [0]*len(drivers) for year in years}

# Hardcode the year each driver won their championships
championship_years = {
    'Michael Schumacher': [1994, 1995, 2000, 2001, 2002, 2003, 2004],
    'Lewis Hamilton': [2008, 2014, 2015, 2017, 2018, 2019, 2020],
    'Juan Manuel Fangio': [1951, 1954, 1955, 1956, 1957],
    'Alain Prost': [1985, 1986, 1989, 1993],
    'Sebastian Vettel': [2010, 2011, 2012, 2013],
    'Ayrton Senna': [1988, 1990, 1991],
    'Niki Lauda': [1975, 1977, 1984],
    'Nelson Piquet': [1981, 1983, 1987],
    'Jackie Stewart': [1969, 1971, 1973],
    'Jack Brabham': [1959, 1960, 1966],
    'Graham Hill': [1962, 1968],
    'Emerson Fittipaldi': [1972, 1974],
    'Fernando Alonso': [2005, 2006],
    'Mika Häkkinen': [1998, 1999],
    'Alberto Ascari': [1952, 1953],
    'Jim Clark': [1963, 1965],
    'Nico Rosberg': [2016],
    'Damon Hill': [1996],
    'Kimi Räikkönen': [2007],
    'Jody Scheckter': [1979],
    'Mario Andretti': [1978],
    'Alan Jones': [1980],
    'Jochen Rindt': [1970],
    'John Surtees': [1964],
    'James Hunt': [1976],
    'Jacques Villeneuve': [1997],
    'Keke Rosberg': [1982],
    'Denny Hulme': [1967],
    'Phil Hill': [1961],
    'Mike Hawthorn': [1958]
}

# Fill the championships_per_year with cumulative sum
for driver, years_won in championship_years.items():
    idx = drivers[drivers == driver].index[0]
    for year in years_won:
        championships_per_year[year][idx] += 1

# Convert to cumulative sum DataFrame
df_cumulative = pd.DataFrame(championships_per_year, index=drivers).T.cumsum()

# Fill any missing values with forward fill (if needed)
df_cumulative = df_cumulative.ffill()

# Step 3: Create the bar chart race
bcr.bar_chart_race(
    df=df_cumulative,
    filename='f1_driver_championships.mp4',
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
                                      's': f'Total Championships: {v.sum()}', 'ha': 'right', 'size': 8},
    perpendicular_bar_func='mean',
    figsize=(5, 3),
    dpi=144,
    cmap='dark12',
    title='F1 Driver Championships Over Time',
    bar_label_size=7,
    tick_label_size=7,
    shared_fontdict={'color': '.1'},
    scale='linear',
    writer=None,
    fig=None,
    bar_kwargs={'alpha': .7},
    filter_column_colors=False
)
