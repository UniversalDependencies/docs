

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is universal.

959 nodes (1%) are attached to their parents as `cop`.

947 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55683003128259.

The following 7 pairs of parts of speech are connected with `cop`: [id-pos/NOUN]()-[id-pos/AUX]() (757; 79% instances), [id-pos/PROPN]()-[id-pos/AUX]() (131; 14% instances), [id-pos/VERB]()-[id-pos/AUX]() (39; 4% instances), [id-pos/ADJ]()-[id-pos/AUX]() (17; 2% instances), [id-pos/NUM]()-[id-pos/AUX]() (13; 1% instances), [id-pos/DET]()-[id-pos/AUX]() (1; 0% instances), [id-pos/PRON]()-[id-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Let	_	PROPN	_	_	5	nsubj	_	_
2	It	_	PROPN	_	_	1	flat	_	_
3	Shine	_	PROPN	_	_	2	flat	_	_
4	adalah	_	AUX	_	_	5	cop	_	_
5	film	_	NOUN	_	_	0	root	_	_
6	televisi	_	NOUN	_	_	5	compound	_	_
7	2012	_	NUM	_	NumType=Card	6	nummod	_	SpaceAfter=No
8	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Fungsi	_	NOUN	_	_	6	nsubj	_	_
2	utama	_	ADJ	_	_	1	amod	_	_
3	silika	_	NOUN	_	_	1	det	_	_
4	adalah	_	AUX	_	_	6	cop	_	_
5	sebagai	_	ADP	_	_	6	case	_	_
6	asam	_	PROPN	_	_	0	root	_	SpaceAfter=No
7	,	_	PUNCT	_	_	6	punct	_	_
8	yang	_	PRON	_	_	9	nsubj	_	_
9	membentuk	_	VERB	_	_	6	acl	_	_
10	silikat	_	NOUN	_	_	9	obj	_	SpaceAfter=No
11	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Sekitar	_	ADP	_	_	3	case	_	_
2	39	_	NUM	_	NumType=Card	3	nummod	_	_
3	persen	_	NOUN	_	_	6	obl	_	_
4	lagi	_	ADV	_	_	3	advmod	_	_
5	adalah	_	AUX	_	_	6	cop	_	_
6	beragama	_	VERB	_	_	0	root	_	_
7	tradisional	_	ADJ	_	_	6	amod	_	_
8	Marapu	_	PROPN	_	_	7	flat	_	SpaceAfter=No
9	.	_	PUNCT	_	_	6	punct	_	_

~~~


