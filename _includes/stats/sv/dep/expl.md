

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

493 nodes (1%) are attached to their parents as `expl`.

388 instances of `expl` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71602434077079.

The following 4 pairs of parts of speech are connected with `expl`: [sv-pos/VERB]()-[sv-pos/PRON]() (350; 71% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (121; 25% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (21; 4% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Men	men	CONJ	KN	_	3	cc	_	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
3	finns	finnas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ingen	ingen	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Neg	6	det	_	_
5	annan	annan	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	det	_	_
6	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nsubj	_	_
7	att	att	PART	IE	_	8	mark	_	_
8	gå	gå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	acl	_	_
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 expl	color:blue
1	För	för	ADP	PP	_	2	case	_	_
2	barnen	barn	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	8	nmod	_	_
3	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
4	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	8	expl	_	_
5	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
6	mycket	mycket	ADV	AB|POS	Degree=Pos	7	advmod	_	_
7	stor	stor	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
8	fördel	fördel	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	om	om	SCONJ	SN	_	11	mark	_	_
10	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	11	nsubj	_	_
11	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj	_	_
12	kontakt	kontakt	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	dobj	_	_
13	med	med	ADP	PP	_	16	case	_	_
14	bägge	bägge	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Tot	16	det	_	_
15	sina	sig	DET	PS|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	föräldrar	förälder	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	11	nmod	_	_
17	.	.	PUNCT	MAD	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

462 nodes (1%) are attached to their parents as `expl`.

390 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90909090909091.

The following 10 pairs of parts of speech are connected with `expl`: [sv-pos/VERB]()-[sv-pos/PRON]() (289; 63% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (67; 15% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (50; 11% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (34; 7% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (10; 2% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (5; 1% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	Men	_	CONJ	_	_	2	cc	_	_
2	nej	_	INTJ	_	_	5	discourse	_	_
3	,	_	PUNCT	Comma	_	2	punct	_	_
4	det	_	PRON	EX-P3SG	_	5	expl	_	_
5	verkade	_	VERB	PAST-ACT	_	0	root	_	_
6	ändå	_	ADV	_	_	5	advmod	_	_
7	inte	_	PART	NEG	_	5	neg	_	_
8	så	_	ADV	_	_	5	advmod	_	_
9	.	_	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 expl	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Det	_	PRON	EX-P3SG	_	4	expl	_	_
2	var	_	VERB	PAST-ACT	_	4	cop	_	_
3	en	_	DET	SG-IND	_	4	det	_	_
4	kvinna	_	NOUN	SG-IND-NOM	_	0	root	_	_
5	som	_	SCONJ	REL	_	6	mark	_	_
6	öppnade	_	VERB	PAST-ACT	_	4	dislocated	_	_
7	dörren	_	NOUN	SG-DEF-NOM	_	6	dobj	_	_
8	till	_	ADP	_	_	9	case	_	_
9	lägenheten	_	NOUN	SG-DEF-NOM	_	7	nmod	_	_
10	.	_	PUNCT	Period	_	4	punct	_	_

~~~


