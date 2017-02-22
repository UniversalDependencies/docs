

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

6484 nodes (13%) are attached to their parents as `nmod`.

5600 instances of `nmod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31986428130783.

The following 37 pairs of parts of speech are connected with `nmod`: [el-pos/NOUN]()-[el-pos/NOUN]() (3641; 56% instances), [el-pos/NOUN]()-[el-pos/PRON]() (752; 12% instances), [el-pos/NOUN]()-[el-pos/PROPN]() (649; 10% instances), [el-pos/ADV]()-[el-pos/NOUN]() (298; 5% instances), [el-pos/NOUN]()-[el-pos/X]() (252; 4% instances), [el-pos/X]()-[el-pos/X]() (225; 3% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (187; 3% instances), [el-pos/PROPN]()-[el-pos/PROPN]() (116; 2% instances), [el-pos/NUM]()-[el-pos/NOUN]() (70; 1% instances), [el-pos/PROPN]()-[el-pos/NOUN]() (53; 1% instances), [el-pos/ADV]()-[el-pos/PRON]() (28; 0% instances), [el-pos/ADJ]()-[el-pos/PRON]() (27; 0% instances), [el-pos/ADV]()-[el-pos/PROPN]() (25; 0% instances), [el-pos/ADJ]()-[el-pos/PROPN]() (20; 0% instances), [el-pos/VERB]()-[el-pos/NOUN]() (18; 0% instances), [el-pos/PROPN]()-[el-pos/X]() (17; 0% instances), [el-pos/X]()-[el-pos/NOUN]() (17; 0% instances), [el-pos/X]()-[el-pos/PROPN]() (17; 0% instances), [el-pos/PRON]()-[el-pos/NOUN]() (12; 0% instances), [el-pos/ADJ]()-[el-pos/X]() (9; 0% instances), [el-pos/NUM]()-[el-pos/PRON]() (9; 0% instances), [el-pos/PRON]()-[el-pos/PRON]() (9; 0% instances), [el-pos/NUM]()-[el-pos/PROPN]() (8; 0% instances), [el-pos/ADV]()-[el-pos/X]() (4; 0% instances), [el-pos/NUM]()-[el-pos/X]() (4; 0% instances), [el-pos/VERB]()-[el-pos/PRON]() (4; 0% instances), [el-pos/CCONJ]()-[el-pos/NOUN]() (2; 0% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (2; 0% instances), [el-pos/ADP]()-[el-pos/X]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/ADP]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/NUM]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/SYM]() (1; 0% instances), [el-pos/NUM]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/PRON]()-[el-pos/PROPN]() (1; 0% instances), [el-pos/PROPN]()-[el-pos/PRON]() (1; 0% instances), [el-pos/VERB]()-[el-pos/PROPN]() (1; 0% instances), [el-pos/VERB]()-[el-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Αυτός	αυτός	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	cop	_	_
3	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	αποκλειστικός	αποκλειστικός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
5	στόχος	στόχος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
6	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	πρότασης	πρόταση	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	αυτής	αυτός	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	7	det	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod	color:blue
1	Υπάρχουν	υπάρχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	διάφορες	διάφορος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	3	amod	_	_
3	εκδοχές	εκδοχή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	1	nsubj	_	_
4	για	για	ADP	ADP	_	6	case	_	_
5	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	ετυμολογία	ετυμολογία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	nmod	_	_
7	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	ονόματός	όνομα	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	_
9	της	μου	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Στα	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Plur	2	case	_	_
2	χωριά	χωριό	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	0	root	_	_
3	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
4	Παγγαίου	Παγγαίο	PROPN	PROPN	Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	_
5	όρους	όρος	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


