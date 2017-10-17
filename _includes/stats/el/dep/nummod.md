

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

655 nodes (1%) are attached to their parents as `nummod`.

507 instances of `nummod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56946564885496.

The following 8 pairs of parts of speech are connected with `nummod`: [el-pos/NOUN]()-[el-pos/NUM]() (519; 79% instances), [el-pos/VERB]()-[el-pos/NUM]() (51; 8% instances), [el-pos/X]()-[el-pos/NUM]() (33; 5% instances), [el-pos/ADJ]()-[el-pos/NUM]() (28; 4% instances), [el-pos/PROPN]()-[el-pos/NUM]() (14; 2% instances), [el-pos/ADV]()-[el-pos/NUM]() (6; 1% instances), [el-pos/NUM]()-[el-pos/NUM]() (3; 0% instances), [el-pos/PRON]()-[el-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Επίσης	επίσης	ADV	ADV	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	δύο	δύο	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	4	nummod	_	_
4	σπίτια	σπίτι	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
5	στην	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	6	case	_	_
6	περιοχή	περιοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
7	κάηκαν	καίω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
8	ολοσχερώς	ολοσχερώς	ADV	ADV	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nummod	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
2	τελικά	τελικός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	3	amod	_	_
3	αποτελέσματα	αποτέλεσμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	_
4	θα	θα	PART	PART	_	5	aux	_	_
5	ανακοινωθούν	ανακοινώνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Pass	0	root	_	_
6	στις	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Plur	7	case	_	_
7	21	21	NUM	NUM	NumType=Card	5	nummod	_	_
8	Ιουνίου	Ιούνιος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	»	»	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Σπόρτινγκ	Σπόρτινγκ	X	X	Foreign=Yes	4	nsubj	_	_
3	Λισαβόνας	Λισαβόνα	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	νίκησε	νικώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Μάντσεστερ	Μάντσεστερ	X	X	Foreign=Yes	4	obj	_	_
7	Σίτι	Σίτι	X	X	Foreign=Yes	6	nmod	_	_
8	με	με	ADP	ADP	_	9	case	_	_
9	σκορ	σκορ	X	X	Foreign=Yes	4	obl	_	_
10	1:0	1:0	NUM	NUM	NumType=Card	9	nummod	_	_

~~~


