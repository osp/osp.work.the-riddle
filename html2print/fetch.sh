#! /bin/bash

declare -a PADS
readarray -t PADS < ../pads.txt

for LINE in "${PADS[@]}"; do
	IFS=';' read -ra PADDATA <<< $LINE
	URL=${PADDATA[1]}
	CHAPTER=${PADDATA[0]}

	wget $URL -O stories/${CHAPTER}.md
	pandoc stories/${CHAPTER}.md -r markdown -t html -s -o stories/${CHAPTER}.tmp.html
	cat stories/${CHAPTER}.tmp.html | awk '/<body>/,/<\/body>/' | sed 's/<body>//' | sed 's/<\/body>//' > stories/${CHAPTER}.html
	rm -f stories/${CHAPTER}.tmp.html
done

