

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

2529 nodes (5%) are attached to their parents as `obl`.

1952 instances of `obl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.45235270858047.

The following 10 pairs of parts of speech are connected with `obl`: [el-pos/VERB]()-[el-pos/NOUN]() (2069; 82% instances), [el-pos/VERB]()-[el-pos/PRON]() (173; 7% instances), [el-pos/VERB]()-[el-pos/PROPN]() (168; 7% instances), [el-pos/VERB]()-[el-pos/X]() (71; 3% instances), [el-pos/VERB]()-[el-pos/ADJ]() (29; 1% instances), [el-pos/VERB]()-[el-pos/NUM]() (13; 1% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (3; 0% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/ADJ]()-[el-pos/PRON]() (1; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 obl	color:blue
1	Την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	επόμενη	επόμενος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	3	amod	_	_
3	μέρα	μέρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	στις	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Plur	6	case	_	_
6	4_Δεκεμβρίου	4_Δεκεμβρίου	NOUN	NOUN	_	3	appos	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	οργανώθηκε	οργανώνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
9	γενική	γενικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	10	amod	_	_
10	απεργία	απεργία	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	amod	_	_
2	2001	2001	NOUN	NOUN	_	3	obl	_	_
3	προσχώρησε	προσχωρώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	σε	σε	ADP	ADP	_	5	case	_	_
5	αυτήν	αυτός	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	obl	_	_
6	και	και	CCONJ	CCONJ	_	8	cc	_	_
7	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Ελλάδα	Ελλάδα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Μεταλίστ	Μεταλίστ	X	X	Foreign=Yes	4	nsubj	_	_
3	Χάρκιβ	Χάρκιβ	X	X	Foreign=Yes	2	nmod	_	_
4	ηττήθηκε	ηττώμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	από	από	ADP	ADP	_	7	case	_	_
6	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ολυμπιακό	ολυμπιακός	PROPN	PROPN	Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
8	Πειραιώς	Πειραιεύς	PROPN	PROPN	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	με	με	ADP	ADP	_	10	case	_	_
10	σκορ	σκορ	X	X	Foreign=Yes	4	obl	_	_
11	0:1	0:1	NUM	NUM	NumType=Card	10	nummod	_	_

~~~


