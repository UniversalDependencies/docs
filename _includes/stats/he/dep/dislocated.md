

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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 dislocated	color:blue
1	מה	_	ADV	ADV	PronType=Int	12	dislocated	_	_
2	ש	_	SCONJ	SCONJ	_	3	mark	_	_
3	הספיק	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	_
4	ל	_	ADP	ADP	_	5	case	_	_
5	הישגים	_	NOUN	NOUN	Gender=Masc|Number=Plur	3	nmod	_	_
6	גדולים	_	ADJ	ADJ	Gender=Masc|Number=Plur	5	amod	_	_
7	לפני	_	ADP	ADP	_	9	case	_	_
8	0203	_	NUM	NUM	_	9	nummod	_	_
9	שנה	_	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
10	,	_	PUNCT	PUNCT	_	12	punct	_	_
11	לא	_	ADV	ADV	Negative=Neg	12	advmod	_	_
12	די	_	ADV	ADV	_	0	root	_	_
13	בו	_	ADP	ADP	_	14	case	_	_
14	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	advmod	_	_
15	כיום	_	ADV	ADV	_	12	advmod	_	_
16	אף	_	CONJ	CONJ	_	12	advmod	_	_
17	לא	_	ADV	ADV	HebSource=ConvUncertainHead|Negative=Neg	16	dep	_	_
18	ל	_	ADP	ADP	_	19	case	_	_
19	הצלחה	_	NOUN	NOUN	Gender=Fem|HebSource=ConvUncertainHead|Number=Sing	16	dep	_	_
20	ישראלית	_	ADJ	ADJ	Gender=Fem|Number=Sing	19	amod	_	_
21	צנועה	_	ADJ	ADJ	Gender=Fem|Number=Sing	19	amod	_	_
22	.	_	PUNCT	PUNCT	_	12	punct	_	_

~~~


