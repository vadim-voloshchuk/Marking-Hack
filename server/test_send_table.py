import requests


file = open('test.xlsx', 'rb')
print(file)
files = {'file': file}

res = requests.post('http://127.0.0.1:5000/get_charts', files=files)

file.close()
