from flask import Flask
from api.orders_api import order
from api.restaurant_api import restaurant
from api.users_api import user
from api.prediction_api import prediction
from flask_cors import CORS


app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

app.register_blueprint(order)
app.register_blueprint(restaurant)
app.register_blueprint(user)
app.register_blueprint(prediction)

# export GOOGLE_APPLICATION_CREDENTIALS=/Users/raghavmaheshwari/Desktop/Hackathon/backend/key.json

if __name__ == '__main__':
	app.run(debug=True)



