

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

3211 nodes (1%) are attached to their parents as `det`.

2952 instances of `det` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34755527872937.

The following 7 pairs of parts of speech are connected with `det`: [et-pos/NOUN]()-[et-pos/PRON]() (2889; 90% instances), [et-pos/PRON]()-[et-pos/PRON]() (175; 5% instances), [et-pos/NUM]()-[et-pos/PRON]() (53; 2% instances), [et-pos/PROPN]()-[et-pos/PRON]() (52; 2% instances), [et-pos/ADJ]()-[et-pos/PRON]() (38; 1% instances), [et-pos/ADV]()-[et-pos/PRON]() (2; 0% instances), [et-pos/SYM]()-[et-pos/PRON]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	_
2	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
3	üllas	üllas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	rüütel	rüütel	NOUN	S	Case=Nom|Number=Sing	5	nsubj	_	_
5	elas	elama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ilusa	ilus	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	7	amod	_	_
7	elu	elu	NOUN	S	Case=Gen|Number=Sing	5	dobj	_	_
8	!	!	PUNCT	Z	_	5	punct	_	_
9	"	"	PUNCT	Z	_	5	punct	_	_
10	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	_
11	viimaks	viimaks	ADV	D	_	10	advmod	_	_
12	sir	sir	NOUN	S	Case=Nom|Number=Sing	13	appos	_	_
13	Galahad	Galahad	PROPN	S	Case=Nom|Number=Sing	10	nsubj	_	_
14	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	Seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	5	dobj	_	_
2	kõike	kõik	PRON	P	Case=Par|Number=Sing|PronType=Tot	1	det	_	_
3	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	7	nsubj	_	_
4	enam	enam	ADV	D	_	7	advmod	_	_
5	näha	nägema	VERB	V	VerbForm=Inf	7	xcomp	_	_
6	ei	ei	AUX	V	Mood=Ind|Negative=Neg|VerbForm=Fin	7	neg	_	_
7	jõudnud	jõudma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	Pooled	pool	NUM	N	Case=Nom|Number=Plur|NumForm=Letter|NumType=Card	7	nsubj:cop	_	_
2	neist	see	PRON	P	Case=Ela|Number=Plur|PronType=Dem	1	det	_	_
3	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
4	tipp-	tipp	NOUN	S	Case=Nom|Hyph=Yes|Number=Sing	7	appos	_	_
5	või	või	CONJ	J	_	4	cc	_	_
6	keskastme	kesk_aste	NOUN	S	Case=Gen|Number=Sing	4	conj	_	_
7	juhid	juht	NOUN	S	Case=Nom|Number=Plur	0	root	_	_
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


