import sys
from data.db import db

user_collection = db.collection(u'users')

def store_user_data(user):
    user_collection_doc = user_collection.document(order['number'])
    user_collection_doc.set(dict(user))



