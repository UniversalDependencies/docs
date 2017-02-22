

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

20439 nodes (5%) are attached to their parents as `nsubj`.

19908 instances of `nsubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.609227457312.

The following 48 pairs of parts of speech are connected with `nsubj`: [fr-pos/VERB]()-[fr-pos/PRON]() (7859; 38% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (5804; 28% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (2137; 10% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1020; 5% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (934; 5% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (892; 4% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (771; 4% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (422; 2% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (102; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (79; 0% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (68; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (59; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (48; 0% instances), [fr-pos/PRON]()-[fr-pos/PROPN]() (38; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (27; 0% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (27; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (24; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (15; 0% instances), [fr-pos/NUM]()-[fr-pos/NOUN]() (14; 0% instances), [fr-pos/NUM]()-[fr-pos/PRON]() (11; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (10; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (9; 0% instances), [fr-pos/SYM]()-[fr-pos/NOUN]() (9; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (8; 0% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (6; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (6; 0% instances), [fr-pos/ADJ]()-[fr-pos/SYM]() (4; 0% instances), [fr-pos/ADV]()-[fr-pos/PROPN]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/SYM]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/X]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PART]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/X]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	lutte	lutter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	mark	_	_
4	échapper	échapper	VERB	_	VerbForm=Inf	2	advcl	_	_
5	à	à	ADP	_	_	7	case	_	_
6	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	tueurs	tueur	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	_
8	à	à	ADP	_	_	10	case	_	_
9	ses	son	DET	_	Gender=Fem|Number=Plur|PronType=Prs	10	nmod:poss	_	_
10	trousses	trousses	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	compagnies	compagnie	NOUN	_	Gender=Fem|Number=Plur	8	nsubj	_	_
3	aériennes	aérien	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	bas	bas	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	coût	coût	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
7	ne	ne	ADV	_	Polarity=Neg	8	advmod	_	_
8	connaissent	connaître	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	pas	pas	ADV	_	Polarity=Neg	8	advmod	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	crise	crise	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Dieu	Dieu	PROPN	_	_	3	nsubj	_	_
2	veuille	vouloir	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	avoir	avoir	VERB	_	VerbForm=Inf	0	root	_	_
4	en	en	ADP	_	_	5	case	_	_
5	paix	paix	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
6	ton	son	DET	_	Gender=Fem|Number=Sing|PronType=Prs	7	nmod:poss	_	_
7	âme	âme	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

918 nodes (5%) are attached to their parents as `nsubj`.

873 instances of `nsubj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.63725490196078.

The following 25 pairs of parts of speech are connected with `nsubj`: [fr-pos/VERB]()-[fr-pos/PRON]() (431; 47% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (287; 31% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (46; 5% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (41; 4% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (31; 3% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (26; 3% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (19; 2% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (6; 1% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (4; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (4; 0% instances), [fr-pos/AUX]()-[fr-pos/PRON]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/AUX]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	3	obj	_	_
3	invite	inviter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	E	_	6	mark	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	6	obj	_	_
6	lever	lever	VERB	V	VerbForm=Inf	3	xcomp	_	_
7	pour	pour	ADP	E	_	9	case	_	_
8	cette	ce	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	minute	minute	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
10	de	de	ADP	E	_	11	case	_	_
11	silence	silence	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	L'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	acceptant	acceptant	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	ne	ne	PART	PART	Polarity=Neg	6	advmod	_	_
4	peut	pouvoir	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	pas	pas	ADV	BN	Polarity=Neg	6	advmod	_	_
6	céder	céder	VERB	V	VerbForm=Inf	0	root	_	_
7	de	de	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	droits	droit	NOUN	S	Gender=Masc|Number=Plur	6	obj	_	_
9	sur	sur	ADP	E	_	11	case	_	_
10	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	oeuvre	oeuvre	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj	color:blue
1	Madame	madame	NOUN	S	Gender=Fem|Number=Sing	8	vocative	_	_
2	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	présidente	président	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	c'	ce	PRON	PD	PronType=Dem	8	nsubj	_	SpaceAfter=No
6	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	motion	motion	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
9	de	de	ADP	E	_	10	case	_	_
10	procédure	procédure	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

2674 nodes (4%) are attached to their parents as `nsubj`.

2576 instances of `nsubj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76514584891548.

The following 21 pairs of parts of speech are connected with `nsubj`: [fr-pos/VERB]()-[fr-pos/PRON]() (1050; 39% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (888; 33% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (228; 9% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (133; 5% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (103; 4% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (93; 3% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (92; 3% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (23; 1% instances), [fr-pos/VERB]()-[fr-pos/DET]() (14; 1% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (12; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (11; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (6; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (6; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/ADP]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Nous	il	PRON	_	Number=Plur|Person=1	3	nsubj	_	_
2	devrions	devoir	AUX	_	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	prendre	prendre	VERB	_	VerbForm=Inf	0	root	_	_
4	cela	cela	PRON	_	Number=Sing|PronType=Dem	3	obj	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sérieux	sérieux	ADJ	_	Gender=Masc	3	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	EBM	EBM	PROPN	_	Number=Sing	4	nsubj	_	_
3	s'	le/lui	PRON	_	Person=3|Reflex=Yes	4	expl	_	SpaceAfter=No
4	inclina	incliner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	devant	devant	ADP	_	_	6	case	_	_
6	Joeuf	Joeuf	PROPN	_	Gender=Masc|Number=Sing	4	obl	_	_
7	par	par	ADP	_	_	8	case	_	_
8	70-61	70-61	NOUN	_	NumType=Card	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


