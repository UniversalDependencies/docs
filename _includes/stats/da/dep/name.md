

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

1932 nodes (2%) are attached to their parents as `name`.

1643 instances of `name` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3731884057971.

The following 15 pairs of parts of speech are connected with `name`: [da-pos/PROPN]()-[da-pos/PROPN]() (1419; 73% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (452; 23% instances), [da-pos/NOUN]()-[da-pos/PROPN]() (14; 1% instances), [da-pos/PROPN]()-[da-pos/X]() (14; 1% instances), [da-pos/PROPN]()-[da-pos/NUM]() (13; 1% instances), [da-pos/X]()-[da-pos/PROPN]() (5; 0% instances), [da-pos/NUM]()-[da-pos/X]() (3; 0% instances), [da-pos/X]()-[da-pos/X]() (3; 0% instances), [da-pos/PROPN]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/VERB]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/X]() (1; 0% instances), [da-pos/NUM]()-[da-pos/NUM]() (1; 0% instances), [da-pos/X]()-[da-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 name	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubjpass	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	auxpass	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	nmod	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	name	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 name	color:blue
1	Eddie	Eddie	PROPN	_	_	0	root	_	_
2	Carbone	Carbone	PROPN	_	_	1	name	_	_
3	,	,	PUNCT	_	_	5	punct	_	_
4	italiensk-amerikansk	italiensk-amerikansk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	havnearbejder	havnearbejder	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	name	_	_
6	i	i	ADP	_	AdpType=Prep	7	case	_	_
7	New	New	PROPN	_	_	5	nmod	_	_
8	York	York	PROPN	_	_	7	name	_	_
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 name	color:blue
1	Fru	frue	X	_	Abbr=Yes	2	name	_	_
2	Baumann	Baumann	PROPN	_	_	3	nsubj	_	_
3	ryster	ryste	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
5	nyt	ny	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
6	gab	gab	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	dobj	_	_
7	af	af	ADP	_	AdpType=Prep	8	case	_	_
8	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	3	nmod	_	_
9	og	og	CONJ	_	_	3	cc	_	_
10	sætter	sætte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
11	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	10	dobj	_	_
12	frem	frem	ADV	_	_	10	nmod:loc	_	_
13	i	i	ADP	_	AdpType=Prep	14	case	_	_
14	stolen	stol	NOUN	_	Definite=Def|Gender=Com|Number=Sing	12	nmod	_	_
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


