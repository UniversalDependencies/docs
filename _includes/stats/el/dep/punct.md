

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

5226 nodes (10%) are attached to their parents as `punct`.

3004 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.50057405281286.

The following 12 pairs of parts of speech are connected with `punct`: [el-pos/VERB]()-[el-pos/PUNCT]() (3102; 59% instances), [el-pos/NOUN]()-[el-pos/PUNCT]() (1123; 21% instances), [el-pos/ADJ]()-[el-pos/PUNCT]() (257; 5% instances), [el-pos/ADV]()-[el-pos/PUNCT]() (250; 5% instances), [el-pos/PROPN]()-[el-pos/PUNCT]() (186; 4% instances), [el-pos/X]()-[el-pos/PUNCT]() (146; 3% instances), [el-pos/NUM]()-[el-pos/PUNCT]() (51; 1% instances), [el-pos/PRON]()-[el-pos/PUNCT]() (47; 1% instances), [el-pos/CCONJ]()-[el-pos/PUNCT]() (41; 1% instances), [el-pos/ADP]()-[el-pos/PUNCT]() (19; 0% instances), [el-pos/PART]()-[el-pos/PUNCT]() (3; 0% instances), [el-pos/SYM]()-[el-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	Τι	τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	2	obj	_	_
2	πράξαμε	πράττω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	;	;	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	(	(	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	ΡΤ	ΡΤ	NOUN	NOUN	Abbr=Yes	0	root	_	SpaceAfter=No
3	)	)	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
2	πρώτα	πρώτα	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Ord	3	nummod	_	_
3	αποτελέσματα	αποτέλεσμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	ήδη	ήδη	ADV	ADV	_	6	advmod	_	_
6	ορατά	ορατός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


