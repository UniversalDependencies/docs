

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1536 nodes (4%) are attached to their parents as `conj`.

1536 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.349609375.

The following 40 pairs of parts of speech are connected with `conj`: [et-pos/VERB]()-[et-pos/VERB]() (724; 47% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (267; 17% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (113; 7% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (72; 5% instances), [et-pos/ADJ]()-[et-pos/VERB]() (64; 4% instances), [et-pos/VERB]()-[et-pos/ADJ]() (41; 3% instances), [et-pos/VERB]()-[et-pos/NOUN]() (40; 3% instances), [et-pos/NOUN]()-[et-pos/VERB]() (31; 2% instances), [et-pos/ADV]()-[et-pos/ADV]() (25; 2% instances), [et-pos/AUX]()-[et-pos/VERB]() (15; 1% instances), [et-pos/PRON]()-[et-pos/VERB]() (13; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (13; 1% instances), [et-pos/NUM]()-[et-pos/NUM]() (12; 1% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (11; 1% instances), [et-pos/VERB]()-[et-pos/PRON]() (11; 1% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (9; 1% instances), [et-pos/VERB]()-[et-pos/ADV]() (9; 1% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (8; 1% instances), [et-pos/ADV]()-[et-pos/NOUN]() (6; 0% instances), [et-pos/ADV]()-[et-pos/VERB]() (6; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (5; 0% instances), [et-pos/AUX]()-[et-pos/ADJ]() (4; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (4; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (4; 0% instances), [et-pos/ADJ]()-[et-pos/ADV]() (3; 0% instances), [et-pos/ADP]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (3; 0% instances), [et-pos/PROPN]()-[et-pos/PRON]() (3; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (2; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/ADV]()-[et-pos/PRON]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/ADV]() (2; 0% instances), [et-pos/VERB]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (1; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/DET]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/DET]()-[et-pos/DET]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/X]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	Ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	riietus	riietuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	korralikult	korralikult	ADV	D	_	2	advmod	_	_
4	ja	ja	CCONJ	J	_	5	cc	_	_
5	vaatas	vaatama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
6	ennast	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	5	obj	_	_
7	esikupeeglist	esiku_peegel	NOUN	S	Case=Ela|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Palju	palju	ADV	D	_	8	advmod	_	_
2	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	3	det	_	_
3	korteri	korter	NOUN	S	Case=Gen|Number=Sing	4	nmod	_	_
4	remont	remont	NOUN	S	Case=Nom|Number=Sing	8	nsubj	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	mööblitükid	mööbli_tükk	NOUN	S	Case=Nom|Number=Plur	4	conj	_	_
7	peaksid	pidama	AUX	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	maksma	maksma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	8	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Kas	kas	ADV	D	_	7	advmod	_	_
2	jälle	jälle	ADV	D	_	7	advmod	_	_
3	üks	üks	DET	P	Case=Nom|Number=Sing|PronType=Ind	7	det	_	_
4	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	tundmatu	tundmatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	põlvkond	põlvkond	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
8	...	...	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	_	_

~~~


