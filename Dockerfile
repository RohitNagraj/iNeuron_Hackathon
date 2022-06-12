FROM nikolaik/python-nodejs:python3.8-nodejs16-slim

RUN pip3 install --upgrade pip

RUN pip3 install --upgrade numpy pandas convertdate

# RUN pip3 install --upgrade pandas

RUN pip install pystan==2.19.1.1

RUN mkdir backend

ADD backend/requirements.txt /

# RUN apt update

RUN pip3 install -r /requirements.txt

ADD ./backend /backend
# ADD ./main /main
# ADD ./main2 /main2

# WORKDIR /main

# RUN npm install

# WORKDIR /main2

# RUN npm install
# RUN npm i react-scripts

WORKDIR /backend
# RUN apt-get update

ENV GOOGLE_APPLICATION_CREDENTIALS=/backend/key.json

# ADD ./start.sh /



# RUN ACCEPT_EULA=Y apt-get install -y msodbcsql17

# RUN ACCEPT_EULA=Y apt-get install -y mssql-tools

CMD ["python", "app.py"]

