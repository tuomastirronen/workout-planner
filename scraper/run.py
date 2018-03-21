import urllib2
from bs4 import BeautifulSoup


for muscleid in range(1, 18): # muscle loop
    finderid = 1
    while True: # finder loop

        url = "https://www.bodybuilding.com/exercises/finder/" + str(finderid) + "/?muscleid=" + str(muscleid)
        page = urllib2.urlopen(url)
        soup = BeautifulSoup(page, 'html.parser')
        moves = soup.find_all('div', class_='ExResult-cell ExResult-cell--nameEtc')    

        if len(moves) == 0:
            break # break finder loop

        finderid = finderid + 1

        for move in moves:
            name = move.find('h3').find('a').text.strip()
            muscle =  move.find('div', class_='ExResult-muscleTargeted').find('a').text.strip()
            print muscle, "->", name