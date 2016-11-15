

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

2126 nodes (1%) are attached to their parents as `xcomp`.

2104 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44026340545626.

The following 12 pairs of parts of speech are connected with `xcomp`: [it-pos/VERB]()-[it-pos/VERB]() (1272; 60% instances), [it-pos/VERB]()-[it-pos/ADJ]() (425; 20% instances), [it-pos/VERB]()-[it-pos/NOUN]() (317; 15% instances), [it-pos/VERB]()-[it-pos/PROPN]() (65; 3% instances), [it-pos/VERB]()-[it-pos/PRON]() (26; 1% instances), [it-pos/VERB]()-[it-pos/X]() (7; 0% instances), [it-pos/ADJ]()-[it-pos/VERB]() (5; 0% instances), [it-pos/VERB]()-[it-pos/NUM]() (3; 0% instances), [it-pos/VERB]()-[it-pos/SYM]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Pivetti	Pivetti	PROPN	SP	_	5	nsubj	_	_
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	benissimo	bene	ADV	B	Degree=Abs	5	advmod	_	_
7	a	a	ADP	E	_	8	mark	_	_
8	decidere	decidere	VERB	V	VerbForm=Inf	5	xcomp	_	_
9	di	di	ADP	E	_	10	case	_	_
10	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	_
11	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	faccia	fare	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	in	in	ADP	E	_	3	case	_	_
3	modo	modo	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
4	che	che	SCONJ	CS	_	6	mark	_	_
5	sia	essere	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	auxpass	_	_
6	reso	rendere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
7	disponibile	disponibile	ADJ	A	Number=Sing	6	xcomp	_	_
8	anche	anche	ADV	B	_	6	advmod	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	canale	canale	NOUN	S	Gender=Masc|Number=Sing	6	nsubjpass	_	_
11	olandese	olandese	ADJ	A	Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Così	così	ADV	B	_	2	advmod	_	_
2	diventa	diventare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	first	first	NOUN	S	_	2	xcomp	_	_
4	lady	lady	NOUN	S	_	3	compound	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	_	_

~~~


