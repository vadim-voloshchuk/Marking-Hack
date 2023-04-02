from __main__ import app
from flask import request
from fictitious_back import send_params, send_table
import pandas as pd
import binascii
import io
from consts import *
from func import read_table
from datetime import datetime


@app.route("/")
def hello():
    return "Hello!"

@app.route("/get_charts_from_table", methods=['POST'])
def get_charts_from_table():
    if request.method == 'POST':
        if 'file' not in request.files:
            print(FILE_ERROR)
            return FILE_ERROR

        table = request.files['file']
        table = read_table(table)

        return send_table(table)
    else:
        print(INCORRECT_REQUEST_TYPE)
        return INCORRECT_REQUEST_TYPE
    
@app.route("/get_charts_from_params", methods=['POST'])
def get_charts_from_params():
    if request.method == 'POST':
        raw = request.json
        binary_string = binascii.unhexlify(raw['weekly sales'])
        table = io.BytesIO(binary_string)
        table = read_table(table)

        return send_params(float(raw['cost']), raw['location'], datetime.strptime(raw['planning date'], '%m.%d.%Y').date(),
                    raw['category'], raw['brand'], float(raw['weight']), table)
    else:
        print(INCORRECT_REQUEST_TYPE)
        return INCORRECT_REQUEST_TYPE

@app.route("/get_members", methods=['GET'])
def get_members():
    return "OK"

@app.route("/get_product_list", methods=['GET'])
def get_product_list():
    return "OK"
