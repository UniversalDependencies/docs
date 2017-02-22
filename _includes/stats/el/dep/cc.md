

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

1771 nodes (3%) are attached to their parents as `cc`.

1713 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58046301524562.

The following 19 pairs of parts of speech are connected with `cc`: [el-pos/NOUN]()-[el-pos/CCONJ]() (711; 40% instances), [el-pos/VERB]()-[el-pos/CCONJ]() (622; 35% instances), [el-pos/ADJ]()-[el-pos/CCONJ]() (152; 9% instances), [el-pos/PROPN]()-[el-pos/CCONJ]() (102; 6% instances), [el-pos/ADV]()-[el-pos/CCONJ]() (45; 3% instances), [el-pos/PRON]()-[el-pos/CCONJ]() (29; 2% instances), [el-pos/CCONJ]()-[el-pos/CCONJ]() (22; 1% instances), [el-pos/NUM]()-[el-pos/CCONJ]() (22; 1% instances), [el-pos/X]()-[el-pos/CCONJ]() (21; 1% instances), [el-pos/NOUN]()-[el-pos/ADV]() (18; 1% instances), [el-pos/VERB]()-[el-pos/ADV]() (11; 1% instances), [el-pos/PART]()-[el-pos/CCONJ]() (4; 0% instances), [el-pos/PRON]()-[el-pos/ADV]() (4; 0% instances), [el-pos/ADJ]()-[el-pos/ADV]() (2; 0% instances), [el-pos/X]()-[el-pos/ADV]() (2; 0% instances), [el-pos/ADP]()-[el-pos/CCONJ]() (1; 0% instances), [el-pos/DET]()-[el-pos/ADV]() (1; 0% instances), [el-pos/PROPN]()-[el-pos/ADV]() (1; 0% instances), [el-pos/VERB]()-[el-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cc	color:blue
1	Ελπίζω	ελπίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	μάλιστα	μάλιστα	ADV	ADV	_	1	advmod	_	_
3	ότι	ότι	SCONJ	SCONJ	_	10	mark	_	_
4	και	και	CCONJ	CCONJ	_	7	cc	_	_
5	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
6	λοιπές	λοιπός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	7	amod	_	_
7	ομάδες	ομάδα	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	_	_
8	θα	θα	PART	PART	_	10	aux	_	_
9	την	εγώ	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
10	εγκρίνουν	εγκρίνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 cc	color:blue
1	Θα	θα	PART	PART	_	2	aux	_	_
2	συνεχίσει	συνεχίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	όμως	όμως	CCONJ	CCONJ	_	2	cc	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	διανομή	διανομή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
8	δεμάτων	δέμα	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	_
9	6	6	NUM	NUM	NumType=Card	10	nummod	_	_
10	μέρες	μέρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	8	nmod	_	_
11	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	εβδομάδα	εβδομάδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Όμως	όμως	ADV	ADV	_	2	cc	_	_
2	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	PART	PART	_	4	aux	_	_
4	γίνει	γίνομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	2	csubj	_	_
5	σε	σε	ADP	ADP	_	9	case	_	_
6	ανοικτή	ανοιχτός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	9	amod	_	_
7	και	και	CCONJ	CCONJ	_	8	cc	_	_
8	συνεκτική	συνεκτικός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	6	conj	_	_
9	βάση	βάση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


