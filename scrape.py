import requests
from bs4 import BeautifulSoup

URL = "https://cecutsav.live/#tab-services"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
print(soup)