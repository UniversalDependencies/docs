

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

2126 nodes (1%) are attached to their parents as `nummod`.

1618 instances of `nummod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2206020696143.

The following 10 pairs of parts of speech are connected with `nummod`: [he-pos/NOUN]()-[he-pos/NUM]() (1600; 75% instances), [he-pos/NUM]()-[he-pos/NUM]() (363; 17% instances), [he-pos/PROPN]()-[he-pos/NUM]() (134; 6% instances), [he-pos/ADJ]()-[he-pos/NUM]() (10; 0% instances), [he-pos/VERB]()-[he-pos/NUM]() (7; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (5; 0% instances), [he-pos/PRON]()-[he-pos/NUM]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/SCONJ]()-[he-pos/NUM]() (2; 0% instances), [he-pos/X]()-[he-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	עצה	_	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
2	מספר	_	NOUN	NOUN	Gender=Masc|HebSource=ConvUncertainLabel|Number=Sing	1	nmod	_	_
3	1	_	NUM	NUM	_	2	nummod	_	_
4	:	_	PUNCT	PUNCT	_	5	punct	_	_
5	הצטרפו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Mood=Imp|Number=Plur|Person=2	0	root	_	_
6	ל	_	ADP	ADP	_	7	case	_	_
7	גופים	_	NOUN	NOUN	Gender=Masc|Number=Plur	5	iobj	_	_
8	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	טוקי	_	PROPN	PROPN	_	2	nsubj	_	_
2	קיבל	_	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	רק	_	ADV	ADV	_	5	det	_	_
4	52	_	NUM	NUM	_	5	nummod	_	_
5	אלף	_	NUM	NUM	Gender=Masc|Number=Sing	2	dobj	_	_
6	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nummod	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	בנייה	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	nsubj	_	_
3	לא	_	ADV	ADV	Negative=Neg	4	neg	_	_
4	הושלמה	_	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	ב	_	ADP	ADP	_	7	case	_	_
6	ה_	_	DET	DET	PronType=Art	7	det:def	_	_
7	מועד	_	NOUN	NOUN	Gender=Masc|Number=Sing	4	nmod	_	_
8	ש	_	SCONJ	SCONJ	_	9	mark	_	_
9	נקבע	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past	7	acl:relcl	_	_
10	,	_	PUNCT	PUNCT	_	7	punct	_	_
11	ספטמבר	_	PROPN	PROPN	_	7	appos	_	_
12	84	_	NUM	NUM	_	11	nummod	_	_
13	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


