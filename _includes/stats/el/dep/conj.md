

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

2167 nodes (4%) are attached to their parents as `conj`.

2153 instances of `conj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.9852330410706.

The following 46 pairs of parts of speech are connected with `conj`: [el-pos/NOUN]()-[el-pos/NOUN]() (1059; 49% instances), [el-pos/VERB]()-[el-pos/VERB]() (578; 27% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (131; 6% instances), [el-pos/VERB]()-[el-pos/NOUN]() (83; 4% instances), [el-pos/VERB]()-[el-pos/ADJ]() (39; 2% instances), [el-pos/PUNCT]()-[el-pos/NOUN]() (30; 1% instances), [el-pos/NUM]()-[el-pos/NUM]() (25; 1% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (24; 1% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (22; 1% instances), [el-pos/ADV]()-[el-pos/NOUN]() (20; 1% instances), [el-pos/CONJ]()-[el-pos/NOUN]() (20; 1% instances), [el-pos/ADV]()-[el-pos/ADV]() (14; 1% instances), [el-pos/PUNCT]()-[el-pos/PUNCT]() (13; 1% instances), [el-pos/NOUN]()-[el-pos/ADV]() (12; 1% instances), [el-pos/NOUN]()-[el-pos/VERB]() (10; 0% instances), [el-pos/VERB]()-[el-pos/NUM]() (10; 0% instances), [el-pos/NOUN]()-[el-pos/PRON]() (7; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (7; 0% instances), [el-pos/ADJ]()-[el-pos/PRON]() (6; 0% instances), [el-pos/VERB]()-[el-pos/PART]() (6; 0% instances), [el-pos/NUM]()-[el-pos/NOUN]() (5; 0% instances), [el-pos/ADP]()-[el-pos/ADP]() (4; 0% instances), [el-pos/PRON]()-[el-pos/NOUN]() (4; 0% instances), [el-pos/VERB]()-[el-pos/PRON]() (4; 0% instances), [el-pos/ADJ]()-[el-pos/ADV]() (3; 0% instances), [el-pos/CONJ]()-[el-pos/VERB]() (3; 0% instances), [el-pos/NOUN]()-[el-pos/PUNCT]() (3; 0% instances), [el-pos/NUM]()-[el-pos/VERB]() (3; 0% instances), [el-pos/ADJ]()-[el-pos/PUNCT]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/VERB]() (2; 0% instances), [el-pos/CONJ]()-[el-pos/ADJ]() (2; 0% instances), [el-pos/NUM]()-[el-pos/ADJ]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/ADP]() (1; 0% instances), [el-pos/ADJ]()-[el-pos/NUM]() (1; 0% instances), [el-pos/ADJ]()-[el-pos/PART]() (1; 0% instances), [el-pos/ADV]()-[el-pos/PUNCT]() (1; 0% instances), [el-pos/ADV]()-[el-pos/VERB]() (1; 0% instances), [el-pos/CONJ]()-[el-pos/CONJ]() (1; 0% instances), [el-pos/DET]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/DET]()-[el-pos/NUM]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/CONJ]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/NUM]() (1; 0% instances), [el-pos/PRON]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/PRON]()-[el-pos/PRON]() (1; 0% instances), [el-pos/PUNCT]()-[el-pos/VERB]() (1; 0% instances), [el-pos/VERB]()-[el-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	Άγκυρα	Άγκυρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
2	:	:	PUNCT	PUNCT	_	1	punct	_	_
3	Έκρηξη	έκρηξη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
4	έξω	έξω	ADV	ADV	_	3	advmod	_	_
5	από	από	ADP	ADP	_	8	case	_	_
6	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	8	det	_	_
7	αμερικανική	αμερικάνικος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	8	amod	_	_
8	πρεσβεία	πρεσβεία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	Συντάσσει	συντάσσω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	και	και	CONJ	CONJ	_	1	cc	_	_
3	υποβάλλει	υποβάλλω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	conj	_	_
4	προσφορές	προσφορά	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	1	dobj	_	_
5	για	για	ADP	ADP	_	6	case	_	_
6	αυτούς	αυτός	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Dem	2	nmod	_	_
7	κάθε	κάθε	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Ind	8	nmod	_	_
8	εβδομάδα	εβδομάδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	_
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	ήταν	είμαι	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Pass	2	cop	_	_
2	μυστικοπαθείς	μυστικοπαθής	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	γραφειοκρατικές	γραφειοκρατικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	2	conj	_	_
5	,	,	PUNCT	PUNCT	_	2	punct	_	_
6	καφκικές	καφκικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	2	conj	_	_
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


