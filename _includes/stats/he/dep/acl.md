

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.
There are 2 language-specific subtypes of `acl`: [acl:inf](), [acl:relcl]().

286 nodes (0%) are attached to their parents as `acl`.

286 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40909090909091.

The following 23 pairs of parts of speech are connected with `acl`: [he-pos/NOUN]()-[he-pos/NOUN]() (132; 46% instances), [he-pos/NOUN]()-[he-pos/VERB]() (87; 30% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (18; 6% instances), [he-pos/PROPN]()-[he-pos/VERB]() (8; 3% instances), [he-pos/NOUN]()-[he-pos/ADV]() (5; 2% instances), [he-pos/NOUN]()-[he-pos/AUX]() (5; 2% instances), [he-pos/PRON]()-[he-pos/VERB]() (5; 2% instances), [he-pos/NOUN]()-[he-pos/PRON]() (4; 1% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (3; 1% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (2; 1% instances), [he-pos/NOUN]()-[he-pos/CCONJ]() (2; 1% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (2; 1% instances), [he-pos/VERB]()-[he-pos/NOUN]() (2; 1% instances), [he-pos/VERB]()-[he-pos/VERB]() (2; 1% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/ADV]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (1; 0% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (1; 0% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/X]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	ניצחון	ניצחון	NOUN	NOUN	Gender=Masc|Number=Sing	2	nsubj	_	_
2	יבטיח	הבטיח	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Fut|Voice=Act	0	root	_	_
3	לה	ל	ADP	ADP	_	4	case	_	_
4	_היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	iobj	_	_
5	יתרון	יתרון	NOUN	NOUN	Gender=Masc|Number=Sing	2	obj	_	_
6	בן	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	5	acl	_	_
7	4	_	NUM	NUM	_	8	nummod	_	_
8	נקודות	נקודה	NOUN	NOUN	Gender=Fem|Number=Plur	6	compound:smixut	_	_
9	,	_	PUNCT	PUNCT	_	8	punct	_	_
10	לפחות	לפחות	ADV	ADV	_	8	dep	_	_
11	,	_	PUNCT	PUNCT	_	5	punct	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	פיסגה	פסגה	NOUN	NOUN	Gender=Fem|Number=Sing	5	nmod	_	_
14	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	ב	ב	ADP	ADP	_	2	case	_	_
2	סיכום	סיכום	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	5	iobj	_	_
3	ה	ה	DET	DET	PronType=Art	4	det:def	_	_
4	כנס	כנס	NOUN	NOUN	Gender=Masc|Number=Sing	2	compound:smixut	_	_
5	עלתה	עלה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	שאלה	שאלה	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
8	,	_	PUNCT	PUNCT	_	7	punct	_	_
9	מי	מי	ADV	ADV	PronType=Int	10	nsubj	_	_
10	בנה	בנה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	7	acl	_	_
11	את	את	PART	PART	Case=Acc	14	case:acc	_	_
12	ארץ	ארץ	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	14	nmod	_	_
13	-	_	PUNCT	PUNCT	_	14	punct	_	_
14	ישראל	ישראל	PROPN	PROPN	_	10	obj	_	_
15	ב	ב	ADP	ADP	_	16	case	_	_
16	ראשית	ראשית	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	10	obl	_	_
17	ה	ה	DET	DET	PronType=Art	18	det:def	_	_
18	מאה	מאה	NUM	NUM	Gender=Fem|Number=Sing	16	compound:smixut	_	_
19	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	בין	בין	ADP	ADP	_	3	case	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	שנים	שנה	NOUN	NOUN	Gender=Fem|Number=Plur	6	obl	_	_
4	84	_	NUM	NUM	_	3	nmod	_	_
5	87	_	NUM	NUM	_	4	nummod	_	_
6	הרוויח	הרוויח	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
7	מילקן	מילקן	PROPN	PROPN	_	6	nsubj	_	_
8	בן	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	7	acl	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	44	_	NUM	NUM	_	8	compound:smixut	_	_
11	סכום	סכום	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	6	obj	_	_
12	הטבות	הטבה	NOUN	NOUN	Gender=Fem|Number=Plur	11	compound:smixut	_	_
13	כולל	_	ADJ	ADJ	Gender=Masc|Number=Sing	11	amod	_	_
14	בן	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	11	acl	_	_
15	1.1	_	NUM	NUM	_	16	nummod	_	_
16	מיליארד	מיליארד	NUM	NUM	Gender=Masc|Number=Sing	17	nummod	_	_
17	דולר	דולר	NOUN	NOUN	Gender=Masc|Number=Sing	14	compound:smixut	_	_
18	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


