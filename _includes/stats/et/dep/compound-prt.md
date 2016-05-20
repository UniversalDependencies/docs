

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [compound]().

2779 nodes (1%) are attached to their parents as `compound:prt`.

1607 instances of `compound:prt` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88664987405542.

The following 7 pairs of parts of speech are connected with `compound:prt`: [et-pos/VERB]()-[et-pos/ADV]() (2705; 97% instances), [et-pos/ADJ]()-[et-pos/ADV]() (58; 2% instances), [et-pos/NOUN]()-[et-pos/ADV]() (11; 0% instances), [et-pos/VERB]()-[et-pos/ADP]() (2; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADV]() (1; 0% instances), [et-pos/VERB]()-[et-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 compound:prt	color:blue
1	Noormees	noor_mees	NOUN	S	Case=Nom|Number=Sing	5	vocative	_	_
2	,	,	PUNCT	Z	_	5	punct	_	_
3	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj:cop	_	_
4	olete	olema	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	tugev	tugev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ja	ja	CONJ	J	_	5	cc	_	_
7	julge	julge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	conj	_	_
8	,	,	PUNCT	Z	_	5	punct	_	_
9	tapke	tapma	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
10	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	dobj	_	_
11	ära	ära	ADV	D	_	9	compound:prt	_	_
12	!	!	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:prt	color:blue
1	Tuba	tuba	NOUN	S	Case=Nom|Number=Sing	4	nsubj:cop	_	_
2	nägi	nägema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	välja	välja	ADV	D	_	4	compound:prt	_	_
4	samasugune	sama_sugune	ADJ	P	Case=Nom|Number=Sing|PronType=Dem	0	root	_	_
5	kui	kui	SCONJ	J	_	7	mark	_	_
6	meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	7	nmod:poss	_	_
7	oma	oma	PRON	P	Case=Nom|Number=Sing|Poss=Yes|PronType=Prs	4	advcl	_	_
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:prt	color:blue
1	Ukse	uks	NOUN	S	Case=Gen|Number=Sing	3	nmod	_	_
2	lahti	lahti	ADV	D	_	3	compound:prt	_	_
3	tegemine	tegemine	NOUN	S	Case=Nom|Number=Sing	5	nsubj:cop	_	_
4	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
5	viga	viga	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
6	.	.	PUNCT	Z	_	5	punct	_	_

~~~


