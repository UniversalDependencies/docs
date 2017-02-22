

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:impers]().

363 nodes (0%) are attached to their parents as `expl:pass`.

325 instances of `expl:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23140495867769.

The following 1 pairs of parts of speech are connected with `expl:pass`: [it-pos/VERB]()-[it-pos/PRON]() (363; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pass	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	lana	lana	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fibra	fibra	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	che	che	PRON	PR	PronType=Rel	8	nsubj:pass	_	_
7	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl:pass	_	_
8	tinge	tingere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	molto	molto	ADV	B	_	10	advmod	_	_
10	facilmente	facilmente	ADV	B	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:impers]().

1 nodes (0%) are attached to their parents as `expl:pass`.

1 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `expl:pass`: [it-pos/VERB]()-[it-pos/PRON]() (1; 100% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 expl:pass	color:blue
1	Da	da	ADP	E	_	3	case	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	inizio	inizio	NOUN	S	Gender=Masc|Number=Sing	20	obl	_	_
4	di	di	ADP	E	_	6	case	_	_
5	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	estate	estate	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	_
7	2003	2003	NUM	N	NumType=Card	6	nummod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	3	punct	_	_
9	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	banconote	banconota	NOUN	S	Gender=Fem|Number=Plur	20	nsubj:pass	_	_
11	euro	euro	NOUN	S	Gender=Masc	10	compound	_	_
12	contraffatte	contraffare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	10	acl	_	_
13	scoperte	scoprire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	10	acl	_	_
14	mentre	mentre	SCONJ	CS	_	17	mark	_	_
15	erano	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	17	cop	_	_
16	in	in	ADP	E	_	17	case	_	_
17	circolazione	circolazione	NOUN	S	Gender=Fem|Number=Sing	13	obl	_	_
18	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	20	expl:pass	_	_
19	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
20	attestate	attestare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
21	a	a	ADP	E	_	23	case	_	_
22	50000	50000	NUM	N	NumType=Card	23	nummod	_	_
23	esemplari	esemplare	NOUN	S	Gender=Masc|Number=Plur	20	obl	_	_
24	a	a	ADP	E	_	26	case	_	_
25	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	mese	mese	NOUN	S	Gender=Masc|Number=Sing	23	nmod	_	_
27	.	.	PUNCT	FS	_	20	punct	_	_

~~~


