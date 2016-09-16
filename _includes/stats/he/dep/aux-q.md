

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [aux]().

42 nodes (0%) are attached to their parents as `aux:q`.

42 instances of `aux:q` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.92857142857143.

The following 10 pairs of parts of speech are connected with `aux:q`: [he-pos/VERB]()-[he-pos/ADV]() (23; 55% instances), [he-pos/AUX]()-[he-pos/ADV]() (7; 17% instances), [he-pos/ADJ]()-[he-pos/DET]() (2; 5% instances), [he-pos/NOUN]()-[he-pos/ADV]() (2; 5% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (2; 5% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (2; 5% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 2% instances), [he-pos/AUX]()-[he-pos/DET]() (1; 2% instances), [he-pos/PRON]()-[he-pos/ADV]() (1; 2% instances), [he-pos/VERB]()-[he-pos/CONJ]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:q	color:blue
1	שאלנו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Past	0	root	_	_
2	על	_	ADP	ADP	_	4	case	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	פולנים	_	NOUN	NOUN	Gender=Masc|Number=Plur	1	iobj	_	_
5	:	_	PUNCT	PUNCT	HebSource=ConvUncertainHead	1	dep	_	_
6	האם	_	ADV	ADV	PronType=Int	7	aux:q	_	_
7	יכלו	_	VERB	VERB	Gender=Fem,Masc|HebSource=ConvUncertainHead|Number=Plur|Person=3|Tense=Fut	1	dep	_	_
8	לעשות	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	7	xcomp	_	_
9	יותר	_	ADV	ADV	_	10	advmod	_	_
10	מ	_	ADP	ADP	_	12	case	_	_
11	ש	_	SCONJ	SCONJ	_	12	mark	_	_
12	עשו	_	VERB	VERB	_	8	nmod	_	_
13	למען	_	ADP	ADP	_	15	case	_	_
14	ה	_	DET	DET	PronType=Art	15	det:def	_	_
15	יהודים	_	NOUN	NOUN	Gender=Masc|Number=Plur	8	nmod	_	_
16	?	_	PUNCT	PUNCT	HebSource=ConvUncertainHead	1	dep	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:q	color:blue
1	האם	_	ADV	ADV	PronType=Int	3	aux:q	_	_
2	אתם	_	PRON	PRON	Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	יכולים	_	AUX	AUX	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part|VerbType=Mod	0	root	_	_
4	להתעלות	_	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	3	xcomp	_	_
5	על	_	ADP	ADP	_	6	case	_	_
6	כך	_	PRON	PRON	Person=3|PronType=Dem	4	iobj	_	_
7	?	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:q	color:blue
1	שמא	_	SCONJ	SCONJ	_	2	aux:q	_	_
2	למדו	_	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Past	0	root	_	_
3	יובל	_	PROPN	PROPN	_	2	nsubj	_	_
4	נאמן	_	PROPN	PROPN	_	3	name	_	_
5	ו	_	CONJ	CONJ	_	3	cc	_	_
6	גאולה	_	PROPN	PROPN	_	3	conj	_	_
7	כהן	_	PROPN	PROPN	_	6	name	_	_
8	לקח	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	dobj	_	_
9	מ	_	ADP	ADP	_	11	case	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	עובדה	_	NOUN	NOUN	Gender=Fem|Number=Sing	2	iobj	_	_
12	ש	_	SCONJ	SCONJ	_	17	mark	_	_
13	אנשי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	17	nsubj	_	_
14	"	_	PUNCT	PUNCT	_	15	punct	_	_
15	כך	_	PROPN	PROPN	_	13	nmod:smixut	_	_
16	"	_	PUNCT	PUNCT	_	15	punct	_	_
17	סילקו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PIEL|Number=Plur|Person=3|Tense=Past	11	acl:relcl	_	_
18	אותם	_	PART	PART	Case=Acc	19	case:acc	_	_
19	הם_	_	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	dobj	_	_
20	מ	_	ADP	ADP	_	22	case	_	_
21	ה	_	DET	DET	PronType=Art	22	det:def	_	_
22	לוויה	_	NOUN	NOUN	Gender=Fem|Number=Sing	17	nmod	_	_
23	?	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


