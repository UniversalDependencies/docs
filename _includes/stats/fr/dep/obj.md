

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

14012 nodes (4%) are attached to their parents as `obj`.

11024 instances of `obj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24750214102198.

The following 29 pairs of parts of speech are connected with `obj`: [fr-pos/VERB]()-[fr-pos/NOUN]() (10035; 72% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (3141; 22% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (667; 5% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (52; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (24; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (16; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (14; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (13; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (9; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (5; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/INTJ]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Pourquoi	pourquoi	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	mais	mais	CCONJ	_	_	4	cc	_	_
4	pourquoi	pourquoi	ADV	_	_	1	advmod	_	_
5	Le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	bénirais	bénir	VERB	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	-je	je	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	_	3	iobj	_	_
3	incarnera	incarner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Poussette	Poussette	PROPN	_	_	3	obj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Manon	Manon	PROPN	_	_	5	nmod	_	_
8	peu	peu	ADV	_	_	10	det	_	_
9	de	un	DET	_	Definite=Ind|PronType=Art	8	fixed	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
11	après	après	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

671 nodes (4%) are attached to their parents as `obj`.

550 instances of `obj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.39791356184799.

The following 11 pairs of parts of speech are connected with `obj`: [fr-pos/VERB]()-[fr-pos/NOUN]() (527; 79% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (123; 18% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (6; 1% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (5; 1% instances), [fr-pos/VERB]()-[fr-pos/DET]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obj	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	dauphins	dauphin	NOUN	S	Gender=Masc|Number=Plur	3	nsubj	_	_
3	mangent	manger	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	poissons	poisson	NOUN	S	Gender=Masc|Number=Plur	3	obj	_	_
6	qui	qui	PRON	PR	PronType=Rel	8	nsubj	_	_
7	ont	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	absorbé	absorber	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl:relcl	_	_
9	des	un	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	_
10	PCB	PCB	PROPN	SP	_	8	obj	_	_
11	de	de	ADP	E	_	13	case	_	_
12	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	plancton	plancton	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	26	punct	_	_
15	et	et	CCONJ	CC	_	26	cc	_	_
16	ces	ce	DET	DD	Number=Plur|PronType=Dem	17	det	_	_
17	PCB	PCB	PROPN	SP	_	26	nsubj	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	17	punct	_	_
19	étant	être	AUX	VA	VerbForm=Ger	20	cop	_	_
20	solubles	soluble	ADJ	A	Number=Plur	26	advcl	_	_
21	dans	dans	ADP	E	_	23	case	_	_
22	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	graisse	graisse	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	SpaceAfter=No
24	,	,	PUNCT	FF	_	20	punct	_	_
25	s'	se	PRON	_	Person=3|PronType=Prs	26	obj	_	SpaceAfter=No
26	accumulent	accumuler	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
27	chez	chez	ADP	E	_	29	case	_	_
28	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	29	det	_	_
29	dauphins	dauphin	NOUN	S	Gender=Masc|Number=Plur	26	obl	_	SpaceAfter=No
30	.	.	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

1932 nodes (3%) are attached to their parents as `obj`.

1712 instances of `obj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45341614906832.

The following 7 pairs of parts of speech are connected with `obj`: [fr-pos/VERB]()-[fr-pos/NOUN]() (1590; 82% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (251; 13% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (73; 4% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (6; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (6; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	N'	ne	ADV	_	Polarity=Neg	2	advmod	_	SpaceAfter=No
2	utilisez	utiliser	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	jamais	jamais	ADV	_	Polarity=Neg	2	advmod	_	_
4	Angiox	Angiox	PROPN	_	_	2	obj	_	_
5	:	:	PUNCT	_	_	2	punct	_	_

~~~


