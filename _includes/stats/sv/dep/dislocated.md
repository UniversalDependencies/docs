

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

218 nodes (0%) are attached to their parents as `dislocated`.

116 instances of `dislocated` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.43119266055046.

The following 18 pairs of parts of speech are connected with `dislocated`: [sv-pos/VERB]()-[sv-pos/NOUN]() (100; 46% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (36; 17% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (32; 15% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (10; 5% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (7; 3% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (7; 3% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (5; 2% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (4; 2% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (4; 2% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (4; 2% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	dobj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	_
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
3	några	någon	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	dobj	_	_
4	av	av	ADP	PP	_	6	case	_	_
5	följande	följande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	6	det	_	_
6	saker	sak	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nmod	_	_
7	så	så	ADV	AB	_	8	advcl	_	_
8	ta	ta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
9	med	med	ADP	PL	_	8	compound:prt	_	_
10	även	även	ADV	AB	_	11	advmod	_	_
11	dem	de	PRON	PN|UTR/NEU|PLU|DEF|OBJ	Case=Acc|Definite=Def|Number=Plur|PronType=Prs	8	dobj	_	_
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
6	var	vara	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
7	mest	mycket	ADV	AB|SUV	Degree=Sup	8	advmod	_	_
8	yrkesverksam	yrkesverksam	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	acl:relcl	_	_
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

228 nodes (0%) are attached to their parents as `dislocated`.

139 instances of `dislocated` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.8640350877193.

The following 25 pairs of parts of speech are connected with `dislocated`: [sv-pos/VERB]()-[sv-pos/VERB]() (55; 24% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (48; 21% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (46; 20% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (15; 7% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (12; 5% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (9; 4% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (7; 3% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (5; 2% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (4; 2% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/AUX]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 dislocated	color:blue
1	Men	_	CONJ	_	_	4	cc	_	_
2	om	_	SCONJ	_	_	4	mark	_	_
3	jag	_	PRON	PERS-P1SG-NOM	_	4	nsubj	_	_
4	är	_	VERB	PRES-ACT	_	10	dislocated	_	_
5	på	_	ADP	_	_	6	case	_	_
6	väg	_	NOUN	SG-IND-NOM	_	4	nmod	_	_
7	ut	_	ADV	_	_	6	advmod	_	_
8	--	_	PUNCT	Dash	_	4	punct	_	_
9	vart	_	ADV	WH	_	10	advmod	_	_
10	är	_	VERB	PRES-ACT	_	0	root	_	_
11	jag	_	PRON	PERS-P1SG-NOM	_	10	nsubj	_	_
12	då	_	ADV	_	_	10	advmod	_	_
13	på	_	ADP	_	_	14	case	_	_
14	väg	_	NOUN	SG-IND-NOM	_	10	nmod	_	_
15	?	_	PUNCT	QuestionMark	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 dislocated	color:blue
1	Fem	_	NUM	CARD-PL	_	2	nummod	_	_
2	års	_	NOUN	IND-GEN	_	3	nmod:poss	_	_
3	praktik	_	NOUN	SG-IND-NOM	_	8	dislocated	_	_
4	.	_	PUNCT	Period	_	8	punct	_	_
5	Men	_	CONJ	_	_	8	cc	_	_
6	kan	_	AUX	PRES-AUX	_	8	aux	_	_
7	ni	_	PRON	PERS-P2PL-NOM	_	8	nsubj	_	_
8	gissa	_	VERB	INF-ACT	_	0	root	_	_
9	som	_	ADP	_	_	10	case	_	_
10	vad	_	PRON	WH	_	8	dobj	_	_
11	?	_	PUNCT	QuestionMark	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dislocated	color:blue
1	Vad	_	PRON	WH	_	2	dislocated	_	_
2	sysslar	_	VERB	PRES-ACT	_	0	root	_	_
3	ni	_	PRON	PERS-P2PL-NOM	_	2	nsubj	_	_
4	med	_	ADP	_	_	1	case	_	_
5	?	_	PUNCT	QuestionMark	_	2	punct	_	_

~~~


