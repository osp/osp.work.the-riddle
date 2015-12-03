#!/usr/bin/env python
# -*- coding: utf-8 -*-

import urllib2
import flask

def geturl (url):
    handle = urllib2.urlopen(url)
    buff = ''
    while True:
        chunk = handle.read(4096)
        if not chunk:
            break
        buff += chunk

    return buff

app = flask.Flask(__name__)

@app.route("/get", methods=['GET'])
def get():
    return geturl(flask.request.args['url'])

@app.route("/", methods=['GET'])
def index():
    return 'Call 0.0.0.0:5000?url=&lt;url you\'d like to retreive&gt;'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)