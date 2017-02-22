

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

1002 nodes (1%) are attached to their parents as `advcl`.

970 instances of `advcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.69461077844311.

The following 7 pairs of parts of speech are connected with `advcl`: [da-pos/VERB]()-[da-pos/VERB]() (471; 47% instances), [da-pos/NOUN]()-[da-pos/VERB]() (298; 30% instances), [da-pos/ADV]()-[da-pos/VERB]() (202; 20% instances), [da-pos/VERB]()-[da-pos/NOUN]() (13; 1% instances), [da-pos/X]()-[da-pos/VERB]() (8; 1% instances), [da-pos/ADP]()-[da-pos/VERB]() (6; 1% instances), [da-pos/VERB]()-[da-pos/PRON]() (4; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 advcl	color:blue
1	Dommeren	dommer	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	at	at	SCONJ	_	_	6	mark	_	_
5	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	6	nsubj	_	_
6	giver	give	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	obj	_	_
7	40	40	NUM	_	NumType=Card	8	nummod	_	_
8	kr.	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	6	obj	_	_
9	for	for	ADP	_	AdpType=Prep	11	mark	_	_
10	hver	hver	PRON	_	Gender=Com|Number=Sing|PronType=Ind	11	mark	_	_
11	påbegyndt	påbegynde	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	6	advcl	_	_
12	to	to	NUM	_	NumType=Card	13	nummod	_	_
13	timer	time	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	11	obl	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 advcl	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	tør	turde	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	ikke	ikke	ADV	_	_	4	advmod	_	_
4	bevæge	bevæge	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
5	hovedet	hoved	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	obj	_	_
6	af	af	ADP	_	AdpType=Prep	7	case	_	_
7	frygt	frygt	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	obl	_	_
8	for	for	ADP	_	AdpType=Prep	12	mark	_	_
9	at	at	SCONJ	_	_	12	mark	_	_
10	den	den	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
11	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	løsne	løsne	VERB	_	VerbForm=Inf|Voice=Act	7	advcl	_	_
13	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	12	obj	_	_
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Så	så	ADV	_	_	0	root	_	_
2	nu	nu	ADV	_	_	3	advmod	_	_
3	sidder	sidde	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
4	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	dèr	der	ADV	_	_	3	obl:loc	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	føler	føle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
8	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
9	bedraget	bedrage	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	7	xcomp	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


