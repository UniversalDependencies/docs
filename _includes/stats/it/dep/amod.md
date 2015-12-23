

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

14679 nodes (5%) are attached to their parents as `amod`.

9999 instances of `amod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27154438313237.

The following 12 pairs of parts of speech are connected with `amod`: [it-pos/NOUN]()-[it-pos/ADJ]() (13869; 94% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (407; 3% instances), [it-pos/VERB]()-[it-pos/ADJ]() (160; 1% instances), [it-pos/PRON]()-[it-pos/ADJ]() (141; 1% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (62; 0% instances), [it-pos/NUM]()-[it-pos/ADJ]() (21; 0% instances), [it-pos/ADV]()-[it-pos/ADJ]() (9; 0% instances), [it-pos/SYM]()-[it-pos/ADJ]() (4; 0% instances), [it-pos/X]()-[it-pos/ADJ]() (3; 0% instances), [it-pos/ADP]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/CONJ]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	VERB	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	nmod	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	E	e	CONJ	CC	_	9	cc	_	_
2	come	come	ADV	B	_	9	advmod	_	_
3	no	no	INTJ	I	_	2	discourse	_	_
4	,	,	PUNCT	FF	_	2	punct	_	_
5	come	come	ADV	B	_	2	conj	_	_
6	no	no	INTJ	I	_	5	discourse	_	_
7	,	,	PUNCT	FF	_	2	punct	_	_
8	caro	caro	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
9	Ante	Ante	PROPN	SP	_	0	root	_	_
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 amod	color:blue
1	C'	ci	PRON	PC	PronType=Clit	2	expl	_	_
2	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	gente	gente	NOUN	S	Gender=Fem|Number=Sing	2	nsubj	_	_
4	nuova	nuovo	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	_
5	da	da	ADP	E	_	6	case	_	_
6	ieri	ieri	ADV	B	_	2	advmod	_	_
7	in	in	ADP	E	_	8	case	_	_
8	pista	pista	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	_
9	,	,	PUNCT	FF	_	2	punct	_	_
10	la	lo	PRON	PC	Gender=Fem|Number=Sing|Person=3|PronType=Clit	11	dobj	_	_
11	copre	coprire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
12	veloce	veloce	ADJ	A	Number=Sing	11	amod	_	_
13	:	:	PUNCT	FC	_	2	punct	_	_

~~~


