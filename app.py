import requests
from flask import Flask,render_template,request

import json 
import numpy as np
#import keras
#from sklearn.preprocessing import LabelEncoder

#import random
#import pickle

app = Flask(__name__)
lis = []

#######################################
with open("intents.json") as file:
	data = json.load(file)

# model = keras.models.load_model('chatmodel.h5')

# with open('tokenizer.pickle', 'rb') as handle:
# 	tokenizer = pickle.load(handle)

# with open('label_encoder.pickle', 'rb') as enc:
# 	lbl_encoder = pickle.load(enc)

# max_len = 20
##########################################


@app.route('/')
def home():
	return render_template('index.html')

# @app.route('/index.html')
# def index():
# 	return render_template('index.html')
# 	#return 'home'

@app.route('/features.html')
def features():
	return render_template('features.html')

@app.route('/contact.html')
def contact():
	return render_template('contact.html')

@app.route('/help.html',methods=['GET', 'POST'])
def help():
	if request.method == 'GET':
		lis.clear()
		lis.append(['BOT','Hello'])

	if request.method == 'POST':
		query = request.form['query']
		if query=='':
			return render_template('help.html',data=lis)
		query = query.lower()
		lis.append( ['YOU', query] )
		if query in ['exit','bye','good bye','thank you','goodbye','thankyou']:
			lis.clear()
			lis.append(['BOT','Pleasure to help'])
		else:
			#process the query 
			
			# result = model.predict(keras.preprocessing.sequence.pad_sequences(tokenizer.texts_to_sequences([query]),
			# 	truncating='post', maxlen=max_len))
			# tag = lbl_encoder.inverse_transform([np.argmax(result)])
			# for i in data['intents']:
			# 	if i['tag'] == tag:
			# 		repl = np.random.choice(i['responses'])
			repl = 'I cant understand..'
			for i in data['intents']:
				if i['tag']==query:
					repl = np.random.choice(i['responses'])
					break
			#repl = 'reply'
			lis.append( ['BOT',repl] )
			#[[who,reply1], [who,reply2]]
	return render_template('help.html', data=lis)




app.run()

