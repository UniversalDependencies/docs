

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

3564 nodes (1%) are attached to their parents as `advcl`.

2587 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.85521885521885.

The following 36 pairs of parts of speech are connected with `advcl`: [it-pos/VERB]()-[it-pos/VERB]() (2607; 73% instances), [it-pos/ADJ]()-[it-pos/VERB]() (317; 9% instances), [it-pos/NOUN]()-[it-pos/VERB]() (283; 8% instances), [it-pos/VERB]()-[it-pos/ADJ]() (112; 3% instances), [it-pos/VERB]()-[it-pos/NOUN]() (48; 1% instances), [it-pos/PRON]()-[it-pos/VERB]() (31; 1% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (29; 1% instances), [it-pos/ADV]()-[it-pos/VERB]() (22; 1% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (15; 0% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (13; 0% instances), [it-pos/PRON]()-[it-pos/NOUN]() (13; 0% instances), [it-pos/PROPN]()-[it-pos/VERB]() (13; 0% instances), [it-pos/NUM]()-[it-pos/VERB]() (8; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (5; 0% instances), [it-pos/VERB]()-[it-pos/PRON]() (5; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (4; 0% instances), [it-pos/DET]()-[it-pos/VERB]() (4; 0% instances), [it-pos/INTJ]()-[it-pos/VERB]() (4; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/AUX]()-[it-pos/VERB]() (3; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/PUNCT]()-[it-pos/VERB]() (3; 0% instances), [it-pos/VERB]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/ADV]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/NUM]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/PROPN]()-[it-pos/PRON]() (2; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NUM]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/NUM]() (1; 0% instances), [it-pos/SYM]()-[it-pos/VERB]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 advcl	color:blue
1	Se	se	SCONJ	CS	_	2	mark	_	_
2	pensi	pensare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	advcl	_	_
3	a	a	ADP	E	_	5	case	_	_
4	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	cose	cosa	NOUN	S	Gender=Fem|Number=Plur	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	se	se	SCONJ	CS	_	9	mark	_	_
8	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	9	expl	_	_
9	rifletti	riflettere	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	advcl	_	_
10	su	su	ADV	B	_	9	advmod	_	_
11	finisci	finire	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
12	per	per	ADP	E	_	13	mark	_	_
13	sbagliare	sbagliare	VERB	V	VerbForm=Inf	11	advcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	Un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Prototaxites	Prototaxites	PROPN	SP	_	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	8	punct	_	_
4	restando	restare	VERB	V	VerbForm=Ger	8	advcl	_	_
5	bassi	basso	NOUN	S	Gender=Masc|Number=Plur	4	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	8	punct	_	_
7	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	alto	alto	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
9	circa	circa	ADV	B	_	10	advmod	_	_
10	1	1	NUM	N	NumType=Card	11	nummod	_	_
11	metro	metro	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl	color:blue
1	Quel	quello	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	tentativo	tentativo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	di	di	ADP	E	_	4	case	_	_
4	suicidio	suicidio	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
5	perché	perché	SCONJ	CS	_	7	mark	_	_
6	Dario	Dario	PROPN	SP	_	7	nsubj	_	_
7	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	advcl	_	_
8	un'	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	altra	altro	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

543 nodes (1%) are attached to their parents as `advcl`.

400 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.22467771639042.

The following 19 pairs of parts of speech are connected with `advcl`: [it-pos/VERB]()-[it-pos/VERB]() (408; 75% instances), [it-pos/ADJ]()-[it-pos/VERB]() (63; 12% instances), [it-pos/VERB]()-[it-pos/ADJ]() (17; 3% instances), [it-pos/VERB]()-[it-pos/NOUN]() (13; 2% instances), [it-pos/PRON]()-[it-pos/VERB]() (12; 2% instances), [it-pos/NOUN]()-[it-pos/VERB]() (6; 1% instances), [it-pos/PRON]()-[it-pos/NOUN]() (6; 1% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (3; 1% instances), [it-pos/VERB]()-[it-pos/PROPN]() (3; 1% instances), [it-pos/ADV]()-[it-pos/VERB]() (2; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances), [it-pos/DET]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NUM]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/NUM]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advcl	color:blue
1	Qual	quale	PRON	PQ	Number=Sing|PronType=Int	0	root	_	_
2	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	età	età	NOUN	S	Gender=Fem	1	nsubj	_	_
5	minima	minimo	ADJ	A	Gender=Fem|Number=Sing	4	amod	_	_
6	richiesta	richiedere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	4	acl	_	_
7	per	per	ADP	E	_	8	mark	_	_
8	registrar	registrare	VERB	V	VerbForm=Inf	6	advcl	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl	_	_
10	su	su	ADP	E	_	11	case	_	_
11	Facebook	Facebook	PROPN	SP	_	8	obl	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl	color:blue
1	Credo	credere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	5	mark	_	_
3	dovremmo	dovere	AUX	VM	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	VA	VerbForm=Inf	5	cop	_	_
5	capaci	capace	ADJ	A	Number=Plur	1	ccomp	_	_
6	di	di	ADP	E	_	7	mark	_	_
7	dir	dire	VERB	V	VerbForm=Inf	5	advcl	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	chiaro	chiaro	ADJ	A	Gender=Masc|Number=Sing	7	advmod	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	forte	forte	ADJ	A	Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 advcl	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	Ucraina	Ucraina	PROPN	SP	_	3	nsubj	_	_
3	resisterà	resistere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	a	a	ADP	E	_	6	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	prepotenza	prepotenza	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	_
7	-	-	PUNCT	FF	_	3	punct	_	_
8	da	da	ADP	E	_	9	case	_	_
9	sola	solo	ADJ	A	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	3	punct	_	_
11	se	se	SCONJ	CS	_	12	mark	_	_
12	necessario	necessario	ADJ	A	Gender=Masc|Number=Sing	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	3	punct	_	_

~~~


