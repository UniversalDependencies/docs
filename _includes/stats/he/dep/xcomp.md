

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

1747 nodes (1%) are attached to their parents as `xcomp`.

1740 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91356611333715.

The following 8 pairs of parts of speech are connected with `xcomp`: [he-pos/VERB]()-[he-pos/VERB]() (982; 56% instances), [he-pos/AUX]()-[he-pos/VERB]() (684; 39% instances), [he-pos/NOUN]()-[he-pos/VERB]() (31; 2% instances), [he-pos/ADJ]()-[he-pos/VERB]() (20; 1% instances), [he-pos/PRON]()-[he-pos/VERB]() (14; 1% instances), [he-pos/ADV]()-[he-pos/VERB]() (13; 1% instances), [he-pos/PROPN]()-[he-pos/VERB]() (2; 0% instances), [he-pos/NUM]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	בני	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	5	nsubj	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	זוג	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod:smixut	_	_
4	גרוסבורד	_	PROPN	PROPN	_	1	appos	_	_
5	תוכננו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PUAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	לשוב	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	5	xcomp	_	_
7	היום	_	ADV	ADV	_	6	advmod:phrase	_	_
8	אחרי	_	ADP	ADP	_	11	case	_	_
9	-	_	PUNCT	PUNCT	_	11	punct	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	צהריים	_	NOUN	NOUN	Gender=Masc|Number=Plur	7	advmod	_	_
12	ל	_	ADP	ADP	_	13	case	_	_
13	ישראל	_	PROPN	PROPN	_	6	nmod	_	_
14	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	שם	_	ADV	ADV	_	3	advmod	_	_
2	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	3	aux	_	_
3	אמור	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	להיפגש	_	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf	3	xcomp	_	_
5	עם	_	ADP	ADP	_	6	case	_	_
6	אשתו	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	nmod	_	_
7	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
8	,	_	PUNCT	PUNCT	_	6	punct	_	_
9	ש	_	SCONJ	SCONJ	_	10	mark	_	_
10	עשתה	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	ב	_	ADP	ADP	_	12	case	_	_
12	בוסטון	_	PROPN	PROPN	_	10	nmod	_	_
13	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	זוהי	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	סכנה	_	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
4	,	_	PUNCT	PUNCT	_	3	punct	_	_
5	ו	_	CONJ	CONJ	_	3	cc	_	_
6	על	_	ADP	ADP	_	8	case	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	ממשלה	_	NOUN	NOUN	Gender=Fem|Number=Sing	3	conj	_	_
9	לעשות	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	8	xcomp	_	_
10	מאמץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	dobj	_	_
11	עילאי	_	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
12	כדי	_	ADP	ADP	_	13	case	_	_
13	למנוע	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	9	advcl	_	_
14	אותה	_	PART	PART	Case=Acc	15	case:acc	_	_
15	היא_	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	dobj	_	_
16	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


