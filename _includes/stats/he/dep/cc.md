

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

4946 nodes (3%) are attached to their parents as `cc`.

4628 instances of `cc` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.17711281843914.

The following 21 pairs of parts of speech are connected with `cc`: [he-pos/VERB]()-[he-pos/CONJ]() (1933; 39% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (1833; 37% instances), [he-pos/ADJ]()-[he-pos/CONJ]() (418; 8% instances), [he-pos/PROPN]()-[he-pos/CONJ]() (305; 6% instances), [he-pos/AUX]()-[he-pos/CONJ]() (104; 2% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (79; 2% instances), [he-pos/ADV]()-[he-pos/CONJ]() (66; 1% instances), [he-pos/NOUN]()-[he-pos/PUNCT]() (50; 1% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (37; 1% instances), [he-pos/NUM]()-[he-pos/CONJ]() (34; 1% instances), [he-pos/PRON]()-[he-pos/CONJ]() (32; 1% instances), [he-pos/CONJ]()-[he-pos/CONJ]() (24; 0% instances), [he-pos/AUX]()-[he-pos/PUNCT]() (9; 0% instances), [he-pos/ADJ]()-[he-pos/PUNCT]() (8; 0% instances), [he-pos/X]()-[he-pos/CONJ]() (5; 0% instances), [he-pos/ADP]()-[he-pos/CONJ]() (4; 0% instances), [he-pos/ADV]()-[he-pos/PUNCT]() (1; 0% instances), [he-pos/DET]()-[he-pos/CONJ]() (1; 0% instances), [he-pos/PRON]()-[he-pos/PUNCT]() (1; 0% instances), [he-pos/PUNCT]()-[he-pos/CONJ]() (1; 0% instances), [he-pos/VERB]()-[he-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	ו	_	CONJ	CONJ	_	5	cc	_	_
2	אכן	_	ADV	ADV	_	5	advmod	_	_
3	,	_	PUNCT	PUNCT	_	5	punct	_	_
4	כך	_	ADV	ADV	_	5	advmod	_	_
5	קרה	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	ב	_	ADP	ADP	_	8	case	_	_
7	ה_	_	DET	DET	PronType=Art	8	det:def	_	_
8	פריצה	_	NOUN	NOUN	Gender=Fem|Number=Sing	5	nmod	_	_
9	ל	_	ADP	ADP	_	11	case	_	_
10	ה_	_	DET	DET	PronType=Art	11	det:def	_	_
11	מנזר	_	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
12	ה	_	DET	DET	PronType=Art	13	det:def	_	_
13	חשוך	_	ADJ	ADJ	Gender=Masc|Number=Sing	11	amod	_	_
14	לחלוטין	_	ADV	ADV	_	13	advmod	_	_
15	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	אך	_	CONJ	CONJ	_	6	cc	_	_
2	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
3	לא	_	ADV	ADV	Negative=Neg	6	neg	_	_
4	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	6	aux	_	_
5	מספיק	_	ADV	ADV	_	6	advmod	_	_
6	טוב	_	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
7	ל	_	ADP	ADP	_	9	case	_	_
8	ה_	_	DET	DET	PronType=Art	9	det:def	_	_
9	קרן	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	advmod	_	_
10	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


