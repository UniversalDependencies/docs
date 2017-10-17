

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [conj]().

108 nodes (0%) are attached to their parents as `conj:discourse`.

108 instances of `conj:discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.5462962962963.

The following 18 pairs of parts of speech are connected with `conj:discourse`: [he-pos/VERB]()-[he-pos/VERB]() (52; 48% instances), [he-pos/VERB]()-[he-pos/ADJ]() (9; 8% instances), [he-pos/VERB]()-[he-pos/NOUN]() (9; 8% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (5; 5% instances), [he-pos/ADJ]()-[he-pos/VERB]() (5; 5% instances), [he-pos/VERB]()-[he-pos/AUX]() (5; 5% instances), [he-pos/NOUN]()-[he-pos/VERB]() (4; 4% instances), [he-pos/AUX]()-[he-pos/VERB]() (3; 3% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (3; 3% instances), [he-pos/ADV]()-[he-pos/VERB]() (2; 2% instances), [he-pos/AUX]()-[he-pos/NOUN]() (2; 2% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (2; 2% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (2; 2% instances), [he-pos/ADJ]()-[he-pos/AUX]() (1; 1% instances), [he-pos/AUX]()-[he-pos/ADJ]() (1; 1% instances), [he-pos/AUX]()-[he-pos/AUX]() (1; 1% instances), [he-pos/PRON]()-[he-pos/VERB]() (1; 1% instances), [he-pos/VERB]()-[he-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 conj:discourse	color:blue
1	מ	מ	ADP	ADP	_	3	case	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	קהל	קהל	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	_
4	נשמעו	נשמע	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past|Voice=Mid	0	root	_	_
5	קריאות	קריאה	NOUN	NOUN	Gender=Fem|Number=Plur	4	nsubj	_	_
6	:	_	PUNCT	PUNCT	_	4	punct	_	_
7	אחרי	אחרי	ADP	ADP	_	9	case	_	_
8	ה	ה	DET	DET	PronType=Art	9	det:def	_	_
9	הלווייה	הלוויה	NOUN	NOUN	Gender=Fem|Number=Sing	10	obl	_	_
10	נלך	הלך	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Fut|Voice=Act	4	conj:discourse	_	_
11	לשחרר	שחרר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	10	xcomp	_	_
12	את	את	PART	PART	Case=Acc	13	case:acc	_	_
13	הר	הר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	11	obj	_	_
14	ה	ה	DET	DET	PronType=Art	15	det:def	_	_
15	בית	בית	NOUN	NOUN	Gender=Masc|Number=Sing	13	compound:smixut	_	_
16	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 21 conj:discourse	color:blue
1	"	_	PUNCT	PUNCT	_	3	punct	_	_
2	לא	לא	ADV	ADV	Polarity=Neg	3	advmod	_	_
3	ידעתי	ידע	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
5	על	על	ADP	ADP	_	7	case	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	קיבוץ	קיבוץ	NOUN	NOUN	Gender=Masc|Number=Sing	3	iobj	_	_
8	"	_	PUNCT	PUNCT	_	3	punct	_	_
9	,	_	PUNCT	PUNCT	_	10	punct	_	_
10	אומרת	אמר	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	3	parataxis	_	_
11	סילביה	סילביה	PROPN	PROPN	_	10	nsubj	_	_
12	(	_	PUNCT	PUNCT	_	13	punct	_	_
13	33	_	NUM	NUM	_	11	appos	_	_
14	)	_	PUNCT	PUNCT	_	13	punct	_	_
15	,	_	PUNCT	PUNCT	_	10	punct	_	_
16	"	_	PUNCT	PUNCT	_	21	punct	_	_
17	אבל	אבל	CCONJ	CCONJ	_	21	cc	_	_
18	ה	ה	DET	DET	PronType=Art	19	det:def	_	_
19	דימוי	דימוי	NOUN	NOUN	Gender=Masc|Number=Sing	21	nsubj	_	_
20	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	21	aux	_	_
21	שונה	שונה	ADJ	ADJ	Gender=Masc|Number=Sing	3	conj:discourse	_	_
22	לחלוטין	לחלוטין	ADV	ADV	_	21	advmod	_	_
23	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 conj:discourse	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	ארוטיקה	ארוטיקה	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	עוסקת	עסק	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
4	ב	ב	ADP	ADP	_	6	case	_	_
5	ה_	ה	DET	DET	PronType=Art	6	det:def	_	_
6	פרט	פרט	NOUN	NOUN	Gender=Masc|Number=Sing	3	iobj	_	_
7	,	_	PUNCT	PUNCT	_	3	punct	_	_
8	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	הכרזת	הכרזה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	3	conj:discourse	_	_
10	ה	ה	DET	DET	PronType=Art	11	det:def	_	_
11	עצמאות	עצמאות	NOUN	NOUN	Gender=Fem|Number=Sing	9	compound:smixut	_	_
12	של	של	PART	PART	Case=Gen	14	case:gen	_	_
13	ה	ה	DET	DET	PronType=Art	14	det:def	_	_
14	אדם	אדם	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod:poss	_	_
15	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


