

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

60 nodes (0%) are attached to their parents as `discourse`.

48 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.13333333333333.

The following 10 pairs of parts of speech are connected with `discourse`: [it-pos/VERB]()-[it-pos/INTJ]() (37; 62% instances), [it-pos/NOUN]()-[it-pos/INTJ]() (6; 10% instances), [it-pos/ADV]()-[it-pos/INTJ]() (5; 8% instances), [it-pos/ADJ]()-[it-pos/INTJ]() (3; 5% instances), [it-pos/PROPN]()-[it-pos/INTJ]() (3; 5% instances), [it-pos/PRON]()-[it-pos/INTJ]() (2; 3% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 2% instances), [it-pos/ADJ]()-[it-pos/X]() (1; 2% instances), [it-pos/INTJ]()-[it-pos/INTJ]() (1; 2% instances), [it-pos/VERB]()-[it-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
2	Grazie	grazie	INTJ	I	_	7	discourse	_	_
3	Italia	Italia	PROPN	SP	_	2	vocative	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	7	iobj	_	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	oro	oro	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Oddio	oddio	INTJ	I	_	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	non	non	ADV	BN	PronType=Neg	9	advmod	_	_
4	che	che	SCONJ	CS	_	5	mark	_	_
5	Berlusconi	Berlusconi	PROPN	SP	_	9	csubj	_	_
6	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	gran	grande	ADJ	A	Number=Sing	9	amod	_	_
9	femminista	femminista	NOUN	S	Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Ma	ma	CCONJ	CC	_	7	cc	_	_
3	no	no	INTJ	I	Polarity=Neg	7	discourse	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	non	non	ADV	BN	PronType=Neg	7	advmod	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	così	così	ADV	B	_	0	root	_	_
8	-	-	PUNCT	FB	_	9	punct	_	_
9	replica	replicare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
10	Ante	Ante	PROPN	SP	_	9	nsubj	_	_
11	-	-	PUNCT	FB	_	9	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 2 pairs of parts of speech are connected with `discourse`: [it-pos/ADV]()-[it-pos/NOUN]() (1; 50% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 discourse	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	divario	divario	NOUN	S	Gender=Masc|Number=Sing	11	discourse	_	_
3	di	di	ADP	E	_	4	case	_	_
4	genere	genere	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
5	in	in	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	settore	settore	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
8	agricolo	agricolo	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	_
9	africano	africano	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	2	punct	_	_
11	ecco	ecco	ADV	B	_	0	root	_	_
12	perché	perché	SCONJ	CS	_	13	mark	_	_
13	bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
14	chiuder	chiudere	VERB	V	VerbForm=Inf	13	xcomp	_	_
15	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
16	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Sì	sì	ADV	B	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	onorevole	onorevole	NOUN	S	Number=Sing	6	vocative	_	_
4	Evans	Evans	PROPN	SP	_	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	che	che	SCONJ	CS	_	18	mark	_	_
8	un'	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	iniziativa	iniziativa	NOUN	S	Gender=Fem|Number=Sing	18	nsubj	_	_
10	di	di	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	tipo	tipo	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	_
13	che	che	PRON	PR	PronType=Rel	15	nsubj	_	_
14	lei	lei	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
15	propone	proporre	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl:relcl	_	_
16	sia	essere	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
17	assolutamente	assolutamente	ADV	B	_	18	advmod	_	_
18	opportuna	opportuno	ADJ	A	Gender=Fem|Number=Sing	6	ccomp	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	6	punct	_	_

~~~


