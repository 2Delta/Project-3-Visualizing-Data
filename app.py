
from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
from flask.json import JSONEncoder
import pandas as pd
import numpy as np
import json
import get_f1

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/f1_app")
f1_data = mongo.db.f1_data

# Route to render index.html template for initial scraping
@app.route("/")
def home():

    # Return template
    return render_template("index.html")

# Route that will trigger the scrape function
@app.route("/getdata")
def get_data():

    # Run the scrape function and save the results to a variable
    lap_data = get_f1.getLaps()

    # clear the Mongo database and insert lap data
    f1_data.delete_many({})
    f1_data.insert_many(lap_data)

    return redirect("/data")

# Route to render data.html template using data from Mongo
@app.route("/data")
def data():

    # Find one record of data from the mongo database
    all_laps = f1_data.find()

    # Return template and data
    return render_template("data.html", laps=all_laps)

@app.route("/data/laps")
def get_laps():
    all_laps = f1_data.find({}, {"_id": 0})
    
    lap_data = []

    for x in all_laps:
        lap_data.append(x)

    return jsonify(lap_data)

if __name__ == "__main__":
    app.run(debug=True)