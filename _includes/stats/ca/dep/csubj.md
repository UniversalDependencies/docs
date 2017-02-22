

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

966 nodes (0%) are attached to their parents as `csubj`.

737 instances of `csubj` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.18944099378882.

The following 27 pairs of parts of speech are connected with `csubj`: [ca-pos/VERB]()-[ca-pos/VERB]() (489; 51% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (207; 21% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (76; 8% instances), [ca-pos/AUX]()-[ca-pos/VERB]() (63; 7% instances), [ca-pos/VERB]()-[ca-pos/ADJ]() (32; 3% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (28; 3% instances), [ca-pos/ADJ]()-[ca-pos/ADJ]() (9; 1% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (7; 1% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (6; 1% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (6; 1% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (6; 1% instances), [ca-pos/AUX]()-[ca-pos/ADJ]() (5; 1% instances), [ca-pos/CCONJ]()-[ca-pos/VERB]() (5; 1% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (5; 1% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/VERB]()-[ca-pos/PROPN]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (2; 0% instances), [ca-pos/SCONJ]()-[ca-pos/VERB]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Se	se	PRON	PRON	_	2	obj	_	_
2	sospita	sospitar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	SCONJ	_	8	mark	_	_
4	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	metge	metge	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	_
6	els	ell	PRON	PRON	Number=Plur|Person=3|PronType=Prs	8	obj	_	_
7	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	assassinar	assassinar	VERB	VERB	VerbForm=Inf	2	csubj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Ara	ara	ADV	ADV	_	6	advmod	_	_
2	mateix	mateix	ADV	ADV	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_
4	no	no	ADV	ADV	Polarity=Neg	6	advmod	_	_
5	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	fàcil	fàcil	ADJ	ADJ	Number=Sing	0	root	_	_
7	que	que	SCONJ	SCONJ	_	8	mark	_	_
8	faci	fer	VERB	VERB	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj	_	_
9	marxa	marxa	NOUN	NOUN	Gender=Fem|Number=Sing	8	obj	_	_
10	enrere	enrere	ADV	ADV	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Oblidar	oblidar	VERB	VERB	VerbForm=Inf	5	csubj	_	_
2	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	millor	millor	ADJ	ADJ	Number=Sing	5	amod	_	_
5	antídot	antídot	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


