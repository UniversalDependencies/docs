

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

29 nodes (0%) are attached to their parents as `discourse`.

18 instances of `discourse` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.27586206896552.

The following 6 pairs of parts of speech are connected with `discourse`: [da-pos/VERB]()-[da-pos/INTJ]() (21; 72% instances), [da-pos/ADV]()-[da-pos/INTJ]() (4; 14% instances), [da-pos/ADP]()-[da-pos/INTJ]() (1; 3% instances), [da-pos/INTJ]()-[da-pos/INTJ]() (1; 3% instances), [da-pos/NOUN]()-[da-pos/INTJ]() (1; 3% instances), [da-pos/PROPN]()-[da-pos/INTJ]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Ja	ja	INTJ	_	_	5	discourse	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	"	"	PUNCT	_	_	2	punct	_	_
5	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	vender	vende	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
10	om	om	ADV	_	_	8	obl:loc	_	_
11	på	på	ADP	_	AdpType=Prep	12	case	_	_
12	siden	side	NOUN	_	Definite=Def|Gender=Com|Number=Sing	10	obl	_	_
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 discourse	color:blue
1	Er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
2	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	sportslige	sportslig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	4	amod	_	_
4	tilbud	tilbud	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	nsubj	_	_
5	ikke	ikke	ADV	_	_	6	advmod	_	_
6	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	16	mark	_	_
7	nok	nok	ADV	_	_	6	advmod	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	ja	ja	INTJ	_	_	16	discourse	_	_
10	så	så	ADV	_	_	16	advmod	_	_
11	bliver	blive	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
12	sportens	sport	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	15	nmod:poss	_	_
13	meget	meget	ADV	_	Degree=Pos	14	advmod	_	_
14	troløse	troløs	ADJ	_	Degree=Pos|Number=Plur	15	amod	_	_
15	tilskuere	tilskuer	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	16	nsubj	_	_
16	væk	væk	ADV	_	_	0	root	_	_
17	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 discourse	color:blue
1	Og	og	CCONJ	_	_	8	cc	_	_
2	i	i	ADP	_	AdpType=Prep	3	case	_	_
3	Danmark	Danmark	PROPN	_	_	8	obl	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	ja	ja	INTJ	_	_	2	discourse	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	her	her	ADV	_	_	8	advmod	_	_
8	spøger	spøge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	stadig	stadig	ADV	_	_	8	advmod	_	_
10	spørgsmålet	spørgsmål	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	8	nsubj	_	_
11	om	om	ADP	_	AdpType=Prep	14	case	_	_
12	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	14	det	_	_
13	bebudede	bebude	VERB	_	Definite=Def|Number=Sing|Tense=Past|VerbForm=Part	14	amod	_	_
14	rationalisering	rationalisering	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	10	nmod	_	_
15	af	af	ADP	_	AdpType=Prep	19	case	_	_
16	de	den	DET	_	Number=Plur|PronType=Dem	19	det	_	_
17	to	to	NUM	_	NumType=Card	19	nummod	_	_
18	københavnske	københavnsk	ADJ	_	Degree=Pos|Number=Plur	19	amod	_	_
19	bryggerier	bryggeri	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	14	nmod	_	_
20	.	.	PUNCT	_	_	8	punct	_	_

~~~


