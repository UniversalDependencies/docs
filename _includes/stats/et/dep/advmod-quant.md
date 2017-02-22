

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [advmod]().

51 nodes (0%) are attached to their parents as `advmod:quant`.

47 instances of `advmod:quant` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52941176470588.

The following 4 pairs of parts of speech are connected with `advmod:quant`: [et-pos/NOUN]()-[et-pos/NOUN]() (26; 51% instances), [et-pos/NOUN]()-[et-pos/ADV]() (16; 31% instances), [et-pos/NOUN]()-[et-pos/PRON]() (7; 14% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (2; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:quant	color:blue
1	Tsee	Tsee	PROPN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
2	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
3	veel	veel	ADV	D	_	7	advmod	_	_
4	hulk	hulk	NOUN	S	Case=Nom|Number=Sing	5	advmod:quant	_	_
5	aega	aeg	NOUN	S	Case=Par|Number=Sing	7	obl	_	_
6	filmi	film	NOUN	S	Case=Gen|Number=Sing	7	nmod	_	_
7	mõju	mõju	NOUN	S	Case=Gen|Number=Sing	0	root	_	_
8	all	all	ADP	K	AdpType=Post	7	case	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:quant	color:blue
1	Küna	küna	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	uuretesse	uure	NOUN	S	Case=Ill|Number=Plur	6	obl	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	_
4	pisut	pisut	ADV	D	_	5	advmod:quant	_	_
5	rokka	rokk	NOUN	S	Case=Par|Number=Sing	6	nsubj	_	_
6	jäänud	jääma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	11	punct	_	_
8	aga	aga	CCONJ	J	_	11	cc	_	_
9	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	11	nsubj:cop	_	_
10	polnud	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	_	_
11	maitsev	maitsev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:quant	color:blue
1	Õnneks	õnn	NOUN	S	Case=Tra|Number=Sing	4	obl	_	_
2	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:cop	_	_
4	arg	arg	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	ning	ning	CCONJ	J	_	6	cc	_	_
6	jälgis	jälgima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
7	mitut	mitu	PRON	P	Case=Par|Number=Sing|PronType=Ind	8	advmod:quant	_	_
8	asja	asi	NOUN	S	Case=Par|Number=Sing	6	obj	_	_
9	korraga	korraga	ADV	D	_	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


