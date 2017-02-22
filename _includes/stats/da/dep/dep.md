

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

463 nodes (1%) are attached to their parents as `dep`.

383 instances of `dep` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7645788336933.

The following 32 pairs of parts of speech are connected with `dep`: [da-pos/NOUN]()-[da-pos/CCONJ]() (177; 38% instances), [da-pos/VERB]()-[da-pos/NOUN]() (63; 14% instances), [da-pos/X]()-[da-pos/X]() (42; 9% instances), [da-pos/VERB]()-[da-pos/VERB]() (26; 6% instances), [da-pos/VERB]()-[da-pos/CCONJ]() (24; 5% instances), [da-pos/ADJ]()-[da-pos/CCONJ]() (16; 3% instances), [da-pos/PROPN]()-[da-pos/X]() (16; 3% instances), [da-pos/CCONJ]()-[da-pos/VERB]() (14; 3% instances), [da-pos/VERB]()-[da-pos/PRON]() (13; 3% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (11; 2% instances), [da-pos/X]()-[da-pos/PROPN]() (11; 2% instances), [da-pos/PROPN]()-[da-pos/CCONJ]() (9; 2% instances), [da-pos/ADP]()-[da-pos/NOUN]() (7; 2% instances), [da-pos/ADJ]()-[da-pos/VERB]() (6; 1% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (4; 1% instances), [da-pos/VERB]()-[da-pos/ADV]() (4; 1% instances), [da-pos/NOUN]()-[da-pos/VERB]() (3; 1% instances), [da-pos/ADP]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/PRON]() (1; 0% instances), [da-pos/ADP]()-[da-pos/VERB]() (1; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (1; 0% instances), [da-pos/ADV]()-[da-pos/SCONJ]() (1; 0% instances), [da-pos/INTJ]()-[da-pos/VERB]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/PRON]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/X]() (1; 0% instances), [da-pos/PART]()-[da-pos/VERB]() (1; 0% instances), [da-pos/PRON]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/SCONJ]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/VERB]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/VERB]()-[da-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	Forinden	forinden	ADV	_	_	2	advmod	_	_
2	drak	drikke	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	10-15	10-15	NUM	_	NumType=Card	5	nummod	_	_
5	øl	øl	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	2	obj	_	_
6	og	og	CCONJ	_	_	5	dep	_	_
7	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	9	det	_	_
8	kvart	kvart	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	9	amod	_	_
9	flaske	flaske	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	conj	_	_
10	Gammel	gammel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	flat	_	_
11	Dansk	dansk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	10	flat	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 dep	color:blue
1	Men	men	CCONJ	_	_	0	root	_	_
2	som	som	ADP	_	PartType=Inf	1	case	_	_
3	sagt	sige	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	1	dep	_	_
4	:	:	PUNCT	_	_	3	punct	_	_
5	hendes	hendes	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	kredse	kreds	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	10	nsubj	_	_
7	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	ikke	ikke	ADV	_	_	10	advmod	_	_
9	mine	min	DET	_	Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	kredse	kreds	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	3	dep	_	_
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	også	også	ADV	_	_	4	advmod	_	_
4	spille	spille	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
5	the	the	X	_	Foreign=Yes	4	obj	_	_
6	good	good	X	_	Foreign=Yes	5	dep	_	_
7	guy	guy	X	_	Foreign=Yes	5	dep	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


