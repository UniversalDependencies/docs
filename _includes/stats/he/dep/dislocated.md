

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

16 nodes (0%) are attached to their parents as `dislocated`.

16 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.1875.

The following 9 pairs of parts of speech are connected with `dislocated`: [he-pos/VERB]()-[he-pos/NOUN]() (6; 38% instances), [he-pos/AUX]()-[he-pos/NOUN]() (3; 19% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 6% instances), [he-pos/ADV]()-[he-pos/ADV]() (1; 6% instances), [he-pos/ADV]()-[he-pos/NOUN]() (1; 6% instances), [he-pos/AUX]()-[he-pos/PRON]() (1; 6% instances), [he-pos/AUX]()-[he-pos/VERB]() (1; 6% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (1; 6% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	איך	_	ADV	ADV	PronType=Int	2	advmod	_	_
2	ייתכן	_	AUX	AUX	VerbType=Mod	0	root	_	_
3	ש	_	SCONJ	SCONJ	_	8	mark	_	_
4	מוצר	_	NOUN	NOUN	Gender=Masc|Number=Sing	8	dislocated	_	_
5	ה	_	SCONJ	SCONJ	_	6	mark	_	_
6	מכיל	_	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	4	acl:relcl	_	_
7	ביצים	_	NOUN	NOUN	Gender=Fem|Number=Plur	6	dobj	_	_
8	אין	_	VERB	VERB	HebExistential=True	2	advcl	_	_
9	בו	_	ADP	ADP	_	10	case	_	_
10	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod	_	_
11	כולסטרול	_	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	_
12	?	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	כל	_	DET	DET	Definite=Red	2	det	_	_
2	נסיון	_	NOUN	NOUN	Gender=Masc|Number=Sing	4	dislocated	_	_
3	לפגוע	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	2	advmod:inf	_	_
4	יש	_	AUX	AUX	VerbType=Mod	0	root	_	_
5	לגנות	_	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf	4	xcomp	_	_
6	אותו	_	PART	PART	Case=Acc	7	case:acc	_	_
7	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
8	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 dislocated	color:blue
1	ב	_	ADP	ADP	_	3	case	_	_
2	ה_	_	DET	DET	PronType=Art	3	det:def	_	_
3	המלצה	_	NOUN	NOUN	Gender=Fem|Number=Sing	14	nmod	_	_
4	,	_	PUNCT	PUNCT	_	3	punct	_	_
5	ש	_	SCONJ	SCONJ	_	6	mark	_	_
6	נוסחה	_	VERB	VERB	Gender=Fem|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past	3	acl:relcl	_	_
7	ב	_	ADP	ADP	_	8	case	_	_
8	שיתוף	_	NOUN	NOUN	Gender=Masc|Number=Sing	6	nmod	_	_
9	עם	_	ADP	ADP	_	10	case	_	_
10	משרד	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	8	nmod	_	_
11	ה	_	DET	DET	PronType=Art	12	det:def	_	_
12	חוץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	10	nmod:smixut	_	_
13	,	_	PUNCT	PUNCT	_	14	punct	_	_
14	נאמר	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
15	כי	_	SCONJ	SCONJ	_	24	mark	_	_
16	כל	_	DET	DET	Definite=Red	18	det	_	_
17	ה	_	SCONJ	SCONJ	_	18	mark	_	_
18	מתכוון	_	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	24	dislocated	_	_
19	לצאת	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	18	xcomp	_	_
20	ל	_	ADP	ADP	_	21	case	_	_
21	טיול	_	NOUN	NOUN	Gender=Masc|Number=Sing	19	nmod	_	_
22	ב	_	ADP	ADP	_	23	case	_	_
23	מצרים	_	PROPN	PROPN	_	21	nmod	_	_
24	ראוי	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	14	advcl	_	_
25	ש	_	SCONJ	SCONJ	_	26	mark	_	_
26	ישקול	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Fut	24	advcl	_	_
27	שוב	_	ADV	ADV	_	26	advmod	_	_
28	את	_	PART	PART	Case=Acc	29	case:acc	_	_
29	כוונתו	_	NOUN	NOUN	Gender=Fem|Number=Sing	26	dobj	_	_
30	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	29	nmod:poss	_	_
31	.	_	PUNCT	PUNCT	_	14	punct	_	_

~~~


