

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:quant]().

2708 nodes (8%) are attached to their parents as `advmod`.

1773 instances of `advmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89660265878877.

The following 11 pairs of parts of speech are connected with `advmod`: [et-pos/VERB]()-[et-pos/ADV]() (1780; 66% instances), [et-pos/ADJ]()-[et-pos/ADV]() (349; 13% instances), [et-pos/NOUN]()-[et-pos/ADV]() (258; 10% instances), [et-pos/ADV]()-[et-pos/ADV]() (176; 6% instances), [et-pos/PRON]()-[et-pos/ADV]() (65; 2% instances), [et-pos/NUM]()-[et-pos/ADV]() (28; 1% instances), [et-pos/PROPN]()-[et-pos/ADV]() (24; 1% instances), [et-pos/SCONJ]()-[et-pos/ADV]() (11; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (6; 0% instances), [et-pos/DET]()-[et-pos/ADV]() (6; 0% instances), [et-pos/ADP]()-[et-pos/ADV]() (5; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod	color:blue
1	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	teadis	teadma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ju	ju	ADV	D	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	millist	milline	DET	P	Case=Par|Number=Sing|PronType=Rel	6	det	_	_
6	palka	palk	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
7	näitlejad	näitleja	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
8	saavad	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	0	root	_	_
2	üle	üle	ADP	K	AdpType=Post	1	case	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	_	_
4	tal	tema	PRON	P	Case=Ade|Number=Sing|Person=3|PronType=Prs	1	obl	_	_
5	eriti	eriti	ADV	D	_	6	advmod	_	_
6	suur	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	rõõm	rõõm	NOUN	S	Case=Nom|Number=Sing	1	nsubj:cop	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advmod	color:blue
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


