

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

1023 nodes (2%) are attached to their parents as `ccomp`.

994 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.24731182795699.

The following 12 pairs of parts of speech are connected with `ccomp`: [el-pos/VERB]()-[el-pos/VERB]() (885; 87% instances), [el-pos/VERB]()-[el-pos/ADJ]() (69; 7% instances), [el-pos/VERB]()-[el-pos/NOUN]() (49; 5% instances), [el-pos/ADJ]()-[el-pos/VERB]() (5; 0% instances), [el-pos/CONJ]()-[el-pos/VERB]() (3; 0% instances), [el-pos/NOUN]()-[el-pos/VERB]() (3; 0% instances), [el-pos/VERB]()-[el-pos/ADV]() (2; 0% instances), [el-pos/VERB]()-[el-pos/NUM]() (2; 0% instances), [el-pos/VERB]()-[el-pos/PRON]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/ADV]()-[el-pos/VERB]() (1; 0% instances), [el-pos/NUM]()-[el-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Πολλοί	πολύς	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
2	από	από	ADP	ADP	_	3	case	_	_
3	αυτούς	αυτός	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Dem	1	det	_	_
4	κινδυνεύουν	κινδυνεύω	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
5	να	να	PART	PART	_	7	aux	_	_
6	μείνουν	μένω	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Voice=Act	7	cop	_	_
7	άστεγοι	άστεγος	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	4	ccomp	_	_
8	"	"	PUNCT	PUNCT	_	4	punct	_	_
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	det	_	_
2	διεθνής	διεθνής	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
3	κοινότητα	κοινότητα	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
4	δεν	δεν	PART	PART	_	5	neg	_	_
5	μπορεί	μπορώ	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
6	πια	πια	ADV	ADV	_	5	advmod	_	_
7	να	να	PART	PART	_	9	aux	_	_
8	μένει	μένω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	cop	_	_
9	παρατηρητής	παρατηρητής	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	5	ccomp	_	_
10	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


