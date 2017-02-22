

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

1985 nodes (4%) are attached to their parents as `obj`.

1657 instances of `obj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.47858942065491.

The following 12 pairs of parts of speech are connected with `obj`: [el-pos/VERB]()-[el-pos/NOUN]() (1546; 78% instances), [el-pos/VERB]()-[el-pos/PRON]() (306; 15% instances), [el-pos/VERB]()-[el-pos/PROPN]() (38; 2% instances), [el-pos/VERB]()-[el-pos/X]() (35; 2% instances), [el-pos/VERB]()-[el-pos/ADJ]() (33; 2% instances), [el-pos/VERB]()-[el-pos/NUM]() (17; 1% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (3; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (3; 0% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/ADJ]()-[el-pos/PRON]() (1; 0% instances), [el-pos/ADV]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/ADV]()-[el-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obj	color:blue
1	Θα	θα	PART	PART	_	2	aux	_	_
2	συνεχίσει	συνεχίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	όμως	όμως	CCONJ	CCONJ	_	2	cc	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	διανομή	διανομή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
8	δεμάτων	δέμα	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	_
9	6	6	NUM	NUM	NumType=Card	10	nummod	_	_
10	μέρες	μέρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	8	nmod	_	_
11	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	εβδομάδα	εβδομάδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Τι	τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	2	obj	_	_
2	πράξαμε	πράττω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	;	;	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	ΗΠΑ	ΗΠΑ	NOUN	NOUN	Abbr=Yes	3	nsubj	_	_
3	βοηθούν	βοηθώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Γαλλία	Γαλλία	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
6	στο	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Sing	7	case	_	_
7	Μάλι	Μάλι	PROPN	PROPN	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


