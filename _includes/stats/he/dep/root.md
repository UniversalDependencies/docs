

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

6216 nodes (4%) are attached to their parents as `root`.

6216 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.89124839124839.

The following 12 pairs of parts of speech are connected with `root`: [he-pos/ROOT]()-[he-pos/VERB]() (4736; 76% instances), [he-pos/ROOT]()-[he-pos/NOUN]() (608; 10% instances), [he-pos/ROOT]()-[he-pos/AUX]() (360; 6% instances), [he-pos/ROOT]()-[he-pos/ADJ]() (263; 4% instances), [he-pos/ROOT]()-[he-pos/PROPN]() (108; 2% instances), [he-pos/ROOT]()-[he-pos/ADV]() (66; 1% instances), [he-pos/ROOT]()-[he-pos/PRON]() (34; 1% instances), [he-pos/ROOT]()-[he-pos/CONJ]() (16; 0% instances), [he-pos/ROOT]()-[he-pos/NUM]() (9; 0% instances), [he-pos/ROOT]()-[he-pos/PUNCT]() (6; 0% instances), [he-pos/ROOT]()-[he-pos/X]() (6; 0% instances), [he-pos/ROOT]()-[he-pos/DET]() (4; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 17 root	color:blue
1	מורשת	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Sing	17	nsubj	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	קרב	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod:smixut	_	_
4	ש	_	SCONJ	SCONJ	_	6	mark	_	_
5	צה"ל	_	PROPN	PROPN	_	6	nsubj	_	_
6	אימץ	_	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	_
7	כ	_	ADP	ADP	_	8	case	_	_
8	תוצאה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod	_	_
9	מ	_	ADP	ADP	_	11	case	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	קרב	_	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
12	על	_	ADP	ADP	_	13	case	_	_
13	מנזר	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	11	nmod	_	_
14	סן	_	PROPN	PROPN	_	13	nmod:smixut	_	_
15	סימון	_	PROPN	PROPN	_	14	name	_	_
16	איננה	_	VERB	VERB	Gender=Fem|Negative=Neg|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	17	advmod	_	_
17	מיתוס	_	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
18	.	_	PUNCT	PUNCT	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	שם	_	ADV	ADV	_	3	advmod	_	_
2	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	3	aux	_	_
3	אמור	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	להיפגש	_	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf	3	xcomp	_	_
5	עם	_	ADP	ADP	_	6	case	_	_
6	אשתו	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	nmod	_	_
7	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
8	,	_	PUNCT	PUNCT	_	6	punct	_	_
9	ש	_	SCONJ	SCONJ	_	10	mark	_	_
10	עשתה	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	ב	_	ADP	ADP	_	12	case	_	_
12	בוסטון	_	PROPN	PROPN	_	10	nmod	_	_
13	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


