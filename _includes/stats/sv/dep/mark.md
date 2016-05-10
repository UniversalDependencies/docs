

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

3843 nodes (4%) are attached to their parents as `mark`.

3839 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.89149102263856.

The following 39 pairs of parts of speech are connected with `mark`: [sv-pos/VERB]()-[sv-pos/PART]() (1095; 28% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (1080; 28% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (554; 14% instances), [sv-pos/NOUN]()-[sv-pos/CONJ]() (353; 9% instances), [sv-pos/ADJ]()-[sv-pos/SCONJ]() (151; 4% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (149; 4% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (85; 2% instances), [sv-pos/ADJ]()-[sv-pos/CONJ]() (63; 2% instances), [sv-pos/NOUN]()-[sv-pos/SCONJ]() (53; 1% instances), [sv-pos/ADV]()-[sv-pos/CONJ]() (43; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (41; 1% instances), [sv-pos/VERB]()-[sv-pos/CONJ]() (35; 1% instances), [sv-pos/PRON]()-[sv-pos/CONJ]() (25; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (22; 1% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (15; 0% instances), [sv-pos/PROPN]()-[sv-pos/CONJ]() (15; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (8; 0% instances), [sv-pos/NOUN]()-[sv-pos/PART]() (8; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (8; 0% instances), [sv-pos/PRON]()-[sv-pos/SCONJ]() (5; 0% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/SCONJ]() (4; 0% instances), [sv-pos/DET]()-[sv-pos/CONJ]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (3; 0% instances), [sv-pos/ADP]()-[sv-pos/CONJ]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/PART]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/CONJ]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Men	men	CONJ	KN	_	5	cc	_	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
3	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	lång	lång	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	innan	innan	SCONJ	SN	_	8	mark	_	_
7	så	så	ADV	AB	_	8	advmod	_	_
8	sker	ske	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
9	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Men	men	CONJ	KN	_	4	cc	_	_
2	jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	arbeta	arbeta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	för	för	ADP	PP	_	9	mark	_	_
6	att	att	SCONJ	SN	_	5	mwe	_	_
7	ekonomin	ekonomi	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	ska	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	gå	gå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	advcl	_	_
10	ihop	ihop	ADV	PL	_	9	compound:prt	_	_
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

3654 nodes (5%) are attached to their parents as `mark`.

3640 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51395730706076.

The following 34 pairs of parts of speech are connected with `mark`: [sv-pos/VERB]()-[sv-pos/SCONJ]() (2125; 58% instances), [sv-pos/VERB]()-[sv-pos/PART]() (1000; 27% instances), [sv-pos/ADJ]()-[sv-pos/SCONJ]() (140; 4% instances), [sv-pos/NOUN]()-[sv-pos/SCONJ]() (107; 3% instances), [sv-pos/AUX]()-[sv-pos/SCONJ]() (95; 3% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (50; 1% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (44; 1% instances), [sv-pos/PRON]()-[sv-pos/SCONJ]() (13; 0% instances), [sv-pos/NOUN]()-[sv-pos/PART]() (12; 0% instances), [sv-pos/PROPN]()-[sv-pos/SCONJ]() (9; 0% instances), [sv-pos/ADV]()-[sv-pos/SCONJ]() (8; 0% instances), [sv-pos/AUX]()-[sv-pos/PART]() (7; 0% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (6; 0% instances), [sv-pos/SCONJ]()-[sv-pos/SCONJ]() (5; 0% instances), [sv-pos/VERB]()-[sv-pos/CONJ]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/PART]() (2; 0% instances), [sv-pos/AUX]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/AUX]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/PART]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/PART]() (2; 0% instances), [sv-pos/PUNCT]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/PART]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Markera	_	VERB	IMP-ACT	_	0	root	_	_
2	linjen	_	NOUN	SG-DEF-NOM	_	1	dobj	_	_
3	som	_	SCONJ	REL	_	6	mark	_	_
4	du	_	PRON	PERS-P2SG-NOM	_	6	nsubj	_	_
5	vill	_	AUX	PRES-AUX	_	6	aux	_	_
6	kopiera	_	VERB	INF-ACT	_	2	acl:relcl	_	_
7	och	_	CONJ	_	_	1	cc	_	_
8	tryck	_	VERB	IMP-ACT	_	1	conj	_	_
9	på	_	ADP	_	_	10	case	_	_
10	CTRL	_	PROPN	SG-NOM	_	8	nmod	_	_
11	-	_	PUNCT	Hyphen	_	1	punct	_	_
12	C	_	PROPN	SG-NOM	_	10	nmod	_	_
13	.	_	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
1	Nej	_	INTJ	_	_	4	discourse	_	_
2	,	_	PUNCT	Comma	_	1	punct	_	_
3	jag	_	PRON	PERS-P1SG-NOM	_	4	nsubj	_	_
4	missade	_	VERB	PAST-ACT	_	0	root	_	_
5	den	_	PRON	PERS-P3SG	_	4	dobj	_	_
6	.	_	PUNCT	Period	_	4	punct	_	_
7	Nåt	_	PRON	IND-SG	_	8	det	_	_
8	bra	_	ADJ	POS-IND	_	4	appos	_	_
9	att	_	PART	_	_	10	mark	_	_
10	rapportera	_	VERB	INF-ACT	_	8	acl	_	_
11	?	_	PUNCT	QuestionMark	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Hon	_	PRON	PERS-P3SG-NOM	_	2	nsubj	_	_
2	tycker	_	VERB	PRES-ACT	_	0	root	_	_
3	att	_	SCONJ	_	_	6	mark	_	_
4	det	_	PRON	EX-P3SG	_	6	expl	_	_
5	är	_	VERB	PRES-ACT	_	6	cop	_	_
6	bakslugt	_	ADJ	POS-SG-IND	_	2	xcomp	_	_
7	av	_	ADP	_	_	8	case	_	_
8	mig	_	PRON	PERS-P1SG-ACC	_	6	nmod	_	_
9	att	_	PART	_	_	10	mark	_	_
10	förneka	_	VERB	INF-ACT	_	6	csubj	_	_
11	detta	_	PRON	DEM-SG	_	10	dobj	_	_
12	.	_	PUNCT	Period	_	2	punct	_	_

~~~


