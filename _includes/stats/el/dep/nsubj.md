

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

3524 nodes (6%) are attached to their parents as `nsubj`.

2599 instances of `nsubj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58683314415437.

The following 20 pairs of parts of speech are connected with `nsubj`: [el-pos/VERB]()-[el-pos/NOUN]() (2170; 62% instances), [el-pos/VERB]()-[el-pos/PRON]() (679; 19% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (195; 6% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (192; 5% instances), [el-pos/VERB]()-[el-pos/ADJ]() (75; 2% instances), [el-pos/NOUN]()-[el-pos/PRON]() (63; 2% instances), [el-pos/ADJ]()-[el-pos/PRON]() (47; 1% instances), [el-pos/VERB]()-[el-pos/NUM]() (44; 1% instances), [el-pos/PRON]()-[el-pos/NOUN]() (14; 0% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (10; 0% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (7; 0% instances), [el-pos/NOUN]()-[el-pos/NUM]() (7; 0% instances), [el-pos/NUM]()-[el-pos/NOUN]() (7; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (4; 0% instances), [el-pos/ADV]()-[el-pos/NOUN]() (3; 0% instances), [el-pos/NUM]()-[el-pos/PRON]() (2; 0% instances), [el-pos/PRON]()-[el-pos/PRON]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/NUM]() (1; 0% instances), [el-pos/ADV]()-[el-pos/PRON]() (1; 0% instances), [el-pos/PRON]()-[el-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Σπόρτινγκ	Σπόρτινγκ	NOUN	NOUN	_	4	nsubj	_	_
3	Λισαβόνας	Λισαβόνα	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	νίκησε	νικώ	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Μάντσεστερ	Μάντσεστερ	NOUN	NOUN	_	4	dobj	_	_
7	Σίτι	Σίτι	NOUN	NOUN	_	6	nmod	_	_
8	με	με	ADP	ADP	_	9	case	_	_
9	σκορ	σκορ	NOUN	NOUN	_	4	nmod	_	_
10	1:0	1:0	NUM	NUM	_	9	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	_
2	σημαίνει	σημαίνω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	ότι	ότι	CONJ	CONJ	_	4	mark	_	_
4	υπάρχει	υπάρχω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	ccomp	_	_
5	κίνδυνος	κίνδυνος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
6	μόλυνσης	μόλυνση	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	ακόμα	ακόμα	ADV	ADV	_	9	advmod	_	_
8	και	και	CONJ	CONJ	_	9	cc	_	_
9	ανθρώπων	άνθρωπος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
10	·	·	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	τρόπος	τρόπος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
3	που	που	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Rel	5	nmod	_	_
4	θα	θα	PART	PART	_	5	aux	_	_
5	ψηφίσουμε	ψηφίζω	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Voice=Act	2	acl:relcl	_	_
6	σήμερα	σήμερα	ADV	ADV	_	5	advmod	_	_
7	είναι	είμαι	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	8	cop	_	_
8	μέρος	μέρος	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
9	αυτής	αυτός	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	11	nmod	_	_
10	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	ευθύνης	ευθύνη	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


