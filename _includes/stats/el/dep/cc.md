

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

2074 nodes (4%) are attached to their parents as `cc`.

1712 instances of `cc` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.8847637415622.

The following 15 pairs of parts of speech are connected with `cc`: [el-pos/NOUN]()-[el-pos/CONJ]() (870; 42% instances), [el-pos/VERB]()-[el-pos/CONJ]() (776; 37% instances), [el-pos/ADJ]()-[el-pos/CONJ]() (148; 7% instances), [el-pos/ADV]()-[el-pos/CONJ]() (67; 3% instances), [el-pos/CONJ]()-[el-pos/CONJ]() (57; 3% instances), [el-pos/ADP]()-[el-pos/CONJ]() (42; 2% instances), [el-pos/NOUN]()-[el-pos/ADV]() (27; 1% instances), [el-pos/NUM]()-[el-pos/CONJ]() (22; 1% instances), [el-pos/PUNCT]()-[el-pos/CONJ]() (22; 1% instances), [el-pos/PRON]()-[el-pos/CONJ]() (18; 1% instances), [el-pos/VERB]()-[el-pos/ADV]() (17; 1% instances), [el-pos/ADJ]()-[el-pos/ADV]() (3; 0% instances), [el-pos/PRON]()-[el-pos/ADV]() (3; 0% instances), [el-pos/DET]()-[el-pos/ADV]() (1; 0% instances), [el-pos/DET]()-[el-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Συντάσσει	συντάσσω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	και	και	CONJ	CONJ	_	1	cc	_	_
3	υποβάλλει	υποβάλλω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	conj	_	_
4	προσφορές	προσφορά	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	1	dobj	_	_
5	για	για	ADP	ADP	_	6	case	_	_
6	αυτούς	αυτός	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Dem	2	nmod	_	_
7	κάθε	κάθε	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Ind	8	nmod	_	_
8	εβδομάδα	εβδομάδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	_
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	Χρειαζόμαστε	χρειάζομαι	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Pass	0	root	_	_
2	έναν	ένας	DET	DET	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	det	_	_
3	τρόπο	τρόπος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	1	dobj	_	_
4	εργασίας	εργασία	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	διαφανή	διαφανής	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	3	amod	_	_
6	και	και	CONJ	CONJ	_	5	cc	_	_
7	ανοιχτό	ανοιχτός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	5	conj	_	_
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


