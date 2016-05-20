

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

80 nodes (2%) are attached to their parents as `case`.

80 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05.

The following 6 pairs of parts of speech are connected with `case`: [kk-pos/NOUN]()-[kk-pos/ADP]() (52; 65% instances), [kk-pos/PRON]()-[kk-pos/ADP]() (12; 15% instances), [kk-pos/NUM]()-[kk-pos/ADP]() (5; 6% instances), [kk-pos/VERB]()-[kk-pos/ADP]() (5; 6% instances), [kk-pos/AUX]()-[kk-pos/ADP]() (3; 4% instances), [kk-pos/PROPN]()-[kk-pos/ADP]() (3; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Иран	Иран	PROPN	np	_	2	nmod	_	top|nom
2	жерінде	жер	NOUN	n	_	3	nmod:poss	_	px3sp|loc
3	сақтар	сақ	NOUN	n	_	4	nmod:poss	_	pl|nom
4	тарихына	тарих	NOUN	n	_	7	nmod	_	px3sp|dat
5	қатысты	қатысты	ADP	post	_	4	case	_	_
6	мәдени	мәдени	ADJ	adj	_	7	amod	_	_
7	_	ескерткіш	NOUN	n	_	10	nsubj	_	pl|nom
8	_	да	PART	postadv	_	7	advmod	_	_
9	мол	мол	ADJ	adj	_	10	advmod	_	advl
10	сақталған	сақта	VERB	v	_	0	root	_	tv|pass|past|p3|pl
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Не	не	PRON	prn	_	4	nmod	_	itg|nom
2	үшін	үшін	ADP	post	_	1	case	_	_
3	екенін	е	VERB	cop	_	1	dobj	_	ger_past|px3sp|acc
4	_	біл	VERB	v	_	0	root	_	tv|aor|p2|frm|sg
5	_	ма	PART	qst	_	4	discourse	_	_
6	?	?	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Өнеркәсіпке	өнеркәсіп	NOUN	n	_	7	nmod	_	dat
2	қажетті	қажетті	ADJ	adj	_	3	amod	_	_
3	құрал-саймандар	құрал-саймандар	NOUN	n	_	7	nsubj	_	nom
4	90%-ға	90	NUM	num	_	7	nmod	_	percent|dat
5	дейін	дейін	ADP	post	_	4	case	_	_
6	шеттен	шет	NOUN	n	_	7	nmod	_	abl
7	әкелінеді	алып__кел	VERB	v	_	0	root	_	tv|pass|aor|p3|sg
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


