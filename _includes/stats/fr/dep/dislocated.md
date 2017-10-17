

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

26 nodes (0%) are attached to their parents as `dislocated`.

24 instances of `dislocated` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.57692307692308.

The following 8 pairs of parts of speech are connected with `dislocated`: [fr-pos/VERB]()-[fr-pos/PRON]() (8; 31% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (5; 19% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (4; 15% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (3; 12% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (3; 12% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (1; 4% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 4% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 dislocated	color:blue
1	Tout	tout	DET	_	Gender=Masc|Number=Sing	2	det	_	_
2	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	13	dislocated	_	_
3	que	que	PRON	_	PronType=Rel	7	obj	_	_
4	l'	l'	PART	_	_	5	expl	_	SpaceAfter=No
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
6	peux	pouvoir	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	chercher	chercher	VERB	_	VerbForm=Inf	2	acl:relcl	_	_
8	en	en	ADP	_	_	9	case	_	_
9	pitou	pitou	PROPN	_	_	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	_	_
11	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	13	nsubj	_	_
12	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	:)	:)	SYM	_	_	13	dep	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	marocains	marocain	NOUN	_	Gender=Masc|Number=Plur	7	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	plus	plus	SCONJ	_	_	7	cc	_	_
5	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
6	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	réprimés	réprimer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	plus	plus	SCONJ	_	_	11	cc	_	_
10	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
11	baisent	baiser	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	main	main	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	leur	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	16	nmod:poss	_	_
16	roi	roi	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	«	«	PUNCT	_	_	4	punct	_	_
2	Être	être	VERB	_	VerbForm=Inf	4	dislocated	_	_
3	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	valeur	valeur	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	variable	variable	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	liée	lier	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	amod	_	_
12	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

7 nodes (0%) are attached to their parents as `dislocated`.

5 instances of `dislocated` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.85714285714286.

The following 5 pairs of parts of speech are connected with `dislocated`: [fr-pos/ADJ]()-[fr-pos/NOUN]() (2; 29% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 29% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 14% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 14% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	Ces	ce	DET	DD	Number=Plur|PronType=Dem	2	det	_	_
2	femelles	femelle	NOUN	S	Gender=Fem|Number=Plur	7	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	elles	elle	PRON	PE	Gender=Fem|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
5	n'	ne	PART	PART	Polarity=Neg	6	advmod	_	SpaceAfter=No
6	y	y	ADV	B	_	7	advmod	_	_
7	sont	être	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	pour	pour	ADP	E	_	9	case	_	_
9	rien	rien	PRON	PI	PronType=Ind	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dislocated	color:blue
1	Ça	ce	PRON	PD	PronType=Dem	5	nsubj	_	_
2	peut	pouvoir	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	être	être	AUX	VA	VerbForm=Inf	5	cop	_	_
4	très	très	ADV	B	_	5	advmod	_	_
5	compliqué	compliqué	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	océan	océan	NOUN	S	Gender=Masc|Number=Sing	5	dislocated	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 dislocated	color:blue
1	Et	et	CCONJ	CC	_	8	cc	_	_
2	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	prédateur	prédateur	NOUN	S	Gender=Masc|Number=Sing	8	dislocated	_	_
4	suprême	suprême	ADJ	A	Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	c'	ce	PRON	PD	PronType=Dem	8	nsubj	_	SpaceAfter=No
7	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	0	root	_	_
9	bien	bien	ADV	B	_	10	advmod	_	_
10	sûr	sûr	ADV	B	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

14 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57142857142857.

The following 8 pairs of parts of speech are connected with `dislocated`: [fr-pos/PRON]()-[fr-pos/PROPN]() (5; 36% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (3; 21% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 7% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 7% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 7% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 7% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (1; 7% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dislocated	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3	1	nsubj	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	Angiox	Angiox	PROPN	_	_	1	dislocated	_	_
6	et	et	CCONJ	_	_	12	cc	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	9	det	_	_
9	cas	cas	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	SpaceAfter=No
11	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	12	nsubj:pass	_	_
12	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	conj	_	_
13	2	2	NUM	_	NumType=Card	1	nummod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dislocated	color:blue
1	Ce	ce	PRON	_	PronType=Rel	9	dislocated	_	_
2	que	que	PRON	_	PronType=Rel	4	obj	_	_
3	nous	il	PRON	_	Number=Plur|Person=1	4	nsubj	_	_
4	voulons	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	surtout	surtout	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	c'	ce	PRON	_	Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	économiser	économiser	VERB	_	VerbForm=Inf	0	root	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	combustibles	combustible	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	_
12	fossiles	fossile	ADJ	_	Number=Plur	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 5 dislocated	color:blue
1	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	15	vocative	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	15	punct	_	_
5	famine	famine	NOUN	_	Gender=Fem|Number=Sing	15	dislocated	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	Éthiopie	Éthiopie	PROPN	_	Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	15	punct	_	_
9	ces	ce	DET	_	Number=Plur|PronType=Dem	11	det	_	_
10	deux	deux	NUM	_	NumType=Card	11	nummod	_	_
11	mots	mot	NOUN	_	Gender=Masc|Number=Plur	15	nsubj:pass	_	_
12	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux:pass	_	_
13	déjà	déjà	ADV	_	_	15	advmod	_	_
14	douloureusement	douloureusement	ADV	_	_	15	advmod	_	_
15	liés	lier	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
16	dans	dans	ADP	_	_	18	case	_	_
17	nos	son	DET	_	Number=Plur|Poss=Yes	18	nmod:poss	_	_
18	mémoires	mémoires	NOUN	_	Gender=Masc|Number=Plur	15	obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	15	punct	_	_

~~~


