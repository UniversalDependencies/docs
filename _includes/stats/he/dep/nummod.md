

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

1964 nodes (1%) are attached to their parents as `nummod`.

1511 instances of `nummod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2306517311609.

The following 10 pairs of parts of speech are connected with `nummod`: [he-pos/NOUN]()-[he-pos/NUM]() (1481; 75% instances), [he-pos/NUM]()-[he-pos/NUM]() (323; 16% instances), [he-pos/PROPN]()-[he-pos/NUM]() (132; 7% instances), [he-pos/ADJ]()-[he-pos/NUM]() (10; 1% instances), [he-pos/VERB]()-[he-pos/NUM]() (6; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (5; 0% instances), [he-pos/PRON]()-[he-pos/NUM]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/SCONJ]()-[he-pos/NUM]() (2; 0% instances), [he-pos/X]()-[he-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	עצה	עצה	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
2	מספר	מספר	NOUN	NOUN	Gender=Masc|HebSource=ConvUncertainLabel|Number=Sing	1	nmod	_	_
3	1	_	NUM	NUM	_	2	nummod	_	_
4	:	_	PUNCT	PUNCT	_	5	punct	_	_
5	הצטרפו	הצטרף	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Mood=Imp|Number=Plur|Person=2	0	root	_	_
6	ל	ל	ADP	ADP	_	7	case	_	_
7	גופים	גוף	NOUN	NOUN	Gender=Masc|Number=Plur	5	iobj	_	_
8	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	טוקי	טוקי	PROPN	PROPN	_	2	nsubj	_	_
2	קיבל	קיבל	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	רק	רק	ADV	ADV	_	5	det	_	_
4	52	_	NUM	NUM	_	5	nummod	_	_
5	אלף	אלף	NUM	NUM	Gender=Masc|Number=Sing	2	obj	_	_
6	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nummod	color:blue
1	מובארק	מובארק	PROPN	PROPN	_	2	nsubj	_	_
2	נהרג	נהרג	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	_
3	ב	_	ADP	ADP	_	5	case	_	_
4	"	_	PUNCT	PUNCT	_	5	punct	_	_
5	יום	_	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	2	obl	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	אדמה	אדמה	NOUN	NOUN	Gender=Fem|Number=Sing	5	compound:smixut	_	_
8	"	_	PUNCT	PUNCT	_	5	punct	_	_
9	,	_	PUNCT	PUNCT	_	5	punct	_	_
10	03	_	NUM	NUM	_	5	appos	_	_
11	ב	ב	ADP	ADP	_	12	case	_	_
12	מארס	מרס	PROPN	PROPN	_	10	obl	_	_
13	9891	_	NUM	NUM	_	12	nummod	_	_
14	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


