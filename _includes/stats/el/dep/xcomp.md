

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

59 nodes (0%) are attached to their parents as `xcomp`.

53 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74576271186441.

The following 11 pairs of parts of speech are connected with `xcomp`: [el-pos/ADV]()-[el-pos/NOUN]() (31; 53% instances), [el-pos/VERB]()-[el-pos/ADJ]() (5; 8% instances), [el-pos/VERB]()-[el-pos/VERB]() (5; 8% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (4; 7% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (3; 5% instances), [el-pos/VERB]()-[el-pos/NOUN]() (3; 5% instances), [el-pos/ADV]()-[el-pos/ADJ]() (2; 3% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (2; 3% instances), [el-pos/VERB]()-[el-pos/NUM]() (2; 3% instances), [el-pos/NOUN]()-[el-pos/PRON]() (1; 2% instances), [el-pos/NOUN]()-[el-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Παρομοίως	παρόμοια	ADV	ADV	_	3	advmod	_	_
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	μπορεί	μπορώ	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	να	να	PART	PART	_	5	aux	_	_
5	λειτουργήσει	λειτουργώ	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Voice=Act	3	ccomp	_	_
6	ως	ως	ADV	ADV	_	5	advmod	_	_
7	μεσάζοντας	μεσάζοντας	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	6	xcomp	_	_
8	για	για	ADP	ADP	_	10	case	_	_
9	τους	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	καταναλωτές	καταναλωτής	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	7	nmod	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 12 xcomp	color:blue
1	Άρχισε	αρχίζω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
2	να	να	PART	PART	_	3	aux	_	_
3	εφαρμόζει	εφαρμόζω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	ccomp	_	_
4	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
5	προσωρινό	προσωρινός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	6	amod	_	_
6	πολίτευμα	πολίτευμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	dobj	_	_
7	,	,	PUNCT	PUNCT	_	1	punct	_	_
8	αλλά	αλλά	CONJ	CONJ	_	1	cc	_	_
9	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	Μουσουλμάνοι	μουσουλμάνος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Plur	17	nsubj	_	_
11	,	,	PUNCT	PUNCT	_	12	punct	_	_
12	υποκινούμενοι	υποκινώ	VERB	VERB	Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	17	xcomp	_	_
13	από	από	ADP	ADP	_	15	case	_	_
14	τους	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	Τούρκους	Τούρκος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	12	nmod	_	_
16	,	,	PUNCT	PUNCT	_	12	punct	_	_
17	ξεσηκώθηκαν	ξεσηκώνω	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Pass	1	conj	_	_
18	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 21 xcomp	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Υπουργός	υπουργός	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
3	Εσωτερικών	εσωτερικά	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Plur	2	nmod	_	_
4	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Γαλλίας	Γαλλία	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	Κλώντ	Κλώντ	NOUN	NOUN	_	8	nmod	_	_
8	Γκιάντ	Γκιάντ	NOUN	NOUN	_	2	appos	_	_
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	δήλωσε	δηλώνω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
11	ότι	ότι	CONJ	CONJ	_	16	mark	_	_
12	«	«	PUNCT	PUNCT	_	16	punct	_	_
13	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
14	Αρχές	αρχή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	16	nsubj	_	_
15	είναι	είμαι	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Pass	16	cop	_	_
16	αποφασισμένες	αποφασισμένος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	10	ccomp	_	_
17	να	να	PART	PART	_	18	aux	_	_
18	συλλάβουν	συλλαμβάνω	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Voice=Act	16	acl	_	_
19	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	δράστη	δράστης	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	18	dobj	_	_
21	ζωντανό	ζωντανός	ADJ	ADJ	Case=Acc|Gender=Masc|Number=Sing	18	xcomp	_	_
22	»	»	PUNCT	PUNCT	_	16	punct	_	_
23	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


