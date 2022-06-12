from flask import Blueprint, request, jsonify
from random import randint, randrange
from datetime import datetime
from data.order_data import *
from data.restaurant_data import *
from data.user_data import *
order = Blueprint('order', __name__)



@order.route("/placeOrder", methods=['POST'])
def place_order():

    try: 
        data = request.json

        order_id = "orderId" + str(randint(100,999))
        restaurant_id = data['restaurant_id']
        menu_ids = data['menu_ids']
        table_id = data['table_id']

        restaurant = get_restaurant_data(restaurant_id)
        restaurant_menu = restaurant.to_dict()['menu']

        order_menu = list(filter(lambda menu: menu['id'] in menu_ids, restaurant_menu))
        

        orderData = {
            "orderId": order_id,
            "selectedDishes": order_menu,
            "restaurantId": restaurant_id,
            "totalAmount": data['total_amount'],
            "orderCreatedAt": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "tableId": table_id,
            "orderStatus": "PENDING"
        }    

        create_order_data(orderData)
        update_restaurant_table_state(table_id, restaurant_id, order_id,False)
        return {
            'message': 'Order Placed'
        }, 200
    except: 
        return {
            'message': 'Some error occurred'
        }, 500

@order.route("/getOrder", methods=['GET'])
def get_order():
    try:
        order_id = request.args['order_id']
        order = get_order_data(order_id)
        return jsonify(order.to_dict())
    except: 
        return {
            'message': "Error occurred",
        }, 500

@order.route("/getOrdersByRestaurant", methods=['GET'])
def get_orders_by_restaurant():
    try:
        restaurant_id = request.args['restaurant_id']
        orders = get_restaurant_orders_data(restaurant_id)
        return jsonify(orders)
    except:
        return {
            'message': 'Error occurred'
        }, 500