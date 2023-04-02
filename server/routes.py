from __main__ import app
from flask import request
from fictitious_back import send_params, send_table
import pandas as pd
import binascii
import io
from consts import *
from func import read_table
from datetime import datetime
import json
from fuzzywuzzy import fuzz


addresses_lst = pd.read_csv('addresses.csv').to_numpy()
print(addresses_lst)

@app.route("/")
def hello():
    return "Hello!"

@app.route("/processing", methods=['POST'])
def processing():
    if request.method == 'POST':
        if 'file' in request.files:
            table = request.files['file']
            table = read_table(table)

            return json.dumps(send_table(table))
        else:
            raw = request.json
            binary_string = binascii.unhexlify(raw['weekly sales'])
            table = io.BytesIO(binary_string)
            table = read_table(table)

            return json.dumps(send_params(float(raw['cost']), raw['location'], datetime.strptime(raw['planning date'], '%d.%m.%Y').date(),
                        raw['category'], float(raw['weight']), table))
    else:
        print(INCORRECT_REQUEST_TYPE)
        return INCORRECT_REQUEST_TYPE

@app.route("/get_addresses", methods=['POST'])
def get_addresses():
    search_dict = {}
    for each_address in addresses_lst:
        address_str = str(each_address)
        search_dict[address_str[2:len(address_str)-2]] = fuzz.WRatio(request.args['part_str'], str(each_address))

    sorted_addresses = dict(sorted(search_dict.items(), key=lambda item: item[1], reverse=True))

    count = 0
    addresses_to_front = []
    for each in sorted_addresses:
        addresses_to_front.append(each)
        count += 1
        if count > 9:
            break

    return json.dumps(addresses_to_front)

@app.route("/get_sale_types", methods=['GET'])
def get_sale_types():
    with open('sale_types.txt', 'rt', encoding='UTF-8') as types_file:
        sale_types = types_file.readlines()
    return json.dumps(sale_types)