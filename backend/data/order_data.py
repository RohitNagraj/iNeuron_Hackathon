import sys
from data.db import db

order_collection = db.collection(u'orders')

def create_order_data(order):
    order_collection_doc = order_collection.document(order['orderId'])
    order_collection_doc.set(dict(order))

def get_order_data(order_id):
    order = order_collection.document(order_id).get()
    return order

def get_restaurant_orders_data(restaurant_id):

    orders = order_collection.stream()
    restaurant_orders = list()
    for order in orders:
        if(order.to_dict()['restaurantId'] == restaurant_id):
            restaurant_orders.append(order.to_dict())
    status_sorted_order = sorted(restaurant_orders, key= lambda order: order['orderStatus'])
    time_sorted_error = sorted(status_sorted_order, key= lambda order: order['orderCreatedAt'], reverse=True)
    return restaurant_orders

def update_order_data(order_id):
    order = order_collection.document(order_id)
    updates = {"orderStatus": "COMPLETED"}
    order.update(updates)
