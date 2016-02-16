

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [conj]().

114 nodes (0%) are attached to their parents as `conj:discourse`.

114 instances of `conj:discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.2280701754386.

The following 18 pairs of parts of speech are connected with `conj:discourse`: [he-pos/VERB]()-[he-pos/VERB]() (57; 50% instances), [he-pos/VERB]()-[he-pos/ADJ]() (10; 9% instances), [he-pos/VERB]()-[he-pos/NOUN]() (9; 8% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (5; 4% instances), [he-pos/ADJ]()-[he-pos/VERB]() (5; 4% instances), [he-pos/VERB]()-[he-pos/AUX]() (5; 4% instances), [he-pos/NOUN]()-[he-pos/VERB]() (4; 4% instances), [he-pos/AUX]()-[he-pos/VERB]() (3; 3% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (3; 3% instances), [he-pos/ADV]()-[he-pos/VERB]() (2; 2% instances), [he-pos/AUX]()-[he-pos/NOUN]() (2; 2% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (2; 2% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (2; 2% instances), [he-pos/ADJ]()-[he-pos/AUX]() (1; 1% instances), [he-pos/AUX]()-[he-pos/ADJ]() (1; 1% instances), [he-pos/AUX]()-[he-pos/AUX]() (1; 1% instances), [he-pos/PRON]()-[he-pos/VERB]() (1; 1% instances), [he-pos/VERB]()-[he-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 conj:discourse	color:blue
1	מ	_	ADP	ADP	_	3	case	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	קהל	_	NOUN	NOUN	Gender=Masc|Number=Sing	4	nmod	_	_
4	נשמעו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
5	קריאות	_	NOUN	NOUN	Gender=Fem|Number=Plur	4	nsubj	_	_
6	:	_	PUNCT	PUNCT	_	4	punct	_	_
7	אחרי	_	ADP	ADP	_	9	case	_	_
8	ה	_	DET	DET	PronType=Art	9	det:def	_	_
9	הלווייה	_	NOUN	NOUN	Gender=Fem|Number=Sing	10	nmod	_	_
10	נלך	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Fut	4	conj:discourse	_	_
11	לשחרר	_	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf	10	xcomp	_	_
12	את	_	PART	PART	Case=Acc	13	case:acc	_	_
13	הר	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	11	dobj	_	_
14	ה	_	DET	DET	PronType=Art	15	det:def	_	_
15	בית	_	NOUN	NOUN	Gender=Masc|Number=Sing	13	nmod:smixut	_	_
16	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 21 conj:discourse	color:blue
1	"	_	PUNCT	PUNCT	_	3	punct	_	_
2	לא	_	ADV	ADV	Negative=Neg	3	neg	_	_
3	ידעתי	_	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	דבר	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	dobj	_	_
5	על	_	ADP	ADP	_	7	case	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	קיבוץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	iobj	_	_
8	"	_	PUNCT	PUNCT	_	3	punct	_	_
9	,	_	PUNCT	PUNCT	_	10	punct	_	_
10	אומרת	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	3	parataxis	_	_
11	סילביה	_	PROPN	PROPN	_	10	nsubj	_	_
12	(	_	PUNCT	PUNCT	_	13	punct	_	_
13	33	_	NUM	NUM	_	11	appos	_	_
14	)	_	PUNCT	PUNCT	_	13	punct	_	_
15	,	_	PUNCT	PUNCT	_	10	punct	_	_
16	"	_	PUNCT	PUNCT	_	21	punct	_	_
17	אבל	_	CONJ	CONJ	_	21	cc	_	_
18	ה	_	DET	DET	PronType=Art	19	det:def	_	_
19	דימוי	_	NOUN	NOUN	Gender=Masc|Number=Sing	21	nsubj	_	_
20	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	21	aux	_	_
21	שונה	_	ADJ	ADJ	Gender=Masc|Number=Sing	3	conj:discourse	_	_
22	לחלוטין	_	ADV	ADV	_	21	advmod	_	_
23	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 conj:discourse	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	ארוטיקה	_	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	עוסקת	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	ב	_	ADP	ADP	_	6	case	_	_
5	ה_	_	DET	DET	PronType=Art	6	det:def	_	_
6	פרט	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	iobj	_	_
7	,	_	PUNCT	PUNCT	_	3	punct	_	_
8	היא	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	הכרזת	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Sing	3	conj:discourse	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	עצמאות	_	NOUN	NOUN	Gender=Fem|Number=Sing	9	nmod:smixut	_	_
12	של	_	PART	PART	Case=Gen	14	case:gen	_	_
13	ה	_	DET	DET	PronType=Art	14	det:def	_	_
14	אדם	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod:poss	_	_
15	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


