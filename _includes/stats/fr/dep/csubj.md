

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

47 nodes (0%) are attached to their parents as `csubj`.

32 instances of `csubj` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.72340425531915.

The following 6 pairs of parts of speech are connected with `csubj`: [fr-pos/VERB]()-[fr-pos/VERB]() (23; 49% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (13; 28% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (8; 17% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 2% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (1; 2% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Mieux	mieux	ADV	_	_	2	advmod	_	_
2	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	4	obj	_	_
4	oublier	oublier	VERB	_	VerbForm=Inf	2	csubj	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 csubj	color:blue
1	Manger	manger	VERB	_	VerbForm=Inf	10	csubj	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	poisson	poisson	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	_
4	pêché	pêcher	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	étang	étang	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	enchantement	enchantement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj	color:blue
1	Seul	seul	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
2	bémol	bémol	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	trouver	trouver	VERB	_	VerbForm=Inf	11	csubj	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	place	place	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	de	de	ADP	_	_	8	case	_	_
8	parking	parking	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	très	très	ADV	_	_	11	advmod	_	_
11	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	2	ccomp	_	_
12	!	!	PUNCT	_	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

38 nodes (0%) are attached to their parents as `csubj`.

37 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.21052631578947.

The following 6 pairs of parts of speech are connected with `csubj`: [fr-pos/VERB]()-[fr-pos/VERB]() (19; 50% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (12; 32% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (4; 11% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 3% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (1; 3% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	-	-	PUNCT	FF	_	3	punct	_	_
2	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	convient	convenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	E	_	5	mark	_	_
5	mettre	mettre	VERB	V	VerbForm=Inf	3	csubj	_	_
6	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	accent	accent	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	_
8	sur	sur	ADP	E	_	10	case	_	_
9	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	formation	formation	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
11	pratique	pratique	ADJ	A	Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	Considérant	considérer	VERB	V	VerbForm=Ger	0	root	_	_
2	qu'	que	SCONJ	CS	_	5	mark	_	SpaceAfter=No
3	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
4	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	essentiel	essentiel	ADJ	A	Gender=Masc|Number=Sing	1	ccomp	_	_
6	d'	de	ADP	E	_	7	mark	_	SpaceAfter=No
7	encourager	encourager	VERB	V	VerbForm=Inf	5	csubj	_	_
8	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	développement	développement	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	_
10	de	de	ADP	E	_	11	case	_	_
11	relations	relation	NOUN	S	Gender=Fem|Number=Plur	9	nmod	_	_
12	amicales	amical	ADJ	A	Gender=Fem|Number=Plur	11	amod	_	_
13	entre	entre	ADP	E	_	14	case	_	_
14	nations	nation	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	-il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	vrai	vrai	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	que	que	SCONJ	CS	_	7	mark	_	_
5	Facebook	Facebook	PROPN	SP	_	7	nsubj	_	_
6	va	aller	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	facturer	facturer	VERB	V	VerbForm=Inf	3	csubj	_	_
8	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	utilisation	utilisation	NOUN	S	Gender=Fem|Number=Sing	7	obj	_	_
10	de	de	ADP	E	_	12	case	_	_
11	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	site	site	NOUN	S	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

3 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 1 pairs of parts of speech are connected with `csubj`: [fr-pos/VERB]()-[fr-pos/VERB]() (3; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 csubj	color:blue
1	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	18	vocative	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	chers	cher	ADJ	_	Gender=Masc|Number=Plur	6	amod	_	_
6	collègues	collègue	NOUN	_	Number=Plur	1	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Madame	monsieur	NOUN	_	Gender=Fem|Number=Sing	1	conj	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	rapporteur	rapporteur	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	18	punct	_	_
12	comme	comme	SCONJ	_	_	13	mark	_	_
13	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	proverbe	proverbe	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
16	:	:	PUNCT	_	_	13	punct	_	_
17	mieux	mieux	ADV	_	_	18	advmod	_	_
18	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	prévenir	prévenir	VERB	_	VerbForm=Inf	18	csubj	_	_
20	que	que	SCONJ	_	_	21	mark	_	_
21	guérir	guérir	VERB	_	VerbForm=Inf	18	advcl	_	SpaceAfter=No
22	.	.	PUNCT	_	_	18	punct	_	_

~~~


