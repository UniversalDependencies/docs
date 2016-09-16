

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

263 nodes (0%) are attached to their parents as `neg`.

259 instances of `neg` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22813688212928.

The following 13 pairs of parts of speech are connected with `neg`: [hr-pos/VERB]()-[hr-pos/PART]() (209; 79% instances), [hr-pos/NOUN]()-[hr-pos/PART]() (16; 6% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (13; 5% instances), [hr-pos/ADV]()-[hr-pos/PART]() (8; 3% instances), [hr-pos/AUX]()-[hr-pos/PART]() (5; 2% instances), [hr-pos/PROPN]()-[hr-pos/PART]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (2; 1% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (2; 1% instances), [hr-pos/ADP]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	Ne	ne	PART	_	Negative=Neg	3	neg	_	_
3	mogu	moći	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	_
4	odlučno	odlučno	ADV	_	Degree=Pos	5	advmod	_	_
5	tvrditi	tvrditi	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	da	da	SCONJ	_	_	9	mark	_	_
7	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	cop	_	_
8	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	_
9	uzrok	uzrok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	ccomp	_	_
10	sukoba	sukob	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
11	unutar	unutar	ADP	_	Case=Gen	12	case	_	_
12	vlade	vlada	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	Kukan	Kukan	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	parataxis	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	dijalog	dijalog	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	a	a	CONJ	_	_	3	cc	_	_
6	ne	ne	PART	_	Negative=Neg	7	neg	_	_
7	barikade	barikada	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	3	conj	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 neg	color:blue
1	Samo	samo	ADV	_	Degree=Pos	4	advmod	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	Silajdžić	Silajdžić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	potvrdio	potvrditi	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	dolazak	dolazak	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	dobj	_	_
6	kazavši	kazati	ADV	_	Degree=Pos	4	xcomp	_	_
7	kako	kako	SCONJ	_	_	11	mark	_	_
8	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	11	cop	_	_
9	program	program	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
10	posjeta	posjet	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	kulturni	kulturan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	ccomp	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	a	a	CONJ	_	_	11	cc	_	_
14	ne	ne	PART	_	Negative=Neg	15	neg	_	_
15	politički	politički	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	conj	_	_
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


