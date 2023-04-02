import requests


res = requests.post('http://127.0.0.1:5000/get_addresses', params={'part_str': 'таганрог'})

print(res.text)
