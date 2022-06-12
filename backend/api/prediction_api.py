from flask import Blueprint, request, jsonify
from plotly.offline import plot
import plotly.express as px
import pandas as pd
from fbprophet import Prophet
import random
import re
import tqdm
import datetime
import pickle


prediction = Blueprint('prediction', __name__)


with open('api/people_forecasting_v2.pickle', 'rb') as f:
    model = pickle.load(f)
    
df = pd.read_csv('api/frequent_items.csv')
dates = list(df['date'].unique())


def get_best_dishes(date):
    all_dish_details = {
        "Vegetable Samosa": {
            "url": 'https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900',
            'name': "Vegetable Samosa"
        },

        "Onion Bhaji": {
            "url": 'https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg',
            'name': "Onion Bhaji"
        },

        "Plain Papadum": {
            "url": 'https://5.imimg.com/data5/NL/IR/TH/SELLER-58879595/plain-papad-500x500.jpg',
            'name': "Plain Papadum"
        },

        "Sheek Kehab": {
            "url": 'https://www.ndtv.com/cooks/images/seekh-kebab-620.jpg',
            'name': "Sheek Kehab"
        },

        "Mushroom - Chicken Tikka": {
            "url": 'https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1.jpg',
            'name': "Mushroom - Chicken Tikka"
        }
    }
    
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    outputs = []
    combined_results = []
    daylist = []
    
    def get_dish_details(x):
        details = all_dish_details[x['item']]
        if x['pred'] > 100:
            count = x['pred']/5 + random.randint(-3, 3)
            count = int(count)
            details['description'] = f"Looks like people are loving your {x['item']}. Estimated sales: {count}"
        else:
            count = x['pred']
            details['description'] = f"You have the best {x['item']} in the area. Looks like you will sell {count} {x['item']}."
            
        outputs.append(details)
    
    idx = dates.index(date)
    for i in range(idx+1, idx+8):
        outputs = []
        subset = df[df['date'] == dates[i]].sort_values(by='pred', ascending=False)[:3]
        subset.apply(lambda x: get_dish_details(x), axis=1)
        
        daylist.append(days[datetime.datetime.strptime(dates[i], '%Y-%m-%d').weekday()])
        res = {
            'day': days[datetime.datetime.strptime(dates[i], '%Y-%m-%d').weekday()],
            'predictedDishes': outputs
        }
        combined_results.append(res)
    chartData = get_footfall(date)
    return {'dayList': daylist, 'dayPredictions': combined_results, 'chartData':chartData}

def get_footfall(date):
    predictions = {}
    date_obj = datetime.datetime.strptime(date, '%Y-%m-%d')
    dates = [date_obj-datetime.timedelta(i) for i in range(7, 0, -1)]
    dates.extend([date_obj + datetime.timedelta(i) for i in range(0, 8)])

    for date_idx in dates:
        date_str = date_idx.strftime('%Y-%m-%d')
        predictions[date_str] = int(model.predict(pd.DataFrame({'ds': [date_str]}))['yhat'][0])
    
    res_df = {
        'date': [],
        'footfall': []
    }
    for k, v in predictions.items():
        res_df['date'].append(k)
        res_df['footfall'].append(v)
    res_df = pd.DataFrame(res_df)
    fig = px.line(res_df, x='date', y='footfall').to_json()
    return fig

@prediction.route("/getPrediction", methods=['GET'])
def get_prediction():
    args = request.args
    date = args['date']
    return get_best_dishes(date), 200
