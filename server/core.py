from flask import Flask


app = Flask(__name__)

import routes

app.run(host='0.0.0.0', debug=True)
