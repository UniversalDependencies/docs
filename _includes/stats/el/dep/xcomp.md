

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

197 nodes (0%) are attached to their parents as `xcomp`.

185 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96446700507614.

The following 8 pairs of parts of speech are connected with `xcomp`: [el-pos/VERB]()-[el-pos/ADJ]() (107; 54% instances), [el-pos/VERB]()-[el-pos/NOUN]() (70; 36% instances), [el-pos/VERB]()-[el-pos/VERB]() (10; 5% instances), [el-pos/VERB]()-[el-pos/NUM]() (3; 2% instances), [el-pos/VERB]()-[el-pos/PRON]() (3; 2% instances), [el-pos/VERB]()-[el-pos/PROPN]() (2; 1% instances), [el-pos/NOUN]()-[el-pos/NUM]() (1; 1% instances), [el-pos/VERB]()-[el-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Πολλοί	πολύς	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
2	από	από	ADP	ADP	_	3	case	_	_
3	αυτούς	αυτός	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Dem	1	det	_	_
4	κινδυνεύουν	κινδυνεύω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	να	να	PART	PART	_	6	aux	_	_
6	μείνουν	μένω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	4	ccomp	_	_
7	άστεγοι	άστεγος	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	6	xcomp	_	SpaceAfter=No
8	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 xcomp	color:blue
1	Εμείς	εγώ	PRON	PRON	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	στην	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	3	case	_	_
3	Αυστρία	Αυστρία	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	_
4	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
5	αποκαλούμε	αποκαλώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	5	obj	_	_
7	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
8	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	αρχή	αρχή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	xcomp	_	_
10	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
11	Florian	Florian	X	X	Foreign=Yes	9	nmod	_	SpaceAfter=No
12	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
13	:	:	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
2	μισοί	μισός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	3	amod	_	_
3	Γάλλοι	Γάλλος	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	θεωρούν	θεωρώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	αυξημένη	αυξημένος	VERB	VERB	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	4	xcomp	_	_
6	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
7	τρομοκρατική	τρομοκρατικός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	8	amod	_	_
8	απειλή	απειλή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_

~~~


