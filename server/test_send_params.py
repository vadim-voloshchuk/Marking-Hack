import requests
import base64
import pandas as pd


file = open('test.csv', 'rb')
print(file)

byte_str = ''
while True:
    byte = file.read(1)
    if byte == b'':
        break
    byte_str += byte.hex()

print(type(byte_str))
print(byte_str)

params = {'cost': 1000, 
          'location': [['Россия', 'Ростовская область', 'Таганрог']], 
          'planning date': '01.04.2023',
          'category': ['сыр', 'колбаса'],
          'brand':'abibas',
          'weight':100,
          'weekly sales': byte_str}

res = requests.post('http://127.0.0.1:5000/get_charts_from_params', json=params)
