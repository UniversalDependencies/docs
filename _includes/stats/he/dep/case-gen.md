

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [case]().
There are also 1 other language-specific subtypes of `case`: [case:acc]().

2335 nodes (1%) are attached to their parents as `case:gen`.

2328 instances of `case:gen` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3610278372591.

The following 10 pairs of parts of speech are connected with `case:gen`: [he-pos/NOUN]()-[he-pos/PART]() (1543; 66% instances), [he-pos/PROPN]()-[he-pos/PART]() (474; 20% instances), [he-pos/PRON]()-[he-pos/PART]() (241; 10% instances), [he-pos/ADV]()-[he-pos/PART]() (25; 1% instances), [he-pos/ADJ]()-[he-pos/PART]() (16; 1% instances), [he-pos/NUM]()-[he-pos/PART]() (16; 1% instances), [he-pos/VERB]()-[he-pos/PART]() (14; 1% instances), [he-pos/DET]()-[he-pos/PART]() (3; 0% instances), [he-pos/SCONJ]()-[he-pos/PART]() (2; 0% instances), [he-pos/ADP]()-[he-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case:gen	color:blue
1	כאן	_	ADV	ADV	_	3	advmod	_	_
2	אין	_	ADV	ADV	_	3	neg	_	_
3	אוהבים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	0	root	_	_
4	ביותר	_	ADV	ADV	_	3	advmod	_	_
5	את	_	PART	PART	Case=Acc	7	case:acc	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	רעיון	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	dobj	_	_
8	של	_	PART	PART	Case=Gen	9	case:gen	_	_
9	מלחמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	7	nmod:poss	_	_
10	ב	_	ADP	ADP	_	12	case	_	_
11	ה_	_	DET	DET	PronType=Art	12	det:def	_	_
12	מפרץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod	_	_
13	ה	_	DET	DET	PronType=Art	14	det:def	_	_
14	פרסי	_	ADJ	ADJ	Gender=Masc|Number=Sing	12	amod	_	_
15	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case:gen	color:blue
1	יציאתו	_	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
2	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
3	של	_	PART	PART	Case=Gen	4	case:gen	_	_
4	ליף	_	PROPN	PROPN	_	1	nmod:poss	_	_
5	גררה	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	בתוך	_	ADP	ADP	_	7	case	_	_
7	דקה	_	NOUN	NOUN	Gender=Fem|Number=Sing	5	nmod	_	_
8	את	_	PART	PART	Case=Acc	9	case:acc	_	_
9	צימצום	_	NOUN	NOUN	Definite=Red	5	dobj	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	תוצאה	_	NOUN	NOUN	Gender=Fem|Number=Sing	9	nmod:smixut	_	_
12	ל	_	ADP	ADP	_	14	case	_	_
13	-	_	PUNCT	PUNCT	_	14	punct	_	_
14	91	_	NUM	NUM	_	9	advmod	_	_
15	88	_	NUM	NUM	_	14	nummod	_	_
16	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 case:gen	color:blue
1	מאז	_	ADV	ADV	_	2	advmod	_	_
2	המשיך	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	ב	_	ADP	ADP	_	5	case	_	_
4	ה_	_	DET	DET	PronType=Art	5	det:def	_	_
5	מחקר	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	iobj	_	_
6	ו	_	CONJ	CONJ	_	2	cc	_	_
7	הגדיל	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	2	conj	_	_
8	את	_	PART	PART	Case=Acc	9	case:acc	_	_
9	מאגר	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	7	dobj	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	נתונים	_	NOUN	NOUN	Gender=Masc|Number=Plur	9	nmod:smixut	_	_
12	שלו	_	PART	PART	Case=Gen	13	case:gen	_	_
13	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	_
14	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


