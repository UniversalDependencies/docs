

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

186 nodes (0%) are attached to their parents as `dislocated`.

97 instances of `dislocated` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.10752688172043.

The following 15 pairs of parts of speech are connected with `dislocated`: [sv-pos/VERB]()-[sv-pos/NOUN]() (90; 48% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (31; 17% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (26; 14% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (10; 5% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (7; 4% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (5; 3% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (4; 2% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (3; 2% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 2% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 1% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 1% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	obj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dislocated	color:blue
1	Äger	äga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	dislocated	_	_
2	du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	1	nsubj	_	_
3	några	någon	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	obj	_	_
4	av	av	ADP	PP	_	6	case	_	_
5	följande	följande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	6	amod	_	_
6	saker	sak	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nmod	_	_
7	så	så	ADV	AB	_	8	advcl	_	_
8	ta	ta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
9	med	med	ADP	PL	_	8	compound:prt	_	_
10	även	även	ADV	AB	_	11	advmod	_	_
11	dem	de	PRON	PN|UTR/NEU|PLU|DEF|OBJ	Case=Acc|Definite=Def|Number=Plur|PronType=Prs	8	obj	_	SpaceAfter=No
12	:	:	PUNCT	MAD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dislocated	color:blue
1	Då	då	ADV	AB	_	2	advmod	_	_
2	var	vara	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
4	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	dislocated	_	_
5	som	som	PRON	HP|-|-|-	PronType=Rel	8	nsubj	_	_
6	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
7	mest	mycket	ADV	AB|SUV	Degree=Sup	8	advmod	_	_
8	yrkesverksam	yrkesverksam	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

173 nodes (0%) are attached to their parents as `dislocated`.

95 instances of `dislocated` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.64161849710983.

The following 26 pairs of parts of speech are connected with `dislocated`: [sv-pos/VERB]()-[sv-pos/NOUN]() (37; 21% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (34; 20% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (28; 16% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (15; 9% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (12; 7% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (7; 4% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (5; 3% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (4; 2% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (4; 2% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (3; 2% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/AUX]()-[sv-pos/PROPN]() (2; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 1% instances), [sv-pos/AUX]()-[sv-pos/ADJ]() (1; 1% instances), [sv-pos/AUX]()-[sv-pos/VERB]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (1; 1% instances), [sv-pos/PUNCT]()-[sv-pos/PROPN]() (1; 1% instances), [sv-pos/VERB]()-[sv-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Författare	_	NOUN	IND-NOM	_	4	dislocated	_	SpaceAfter=No
2	?	_	PUNCT	QuestionMark	_	4	punct	_	_
3	Quinn	_	PROPN	SG-NOM	_	4	nsubj	_	_
4	uttalade	_	VERB	PAST-ACT	_	0	root	_	_
5	ordet	_	NOUN	SG-DEF-NOM	_	4	obj	_	_
6	som	_	SCONJ	_	_	10	mark	_	_
7	vore	_	AUX	CNJ	_	10	cop	_	_
8	det	_	PRON	PERS-P3SG	_	10	nsubj	_	_
9	en	_	DET	SG-IND	_	10	det	_	_
10	veklagan	_	NOUN	SG-IND-NOM	_	4	obl	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dislocated	color:blue
1	Vad	_	PRON	WH	_	2	dislocated	_	_
2	har	_	VERB	PRES-ACT	_	0	root	_	_
3	det	_	PRON	PERS-P3SG	_	2	nsubj	_	_
4	med	_	ADP	_	_	1	case	_	_
5	att	_	PART	_	_	6	mark	_	_
6	göra	_	VERB	INF-ACT	_	2	xcomp	_	_
7	då	_	ADV	_	_	6	advmod	_	SpaceAfter=No
8	?	_	PUNCT	QuestionMark	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated	color:blue
1	Hur	_	ADV	WH	_	2	dislocated	_	_
2	är	_	VERB	PRES-ACT	_	0	root	_	_
3	det	_	PRON	EX-P3SG	_	2	expl	_	_
4	ni	_	PRON	PERS-P2PL-NOM	_	5	nsubj	_	_
5	säger	_	VERB	PRES-ACT	_	2	dislocated	_	_
6	på	_	ADP	_	_	7	case	_	_
7	engelska	_	NOUN	SG-IND-NOM	_	5	obl	_	_
8	–	_	PUNCT	Dash	_	2	punct	_	_
9	good-by	_	INTJ	FGN	_	5	appos	_	SpaceAfter=No
10	?	_	PUNCT	QuestionMark	_	2	punct	_	_

~~~


