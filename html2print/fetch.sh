CHAPTER="test"
URL="url/export/txt"

wget $URL -O stories/${CHAPTER}.md
pandoc stories/${CHAPTER}.md -r markdown -t html -s -o stories/${CHAPTER}.tmp.html
cat stories/${CHAPTER}.tmp.html | awk '/<body>/,/<\/body>/' | sed 's/<body>//' | sed 's/<\/body>//' > stories/${CHAPTER}.html
rm -f stories/${CHAPTER}.tmp.html
