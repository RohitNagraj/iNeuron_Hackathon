from twilio.rest import Client

client = Client(account_sid, auth_token)

APPROVED_STATUS = "approved"

def send_otp(number):
    verification = client.verify.services(service_id).verifications.create(to=number, channel='call')
    return verification.status


def is_otp_valid(number, otp):
    verification_check = client.verify.services(service_id).verification_checks.create(to=number, code=otp)

    if verification_check.status == APPROVED_STATUS:
        return True
    else:
        return False
