

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:def](), [det:quant]().

1594 nodes (1%) are attached to their parents as `det`.

1593 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47365119196989.

The following 35 pairs of parts of speech are connected with `det`: [he-pos/NOUN]()-[he-pos/DET]() (616; 39% instances), [he-pos/NOUN]()-[he-pos/ADV]() (373; 23% instances), [he-pos/NOUN]()-[he-pos/ADP]() (128; 8% instances), [he-pos/NOUN]()-[he-pos/PRON]() (107; 7% instances), [he-pos/NOUN]()-[he-pos/NUM]() (65; 4% instances), [he-pos/PRON]()-[he-pos/ADV]() (56; 4% instances), [he-pos/NUM]()-[he-pos/DET]() (31; 2% instances), [he-pos/PROPN]()-[he-pos/ADV]() (29; 2% instances), [he-pos/PRON]()-[he-pos/NUM]() (25; 2% instances), [he-pos/NUM]()-[he-pos/ADV]() (24; 2% instances), [he-pos/ADV]()-[he-pos/DET]() (22; 1% instances), [he-pos/VERB]()-[he-pos/DET]() (22; 1% instances), [he-pos/NOUN]()-[he-pos/CCONJ]() (18; 1% instances), [he-pos/PRON]()-[he-pos/DET]() (18; 1% instances), [he-pos/PRON]()-[he-pos/CCONJ]() (11; 1% instances), [he-pos/NUM]()-[he-pos/ADP]() (5; 0% instances), [he-pos/PRON]()-[he-pos/ADP]() (5; 0% instances), [he-pos/PROPN]()-[he-pos/DET]() (4; 0% instances), [he-pos/VERB]()-[he-pos/ADV]() (4; 0% instances), [he-pos/ADJ]()-[he-pos/ADV]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/DET]() (3; 0% instances), [he-pos/ADV]()-[he-pos/ADV]() (3; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (3; 0% instances), [he-pos/ADV]()-[he-pos/ADP]() (2; 0% instances), [he-pos/AUX]()-[he-pos/DET]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (2; 0% instances), [he-pos/PRON]()-[he-pos/ADJ]() (2; 0% instances), [he-pos/PRON]()-[he-pos/VERB]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/ADP]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/CCONJ]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/ADP]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/NUM]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PRON]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/SCONJ]()-[he-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	עד	עד	ADP	ADP	_	2	case	_	_
2	סוף	סוף	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	6	obl	_	_
3	ה	ה	DET	DET	PronType=Art	4	det:def	_	_
4	שנה	שנה	NOUN	NOUN	Gender=Fem|Number=Sing	2	compound:smixut	_	_
5	לא	לא	ADV	ADV	Polarity=Neg	6	advmod	_	_
6	תועסק	הועסק	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Fut|Voice=Pass	0	root	_	_
7	ב	ב	ADP	ADP	_	9	case	_	_
8	ה_	ה	DET	DET	PronType=Art	9	det:def	_	_
9	ארץ	ארץ	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
10	אף	אף	DET	DET	Definite=Cons	11	det	_	_
11	אחות	אח	NOUN	NOUN	Gender=Fem|Number=Sing	6	nsubj	_	_
12	כ	כ	ADP	ADP	_	13	case	_	_
13	עובדת	עובד	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
14	זרה	זר	ADJ	ADJ	Gender=Fem|Number=Sing	13	amod	_	_
15	"	_	PUNCT	PUNCT	_	6	punct	_	_
16	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	לא	לא	ADV	ADV	Polarity=Neg	2	advmod	_	_
2	נהרגו	נהרג	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past|Voice=Mid	0	root	_	_
3	"	_	PUNCT	PUNCT	_	4	punct	_	_
4	נזירות	נזירה	NOUN	NOUN	Gender=Fem|Number=Plur	2	nsubj	_	_
5	"	_	PUNCT	PUNCT	_	4	punct	_	_
6	,	_	PUNCT	PUNCT	_	4	punct	_	_
7	אלא	אלא	CCONJ	CCONJ	_	8	cc	_	_
8	נשים	איש	NOUN	NOUN	Gender=Fem|Number=Plur	4	conj	_	_
9	ערביות	ערבי	ADJ	ADJ	Gender=Fem|Number=Plur	8	amod	_	_
10	,	_	PUNCT	PUNCT	_	8	punct	_	_
11	כנראה	כנראה	ADV	ADV	_	12	det	_	_
12	משרתות	משרת	NOUN	NOUN	Gender=Fem|Number=Plur	8	appos	_	_
13	ב	ב	ADP	ADP	_	15	case	_	_
14	ה_	ה	DET	DET	PronType=Art	15	det:def	_	_
15	מנזר	מנזר	NOUN	NOUN	Gender=Masc|Number=Sing	12	nmod	_	_
16	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	למעלה	למעלה	ADV	ADV	HebSource=ConvUncertainHead	3	dep	_	_
2	מ	מ	ADP	ADP	_	3	det	_	_
3	חצי	חץ	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	6	dep	_	_
4	שעה	שעה	NOUN	NOUN	Gender=Fem|Number=Sing	3	compound:smixut	_	_
5	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	ניסו	ניסה	VERB	VERB	Gender=Fem,Masc|HebBinyan=PIEL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
7	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	6	xcomp	_	_
8	זאת	זאת	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
9	,	_	PUNCT	PUNCT	_	6	punct	_	_
10	אך	אך	CCONJ	CCONJ	_	6	cc	_	_
11	ללא	ללא	ADP	ADP	_	12	case	_	_
12	הצלחה	הצלחה	NOUN	NOUN	Gender=Fem|Number=Sing	6	dep	_	_
13	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


