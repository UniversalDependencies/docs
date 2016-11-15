

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

1307 nodes (1%) are attached to their parents as `ccomp`.

1300 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.35654169854629.

The following 29 pairs of parts of speech are connected with `ccomp`: [hr-pos/VERB]()-[hr-pos/VERB]() (779; 60% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (184; 14% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (113; 9% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (63; 5% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (38; 3% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (21; 2% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (20; 2% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (16; 1% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (15; 1% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (14; 1% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (8; 1% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (7; 1% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (4; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PUNCT]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Bytyci	Bytyci	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	kako	kako	ADV	_	Degree=Pos	7	mark	_	_
4	bi	biti	AUX	_	Number=Plur|Person=3|Tense=Past	7	aux	_	_
5	jači	jak	ADJ	_	Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	6	amod	_	_
6	sindikati	sindikat	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	doveli	dovesti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	ccomp	_	_
8	do	do	ADP	_	Case=Gen	10	case	_	_
9	boljih	dobar	ADJ	_	Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur	10	amod	_	_
10	ishoda	ishod	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Mislim	misliti	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
5	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	_	_
6	biti	biti	AUX	_	VerbForm=Inf	7	cop	_	_
7	dovoljno	dovoljan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	_	_
8	"	"	PUNCT	_	_	2	punct	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	kazao	kazati	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	parataxis	_	_
11	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
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


