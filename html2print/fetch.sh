#! /bin/bash
CHAPTER="I-2-2-mathesis"
URL="https://mypads.framapad.org/p/i-2-2-mathesis-or-wisconst-gxqem7wd/export/txt"

wget $URL -O stories/${CHAPTER}.md
pandoc stories/${CHAPTER}.md -r markdown -t html -s -o stories/${CHAPTER}.tmp.html
cat stories/${CHAPTER}.tmp.html | awk '/<body>/,/<\/body>/' | sed 's/<body>//' | sed 's/<\/body>//' > stories/${CHAPTER}.html
rm -f stories/${CHAPTER}.tmp.html

CHAPTER="1-2-2-excursion7"
URL="https://mypads.framapad.org/p/excursion7-476cz767/export/txt"

wget $URL -O stories/${CHAPTER}.md
pandoc stories/${CHAPTER}.md -r markdown -t html -s -o stories/${CHAPTER}.tmp.html
cat stories/${CHAPTER}.tmp.html | awk '/<body>/,/<\/body>/' | sed 's/<body>//' | sed 's/<\/body>//' > stories/${CHAPTER}.html
rm -f stories/${CHAPTER}.tmp.html


CHAPTER="2-2-city-frontiers"
URL="https://mypads.framapad.org/p/boek2-chp2-city-frontiers-and-their-9e5hz7o9/export/txt"

wget $URL -O stories/${CHAPTER}.md
pandoc stories/${CHAPTER}.md -r markdown -t html -s -o stories/${CHAPTER}.tmp.html
cat stories/${CHAPTER}.tmp.html | awk '/<body>/,/<\/body>/' | sed 's/<body>//' | sed 's/<\/body>//' > stories/${CHAPTER}.html
rm -f stories/${CHAPTER}.tmp.html



