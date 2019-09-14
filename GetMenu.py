from requests_html import HTMLSession
import datetime
from bs4 import BeautifulSoup

#takes two strings, one that says the dining hall name
# and one that details which meal. Returns an array of all
#the food items for that meal at that dining hall
def getMenu(diningHall, mealTime):
	session = HTMLSession()
	today = datetime.date.today()
	date = today.strftime('%Y/%m/%d')
	URL = "https://dining.purdue.edu/menus/" + diningHall +"/" + date + "/" + mealTime
	r = session.get(URL)
	r.html.render()
	items = r.html.find('.station-item-text')

	menuItems = []
	for i in range(0, len(items)):
		menuItems.append(items[i].text)
	return menuItems

#test
#foodList = getMenu("Earhart", "Lunch")
#for n in range(0, len(foodList)):
	#print(foodList[n])
