

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 2 language-specific subtypes of `expl`: [expl:impers](), [expl:pass]().

2098 nodes (1%) are attached to their parents as `expl`.

1688 instances of `expl` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21830314585319.

The following 7 pairs of parts of speech are connected with `expl`: [it-pos/VERB]()-[it-pos/PRON]() (2083; 99% instances), [it-pos/AUX]()-[it-pos/PRON]() (6; 0% instances), [it-pos/ADV]()-[it-pos/PRON]() (4; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (1; 0% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Vi	vi	PRON	PC	PronType=Clit	2	expl	_	_
2	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	migliaia	migliaio	NOUN	S	Gender=Fem|Number=Plur	2	nsubj	_	_
4	di	di	ADP	E	_	5	case	_	_
5	casi	caso	NOUN	S	Gender=Masc|Number=Plur	3	nmod	_	_
6	di	di	ADP	E	_	8	case	_	_
7	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	genere	genere	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	non	non	ADV	BN	PronType=Neg	2	neg	_	_
2	esistono	esistere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	vie	via	NOUN	S	Gender=Fem|Number=Plur	2	nsubj	_	_
4	di	di	ADP	E	_	5	case	_	_
5	mezzo	mezzo	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	non	non	ADV	BN	PronType=Neg	10	neg	_	_
8	si	si	PRON	PC	Person=3|PronType=Clit	9	expl	_	_
9	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	tener	tenere	VERB	V	VerbForm=Inf	2	conj	_	_
11	lo	lo	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Clit	10	dobj	_	_
12	sotto	sotto	ADP	E	_	13	case	_	_
13	tutela	tutela	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl	color:blue
1	Ed	e	CONJ	CC	_	5	cc	_	_
2	ecco	ecco	ADV	B	_	5	advmod	_	_
3	lo	lo	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Clit	2	expl	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	esercito	esercito	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


