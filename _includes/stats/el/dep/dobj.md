

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

2640 nodes (4%) are attached to their parents as `dobj`.

2201 instances of `dobj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61401515151515.

The following 14 pairs of parts of speech are connected with `dobj`: [el-pos/VERB]()-[el-pos/NOUN]() (2099; 80% instances), [el-pos/VERB]()-[el-pos/PRON]() (384; 15% instances), [el-pos/VERB]()-[el-pos/ADJ]() (44; 2% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (30; 1% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (28; 1% instances), [el-pos/VERB]()-[el-pos/NUM]() (19; 1% instances), [el-pos/NOUN]()-[el-pos/PRON]() (11; 0% instances), [el-pos/ADJ]()-[el-pos/PRON]() (8; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (6; 0% instances), [el-pos/ADV]()-[el-pos/NOUN]() (3; 0% instances), [el-pos/CONJ]()-[el-pos/NOUN]() (3; 0% instances), [el-pos/VERB]()-[el-pos/PUNCT]() (3; 0% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dobj	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	det	_	_
2	Σπόρτινγκ	Σπόρτινγκ	NOUN	NOUN	_	4	nsubj	_	_
3	Λισαβόνας	Λισαβόνα	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	νίκησε	νικώ	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	det	_	_
6	Μάντσεστερ	Μάντσεστερ	NOUN	NOUN	_	4	dobj	_	_
7	Σίτι	Σίτι	NOUN	NOUN	_	6	nmod	_	_
8	με	με	ADP	ADP	_	9	case	_	_
9	σκορ	σκορ	NOUN	NOUN	_	4	nmod	_	_
10	1:0	1:0	NUM	NUM	_	9	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dobj	color:blue
1	Τι	τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	2	dobj	_	_
2	πράξαμε	πράττω	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Past|Voice=Act	0	root	_	_
3	;	;	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dobj	color:blue
1	Ταυτόχρονα	ταυτόχρονα	ADV	ADV	_	5	advmod	_	_
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	όμως	όμως	CONJ	CONJ	_	5	cc	_	_
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	κάνατε	κάνω	VERB	VERB	Mood=Ind|Number=Plur|Person=2|Tense=Past|Voice=Act	0	root	_	_
6	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	7	det	_	_
7	ίδιο	ίδιος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	5	dobj	_	_
8	και	και	CONJ	CONJ	_	9	cc	_	_
9	με	με	ADP	ADP	_	12	case	_	_
10	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur	12	det	_	_
11	υπόλοιπα	υπόλοιπος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	12	amod	_	_
12	όργανα	όργανο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	5	nmod	_	_
13	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


