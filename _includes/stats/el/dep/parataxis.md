

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

47 nodes (0%) are attached to their parents as `parataxis`.

37 instances of `parataxis` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.17021276595745.

The following 8 pairs of parts of speech are connected with `parataxis`: [el-pos/VERB]()-[el-pos/VERB]() (22; 47% instances), [el-pos/VERB]()-[el-pos/NOUN]() (10; 21% instances), [el-pos/NOUN]()-[el-pos/VERB]() (9; 19% instances), [el-pos/PROPN]()-[el-pos/VERB]() (2; 4% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (1; 2% instances), [el-pos/ADJ]()-[el-pos/VERB]() (1; 2% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (1; 2% instances), [el-pos/PROPN]()-[el-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 parataxis	color:blue
1	Λόγω	λόγω	ADP	ADP	_	4	case	_	_
2	όμως	όμως	CCONJ	CCONJ	_	11	cc	_	_
3	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	σχήματός	σχήμα	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	11	obl	_	_
5	της	μου	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	nmod	_	_
6	-	-	PUNCT	PUNCT	_	7	punct	_	_
7	μοιάζει	μοιάζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	parataxis	_	_
8	με	με	ADP	ADP	_	9	case	_	_
9	δρεπάνι	δρεπάνι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
10	-	-	PUNCT	PUNCT	_	7	punct	_	_
11	ονομαζόταν	ονομάζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
12	και	και	CCONJ	CCONJ	_	11	cc	_	_
13	δρέπανον	δρέπανο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
2	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	PART	PART	_	4	aux	_	_
4	επιδιώκουμε	επιδιώκω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	SpaceAfter=No
5	:	:	PUNCT	PUNCT	_	2	punct	_	_
6	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	βελτίωση	βελτίωση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	2	parataxis	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	όχι	όχι	PART	PART	_	11	advmod	_	_
10	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	διάλυση	διάλυση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	Γνωρίζω	γνωρίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ότι	ότι	SCONJ	SCONJ	_	24	mark	_	_
3	σε	σε	ADP	ADP	_	5	case	_	_
4	ορισμένες	ορισμένος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	5	amod	_	_
5	χώρες	χώρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	24	nmod	_	_
6	-	-	PUNCT	PUNCT	_	11	punct	_	_
7	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
8	κ.	κ.	NOUN	NOUN	Abbr=Yes	10	compound	_	_
9	Carlos	Carlos	X	X	Foreign=Yes	10	nmod	_	_
10	Coelho	Coelho	X	X	Foreign=Yes	11	nsubj	_	_
11	ανέφερε	αναφέρω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	_
12	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
13	πορτογαλική	πορτογαλικός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	14	amod	_	_
14	περίπτωση	περίπτωση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
15	-	-	PUNCT	PUNCT	_	11	punct	_	_
16	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	18	det	_	_
17	ελάχιστο	ελάχιστος	ADJ	ADJ	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing	18	amod	_	_
18	όριο	όριο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	24	nsubj	_	_
19	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
20	μέγιστης	μεγάλος	ADJ	ADJ	Case=Gen|Degree=Sup|Gender=Fem|Number=Sing	21	amod	_	_
21	ποινής	ποινή	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
22	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	24	cop	_	_
23	πιο	πιο	ADV	ADV	_	24	advmod	_	_
24	αυστηρό	αυστηρός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	1	ccomp	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


