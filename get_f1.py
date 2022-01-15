# Pulls data from FastF1 API

import fastf1 as ff1
import pandas as pd
import numpy as np
import json
import pymongo

def getLaps():
    # Enable the cache
    ff1.Cache.enable_cache('cache') 

    # Load the session data
    race = ff1.get_session(2021, 'Abu Dhabi', 'R')

    # Get the laps
    laps = race.load_laps(with_telemetry=False)

    # Calculate RaceLapNumber (LapNumber minus 1 since the warmup lap is included in LapNumber)
    laps['RaceLapNumber'] = laps['LapNumber'] - 1

    # Convert timedelta to time in seconds
    laps['Time'] = laps['Time'].dt.total_seconds().round(decimals = 3)
    laps['LapTime'] = laps['LapTime'].dt.total_seconds().round(decimals = 3)
    laps['PitOutTime'] = laps['PitOutTime'].dt.total_seconds().round(decimals = 3)
    laps['PitInTime'] = laps['PitInTime'].dt.total_seconds().round(decimals = 3)
    laps['Sector1Time'] = laps['Sector1Time'].dt.total_seconds().round(decimals = 3)
    laps['Sector2Time'] = laps['Sector2Time'].dt.total_seconds().round(decimals = 3)
    laps['Sector3Time'] = laps['Sector3Time'].dt.total_seconds().round(decimals = 3)
    laps['Sector1SessionTime'] = laps['Sector1SessionTime'].dt.total_seconds().round(decimals = 3)
    laps['Sector2SessionTime'] = laps['Sector2SessionTime'].dt.total_seconds().round(decimals = 3)
    laps['Sector3SessionTime'] = laps['Sector3SessionTime'].dt.total_seconds().round(decimals = 3)
    laps['LapStartTime'] = laps['LapStartTime'].dt.total_seconds().round(decimals = 3)

    # Keep only relevant columns
    laps = laps[['Driver', 'DriverNumber', 'Team', 'RaceLapNumber',
                'LapTime', 'Sector1Time', 'Sector2Time', 'Sector3Time',
                'Compound', 'Stint', 'TyreLife', 'PitOutTime', 'PitInTime',
                'Time', 'TrackStatus', 'IsAccurate']]

    laps = laps.fillna(0)

    laps.to_json('Data/laps.json')
    lap_data = laps.to_dict('records')

    return(lap_data)