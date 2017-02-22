

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

1685 nodes (0%) are attached to their parents as `xcomp`.

1675 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91988130563798.

The following 24 pairs of parts of speech are connected with `xcomp`: [fr-pos/VERB]()-[fr-pos/VERB]() (584; 35% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (486; 29% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (351; 21% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (179; 11% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (22; 1% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (22; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	Vraiment	vraiment	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	j'	je	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
4	y	y	ADV	_	_	6	advmod	_	_
5	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	passé	passer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	du	du	DET	_	Gender=Masc|Number=Sing	9	det	_	_
8	bon	bon	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	temps	temps	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	conj	_	_
12	y	y	ADV	_	_	13	advmod	_	_
13	retourner	retourner	VERB	_	VerbForm=Inf	11	xcomp	_	_
14	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	roi	roi	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	Mutesa	Mutesa	PROPN	_	_	2	appos	_	_
4	II	II	NUM	_	_	3	nummod	_	_
5	en	en	PRON	_	Person=3	6	iobj	_	_
6	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	6	xcomp	_	_
9	à	à	ADP	_	_	10	case	_	_
10	vie	vie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	junk-food	junk-food	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	aussi	aussi	ADV	_	_	5	advmod	_	_
5	accro	accro	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	drogues	drogue	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	_
9	dures	dur	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

129 nodes (1%) are attached to their parents as `xcomp`.

129 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 4 pairs of parts of speech are connected with `xcomp`: [fr-pos/VERB]()-[fr-pos/VERB]() (83; 64% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (33; 26% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (9; 7% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (4; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	créer	créer	VERB	V	VerbForm=Inf	0	root	_	_
2	et	et	CCONJ	CC	_	3	cc	_	_
3	reproduire	reproduire	VERB	V	VerbForm=Inf	1	conj	_	_
4	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	oeuvres	oeuvre	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
6	dites	dire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	5	acl	_	_
7	derivées	dérivé	ADJ	A	Gender=Fem|Number=Plur	6	xcomp	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 xcomp	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	retards	retard	NOUN	S	Gender=Masc|Number=Plur	10	nsubj	_	_
3	survenus	survenir	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	_
4	dans	dans	ADP	E	_	6	case	_	_
5	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	travaux	travail	NOUN	S	Gender=Masc|Number=Plur	3	obl	_	_
7	de	de	ADP	E	_	9	case	_	_
8	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Cen	Cen	PROPN	SP	_	6	nmod	_	_
10	entraînent	entraîner	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	à	à	ADP	E	_	12	case	_	_
12	présent	présent	ADJ	A	Gender=Masc|Number=Sing	10	obl	_	_
13	des	un	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	14	det	_	_
14	problèmes	problème	NOUN	S	Gender=Masc|Number=Plur	10	xcomp	_	_
15	dans	dans	ADP	E	_	17	case	_	_
16	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	17	det	_	SpaceAfter=No
17	application	application	NOUN	S	Gender=Fem|Number=Sing	14	nmod	_	_
18	même	même	ADV	B	_	17	advmod	_	_
19	de	de	ADP	E	_	21	case	_	_
20	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	directive	directive	NOUN	S	Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	10	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

536 nodes (1%) are attached to their parents as `xcomp`.

536 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.89738805970149.

The following 8 pairs of parts of speech are connected with `xcomp`: [fr-pos/VERB]()-[fr-pos/VERB]() (463; 86% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (38; 7% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (25; 5% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (4; 1% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	conteur	conteur	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	jouer	jouer	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	enfants	enfant	NOUN	_	Number=Plur	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Eric	Eric	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Halphen	Halphen	PROPN	_	_	1	flat:name	_	_
3	reçoit	recevoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	personne	personne	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	_
6	désireuse	désireux	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
7	de	de	ADP	_	_	8	mark	_	_
8	garder	garder	VERB	_	VerbForm=Inf	6	xcomp	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	anonymat	anonymat	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Nous	il	PRON	_	Number=Plur|Person=1	3	nsubj	_	_
2	devrions	devoir	AUX	_	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	prendre	prendre	VERB	_	VerbForm=Inf	0	root	_	_
4	cela	cela	PRON	_	Number=Sing|PronType=Dem	3	obj	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sérieux	sérieux	ADJ	_	Gender=Masc	3	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


