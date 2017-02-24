

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

601 nodes (1%) are attached to their parents as `advcl`.

438 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.29450915141431.

The following 16 pairs of parts of speech are connected with `advcl`: [el-pos/VERB]()-[el-pos/VERB]() (488; 81% instances), [el-pos/ADJ]()-[el-pos/VERB]() (30; 5% instances), [el-pos/NOUN]()-[el-pos/VERB]() (30; 5% instances), [el-pos/VERB]()-[el-pos/ADJ]() (17; 3% instances), [el-pos/ADV]()-[el-pos/VERB]() (16; 3% instances), [el-pos/VERB]()-[el-pos/NOUN]() (8; 1% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (2; 0% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/ADV]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/NUM]() (1; 0% instances), [el-pos/NUM]()-[el-pos/VERB]() (1; 0% instances), [el-pos/PRON]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/PRON]()-[el-pos/VERB]() (1; 0% instances), [el-pos/SCONJ]()-[el-pos/VERB]() (1; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Όλοι	όλος	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	αντιλαμβανόμαστε	αντιλαμβάνομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	όταν	όταν	SCONJ	SCONJ	_	5	mark	_	_
5	πηγαίνουμε	πηγαίνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
6	να	να	PART	PART	_	7	aux	_	_
7	ψωνίσουμε	ψωνίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
8	:	:	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 advcl	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	2	det	_	_
2	οχήματα	όχημα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	14	nsubj	_	_
3	με	με	ADP	ADP	_	4	case	_	_
4	κινητήρα	κινητήρας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	2	nmod	_	_
5	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	14	cop	_	_
6	πράγματι	πράγματι	ADV	ADV	_	14	advmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	όπως	όπως	ADV	ADV	_	9	advmod	_	_
9	λέει	λέγω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl	_	_
10	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	κ.	κ.	NOUN	NOUN	Abbr=Yes	12	compound	_	_
12	Caullery	Caullery	X	X	Foreign=Yes	9	nsubj	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	9	punct	_	_
14	πολύπλοκα	πολύπλοκος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
15	και	και	CCONJ	CCONJ	_	16	cc	_	_
16	σύνθετα	σύνθετος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	14	conj	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	Θα	θα	PART	PART	_	2	aux	_	_
2	αναφερθώ	αναφέρω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Pass	0	root	_	_
3	στη	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	4	case	_	_
4	συνέχεια	συνέχεια	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_
5	στους	στου	ADP	ADP	Case=Acc|Gender=Masc|Number=Plur	6	case	_	_
6	τομείς	τομέας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	2	obl	_	_
7	όπου	όπου	ADV	ADV	_	10	advmod	_	_
8	δεν	δεν	PART	PART	_	10	advmod	_	_
9	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
10	έπραξε	πράττω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


