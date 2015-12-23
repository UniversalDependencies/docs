

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

8658 nodes (5%) are attached to their parents as `nmod:smixut`.

8658 instances of `nmod:smixut` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5019635019635.

The following 18 pairs of parts of speech are connected with `nmod:smixut`: [he-pos/NOUN]()-[he-pos/NOUN]() (7290; 84% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (898; 10% instances), [he-pos/NOUN]()-[he-pos/NUM]() (191; 2% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (84; 1% instances), [he-pos/VERB]()-[he-pos/NOUN]() (74; 1% instances), [he-pos/NOUN]()-[he-pos/VERB]() (52; 1% instances), [he-pos/NOUN]()-[he-pos/PRON]() (17; 0% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (11; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (10; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (8; 0% instances), [he-pos/X]()-[he-pos/NOUN]() (8; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (5; 0% instances), [he-pos/VERB]()-[he-pos/PROPN]() (4; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (2; 0% instances), [he-pos/ADP]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/DET]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/NUM]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/X]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:smixut	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:smixut	color:blue
1	זו	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	אחת	_	NUM	NUM	Definite=Red|Gender=Fem|Number=Sing	4	nummod	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	סיבות	_	NOUN	NOUN	Gender=Fem|Number=Plur	0	root	_	_
5	ל	_	ADP	ADP	_	6	case	_	_
6	כך	_	PRON	PRON	Person=3|PronType=Dem	4	nmod	_	_
7	ש	_	SCONJ	SCONJ	_	10	mark	_	_
8	מענקי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	10	nsubj	_	_
9	מקארתור	_	PROPN	PROPN	_	8	nmod:smixut	_	_
10	מבוקשים	_	ADJ	ADJ	Gender=Masc|Number=Plur	6	acl:relcl	_	_
11	כל	_	DET	DET	Definite=Red	10	advmod	_	_
12	כך	_	ADV	ADV	_	11	mwe	_	_
13	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:smixut	color:blue
1	איובה	_	PROPN	PROPN	_	2	nsubj	_	_
2	שילמה	_	VERB	VERB	Gender=Fem|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	את	_	PART	PART	Case=Acc	5	case:acc	_	_
4	ה	_	DET	DET	PronType=Art	5	det:def	_	_
5	מחיר	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	dobj	_	_
6	עד	_	ADP	ADP	_	7	case	_	_
7	אמצע	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	2	nmod	_	_
8	שנות	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Plur	7	nmod:smixut	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	80	_	NUM	NUM	_	8	nmod:smixut	_	_
11	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


