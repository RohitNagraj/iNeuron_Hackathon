Food dine in application - Scanning particular QR from table user can view the restaurant's menu listing and put the items in cart and place an order.

# Design:
User:
	The user interface is designed in such a way where, as a user arrives at the restaurant, he/she is exped to scan the QR code provided kept on the table:
	Once scnning of the QR Code is done, he can do the following things:
		Authentication via "Registeration"
		Once user authentication is successful, the menu is displayed
		User can add food items into the cart to place an ourder

Restaurant:
	The interface/dashboard on the restaurant side is designed in a way where they can:
		Receives order with table specific to the QR Code that user scans
		Logout User and that table will be free, i.e., once the payment for the order is done, the table occupied by the respective user is marked free for further occupancy
		Can check Free and Occupied Tables in a Restaurant
		Get the following insights based on previous orders at the restaurant:
			1. On a particular day, the restaurant authorites can view top three dishes in demand for the next 1 week and prepare themselves to serve their customers effectively; and also mange the requirements of the particular food.
			2. On a specific date, the authorities can also view the footfall of the customers in their restaurants and come up with an effective plan for crowd management.

# Tech Stack Used:
	Frontend - ReactJS
	Backend - Python, flask	
	Database - Firebase
	Machine leanring - Facebook prophet for forecasting of customer footfall and demand for next one week
	Cloud for docker - AWS

# Directory Structure
	/restaurant-app/main - contains the relevant code for Restaurant Dashboard
	/restaurant-app/main2 - contains relevant code for User Interface
	/restaurant-app/backend - contains relevant codes and api's for the backend of the application

# Architecture Diagram

![Architecture Diagram]('resources/architecture.png')