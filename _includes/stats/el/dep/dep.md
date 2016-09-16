

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

61 nodes (0%) are attached to their parents as `dep`.

34 instances of `dep` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.75409836065574.

The following 18 pairs of parts of speech are connected with `dep`: [el-pos/VERB]()-[el-pos/VERB]() (21; 34% instances), [el-pos/NOUN]()-[el-pos/ADV]() (9; 15% instances), [el-pos/VERB]()-[el-pos/ADV]() (5; 8% instances), [el-pos/CONJ]()-[el-pos/ADV]() (4; 7% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (3; 5% instances), [el-pos/ADJ]()-[el-pos/VERB]() (2; 3% instances), [el-pos/ADP]()-[el-pos/NOUN]() (2; 3% instances), [el-pos/ADV]()-[el-pos/ADV]() (2; 3% instances), [el-pos/CONJ]()-[el-pos/VERB]() (2; 3% instances), [el-pos/NOUN]()-[el-pos/VERB]() (2; 3% instances), [el-pos/VERB]()-[el-pos/NOUN]() (2; 3% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (1; 2% instances), [el-pos/ADJ]()-[el-pos/ADV]() (1; 2% instances), [el-pos/ADV]()-[el-pos/NOUN]() (1; 2% instances), [el-pos/ADV]()-[el-pos/VERB]() (1; 2% instances), [el-pos/CONJ]()-[el-pos/ADJ]() (1; 2% instances), [el-pos/PRON]()-[el-pos/NOUN]() (1; 2% instances), [el-pos/VERB]()-[el-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep	color:blue
1	Οφείλουμε	οφείλω	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	να	να	PART	PART	_	4	aux	_	_
3	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	dobj	_	_
4	ομολογήσουμε	ομολογώ	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Voice=Act	1	dep	_	_
5	:	:	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 dep	color:blue
1	Απλουστευτικές	απλουστευτικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	3	amod	_	_
2	ενιαίες	ενιαίος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	3	amod	_	_
3	λύσεις	λύση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	18	nsubj	_	_
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	όπως	όπως	ADV	ADV	_	7	dep	_	_
6	η	ο	PRON	PRON	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	περικοπή	περικοπή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	appos	_	_
8	του	ο	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	χρόνου	χρόνος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	εργασίας	εργασία	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
11	σε	σε	ADP	ADP	_	13	case	_	_
12	ευρωπαϊκό	ευρωπαϊκός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	13	amod	_	_
13	επίπεδο	επίπεδο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	7	nmod	_	_
14	,	,	PUNCT	PUNCT	_	18	punct	_	_
15	είναι	είμαι	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Pass	18	cop	_	_
16	άνευ	άνευ	ADP	ADP	_	18	case	_	_
17	σημαντικής	σημαντικός	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	18	amod	_	_
18	ουσίας	ουσία	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	0	root	_	_
19	.	.	PUNCT	PUNCT	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 dep	color:blue
1	Για	για	ADP	ADP	_	2	case	_	_
2	παράδειγμα	παράδειγμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	7	nmod	_	_
3	οι	ο	PRON	PRON	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
4	τοπικές	τοπικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	5	amod	_	_
5	αρχές	αρχή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	_	_
6	θα	θα	PART	PART	_	7	aux	_	_
7	πρέπει	πρέπει	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
8	στο	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Sing	9	case	_	_
9	μέλλον	μέλλον	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	14	nmod	_	_
10	να	να	PART	PART	_	11	aux	_	_
11	σκέφτονται	σκέφτομαι	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Pass	7	csubj	_	_
12	εγωιστικά	εγωιστικός	ADV	ADV	_	11	advmod	_	_
13	,	,	PUNCT	PUNCT	_	14	punct	_	_
14	δηλαδή	δηλαδή	ADV	ADV	_	16	dep	_	_
15	να	να	PART	PART	_	16	aux	_	_
16	σκέφτονται	σκέφτομαι	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Pass	11	appos	_	_
17	μόνο	μόνο	ADV	ADV	_	16	advmod	_	_
18	το	ο	PRON	PRON	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
19	άμεσο	άμεσος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	20	amod	_	_
20	συμφέρον	συμφέρον	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	16	dobj	_	_
21	τους	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	20	nmod	_	_
22	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


