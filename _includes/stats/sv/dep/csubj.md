

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

252 nodes (0%) are attached to their parents as `csubj`.

215 instances of `csubj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.94047619047619.

The following 13 pairs of parts of speech are connected with `csubj`: [sv-pos/ADJ]()-[sv-pos/VERB]() (110; 44% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (78; 31% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (38; 15% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (7; 3% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (6; 2% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (4; 2% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ju	ju	ADV	AB	_	4	advmod	_	_
4	klart	klar	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	8	nsubj	_	_
7	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	gno	gno	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	_	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	_	_
10	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Att	att	PART	IE	_	2	mark	_	_
2	anställa	anställa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	csubj	_	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
4	'	'	PUNCT	PAD	_	5	punct	_	SpaceAfter=No
5	praktikant	praktikant	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	SpaceAfter=No
6	'	'	PUNCT	PAD	_	5	punct	_	_
7	lönar	löna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	7	obj	_	_
9	verkligen	verkligen	ADV	AB	_	7	advmod	_	_
10	inte	inte	ADV	AB	Polarity=Neg	7	advmod	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Fördelen	fördel	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	att	att	SCONJ	SN	_	5	mark	_	_
4	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	5	nsubj	_	_
5	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
6	färre	få	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	7	amod	_	_
7	mynt	mynt	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	5	obj	_	_
8	att	att	PART	IE	_	9	mark	_	_
9	hålla	hålla	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	acl	_	_
10	reda	reda	NOUN	PL	_	9	compound:prt	_	_
11	på	på	ADP	PP	_	9	case	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

157 nodes (0%) are attached to their parents as `csubj`.

116 instances of `csubj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.10191082802548.

The following 10 pairs of parts of speech are connected with `csubj`: [sv-pos/VERB]()-[sv-pos/VERB]() (59; 38% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (42; 27% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (34; 22% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (8; 5% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (6; 4% instances), [sv-pos/AUX]()-[sv-pos/VERB]() (3; 2% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (1; 1% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 1% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Vad	_	PRON	WH-SG	_	3	obj	_	_
2	det	_	PRON	EX-P3SG	_	3	expl	_	_
3	innebär	_	VERB	PRES-ACT	_	0	root	_	_
4	att	_	PART	_	_	5	mark	_	_
5	använda	_	VERB	INF-ACT	_	3	csubj	_	_
6	kommandot	_	NOUN	SG-DEF-NOM	_	7	obl	_	_
7	Spara	_	VERB	INF-ACT	_	5	xcomp	_	_
8	som	_	ADP	_	_	7	flat	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Så	_	ADV	_	_	2	advmod	_	_
2	roligt	_	ADJ	POS-SG-IND	_	0	root	_	_
3	att	_	PART	_	_	4	mark	_	_
4	träffas	_	VERB	INF-PASS	_	2	csubj	_	SpaceAfter=No
5	,	_	PUNCT	Comma	_	2	punct	_	_
6	Ron	_	PROPN	SG-NOM	_	8	nsubj	_	_
7	har	_	AUX	PRES-AUX	_	8	aux	_	_
8	berättat	_	VERB	SUP-ACT	_	2	parataxis	_	_
9	så	_	ADV	_	_	10	advmod	_	_
10	mycket	_	PRON	IND-SG	_	8	obl	_	_
11	om	_	ADP	_	_	8	obl	_	SpaceAfter=No
12	"	_	PUNCT	Quote	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Faktum	_	NOUN	SG-IND-NOM	_	0	root	_	_
2	är	_	AUX	PRES-ACT	_	1	cop	_	_
3	att	_	SCONJ	_	_	8	mark	_	_
4	jag	_	PRON	PERS-P1SG-NOM	_	8	nsubj	_	_
5	till	_	ADV	_	_	8	advmod	_	_
6	och	_	CCONJ	_	_	5	fixed	_	_
7	med	_	ADV	_	_	5	fixed	_	_
8	undrade	_	VERB	PAST-ACT	_	1	csubj	_	_
9	över	_	ADP	_	_	12	case	_	_
10	vart	_	ADV	WH	_	12	advmod	_	_
11	ni	_	PRON	PERS-P2PL-NOM	_	12	nsubj	_	_
12	tagit	_	VERB	SUP-ACT	_	8	ccomp	_	_
13	vägen	_	NOUN	SG-DEF-NOM	_	12	obj	_	SpaceAfter=No
14	.	_	PUNCT	Period	_	1	punct	_	_

~~~


