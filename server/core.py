from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import routes

app.run(host='0.0.0.0', debug=True)
