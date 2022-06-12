from flask import Blueprint, Response, request, jsonify
from data.order_data import *
from data.restaurant_data import *
from data.user_data import *
restaurant = Blueprint('restaurant', __name__)

@restaurant.route("/registerRestaurant",methods=['POST'])
def register_restaurant():
    try:
        restaurant = {
            "restaurant_id": "RESTAURANT_1",
            "menu": [
                {
                    "id": 1,
                    "url":"https://holycowvegan.net/wp-content/uploads/2016/06/vegan-dal-makhani-3.jpg",
                    "name": "Dal Makhni",
                    "price": 200,
                    "description": "Great dal with awesome flavours"
                },
                {
                    "id": 2,
                    "name": "Paneer Makhni",
                                        "url":"https://holycowvegan.net/wp-content/uploads/2016/06/vegan-dal-makhani-3.jpg",
                    "price": 300,
                    "description": "Great Paneer with awesome flavours"
                },
                {
                    "id": 3,
                    "name": "Paneer Handi",
                                        "url":"https://holycowvegan.net/wp-content/uploads/2016/06/vegan-dal-makhani-3.jpg",
                    "price": 200,
                    "description": "Great Paneer with awesome flavours"
                },
                {
                    "id": 4,
                    "name": "Paneer korma",
                                        "url":"https://holycowvegan.net/wp-content/uploads/2016/06/vegan-dal-makhani-3.jpg",
                    "price": 330,
                    "description": "Great Paneer with awesome flavours"
                },
                {
                    "id": 5,
                    "name": "Paneer Kaju",
                    "url":"https://holycowvegan.net/wp-content/uploads/2016/06/vegan-dal-makhani-3.jpg",
                    "price": 300,
                    "description": "Great Paneer with awesome flavours"
                }
            ],
            "numTables": 10,
            "tableStatus": [
                {
                    "id": 1,
                    "available": True
                },
                {
                    "id": 2,
                    "available": True
                },
                {
                    "id": 3,
                    "available": True
                },
                {
                    "id": 4,
                    "available": True
                },
                {
                    "id": 5,
                    "available": True
                },
                {
                    "id": 6,
                    "available": True
                },
                {
                    "id": 7,
                    "available": True
                },
                {
                    "id": 8,
                    "available": True
                },
                {
                    "id": 9,
                    "available": True
                },
                {
                    "id": 10,
                    "available": True
                }
            ]
        }
        register_restaurant_data(restaurant)
        return {
            'message':'Restaurant Registered'
        }, 200
    except:
        return {
            'message':'Error occurred'
        }, 500

@restaurant.route("/getRestaurant",methods=['GET'])
def get_restaurant():
    try:
        args = request.args
        restaurant_id = args['restaurant_id']
        restaurant = get_restaurant_data(restaurant_id)
        return jsonify(restaurant.to_dict())
    except:
        return {
            'message': 'some error occurred'
        }, 500

@restaurant.route("/updateTableState",methods=['GET'])
def update_table_state():
    try:
        args = request.json
        restaurant_id = args['restaurant_id']
        table_id = args['table_id']
        order_id = args['order_id']
        update_restaurant_table_state(table_id, restaurant_id, order_id, True)
        update_order_data(order_id)
        return {
            'message':"State Updated"
        }, 200
    except:
        return {
            'message': 'some error occurred'
        }, 500