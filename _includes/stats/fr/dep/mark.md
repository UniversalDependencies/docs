

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

6296 nodes (2%) are attached to their parents as `mark`.

6276 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80098475222363.

The following 35 pairs of parts of speech are connected with `mark`: [fr-pos/VERB]()-[fr-pos/ADP]() (3875; 62% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (1436; 23% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (509; 8% instances), [fr-pos/NOUN]()-[fr-pos/SCONJ]() (134; 2% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (133; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (40; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (36; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADP]() (25; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (16; 0% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (16; 0% instances), [fr-pos/PRON]()-[fr-pos/SCONJ]() (13; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (12; 0% instances), [fr-pos/PROPN]()-[fr-pos/SCONJ]() (6; 0% instances), [fr-pos/VERB]()-[fr-pos/CCONJ]() (6; 0% instances), [fr-pos/NUM]()-[fr-pos/SCONJ]() (4; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADP]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/ADV]() (3; 0% instances), [fr-pos/ADV]()-[fr-pos/SCONJ]() (3; 0% instances), [fr-pos/PRON]()-[fr-pos/ADP]() (3; 0% instances), [fr-pos/ADV]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/DET]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/CCONJ]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/SCONJ]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/PART]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 mark	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
5	aussi	aussi	ADV	_	_	6	advmod	_	_
6	anxieux	anxieux	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	y	y	PRON	_	_	10	expl	_	_
10	paraît	paraître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Comme	comme	ADV	_	_	2	mark	_	_
2	dirait	dire	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
3	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	10	advmod	_	_
7	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	pas	pas	ADV	_	Polarity=Neg	10	advmod	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	girouette	girouette	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
11	!	!	PUNCT	_	_	10	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

555 nodes (3%) are attached to their parents as `mark`.

554 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.78198198198198.

The following 13 pairs of parts of speech are connected with `mark`: [fr-pos/VERB]()-[fr-pos/ADP]() (271; 49% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (197; 35% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (28; 5% instances), [fr-pos/NOUN]()-[fr-pos/SCONJ]() (22; 4% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (16; 3% instances), [fr-pos/ADJ]()-[fr-pos/ADP]() (6; 1% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (5; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/SCONJ]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/PRON]()-[fr-pos/SCONJ]() (2; 0% instances), [fr-pos/DET]()-[fr-pos/SCONJ]() (1; 0% instances), [fr-pos/PUNCT]()-[fr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 mark	color:blue
1	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	titre	titre	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	E	_	5	case	_	_
4	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	oeuvre	oeuvre	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	originale	originale	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	_
7	s'	si	ADP	E	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	indiqué	indiquer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	SpaceAfter=No
11	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 mark	color:blue
1	Monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	7	vocative	_	_
2	Cox	Cox	PROPN	SP	_	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	7	vocative	_	_
5	Hänsch	Hänsch	PROPN	SP	_	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	4	punct	_	_
7	est	être	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	-ce	ce	PRON	PD	Number=Sing|Person=3|PronType=Dem	7	nsubj	_	_
9	que	que	SCONJ	CS	_	12	mark	_	_
10	cela	cela	PRON	PD	Number=Sing|Person=3|PronType=Dem	12	nsubj	_	_
11	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	12	iobj	_	_
12	convient	convenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	crois	croire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu'	que	SCONJ	CS	_	5	mark	_	SpaceAfter=No
4	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	faut	falloir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	que	que	SCONJ	CS	_	9	mark	_	_
7	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	soyons	être	AUX	VA	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	capables	capable	ADJ	A	Number=Plur	5	ccomp	_	_
10	de	de	ADP	E	_	12	mark	_	_
11	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
12	dire	dire	VERB	V	VerbForm=Inf	9	advcl	_	_
13	haut	haut	ADV	_	_	12	advmod	_	_
14	et	et	CCONJ	CC	_	15	cc	_	_
15	fort	fort	ADV	_	_	13	conj	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

1270 nodes (2%) are attached to their parents as `mark`.

1270 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.53149606299213.

The following 16 pairs of parts of speech are connected with `mark`: [fr-pos/VERB]()-[fr-pos/ADP]() (664; 52% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (404; 32% instances), [fr-pos/NOUN]()-[fr-pos/SCONJ]() (65; 5% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (51; 4% instances), [fr-pos/ADJ]()-[fr-pos/ADP]() (25; 2% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (22; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (14; 1% instances), [fr-pos/PROPN]()-[fr-pos/SCONJ]() (10; 1% instances), [fr-pos/PRON]()-[fr-pos/SCONJ]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/SCONJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	à	à	ADP	_	_	2	mark	_	_
2	conserver	conserver	VERB	_	VerbForm=Inf	0	root	_	_
3	à	à	ADP	_	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	réfrigérateur	réfrigérateur	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	_
6	(	(	PUNCT	_	_	2	punct	_	SpaceAfter=No
7	entre	entre	ADP	_	_	9	case	_	_
8	2	2	NUM	_	NumType=Card	9	nummod	_	_
9	°C	°C	NOUN	_	_	2	obl	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	8	8	NUM	_	NumType=Card	12	nummod	_	_
12	°C	°C	NOUN	_	_	9	conj	_	SpaceAfter=No
13	)	)	PUNCT	_	_	2	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 mark	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	5	nsubj	_	_
2	dois	devoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	toutefois	toutefois	ADV	_	_	5	advmod	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	_
5	honnête	honnête	ADJ	_	Number=Sing	0	root	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	dire	dire	VERB	_	VerbForm=Inf	5	conj	_	_
8	que	que	SCONJ	_	_	12	mark	_	_
9	personne	personne	PRON	_	Number=Sing|PronType=Rel	12	nsubj	_	_
10	ne	ne	ADV	_	_	12	advmod	_	_
11	les	le	PRON	_	Number=Plur|Person=3	12	obj	_	_
12	aide	aider	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vraiment	vraiment	ADV	_	_	5	advmod	_	_
5	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
6	que	que	SCONJ	_	_	10	mark	_	_
7	cela	cela	PRON	_	Number=Sing|PronType=Dem	10	nsubj	_	_
8	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	problème	problème	NOUN	_	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


