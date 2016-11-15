

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

1426 nodes (0%) are attached to their parents as `ccomp`.

1403 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.71458625525947.

The following 21 pairs of parts of speech are connected with `ccomp`: [it-pos/VERB]()-[it-pos/VERB]() (1129; 79% instances), [it-pos/VERB]()-[it-pos/ADJ]() (95; 7% instances), [it-pos/VERB]()-[it-pos/NOUN]() (66; 5% instances), [it-pos/ADJ]()-[it-pos/VERB]() (42; 3% instances), [it-pos/NOUN]()-[it-pos/VERB]() (29; 2% instances), [it-pos/ADV]()-[it-pos/VERB]() (23; 2% instances), [it-pos/VERB]()-[it-pos/PRON]() (15; 1% instances), [it-pos/PRON]()-[it-pos/VERB]() (5; 0% instances), [it-pos/PROPN]()-[it-pos/VERB]() (5; 0% instances), [it-pos/VERB]()-[it-pos/PROPN]() (5; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances), [it-pos/ADV]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/AUX]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/NUM]()-[it-pos/VERB]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances), [it-pos/VERB]()-[it-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	stessa	stesso	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	_
3	che	che	PRON	PR	PronType=Rel	4	nsubj	_	_
4	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	anche	anche	ADV	B	_	6	advmod	_	_
6	stendere	stendere	VERB	V	VerbForm=Inf	4	ccomp	_	_
7	su	su	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	pavimento	pavimento	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	pelli	pelle	NOUN	S	Gender=Fem|Number=Plur	6	dobj	_	_
11	di	di	ADP	E	_	12	case	_	_
12	tigre	tigre	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	essere	essere	VERB	V	VerbForm=Inf	3	cop	_	_
3	corretti	corretto	ADJ	A	Gender=Masc|Number=Plur	1	ccomp	_	_
4	con	con	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	pubblico	pubblico	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Credo	credere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	che	che	SCONJ	CS	_	6	mark	_	_
4	sia	essere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	reazione	reazione	NOUN	S	Gender=Fem|Number=Sing	2	ccomp	_	_
7	emotiva	emotivo	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	SpaceAfter=No
8	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


