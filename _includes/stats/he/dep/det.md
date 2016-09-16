

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:def](), [det:quant]().

1702 nodes (1%) are attached to their parents as `det`.

1702 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47943595769683.

The following 34 pairs of parts of speech are connected with `det`: [he-pos/NOUN]()-[he-pos/DET]() (660; 39% instances), [he-pos/NOUN]()-[he-pos/ADV]() (395; 23% instances), [he-pos/NOUN]()-[he-pos/ADP]() (142; 8% instances), [he-pos/NOUN]()-[he-pos/PRON]() (115; 7% instances), [he-pos/NOUN]()-[he-pos/NUM]() (68; 4% instances), [he-pos/PRON]()-[he-pos/ADV]() (56; 3% instances), [he-pos/NUM]()-[he-pos/DET]() (33; 2% instances), [he-pos/PROPN]()-[he-pos/ADV]() (33; 2% instances), [he-pos/NUM]()-[he-pos/ADV]() (25; 1% instances), [he-pos/PRON]()-[he-pos/NUM]() (25; 1% instances), [he-pos/ADV]()-[he-pos/DET]() (22; 1% instances), [he-pos/VERB]()-[he-pos/DET]() (22; 1% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (20; 1% instances), [he-pos/PRON]()-[he-pos/DET]() (19; 1% instances), [he-pos/PRON]()-[he-pos/CONJ]() (11; 1% instances), [he-pos/NUM]()-[he-pos/ADP]() (10; 1% instances), [he-pos/PRON]()-[he-pos/ADP]() (5; 0% instances), [he-pos/PROPN]()-[he-pos/DET]() (5; 0% instances), [he-pos/VERB]()-[he-pos/ADV]() (5; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (4; 0% instances), [he-pos/ADJ]()-[he-pos/ADV]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/DET]() (3; 0% instances), [he-pos/ADV]()-[he-pos/ADV]() (3; 0% instances), [he-pos/ADV]()-[he-pos/ADP]() (2; 0% instances), [he-pos/AUX]()-[he-pos/DET]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (2; 0% instances), [he-pos/PRON]()-[he-pos/ADJ]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/ADP]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/CONJ]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/ADP]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/NUM]() (1; 0% instances), [he-pos/PRON]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/SCONJ]()-[he-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	עד	_	ADP	ADP	_	2	case	_	_
2	סוף	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	6	nmod	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	שנה	_	NOUN	NOUN	Gender=Fem|Number=Sing	2	nmod:smixut	_	_
5	לא	_	ADV	ADV	Negative=Neg	6	neg	_	_
6	תועסק	_	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Fut	0	root	_	_
7	ב	_	ADP	ADP	_	9	case	_	_
8	ה_	_	DET	DET	PronType=Art	9	det:def	_	_
9	ארץ	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod	_	_
10	אף	_	DET	DET	Definite=Red	11	det	_	_
11	אחות	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nsubj	_	_
12	כ	_	ADP	ADP	_	13	case	_	_
13	עובדת	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod	_	_
14	זרה	_	ADJ	ADJ	Gender=Fem|Number=Sing	13	amod	_	_
15	"	_	PUNCT	PUNCT	_	6	punct	_	_
16	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	לא	_	ADV	ADV	Negative=Neg	2	advmod	_	_
2	נהרגו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
3	"	_	PUNCT	PUNCT	_	4	punct	_	_
4	נזירות	_	NOUN	NOUN	Gender=Fem|Number=Plur	2	nsubj	_	_
5	"	_	PUNCT	PUNCT	_	4	punct	_	_
6	,	_	PUNCT	PUNCT	_	4	punct	_	_
7	אלא	_	CONJ	CONJ	_	4	cc	_	_
8	נשים	_	NOUN	NOUN	Gender=Fem|Number=Plur	4	conj	_	_
9	ערביות	_	ADJ	ADJ	Gender=Fem|Number=Plur	8	amod	_	_
10	,	_	PUNCT	PUNCT	_	8	punct	_	_
11	כנראה	_	ADV	ADV	_	12	det	_	_
12	משרתות	_	NOUN	NOUN	Gender=Fem|Number=Plur	8	appos	_	_
13	ב	_	ADP	ADP	_	15	case	_	_
14	ה_	_	DET	DET	PronType=Art	15	det:def	_	_
15	מנזר	_	NOUN	NOUN	Gender=Masc|Number=Sing	12	nmod	_	_
16	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	למעלה	_	ADV	ADV	HebSource=ConvUncertainHead	3	dep	_	_
2	מ	_	ADP	ADP	_	3	det	_	_
3	חצי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	6	dep	_	_
4	שעה	_	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod:smixut	_	_
5	הם	_	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	ניסו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PIEL|Number=Plur|Person=3|Tense=Past	0	root	_	_
7	לעשות	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	6	xcomp	_	_
8	זאת	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	7	dobj	_	_
9	,	_	PUNCT	PUNCT	_	6	punct	_	_
10	אך	_	CONJ	CONJ	_	6	cc	_	_
11	ללא	_	ADP	ADP	_	12	case	_	_
12	הצלחה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	dep	_	_
13	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


