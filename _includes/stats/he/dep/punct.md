

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

17418 nodes (11%) are attached to their parents as `punct`.

13312 instances of `punct` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.71075898495809.

The following 14 pairs of parts of speech are connected with `punct`: [he-pos/VERB]()-[he-pos/PUNCT]() (9067; 52% instances), [he-pos/NOUN]()-[he-pos/PUNCT]() (4872; 28% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (1242; 7% instances), [he-pos/ADJ]()-[he-pos/PUNCT]() (885; 5% instances), [he-pos/AUX]()-[he-pos/PUNCT]() (717; 4% instances), [he-pos/NUM]()-[he-pos/PUNCT]() (252; 1% instances), [he-pos/ADV]()-[he-pos/PUNCT]() (152; 1% instances), [he-pos/PRON]()-[he-pos/PUNCT]() (114; 1% instances), [he-pos/CONJ]()-[he-pos/PUNCT]() (70; 0% instances), [he-pos/X]()-[he-pos/PUNCT]() (15; 0% instances), [he-pos/PUNCT]()-[he-pos/PUNCT]() (13; 0% instances), [he-pos/DET]()-[he-pos/PUNCT]() (11; 0% instances), [he-pos/ADP]()-[he-pos/PUNCT]() (6; 0% instances), [he-pos/SCONJ]()-[he-pos/PUNCT]() (2; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 17 punct	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	מוח	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מתפלץ	_	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	לא	_	ADV	ADV	Negative=Neg	5	neg	_	_
5	רק	_	ADV	ADV	_	6	advmod	_	_
6	מ	_	ADP	ADP	_	8	case	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	תופעה	_	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	מבישה	_	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	אלא	_	CONJ	CONJ	_	8	cc	_	_
12	גם	_	ADV	ADV	_	13	advmod	_	_
13	מ	_	ADP	ADP	_	14	case	_	_
14	דרכי	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Plur	8	conj	_	_
15	ה	_	DET	DET	PronType=Art	16	det:def	_	_
16	הערמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	14	nmod:smixut	_	_
17	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
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


