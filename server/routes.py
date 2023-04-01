from __main__ import app
from flask import request
from fictitious_back import send_params, send_table
import pandas as pd
import binascii
import io


INCORRECT_REQUEST_TYPE = "Неверный тип запроса!"
FILE_ERROR = "Ошибка чтения файла!"


@app.route("/")
def hello():
    return "Hello!"

@app.route("/get_charts", methods=['POST'])
def get_charts():
    if request.method == 'POST':
        if 'file' not in request.files:
            print(FILE_ERROR)
            return FILE_ERROR
        # print(request.files['file'])
        send_table(pd.read_excel(request.files['file']))
        return "OK"
    else:
        print(INCORRECT_REQUEST_TYPE)
        return INCORRECT_REQUEST_TYPE
    
@app.route("/get_charts_from_params", methods=['POST'])
def get_charts_from_params():
    raw = request.json
    print(raw)
    binary_string = binascii.unhexlify(raw['weekly sales'])
    string = str(binary_string)
    print(type(string))
    print(string[2:len(string)-1])
    csv_file = pd.read_csv(io.BytesIO(binary_string))
    print(csv_file)
    return 'OK'

@app.route("/get_members", methods=['GET'])
def get_members():
    return "OK"

@app.route("/get_product_list", methods=['GET'])
def get_product_list():
    return "OK"
