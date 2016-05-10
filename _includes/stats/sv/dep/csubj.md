

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

339 nodes (0%) are attached to their parents as `csubj`.

284 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83480825958702.

The following 13 pairs of parts of speech are connected with `csubj`: [sv-pos/ADJ]()-[sv-pos/VERB]() (147; 43% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (102; 30% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (56; 17% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (9; 3% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (7; 2% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (6; 2% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (4; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ju	ju	ADV	AB	_	4	advmod	_	_
4	klart	klar	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	8	nsubj	_	_
7	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	gno	gno	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	_	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	det	_	_
10	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	nmod	_	_
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
4	'	'	PUNCT	PAD	_	5	punct	_	_
5	praktikant	praktikant	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
6	'	'	PUNCT	PAD	_	5	punct	_	_
7	lönar	löna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	7	dobj	_	_
9	verkligen	verkligen	ADV	AB	_	7	advmod	_	_
10	inte	inte	ADV	AB	_	7	neg	_	_
11	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
2	annat	annan	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	det	_	_
3	problem	problem	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
4	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	att	att	SCONJ	SN	_	7	mark	_	_
6	u-landsbarnen	u-landsbarn	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	7	nsubj	_	_
7	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	fel	fel	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	amod	_	_
9	utbildning	utbildning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

174 nodes (0%) are attached to their parents as `csubj`.

124 instances of `csubj` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.95402298850575.

The following 8 pairs of parts of speech are connected with `csubj`: [sv-pos/VERB]()-[sv-pos/VERB]() (78; 45% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (50; 29% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (25; 14% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (11; 6% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (6; 3% instances), [sv-pos/ADP]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/AUX]()-[sv-pos/VERB]() (1; 1% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Vad	_	PRON	WH-SG	_	3	dobj	_	_
2	det	_	PRON	PERS-P3SG	_	3	nsubj	_	_
3	innebär	_	VERB	PRES-ACT	_	0	root	_	_
4	att	_	PART	_	_	5	mark	_	_
5	använda	_	VERB	INF-ACT	_	3	csubj	_	_
6	kommandot	_	NOUN	SG-DEF-NOM	_	7	nmod	_	_
7	Spara	_	VERB	INF-ACT	_	5	xcomp	_	_
8	som	_	ADP	_	_	7	advmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	För	_	ADP	_	_	2	case	_	_
2	Quinn	_	PROPN	SG-NOM	_	3	dislocated	_	_
3	var	_	VERB	PAST-ACT	_	6	cop	_	_
4	det	_	PRON	EX-P3SG	_	6	expl	_	_
5	mycket	_	ADV	_	_	6	advmod	_	_
6	svårt	_	ADJ	POS-SG-IND	_	0	root	_	_
7	att	_	PART	_	_	8	mark	_	_
8	röra	_	VERB	INF-ACT	_	6	csubj	_	_
9	sig	_	PRON	RFL-ACC	_	8	dobj	_	_
10	på	_	ADP	_	_	12	case	_	_
11	det	_	DET	SG-DEF	_	12	det	_	_
12	sättet	_	NOUN	SG-DEF-NOM	_	8	nmod	_	_
13	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Det	_	DET	SG-DEF	_	2	det	_	_
2	enda	_	ADJ	POS-DEF	_	3	amod	_	_
3	försonande	_	VERB	NDE	_	5	csubj	_	_
4	är	_	VERB	PRES-ACT	_	5	cop	_	_
5	idén	_	NOUN	SG-DEF-NOM	_	0	root	_	_
6	.	_	PUNCT	Period	_	5	punct	_	_

~~~


