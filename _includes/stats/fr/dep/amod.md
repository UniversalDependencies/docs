

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

19556 nodes (5%) are attached to their parents as `amod`.

14069 instances of `amod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25976682348128.

The following 38 pairs of parts of speech are connected with `amod`: [fr-pos/NOUN]()-[fr-pos/ADJ]() (18312; 94% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (578; 3% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (191; 1% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (113; 1% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (74; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (72; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (52; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (50; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (34; 0% instances), [fr-pos/NUM]()-[fr-pos/ADJ]() (16; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (7; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/X]()-[fr-pos/ADJ]() (6; 0% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (5; 0% instances), [fr-pos/SYM]()-[fr-pos/ADJ]() (5; 0% instances), [fr-pos/ADP]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/CCONJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/INTJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 amod	color:blue
1	Mais	mais	CCONJ	_	_	3	cc	_	_
2	comment	comment	ADV	_	_	3	advmod	_	_
3	faire	faire	VERB	_	VerbForm=Inf	0	root	_	_
4	dans	dans	ADP	_	_	6	case	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	contexte	contexte	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
7	structurellement	structurellement	ADV	_	_	8	advmod	_	_
8	raciste	raciste	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	dialecte	dialecte	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	local	local	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	dérivé	dérivé	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Basque	Basque	PROPN	_	_	6	nmod	_	_
10	occidental	occidental	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 amod	color:blue
1	Mer	Mer	PROPN	_	_	0	root	_	_
2	de	de	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Nord	Nord	PROPN	_	_	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	Manche	Manche	PROPN	_	_	1	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Atlantique	Atlantique	PROPN	_	_	1	conj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	Méditerranée	Méditerranée	PROPN	_	_	1	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	mer	mer	PROPN	_	_	1	conj	_	_
13	Rouge	Rouge	PROPN	_	_	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

897 nodes (5%) are attached to their parents as `amod`.

660 instances of `amod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25975473801561.

The following 10 pairs of parts of speech are connected with `amod`: [fr-pos/NOUN]()-[fr-pos/ADJ]() (872; 97% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (8; 1% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (5; 1% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (4; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	2	2	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	)	)	PUNCT	FF	_	1	punct	_	_
3	Exceptions	Exceptions	PROPN	SP	_	0	root	_	_
4	à	à	ADP	E	_	6	case	_	_
5	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	droits	droit	NOUN	S	Gender=Masc|Number=Plur	3	nmod	_	_
7	exclusifs	exclusifs	ADJ	A	Number=Plur	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 amod	color:blue
1	Il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	convient	convenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	donc	donc	ADV	B	_	2	advmod	_	_
4	d'	de	ADP	E	_	5	mark	_	SpaceAfter=No
5	agir	agir	VERB	V	VerbForm=Inf	2	csubj	_	_
6	réellement	réellement	ADV	B	_	5	advmod	_	_
7	sur	sur	ADP	E	_	9	case	_	_
8	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	demande	demande	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
10	et	et	CCONJ	CC	_	12	cc	_	_
11	de	de	ADP	E	_	12	mark	_	_
12	fixer	fixer	VERB	V	VerbForm=Inf	5	conj	_	_
13	des	un	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
14	objectifs	objectif	ADJ	A	Gender=Masc|Number=Plur	12	obj	_	_
15	substantiels	substantiel	ADJ	A	Gender=Masc|Number=Plur	14	amod	_	_
16	en	en	ADP	E	_	18	case	_	_
17	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	matière	matière	NOUN	S	Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Cette	ce	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	situation	situation	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	_	_
3	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	également	également	ADV	B	_	5	advmod	_	_
5	conforme	conforme	ADJ	A	Number=Sing	0	root	_	_
6	à	à	ADP	E	_	9	case	_	_
7	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	septième	septième	ADJ	NO	Number=Sing|NumType=Ord	9	amod	_	_
9	considérant	considérer	VERB	V	Number=Sing|Tense=Pres|VerbForm=Part	5	obl	_	_
10	de	de	ADP	E	_	12	case	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	décision	décision	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
13	Pericles	Pericles	PROPN	SP	_	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

3217 nodes (5%) are attached to their parents as `amod`.

2443 instances of `amod` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22629779297482.

The following 7 pairs of parts of speech are connected with `amod`: [fr-pos/NOUN]()-[fr-pos/ADJ]() (3049; 95% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (136; 4% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (17; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (9; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	_	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nummod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	_	1	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Nous	il	PRON	_	Number=Plur|Person=1	4	nsubj	_	_
2	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	pu	pouvoir	AUX	_	Tense=Past|VerbForm=Part	4	aux	_	_
4	écouter	écouter	VERB	_	VerbForm=Part	0	root	_	_
5	Nelson	Nelson	PROPN	_	Gender=Masc|Number=Sing	4	obj	_	_
6	Mandela	Mandela	PROPN	_	_	5	flat:name	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Parlement	Parlement	PROPN	_	_	4	obl	_	_
10	européen	européen	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
11	;	;	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aller	aller	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	écouter	écouter	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	et	et	CCONJ	_	_	6	cc	_	_
6	voir	voir	VERB	_	VerbForm=Inf	4	conj	_	_
7	tout	tout	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


