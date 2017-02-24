

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

5949 nodes (2%) are attached to their parents as `aux`.

5943 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53538409816776.

The following 8 pairs of parts of speech are connected with `aux`: [fr-pos/VERB]()-[fr-pos/AUX]() (5762; 97% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (93; 2% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (79; 1% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (9; 0% instances), [fr-pos/NUM]()-[fr-pos/AUX]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/AUX]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/AUX]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	fonce	foncer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	et	et	CCONJ	_	_	5	cc	_	_
4	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
5	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	audace	audace	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	récompensée	récompenser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	également	également	ADV	_	_	5	advmod	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	capitaine	capitaine	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	équipe	équipe	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
9	bruxelloise	bruxellois	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	pose	pose	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	parfaite	parfait	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
6	!	!	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

331 nodes (2%) are attached to their parents as `aux`.

330 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73413897280967.

The following 5 pairs of parts of speech are connected with `aux`: [fr-pos/VERB]()-[fr-pos/AUX]() (311; 94% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (15; 5% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (2; 1% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (2; 1% instances), [fr-pos/AUX]()-[fr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 aux	color:blue
1	La	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	plupart	plupart	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
3	d'	de	ADP	E	_	5	case	_	SpaceAfter=No
4	entre	entre	ADP	E	_	3	fixed	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	2	nmod	_	_
6	ne	ne	PART	PART	Polarity=Neg	7	advmod	_	_
7	savent	savoir	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	peut-être	peut-être	ADV	_	_	7	advmod	_	_
9	pas	pas	ADV	BN	Polarity=Neg	7	advmod	_	_
10	que	que	SCONJ	CS	_	17	mark	_	_
11	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	champignons	champignon	NOUN	S	Gender=Masc|Number=Plur	17	nsubj	_	_
13	ont	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	_
14	été	être	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	17	cop	_	_
15	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
16	premiers	premier	ADJ	NO	Gender=Masc|Number=Plur|NumType=Ord	17	amod	_	_
17	organismes	organisme	NOUN	S	Gender=Masc|Number=Plur	7	ccomp	_	_
18	à	à	ADP	E	_	19	mark	_	_
19	venir	venir	VERB	V	VerbForm=Inf	17	acl	_	_
20	sur	sur	ADP	E	_	22	case	_	_
21	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	terre	terre	NOUN	S	Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

1085 nodes (2%) are attached to their parents as `aux`.

1085 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70322580645161.

The following 4 pairs of parts of speech are connected with `aux`: [fr-pos/VERB]()-[fr-pos/AUX]() (1023; 94% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (36; 3% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (24; 2% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
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
# visual-style 10 6 aux	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	enquête	enquête	NOUN	_	Gender=Fem|Number=Sing	10	nsubj:pass	_	_
3	sur	sur	ADP	_	_	5	case	_	_
4	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	5	nmod:poss	_	_
5	mort	mort	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
7	été	être	AUX	_	Tense=Past|VerbForm=Part	10	aux:pass	_	_
8	classée	classer	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	10	cop	_	_
9	sans	sans	ADP	_	_	10	case	_	_
10	suite	suite	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	étant	être	AUX	_	Tense=Pres|VerbForm=Part	15	aux:pass	_	_
13	considérée	considérer	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	15	cop	_	_
14	comme	comme	ADP	_	_	15	mark	_	_
15	accidentelle	accidentel	ADJ	_	Gender=Fem|Number=Sing	2	acl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	10	punct	_	_

~~~


