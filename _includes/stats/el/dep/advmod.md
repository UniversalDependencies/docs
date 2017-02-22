

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

2309 nodes (4%) are attached to their parents as `advmod`.

1446 instances of `advmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53529666522304.

The following 29 pairs of parts of speech are connected with `advmod`: [el-pos/VERB]()-[el-pos/ADV]() (1359; 59% instances), [el-pos/VERB]()-[el-pos/PART]() (274; 12% instances), [el-pos/ADJ]()-[el-pos/ADV]() (209; 9% instances), [el-pos/NOUN]()-[el-pos/ADV]() (187; 8% instances), [el-pos/ADV]()-[el-pos/ADV]() (84; 4% instances), [el-pos/CCONJ]()-[el-pos/ADV]() (52; 2% instances), [el-pos/NUM]()-[el-pos/ADV]() (39; 2% instances), [el-pos/ADJ]()-[el-pos/PART]() (29; 1% instances), [el-pos/NOUN]()-[el-pos/PART]() (21; 1% instances), [el-pos/ADV]()-[el-pos/PART]() (11; 0% instances), [el-pos/PROPN]()-[el-pos/ADV]() (8; 0% instances), [el-pos/VERB]()-[el-pos/CCONJ]() (8; 0% instances), [el-pos/PRON]()-[el-pos/ADV]() (7; 0% instances), [el-pos/VERB]()-[el-pos/SCONJ]() (4; 0% instances), [el-pos/ADV]()-[el-pos/NOUN]() (2; 0% instances), [el-pos/X]()-[el-pos/ADV]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/ADJ]()-[el-pos/SCONJ]() (1; 0% instances), [el-pos/ADP]()-[el-pos/PART]() (1; 0% instances), [el-pos/ADV]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/ADV]()-[el-pos/SCONJ]() (1; 0% instances), [el-pos/CCONJ]()-[el-pos/PART]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/CCONJ]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/NUM]()-[el-pos/PART]() (1; 0% instances), [el-pos/PRON]()-[el-pos/PART]() (1; 0% instances), [el-pos/VERB]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/VERB]()-[el-pos/VERB]() (1; 0% instances), [el-pos/X]()-[el-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Έχουν	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
2	ήδη	ήδη	ADV	ADV	_	3	advmod	_	_
3	παρουσιαστεί	παρουσιάζω	VERB	VERB	Aspect=Perf|VerbForm=Inf|Voice=Pass	0	root	_	_
4	ορισμένα	ορισμένος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	5	amod	_	_
5	στοιχεία	στοιχείο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	εξέγερση	εξέγερση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	δεν	δεν	PART	PART	_	4	advmod	_	_
4	έγινε	γίνομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	ποτέ	ποτέ	ADV	ADV	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	_	_
7	ενώ	ενώ	CCONJ	CCONJ	_	10	cc	_	_
8	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	εισβολείς	εισβολέας	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
10	διώχθηκαν	διώκω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
2	πρώτα	πρώτα	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Ord	3	nummod	_	_
3	αποτελέσματα	αποτέλεσμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	ήδη	ήδη	ADV	ADV	_	6	advmod	_	_
6	ορατά	ορατός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


