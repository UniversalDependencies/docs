

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [case]().
There are also 1 other language-specific subtypes of `case`: [case:gen]().

1957 nodes (1%) are attached to their parents as `case:acc`.

1957 instances of `case:acc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45068983137455.

The following 9 pairs of parts of speech are connected with `case:acc`: [he-pos/NOUN]()-[he-pos/PART]() (1440; 74% instances), [he-pos/PRON]()-[he-pos/PART]() (300; 15% instances), [he-pos/PROPN]()-[he-pos/PART]() (172; 9% instances), [he-pos/VERB]()-[he-pos/PART]() (23; 1% instances), [he-pos/ADV]()-[he-pos/PART]() (11; 1% instances), [he-pos/ADJ]()-[he-pos/PART]() (4; 0% instances), [he-pos/NUM]()-[he-pos/PART]() (4; 0% instances), [he-pos/DET]()-[he-pos/PART]() (2; 0% instances), [he-pos/ADP]()-[he-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case:acc	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case:acc	color:blue
1	בית	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	5	nsubj	_	_
2	משפט	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod:smixut	_	_
3	ב	_	ADP	ADP	_	4	case	_	_
4	ליון	_	PROPN	PROPN	_	1	nmod	_	_
5	דן	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	אותו	_	PART	PART	Case=Acc	7	case:acc	_	_
7	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
8	ל	_	ADP	ADP	_	10	case	_	_
9	ה_	_	DET	DET	PronType=Art	10	det:def	_	_
10	מוות	_	NOUN	NOUN	Gender=Masc|Number=Sing	5	iobj	_	_
11	שלא	_	ADV	ADV	_	12	advmod	_	_
12	ב	_	ADP	ADP	_	13	case	_	_
13	פניו	_	NOUN	NOUN	Gender=Fem,Masc|Number=Plur	5	nmod	_	_
14	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
15	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case:acc	color:blue
1	קחו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Mood=Imp|Number=Plur|Person=2	0	root	_	_
2	למשל	_	CONJ	CONJ	_	1	advmod	_	_
3	את	_	PART	PART	Case=Acc	4	case:acc	_	_
4	מריה	_	PROPN	PROPN	_	1	dobj	_	_
5	ואראלה	_	PROPN	PROPN	_	4	name	_	_
6	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


