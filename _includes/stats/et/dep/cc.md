

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

1175 nodes (3%) are attached to their parents as `cc`.

1163 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35829787234043.

The following 10 pairs of parts of speech are connected with `cc`: [et-pos/VERB]()-[et-pos/CCONJ]() (691; 59% instances), [et-pos/NOUN]()-[et-pos/CCONJ]() (247; 21% instances), [et-pos/ADJ]()-[et-pos/CCONJ]() (116; 10% instances), [et-pos/PROPN]()-[et-pos/CCONJ]() (52; 4% instances), [et-pos/ADV]()-[et-pos/CCONJ]() (43; 4% instances), [et-pos/PRON]()-[et-pos/CCONJ]() (14; 1% instances), [et-pos/AUX]()-[et-pos/CCONJ]() (6; 1% instances), [et-pos/NUM]()-[et-pos/CCONJ]() (4; 0% instances), [et-pos/DET]()-[et-pos/CCONJ]() (1; 0% instances), [et-pos/INTJ]()-[et-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
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


