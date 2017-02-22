

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

16073 nodes (11%) are attached to their parents as `punct`.

12282 instances of `punct` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.92142101661171.

The following 14 pairs of parts of speech are connected with `punct`: [he-pos/VERB]()-[he-pos/PUNCT]() (8436; 52% instances), [he-pos/NOUN]()-[he-pos/PUNCT]() (4396; 27% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (1174; 7% instances), [he-pos/ADJ]()-[he-pos/PUNCT]() (822; 5% instances), [he-pos/AUX]()-[he-pos/PUNCT]() (667; 4% instances), [he-pos/NUM]()-[he-pos/PUNCT]() (212; 1% instances), [he-pos/ADV]()-[he-pos/PUNCT]() (141; 1% instances), [he-pos/PRON]()-[he-pos/PUNCT]() (112; 1% instances), [he-pos/CCONJ]()-[he-pos/PUNCT]() (66; 0% instances), [he-pos/X]()-[he-pos/PUNCT]() (15; 0% instances), [he-pos/PUNCT]()-[he-pos/PUNCT]() (13; 0% instances), [he-pos/DET]()-[he-pos/PUNCT]() (11; 0% instances), [he-pos/ADP]()-[he-pos/PUNCT]() (6; 0% instances), [he-pos/SCONJ]()-[he-pos/PUNCT]() (2; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 17 punct	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	מוח	מוח	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מתפלץ	התפלץ	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	לא	לא	ADV	ADV	Polarity=Neg	5	advmod	_	_
5	רק	רק	ADV	ADV	_	6	advmod	_	_
6	מ	מ	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	PronType=Art	8	det:def	_	_
8	תופעה	תופעה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	מבישה	מביש	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	אלא	אלא	CCONJ	CCONJ	_	14	cc	_	_
12	גם	גם	ADV	ADV	_	13	advmod	_	_
13	מ	מ	ADP	ADP	_	14	case	_	_
14	דרכי	דרך	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	8	conj	_	_
15	ה	ה	DET	DET	PronType=Art	16	det:def	_	_
16	הערמה	הערמה	NOUN	NOUN	Gender=Fem|Number=Sing	14	compound:smixut	_	_
17	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	אכן	אכן	ADV	ADV	_	4	advmod	_	_
2	,	_	PUNCT	PUNCT	_	4	punct	_	_
3	כך	כך	ADV	ADV	_	4	advmod	_	_
4	עשתה	עשה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	חטיבת	חטיבה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	4	nsubj	_	_
6	"	_	PUNCT	PUNCT	_	7	punct	_	_
7	הראל	הראל	PROPN	PROPN	_	5	flat:name	_	_
8	"	_	PUNCT	PUNCT	_	7	punct	_	_
9	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


