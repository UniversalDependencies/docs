

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

2580 nodes (2%) are attached to their parents as `name`.

2580 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30736434108527.

The following 20 pairs of parts of speech are connected with `name`: [he-pos/PROPN]()-[he-pos/PROPN]() (1590; 62% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (316; 12% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (192; 7% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (163; 6% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (132; 5% instances), [he-pos/NOUN]()-[he-pos/PUNCT]() (117; 5% instances), [he-pos/NOUN]()-[he-pos/NUM]() (16; 1% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (8; 0% instances), [he-pos/PROPN]()-[he-pos/CONJ]() (8; 0% instances), [he-pos/DET]()-[he-pos/PROPN]() (7; 0% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (7; 0% instances), [he-pos/NUM]()-[he-pos/PROPN]() (5; 0% instances), [he-pos/PROPN]()-[he-pos/PART]() (4; 0% instances), [he-pos/PUNCT]()-[he-pos/PROPN]() (3; 0% instances), [he-pos/PUNCT]()-[he-pos/PUNCT]() (3; 0% instances), [he-pos/ADP]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/NUM]() (2; 0% instances), [he-pos/VERB]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/X]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/DET]()-[he-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 name	color:blue
1	"	_	PUNCT	PUNCT	_	2	punct	_	_
2	גורג	_	PROPN	PROPN	_	6	nsubj:cop	_	_
3	"	_	PUNCT	PUNCT	_	2	punct	_	_
4	הוא	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	6	cop	_	_
5	כמובן	_	ADV	ADV	_	6	dep	_	_
6	גורג	_	PROPN	PROPN	_	0	root	_	_
7	בוש	_	PROPN	PROPN	_	6	name	_	_
8	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 name	color:blue
1	אכן	_	ADV	ADV	_	4	advmod	_	_
2	,	_	PUNCT	PUNCT	_	4	punct	_	_
3	כך	_	ADV	ADV	_	4	advmod	_	_
4	עשתה	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	חטיבת	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Sing	4	nsubj	_	_
6	"	_	PUNCT	PUNCT	_	7	punct	_	_
7	הראל	_	PROPN	PROPN	_	5	name	_	_
8	"	_	PUNCT	PUNCT	_	7	punct	_	_
9	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 name	color:blue
1	הוא	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	נבנה	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	ב	_	ADP	ADP	_	4	case	_	_
4	שנות	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Plur	2	nmod	_	_
5	ה	_	DET	DET	PronType=Art	6	det:def	_	_
6	70	_	NUM	NUM	_	4	nmod:smixut	_	_
7	ב	_	ADP	ADP	_	8	case	_	_
8	צדו	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
9	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod:poss	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	מערבי	_	ADJ	ADJ	Gender=Masc|Number=Sing	8	amod	_	_
12	של	_	PART	PART	Case=Gen	13	case:gen	_	_
13	רחוב	_	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod:poss	_	_
14	בן	_	PROPN	PROPN	_	13	appos	_	_
15	-	_	PUNCT	PUNCT	_	14	name	_	_
16	סרוק	_	PROPN	PROPN	_	14	name	_	_
17	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


