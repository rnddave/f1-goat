import pandas as pd
import bar_chart_race as bcr

# Step 1: Gather the data
data = {
    'Constructor': [
        'Ferrari', 'Williams', 'McLaren', 'Mercedes', 
        'Red Bull', 'Lotus', 'Brabham', 'Renault', 
        'Benetton', 'Tyrrell', 'Cooper', 'Matra', 
        'BRM'
    ],
    'Championships': [
        16, 9, 8, 9, 
        5, 7, 4, 2, 
        1, 1, 2, 1, 
        1
    ]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Step 2: Create a suitable DataFrame for bar chart race
constructors = df['Constructor']
years = range(1958, 2024)  # Constructor's Championship started in 1958, update the end year as needed
championships_per_year = {year: [0]*len(constructors) for year in years}

# Hardcode the year each constructor won their championships
championship_years = {
    'Ferrari': [1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008],
    'Williams': [1980, 1981, 1986, 1987, 1992, 1993, 1994, 1996, 1997],
    'McLaren': [1974, 1984, 1985, 1988, 1989, 1990, 1991, 1998],
    'Mercedes': [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    'Red Bull': [2010, 2011, 2012, 2013, 2022],
    'Lotus': [1963, 1965, 1968, 1970, 1972, 1973, 1978],
    'Brabham': [1966, 1967, 1981, 1983],
    'Renault': [2005, 2006],
    'Benetton': [1995],
    'Tyrrell': [1971],
    'Cooper': [1959, 1960],
    'Matra': [1969],
    'BRM': [1962]
}

# Fill the championships_per_year with cumulative sum
for constructor, years_won in championship_years.items():
    idx = constructors[constructors == constructor].index[0]
    for year in years_won:
        if year in championships_per_year:  # Ensure the year is within the valid range
            championships_per_year[year][idx] += 1

# Convert to cumulative sum DataFrame
df_cumulative = pd.DataFrame(championships_per_year, index=constructors).T.cumsum()

# Fill any missing values with forward fill (if needed)
df_cumulative = df_cumulative.ffill()

# Step 3: Create the bar chart race
bcr.bar_chart_race(
    df=df_cumulative,
    filename='f1_constructor_championships.mp4',
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
    title='F1 Constructor Championships Over Time',
    bar_label_size=7,
    tick_label_size=7,
    shared_fontdict={'color': '.1'},
    scale='linear',
    writer=None,
    fig=None,
    bar_kwargs={'alpha': .7},
    filter_column_colors=False
)
