from pymongo import MongoClient
client = MongoClient('mongodb+srv://springduck:3227@cluster0.mbqeihr.mongodb.net/cluster0?retryWrites=true&w=majority')
db = client.dbsparta

user = db.movies.find_one({'title':'가버나움'})['star']

all_users = list(db.movies.find({'star':user},{'_id':False}))

db.movies.update_one({'title':'가버나움'},{'$set':{'star':"0"}})