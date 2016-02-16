

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

1032 nodes (1%) are attached to their parents as `neg`.

1019 instances of `neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25387596899225.

The following 12 pairs of parts of speech are connected with `neg`: [he-pos/VERB]()-[he-pos/ADV]() (587; 57% instances), [he-pos/VERB]()-[he-pos/VERB]() (151; 15% instances), [he-pos/AUX]()-[he-pos/ADV]() (67; 6% instances), [he-pos/AUX]()-[he-pos/VERB]() (42; 4% instances), [he-pos/ADJ]()-[he-pos/VERB]() (38; 4% instances), [he-pos/ADV]()-[he-pos/ADV]() (38; 4% instances), [he-pos/NOUN]()-[he-pos/ADV]() (34; 3% instances), [he-pos/NOUN]()-[he-pos/VERB]() (34; 3% instances), [he-pos/ADJ]()-[he-pos/ADV]() (33; 3% instances), [he-pos/PRON]()-[he-pos/ADV]() (4; 0% instances), [he-pos/PRON]()-[he-pos/VERB]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/ADV]() (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	קולק	_	PROPN	PROPN	_	3	nsubj	_	_
2	אינו	_	VERB	VERB	Gender=Masc|Negative=Neg|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	3	neg	_	_
3	נראה	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	כ	_	ADP	ADP	_	5	case	_	_
5	מי	_	ADV	ADV	PronType=Int	3	nmod	_	_
6	ש	_	SCONJ	SCONJ	_	7	mark	_	_
7	נקלע	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past	5	acl:relcl	_	_
8	ל	_	ADP	ADP	_	10	case	_	_
9	ה_	_	DET	DET	PronType=Art	10	det:def	_	_
10	מחנה	_	NOUN	NOUN	Gender=Masc|Number=Sing	7	iobj	_	_
11	ה	_	DET	DET	PronType=Art	12	det:def	_	_
12	שלישי	_	NUM	NUM	Gender=Masc|Number=Sing	10	amod	_	_
13	במקרה	_	ADV	ADV	_	7	advmod	_	_
14	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	מילר	_	PROPN	PROPN	_	3	nsubj	_	_
2	לא	_	ADV	ADV	Negative=Neg	3	neg	_	_
3	יכול	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part|VerbType=Mod	0	root	_	_
4	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	3	aux	_	_
5	להבטיח	_	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf	3	xcomp	_	_
6	זאת	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	5	dobj	_	_
7	ב	_	ADP	ADP	_	8	case	_	_
8	מצפון	_	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod	_	_
9	נקי	_	ADJ	ADJ	Gender=Masc|Number=Sing	8	amod	_	_
10	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


