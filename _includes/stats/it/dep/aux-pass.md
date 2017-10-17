

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [aux]().

2120 nodes (1%) are attached to their parents as `aux:pass`.

2117 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16603773584906.

The following 5 pairs of parts of speech are connected with `aux:pass`: [it-pos/VERB]()-[it-pos/AUX]() (2102; 99% instances), [it-pos/ADJ]()-[it-pos/AUX]() (8; 0% instances), [it-pos/NOUN]()-[it-pos/AUX]() (8; 0% instances), [it-pos/PRON]()-[it-pos/AUX]() (1; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux:pass	color:blue
1	900	900	NUM	N	NumType=Card	0	root	_	_
2	se	se	SCONJ	CS	_	8	mark	_	_
3	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	ricerche	ricerca	NOUN	S	Gender=Fem|Number=Plur	8	nsubj:pass	_	_
5	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
6	state	essere	AUX	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	cop	_	_
7	molto	molto	ADV	B	_	8	advmod	_	_
8	lunghe	lungo	ADJ	A	Gender=Fem|Number=Plur	1	advcl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Quando	quando	ADV	B	_	3	advmod	_	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	fabbricato	fabbricato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	6	amod	_	_
6	asciugacapelli	asciugacapelli	NOUN	S	Gender=Masc	3	nsubj:pass	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is a language-specific subtype of [aux]().

370 nodes (1%) are attached to their parents as `aux:pass`.

370 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22432432432432.

The following 3 pairs of parts of speech are connected with `aux:pass`: [it-pos/VERB]()-[it-pos/AUX]() (366; 99% instances), [it-pos/ADJ]()-[it-pos/AUX]() (3; 1% instances), [it-pos/NOUN]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	ammesse	ammettere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
4	modifiche	modifica	NOUN	S	Gender=Fem|Number=Plur	3	nsubj:pass	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 aux:pass	color:blue
1	Per	per	ADP	E	_	3	case	_	_
2	alcuni	alcuno	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	3	det	_	_
3	comuni	comune	NOUN	S	Gender=Masc|Number=Plur	13	obl	_	_
4	di	di	ADP	E	_	7	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	paese	paese	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	situazione	situazione	NOUN	S	Gender=Fem|Number=Sing	13	nsubj:pass	_	_
10	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	_	_
11	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	13	cop	_	_
12	veramente	veramente	ADV	B	_	13	advmod	_	_
13	infernale	infernale	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux:pass	color:blue
1	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
2	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	cop	_	_
3	a	a	ADP	E	_	4	case	_	_
4	causa	causa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	di	di	ADP	E	_	8	case	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
7	sciagurate	sciagurato	ADJ	A	Gender=Fem|Number=Plur	8	amod	_	_
8	politiche	politica	NOUN	S	Gender=Fem|Number=Plur	4	nmod	_	_
9	di	di	ADP	E	_	12	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det:poss	_	_
12	partito	partito	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_
13	conservatore	conservatore	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
14	.	.	PUNCT	FS	_	4	punct	_	_

~~~


