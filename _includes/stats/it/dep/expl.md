

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 1 language-specific subtypes of `expl`: [expl:impers]().

2030 nodes (1%) are attached to their parents as `expl`.

1558 instances of `expl` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21625615763547.

The following 7 pairs of parts of speech are connected with `expl`: [it-pos/VERB]()-[it-pos/PRON]() (2016; 99% instances), [it-pos/ADV]()-[it-pos/PRON]() (5; 0% instances), [it-pos/AUX]()-[it-pos/PRON]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (2; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (2; 0% instances), [it-pos/ADP]()-[it-pos/PRON]() (1; 0% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (1; 0% instances).


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
8	genere	genere	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
9	.	.	PUNCT	FS	_	2	punct	_	_

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
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	esercito	esercito	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl	color:blue
1	Quanti	quanto	DET	DQ	Gender=Masc|Number=Plur|PronType=Int	2	det	_	_
2	anni	anno	NOUN	S	Gender=Masc|Number=Plur	3	dobj	_	_
3	bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	avere	avere	VERB	V	VerbForm=Inf	3	xcomp	_	_
5	per	per	ADP	E	_	8	mark	_	_
6	poter	potere	AUX	VM	VerbForm=Inf	8	aux	_	_
7	si	si	PRON	PC	Person=3|PronType=Clit	6	expl	_	_
8	sposare	sposare	VERB	V	VerbForm=Inf	3	advcl	_	_
9	in	in	ADP	E	_	11	case	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Carolina	Carolina	PROPN	SP	_	8	nmod	_	_
12	di	di	ADP	E	_	14	case	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	S	S	PROPN	SP	_	11	nmod	_	_
15	?	?	PUNCT	FS	_	3	punct	_	_

~~~


