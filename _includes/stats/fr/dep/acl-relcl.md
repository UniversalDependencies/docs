

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [acl]().

3290 nodes (1%) are attached to their parents as `acl:relcl`.

3289 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.68480243161094.

The following 29 pairs of parts of speech are connected with `acl:relcl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (2312; 70% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (388; 12% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (310; 9% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (84; 3% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (73; 2% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (20; 1% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (16; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (11; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (11; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (11; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (9; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (8; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (6; 0% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (5; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Victor	Victor	PROPN	_	_	0	root	_	_
2	qui	qui	PRON	_	PronType=Rel	3	nsubj	_	_
3	pète	péter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Qu'	que	PRON	_	_	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	1	expl	_	_
4	qui	qui	PRON	_	_	3	fixed	_	_
5	va	aller	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	3	acl:relcl	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is a language-specific subtype of [acl]().

187 nodes (1%) are attached to their parents as `acl:relcl`.

187 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.20320855614973.

The following 14 pairs of parts of speech are connected with `acl:relcl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (118; 63% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (36; 19% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (10; 5% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (7; 4% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (4; 2% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (2; 1% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 1% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 1% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 1% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 1% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Définissez	définir	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	budget	budget	NOUN	S	Gender=Masc|Number=Sing	1	obj	_	_
4	quotidien	quotidien	ADJ	A	Gender=Masc|Number=Sing	3	amod	_	_
5	qui	qui	PRON	PR	PronType=Rel	7	nsubj	_	_
6	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	7	iobj	_	_
7	convient	convenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	C'	ce	PRON	PD	PronType=Dem	3	nsubj	_	SpaceAfter=No
2	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ce	ce	PRON	PD	Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	que	que	PRON	PR	PronType=Rel	6	obj	_	_
5	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	demandons	demander	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
7	aujourd'hui	aujourd'hui	ADV	B	_	6	advmod	_	_
8	à	à	ADP	E	_	10	case	_	_
9	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	commissaire	commissaire	NOUN	S	Number=Sing	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl:relcl	color:blue
1	Et	et	CCONJ	CC	_	4	cc	_	_
2	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	4	iobj	_	_
4	présente	présenter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	concept	concept	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
7	selon	selon	ADP	E	_	8	case	_	_
8	lequel	lequel	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	12	nmod	_	_
9	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	12	nsubj	_	_
10	sont	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	des	de	DET	_	Definite=Ind|Number=Plur|PronType=Art	12	det	_	_
12	membranes	membranes	NOUN	S	Gender=Fem|Number=Plur	6	acl:relcl	_	_
13	neurologiques	neurologique	ADJ	A	Gender=Fem|Number=Plur	12	amod	_	_
14	étendues	étendu	ADJ	A	Gender=Fem|Number=Plur	12	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is a language-specific subtype of [acl]().

474 nodes (1%) are attached to their parents as `acl:relcl`.

474 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.76793248945148.

The following 15 pairs of parts of speech are connected with `acl:relcl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (335; 71% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (41; 9% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (31; 7% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (29; 6% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (14; 3% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (7; 1% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (4; 1% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (3; 1% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	association	association	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	qui	qui	PRON	_	PronType=Rel	4	nsubj	_	_
4	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	aujourd'	aujourd'	ADP	_	_	4	advmod	_	SpaceAfter=No
6	hui	hui	NOUN	_	_	5	fixed	_	_
7	39	39	NUM	_	NumType=Card	8	nummod	_	_
8	passionnés	passionné	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3	3	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ce	ce	PRON	_	PronType=Rel	0	root	_	_
4	que	que	PRON	_	PronType=Rel	7	obj	_	_
5	nous	il	PRON	_	Number=Plur|Person=1	7	nsubj	_	_
6	devons	devoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	éviter	éviter	VERB	_	VerbForm=Inf	3	acl:relcl	_	_
8	à	à	ADP	_	_	10	case	_	_
9	tout	tout	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	prix	prix	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 acl:relcl	color:blue
1	Mais	mais	CCONJ	_	_	2	cc	_	_
2	il	il	PRON	_	Number=Sing|Person=3	0	root	_	_
3	y	y	PRON	_	Person=3	2	fixed	_	_
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	fixed	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
7	sur	sur	ADP	_	_	8	case	_	_
8	lequel	lequel	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	13	obl	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Commission	commission	PROPN	_	Gender=Fem|Number=Sing	13	nsubj	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	en	en	ADP	_	_	13	case	_	_
13	désaccord	désaccord	NOUN	_	Gender=Masc|Number=Sing	6	acl:relcl	_	_
14	avec	avec	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Conseil	conseil	PROPN	_	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


