from flask import Blueprint, request
from data.order_data import *
from data.restaurant_data import *
from data.user_data import *
from api.utils.twilio import *
user = Blueprint('user', __name__)

@user.route("/getOtp", methods=['POST'])
def get_otp():
    try:
        body = request.json
        mobile_number = body['number']
        status = send_otp(mobile_number)
        return {
            'message':'OTP Sent successfully',
            'status': status
        }
    except:
        return {
            'message':"Error occurred"
        }, 500

# This verified OTP and registers.
@user.route("/verifyOtp", methods=['POST'])
def verify_and_register():
    try:
        body = request.json
        mobile_number = body['number']
        otp = body['otp']
        if is_otp_valid(mobile_number, otp):
            user = {
                'number': mobile_number,
            }
            store_user_data(user)
            return {
                'message': 'OTP Verified',
                'isSuccess': True
            }, 200
        else:
            return {
                'message': 'Invalid OTP',
                'isSuccess': False
            }, 200
    except:
        return {
            'message': 'Error occurred'
        }, 500
