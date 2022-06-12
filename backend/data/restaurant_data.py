import sys
from data.db import db
from data.order_data import *
restaurant_collection = db.collection(u'restaurants')

def register_restaurant_data(restaurant):
    
    restaurant_collection_doc = restaurant_collection.document(restaurant["restaurant_id"])
    restaurant_collection_doc.set(dict(restaurant))
    

def get_restaurant_data(restaurant_id):
    restaurant = restaurant_collection.document(restaurant_id).get()
    return restaurant

def update_restaurant_table_state(table_id, restaurant_id, order_id,state):
    restaurant_data = get_restaurant_data(restaurant_id).to_dict()
    tableStatus = restaurant_data['tableStatus']
    tableStatus[table_id-1]['available'] = state
    restaurant_data['tableStatus'] = tableStatus
    register_restaurant_data(restaurant_data)

