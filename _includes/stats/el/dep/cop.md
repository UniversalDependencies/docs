

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

437 nodes (1%) are attached to their parents as `cop`.

380 instances of `cop` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09153318077803.

The following 8 pairs of parts of speech are connected with `cop`: [el-pos/ADJ]()-[el-pos/AUX]() (215; 49% instances), [el-pos/NOUN]()-[el-pos/AUX]() (166; 38% instances), [el-pos/VERB]()-[el-pos/AUX]() (28; 6% instances), [el-pos/PRON]()-[el-pos/AUX]() (11; 3% instances), [el-pos/ADV]()-[el-pos/AUX]() (8; 2% instances), [el-pos/NUM]()-[el-pos/AUX]() (6; 1% instances), [el-pos/X]()-[el-pos/AUX]() (2; 0% instances), [el-pos/PROPN]()-[el-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
2	πρώτα	πρώτα	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Ord	3	nummod	_	_
3	αποτελέσματα	αποτέλεσμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	ήδη	ήδη	ADV	ADV	_	6	advmod	_	_
6	ορατά	ορατός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Νικήσιανη	Νικήσιανη	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
3	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	cop	_	_
4	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	έδρα	έδρα	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Δήμου	Δήμος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	Παγγαίου	Παγγαίο	PROPN	PROPN	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Όλες	όλος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
2	τους	μου	PRON	PRON	Case=Gen|Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs	1	nmod	_	_
3	έχουν	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	καταγάλανα	καταγάλανος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	5	amod	_	_
5	νερά	νερό	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	3	obj	_	_
6	και	και	CCONJ	CCONJ	_	8	cc	_	_
7	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	cop	_	_
8	πνιγμένες	πνίγω	VERB	VERB	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	conj	_	_
9	στο	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Sing	10	case	_	_
10	πράσινο	πράσινο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


