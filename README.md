Food dine in application - Scanning particular QR from table, user can view the restaurant's menu listing and put the items in cart and place an order. Further, we provide intelligent analytics to the restaurants using Artificial Intelligence based forecasting models to predict the custom footfall and the top dishes predicted to be in demand for the coming week.

# Design:

User: The user interface is designed in such a way where, as a user arrives at the restaurant, he/she is expected to scan the QR code provided kept on the table: Once scanning of the QR Code is done, he can do the following things: 

1. Authentication via "Registration" Once user authentication is successful, the menu is displayed to the user.
2. Users have the capability to place an order from the web application itself.

Restaurant: The interface/dashboard on the restaurant side is designed in a way where they can: 

1. Receives order with table specific to the QR Code that user scans,  logs out user and that table will be free, i.e., once the payment for the order is done, the table occupied by the respective user is marked free for further occupancy.
2. Can check Free and Occupied Tables in a Restaurant .
3. Get the following insights based on previous orders at the restaurant: 
	1. On a particular day, the restaurant authorities can view top three dishes in demand for the next 1 week and prepare themselves to serve their customers effectively; and also mange the requirements of the particular food. 
	2. On a specific date, the authorities can also view the footfall of the customers in their restaurants and come up with an effective plan for crowd management.
	3. Through these insights, we enable restaurant owners make effective data driven decisions.

Additional Features:

1.  Helping restaurant owners convert paper based menus in the restaurants to digital menus on our platform using Google Vision API.
2.  If enabled, this will incentivize restaurant owners, to onboard to our platform quickly as on boarding will be absolutely hassle free for them.

Note: We were half way through this feature, but couldn't complete it due to time constraints.


# Tech Stack Used:
	Frontend - ReactJS
	Backend - Python, flask	
	Database - Firebase
	Machine leanring - Facebook prophet for forecasting of customer footfall and demand for next one week
	Cloud for docker - AWS

# Architecture Diagram

![Architecture Diagram](/resources/Architecture_1.png)
