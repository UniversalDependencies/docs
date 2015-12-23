

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.
There are 2 language-specific subtypes of `acl`: [acl:inf](), [acl:relcl]().

315 nodes (0%) are attached to their parents as `acl`.

315 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.37460317460317.

The following 23 pairs of parts of speech are connected with `acl`: [he-pos/NOUN]()-[he-pos/NOUN]() (144; 46% instances), [he-pos/NOUN]()-[he-pos/VERB]() (100; 32% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (18; 6% instances), [he-pos/PROPN]()-[he-pos/VERB]() (10; 3% instances), [he-pos/NOUN]()-[he-pos/ADV]() (5; 2% instances), [he-pos/NOUN]()-[he-pos/AUX]() (5; 2% instances), [he-pos/PRON]()-[he-pos/VERB]() (5; 2% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (4; 1% instances), [he-pos/NOUN]()-[he-pos/PRON]() (4; 1% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (3; 1% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (2; 1% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (2; 1% instances), [he-pos/VERB]()-[he-pos/NOUN]() (2; 1% instances), [he-pos/VERB]()-[he-pos/VERB]() (2; 1% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/ADV]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (1; 0% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (1; 0% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/X]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	מדוע	_	ADV	ADV	PronType=Int	3	advmod	_	_
2	לא	_	ADV	ADV	Negative=Neg	3	neg	_	_
3	ייתכן	_	AUX	AUX	VerbType=Mod	0	root	_	_
4	ש	_	SCONJ	SCONJ	_	5	mark	_	_
5	קיים	_	ADJ	ADJ	Gender=Masc|Number=Sing	3	ccomp	_	_
6	מספר	_	NOUN	NOUN	Gender=Masc|Number=Sing	5	nsubj	_	_
7	ראשוני	_	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
8	גדול	_	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
9	יותר	_	ADV	ADV	_	8	advmod	_	_
10	בעל	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	6	acl	_	_
11	אותה	_	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	det	_	_
12	תכונה	_	NOUN	NOUN	Gender=Fem|Number=Sing	10	nmod:smixut	_	_
13	?	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	מקרה	_	NOUN	NOUN	Gender=Masc|Number=Sing	10	nsubj	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	אחר	_	ADJ	ADJ	Gender=Masc|Number=Sing	2	amod	_	_
5	אותו	_	PART	PART	Case=Acc	6	case:acc	_	_
6	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	dobj	_	_
7	הזכיר	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	2	acl	_	_
8	ח"כ	_	NOUN	NOUN	Gender=Masc|Number=Sing	7	nsubj	_	_
9	גולדמן	_	PROPN	PROPN	_	8	appos	_	_
10	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	0	root	_	_
11	ב	_	ADP	ADP	_	12	case	_	_
12	שבת	_	PROPN	PROPN	_	10	nmod	_	_
13	ב	_	ADP	ADP	_	14	case	_	_
14	טייבה	_	PROPN	PROPN	_	10	nmod	_	_
15	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	בין	_	ADP	ADP	_	3	case	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	שנים	_	NOUN	NOUN	Gender=Fem|Number=Plur	6	nmod	_	_
4	84	_	NUM	NUM	_	3	nmod	_	_
5	87	_	NUM	NUM	_	4	nummod	_	_
6	הרוויח	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	מילקן	_	PROPN	PROPN	_	6	nsubj	_	_
8	בן	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	7	acl	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	44	_	NUM	NUM	_	8	nmod:smixut	_	_
11	סכום	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	6	dobj	_	_
12	הטבות	_	NOUN	NOUN	Gender=Fem|Number=Plur	11	nmod:smixut	_	_
13	כולל	_	ADJ	ADJ	Gender=Masc|Number=Sing	11	amod	_	_
14	בן	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	11	acl	_	_
15	1.1	_	NUM	NUM	_	16	nummod	_	_
16	מיליארד	_	NUM	NUM	Gender=Masc|Number=Sing	17	nummod	_	_
17	דולר	_	NOUN	NOUN	Gender=Masc|Number=Sing	14	nmod:smixut	_	_
18	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


