

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

2962 nodes (4%) are attached to their parents as `mark`.

2959 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86124240378123.

The following 33 pairs of parts of speech are connected with `mark`: [sv-pos/VERB]()-[sv-pos/PART]() (867; 29% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (807; 27% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (420; 14% instances), [sv-pos/NOUN]()-[sv-pos/CCONJ]() (282; 10% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (114; 4% instances), [sv-pos/ADJ]()-[sv-pos/SCONJ]() (107; 4% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (67; 2% instances), [sv-pos/ADJ]()-[sv-pos/CCONJ]() (50; 2% instances), [sv-pos/NOUN]()-[sv-pos/SCONJ]() (45; 2% instances), [sv-pos/ADV]()-[sv-pos/CCONJ]() (37; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (32; 1% instances), [sv-pos/VERB]()-[sv-pos/CCONJ]() (26; 1% instances), [sv-pos/PRON]()-[sv-pos/CCONJ]() (19; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (17; 1% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (13; 0% instances), [sv-pos/PROPN]()-[sv-pos/CCONJ]() (9; 0% instances), [sv-pos/NOUN]()-[sv-pos/PART]() (8; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (7; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (6; 0% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (4; 0% instances), [sv-pos/PRON]()-[sv-pos/SCONJ]() (4; 0% instances), [sv-pos/DET]()-[sv-pos/CCONJ]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (3; 0% instances), [sv-pos/ADP]()-[sv-pos/CCONJ]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/CCONJ]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Men	men	CCONJ	KN	_	5	cc	_	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	lång	lång	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	innan	innan	SCONJ	SN	_	8	mark	_	_
7	så	så	ADV	AB	_	8	advmod	_	_
8	sker	ske	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Men	men	CCONJ	KN	_	4	cc	_	_
2	jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	arbeta	arbeta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	för	för	ADP	PP	_	9	mark	_	_
6	att	att	SCONJ	SN	_	5	fixed	_	_
7	ekonomin	ekonomi	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	ska	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	gå	gå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	advcl	_	_
10	ihop	ihop	ADV	PL	_	9	compound:prt	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

2985 nodes (5%) are attached to their parents as `mark`.

2976 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51993299832496.

The following 30 pairs of parts of speech are connected with `mark`: [sv-pos/VERB]()-[sv-pos/SCONJ]() (1744; 58% instances), [sv-pos/VERB]()-[sv-pos/PART]() (800; 27% instances), [sv-pos/ADJ]()-[sv-pos/SCONJ]() (114; 4% instances), [sv-pos/AUX]()-[sv-pos/SCONJ]() (101; 3% instances), [sv-pos/NOUN]()-[sv-pos/SCONJ]() (89; 3% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (65; 2% instances), [sv-pos/NOUN]()-[sv-pos/PART]() (10; 0% instances), [sv-pos/PRON]()-[sv-pos/SCONJ]() (9; 0% instances), [sv-pos/ADV]()-[sv-pos/SCONJ]() (7; 0% instances), [sv-pos/PROPN]()-[sv-pos/SCONJ]() (7; 0% instances), [sv-pos/AUX]()-[sv-pos/PART]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (4; 0% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (4; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/AUX]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/PART]() (2; 0% instances), [sv-pos/PUNCT]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/SCONJ]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/CCONJ]() (1; 0% instances), [sv-pos/PART]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/SYM]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Identifiera	_	VERB	INF-ACT	_	0	root	_	_
2	filter	_	NOUN	IND-NOM	_	1	obj	_	_
3	som	_	SCONJ	REL	_	4	mark	_	_
4	är	_	VERB	PRES-ACT	_	2	acl:relcl	_	_
5	igång	_	ADV	_	_	4	advmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Konsekvenser	_	NOUN	PL-IND-NOM	_	0	root	_	_
2	av	_	ADP	_	_	4	case	_	_
3	att	_	PART	_	_	4	mark	_	_
4	filtrera	_	VERB	INF-ACT	_	1	acl	_	_
5	beräkningar	_	NOUN	PL-IND-NOM	_	4	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	Om	_	SCONJ	_	_	4	mark	_	_
2	det	_	PRON	PERS-P3SG	_	4	nsubj	_	_
3	är	_	AUX	PRES-ACT	_	4	cop	_	_
4	sant	_	ADJ	POS-SG-IND	_	5	advmod	_	_
5	är	_	VERB	PRES-ACT	_	0	root	_	_
6	allt	_	DET	TOT-SG	_	7	det	_	_
7	hopp	_	NOUN	IND-NOM	_	5	nsubj	_	_
8	ute	_	ADV	_	_	5	advmod	_	SpaceAfter=No
9	.	_	PUNCT	Period	_	5	punct	_	_

~~~


