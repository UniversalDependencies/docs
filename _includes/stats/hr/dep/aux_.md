

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

5643 nodes (4%) are attached to their parents as `aux`.

3863 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1665780613149.

The following 27 pairs of parts of speech are connected with `aux`: [hr-pos/VERB]()-[hr-pos/AUX]() (4704; 83% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (351; 6% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (260; 5% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (153; 3% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (82; 1% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (19; 0% instances), [hr-pos/PROPN]()-[hr-pos/AUX]() (16; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (13; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (10; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (8; 0% instances), [hr-pos/PRON]()-[hr-pos/AUX]() (5; 0% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/NUM]()-[hr-pos/AUX]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/ADP]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Uzastopni	uzastopan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	izbori	izbor	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
3	nisu	biti	AUX	_	Negative=Neg|Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	uspjeli	uspjeti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	okončati	okončati	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	političku	politički	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	krizu	kriza	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	dobj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	zemlji	zemlja	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Prvi	prvi	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	nummod	_	_
2	predsjednik	predsjednik	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
3	skupštine	skupština	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	SZO-a	SZO	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	3	nummod	_	_
5	bio	biti	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	7	cop	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prof.	prof.	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	Andrija	Andrija	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
9	Štampar	Štampar	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	name	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


