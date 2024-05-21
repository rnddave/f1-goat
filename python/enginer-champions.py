import pandas as pd
import bar_chart_race as bcr

# Step 1: Gather the data
data = {
    'Engine Manufacturer': [
        'Ferrari', 'Renault', 'Mercedes', 'Ford', 
        'Honda', 'Climax', 'TAG', 'BRM', 
        'Alfa Romeo', 'Repco', 'Matra', 'BMW',
        'Coventry Climax', 'Yamaha'
    ],
    'Championships': [
        16, 12, 11, 10, 
        6, 4, 4, 4, 
        2, 2, 1, 1,
        4, 0
    ]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Step 2: Create a suitable DataFrame for bar chart race
manufacturers = df['Engine Manufacturer']
years = range(1950, 2024)  # F1 started in 1950, update the end year as needed
championships_per_year = {year: [0]*len(manufacturers) for year in years}

# Hardcode the year each engine manufacturer won their championships
championship_years = {
    'Ferrari': [1952, 1953, 1956, 1958, 1961, 1964, 1975, 1977, 1979, 2000, 2001, 2002, 2003, 2004, 2007, 2008],
    'Renault': [1992, 1995, 1996, 1997, 2005, 2006, 2010, 2011, 2012, 2013, 2022],
    'Mercedes': [1954, 1955, 1998, 1999, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Ford': [1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1978, 1981],
    'Honda': [1986, 1987, 1988, 1989, 1990, 1991],
    'Climax': [1962, 1963, 1965],
    'TAG': [1984, 1985, 1986, 1987],
    'BRM': [1962, 1963, 1965, 1971],
    'Alfa Romeo': [1950, 1951],
    'Repco': [1966, 1967],
    'Matra': [1969],
    'BMW': [1983],
    'Coventry Climax': [1960, 1962, 1963, 1965],
    'Yamaha': []
}

# Fill the championships_per_year with cumulative sum
for manufacturer, years_won in championship_years.items():
    idx = manufacturers[manufacturers == manufacturer].index[0]
    for year in years_won:
        if year in championships_per_year:  # Ensure the year is within the valid range
            championships_per_year[year][idx] += 1

# Convert to cumulative sum DataFrame
df_cumulative = pd.DataFrame(championships_per_year, index=manufacturers).T.cumsum()

# Fill any missing values with forward fill (if needed)
df_cumulative = df_cumulative.ffill()

# Step 3: Create the bar chart race
bcr.bar_chart_race(
    df=df_cumulative,
    filename='f1_engine_manufacturer_championships.mp4',
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
    title='F1 Engine Manufacturer Championships Over Time',
    bar_label_size=7,
    tick_label_size=7,
    shared_fontdict={'color': '.1'},
    scale='linear',
    writer=None,
    fig=None,
    bar_kwargs={'alpha': .7},
    filter_column_colors=False
)
