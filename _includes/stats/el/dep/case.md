

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

4466 nodes (9%) are attached to their parents as `case`.

4425 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78056426332288.

The following 19 pairs of parts of speech are connected with `case`: [el-pos/NOUN]()-[el-pos/ADP]() (3386; 76% instances), [el-pos/PROPN]()-[el-pos/ADP]() (354; 8% instances), [el-pos/PRON]()-[el-pos/ADP]() (227; 5% instances), [el-pos/X]()-[el-pos/ADP]() (124; 3% instances), [el-pos/NOUN]()-[el-pos/ADV]() (97; 2% instances), [el-pos/ADV]()-[el-pos/ADP]() (83; 2% instances), [el-pos/NUM]()-[el-pos/ADP]() (76; 2% instances), [el-pos/ADJ]()-[el-pos/ADP]() (58; 1% instances), [el-pos/VERB]()-[el-pos/ADP]() (40; 1% instances), [el-pos/PRON]()-[el-pos/ADV]() (10; 0% instances), [el-pos/ADJ]()-[el-pos/ADV]() (2; 0% instances), [el-pos/PROPN]()-[el-pos/ADV]() (2; 0% instances), [el-pos/ADV]()-[el-pos/ADV]() (1; 0% instances), [el-pos/CCONJ]()-[el-pos/ADP]() (1; 0% instances), [el-pos/NUM]()-[el-pos/ADV]() (1; 0% instances), [el-pos/PART]()-[el-pos/ADP]() (1; 0% instances), [el-pos/SCONJ]()-[el-pos/ADP]() (1; 0% instances), [el-pos/X]()-[el-pos/ADV]() (1; 0% instances), [el-pos/X]()-[el-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Στα	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Plur	2	case	_	_
2	χωριά	χωριό	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	0	root	_	_
3	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
4	Παγγαίου	Παγγαίο	PROPN	PROPN	Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	_
5	όρους	όρος	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 case	color:blue
1	Στη	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	3	case	_	_
2	νησίδα	νησίδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	nmod	_	_
3	Βίδο	Βίδο	PROPN	PROPN	Case=Acc|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
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


