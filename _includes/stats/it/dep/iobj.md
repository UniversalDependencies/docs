

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

680 nodes (0%) are attached to their parents as `iobj`.

481 instances of `iobj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33235294117647.

The following 5 pairs of parts of speech are connected with `iobj`: [it-pos/VERB]()-[it-pos/PRON]() (659; 97% instances), [it-pos/ADJ]()-[it-pos/PRON]() (15; 2% instances), [it-pos/AUX]()-[it-pos/PRON]() (3; 0% instances), [it-pos/ADV]()-[it-pos/PRON]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Clit	3	iobj	_	_
3	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	6	mark	_	_
5	siano	essere	VERB	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	proposte	proposta	NOUN	S	Gender=Fem|Number=Plur	3	csubj	_	_
7	serie	serio	ADJ	A	Gender=Fem|Number=Plur	6	amod	_	_
8	e	e	CONJ	CC	_	7	cc	_	_
9	condivisibili	condivisibile	ADJ	A	Number=Plur	7	conj	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Le	lo	PRON	PC	Gender=Fem|Person=3|PronType=Clit	3	iobj	_	_
2	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	simpatica	simpatico	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
4	Nicole	Nicole	PROPN	SP	_	3	nsubj	_	_
5	Kidman	Kidman	PROPN	SP	_	4	name	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 iobj	color:blue
1	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	nome	nome	NOUN	S	Gender=Masc|Number=Sing	18	nsubj	_	_
3	che	che	PRON	PR	PronType=Rel	6	nsubj	_	_
4	si	si	PRON	PC	Person=3|PronType=Clit	5	iobj	_	_
5	sta	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	facendo	fare	VERB	V	VerbForm=Ger	2	acl:relcl	_	_
7	strada	strada	NOUN	S	Gender=Fem|Number=Sing	6	xcomp	_	_
8	presso	presso	ADP	E	_	10	case	_	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	esecutivo	esecutivo	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
11	per	per	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	poltrona	poltrona	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	_
14	di	di	ADP	E	_	15	case	_	_
15	amministratore	amministratore	NOUN	S	Gender=Masc|Number=Sing	13	nmod	_	_
16	delegato	delegato	ADJ	A	Gender=Masc|Number=Sing	15	amod	_	_
17	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
18	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
19	di	di	ADP	E	_	20	case	_	_
20	Francesco	Francesco	PROPN	SP	_	18	nmod	_	_
21	Caio	Caio	PROPN	SP	_	20	name	_	SpaceAfter=No
22	,	,	PUNCT	FF	_	20	punct	_	_
23	ora	ora	ADV	B	_	26	advmod	_	_
24	a	a	ADP	E	_	26	case	_	_
25	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	vertice	vertice	NOUN	S	Gender=Masc|Number=Sing	20	nmod	_	_
27	di	di	ADP	E	_	28	case	_	_
28	Avio	Avio	PROPN	SP	_	26	nmod	_	SpaceAfter=No
29	.	.	PUNCT	FS	_	18	punct	_	_

~~~


