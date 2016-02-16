

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

1090 nodes (1%) are attached to their parents as `advcl`.

798 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.3651376146789.

The following 40 pairs of parts of speech are connected with `advcl`: [he-pos/VERB]()-[he-pos/VERB]() (671; 62% instances), [he-pos/AUX]()-[he-pos/VERB]() (93; 9% instances), [he-pos/VERB]()-[he-pos/NOUN]() (58; 5% instances), [he-pos/VERB]()-[he-pos/AUX]() (44; 4% instances), [he-pos/ADJ]()-[he-pos/VERB]() (36; 3% instances), [he-pos/NOUN]()-[he-pos/VERB]() (33; 3% instances), [he-pos/VERB]()-[he-pos/ADJ]() (29; 3% instances), [he-pos/VERB]()-[he-pos/ADV]() (18; 2% instances), [he-pos/VERB]()-[he-pos/CONJ]() (13; 1% instances), [he-pos/ADV]()-[he-pos/VERB]() (11; 1% instances), [he-pos/VERB]()-[he-pos/PRON]() (11; 1% instances), [he-pos/PRON]()-[he-pos/VERB]() (7; 1% instances), [he-pos/VERB]()-[he-pos/DET]() (6; 1% instances), [he-pos/ADJ]()-[he-pos/AUX]() (5; 0% instances), [he-pos/AUX]()-[he-pos/ADJ]() (5; 0% instances), [he-pos/AUX]()-[he-pos/CONJ]() (4; 0% instances), [he-pos/PROPN]()-[he-pos/VERB]() (4; 0% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/AUX]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/CONJ]()-[he-pos/VERB]() (3; 0% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (3; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/VERB]()-[he-pos/PROPN]() (3; 0% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (2; 0% instances), [he-pos/AUX]()-[he-pos/AUX]() (2; 0% instances), [he-pos/AUX]()-[he-pos/DET]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/AUX]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/CONJ]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/DET]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/AUX]()-[he-pos/ADV]() (1; 0% instances), [he-pos/AUX]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/NUM]()-[he-pos/VERB]() (1; 0% instances), [he-pos/VERB]()-[he-pos/ADP]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 advcl	color:blue
1	אם	_	CONJ	CONJ	_	2	mark	_	_
2	נשיג	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=HIFIL|Number=Plur|Person=1|Tense=Fut	7	advcl	_	_
3	תוצאה	_	NOUN	NOUN	Gender=Fem|Number=Sing	2	dobj	_	_
4	טובה	_	ADJ	ADJ	Gender=Fem|Number=Sing	3	amod	_	_
5	ב	_	ADP	ADP	_	6	case	_	_
6	יוון	_	PROPN	PROPN	_	2	nmod	_	_
7	יהיה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbType=Cop	0	root	_	_
8	לנו	_	ADP	ADP	_	9	case	_	_
9	אנחנו_	_	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	7	nmod	_	_
10	זמן	_	NOUN	NOUN	Gender=Masc|Number=Sing	7	dep	_	_
11	לעבוד	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	10	acl:inf	_	_
12	על	_	ADP	ADP	_	14	case	_	_
13	ה	_	DET	DET	PronType=Art	14	det:def	_	_
14	מהירות	_	NOUN	NOUN	Gender=Fem|Number=Sing	11	iobj	_	_
15	.	_	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl	color:blue
1	דומה	_	AUX	AUX	VerbType=Mod	0	root	_	_
2	ש	_	SCONJ	SCONJ	_	5	mark	_	_
3	מעולם	_	ADV	ADV	_	5	advmod	_	_
4	לא	_	ADV	ADV	Negative=Neg	5	neg	_	_
5	חשב	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	1	advcl	_	_
6	אחרת	_	ADV	ADV	_	5	advmod	_	_
7	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 advcl	color:blue
1	ו	_	CONJ	CONJ	_	6	cc	_	_
2	אחר	_	ADP	ADP	_	4	case	_	_
3	-	_	PUNCT	PUNCT	_	4	punct	_	_
4	כך	_	PRON	PRON	Person=3|PronType=Dem	6	advmod	_	_
5	הוא	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	מוסיף	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
7	:	_	PUNCT	PUNCT	_	13	punct	_	_
8	"	_	PUNCT	PUNCT	_	13	punct	_	_
9	הוא	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	dep	_	_
10	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	13	aux	_	_
11	יותר	_	ADV	ADV	HebSource=ConvUncertainHead	13	dep	_	_
12	מ	_	ADP	ADP	_	13	det	_	_
13	אדם	_	NOUN	NOUN	Gender=Masc|Number=Sing	6	advcl	_	_
14	,	_	PUNCT	PUNCT	_	13	punct	_	_
15	הוא	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	dep	_	_
16	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	17	aux	_	_
17	נוצרי	_	ADJ	ADJ	Gender=Masc|Number=Sing	13	conj:discourse	_	_
18	"	_	PUNCT	PUNCT	_	13	punct	_	_
19	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


