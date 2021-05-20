import requests
from flask import Flask,render_template,request

app = Flask(__name__)
lis = []

@app.route('/')
def home():
	#return render_template('form.html',data=lis)
	return 'home'

@app.route('/chat',methods=['GET', 'POST'])
def chat():
	if request.method == 'GET':
		lis.clear()
		lis.append(['BOT','Hello'])

	if request.method == 'POST':
		query = request.form['query']
		lis.append( ['YOU', query] )
		if query=='exit':
			lis.clear()
			lis.append(['BOT','Pleasure to help'])
		else:
			#process the query 
			repl = 'reply'
			lis.append( ['BOT',repl] )
			#[[who,reply1], [who,reply2]]
	return render_template('form.html', data=lis)




app.run(host='localhost', port=5000)

