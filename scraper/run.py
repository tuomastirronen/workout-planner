import urllib2
from bs4 import BeautifulSoup
import json

import datetime
time = datetime.datetime.now().isoformat()

muscles = []
moves = []

move_id = 0

for muscleid in range(1, 19): # muscle loop
    finderid = 1

    # Get muscle
    url = "https://www.bodybuilding.com/exercises/finder/" + str(finderid) + "/?muscleid=" + str(muscleid)
    page = urllib2.urlopen(url)
    soup = BeautifulSoup(page, 'html.parser')

    try:
        muscle = soup.find('div', class_='ExResult-cell ExResult-cell--nameEtc').find('div', class_='ExResult-muscleTargeted').find('a').text.strip()
        muscles.append({'id': muscleid, 'name': muscle, 'createdAt': time, 'updatedAt': time})
    except:
        muscleid = muscleid + 1

    

    while True: # finder loop        

        url = "https://www.bodybuilding.com/exercises/finder/" + str(finderid) + "/?muscleid=" + str(muscleid)
        page = urllib2.urlopen(url)
        soup = BeautifulSoup(page, 'html.parser')        

        moves_a = soup.find_all('div', class_='ExResult-cell ExResult-cell--nameEtc')

        if len(moves_a) == 0:
            break # break finder loop

        finderid = finderid + 1

        for move in moves_a:
            move_id = move_id + 1
            name = move.find('h3').find('a').text.strip()
            moves.append({'id': move_id, 'muscle_id': muscleid, 'name': name, 'createdAt': time, 'updatedAt': time})

with open('data/muscles.json', 'w') as outfile:
    json.dump(muscles, outfile, indent=4)

with open('data/moves.json', 'w') as outfile:
    json.dump(moves, outfile, indent=4)