

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:smixut](), [nmod:tmod]().

4100 nodes (3%) are attached to their parents as `nmod:poss`.

4100 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83853658536585.

The following 28 pairs of parts of speech are connected with `nmod:poss`: [he-pos/NOUN]()-[he-pos/PRON]() (2685; 65% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (1003; 24% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (322; 8% instances), [he-pos/NOUN]()-[he-pos/ADV]() (12; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (9; 0% instances), [he-pos/NOUN]()-[he-pos/NUM]() (8; 0% instances), [he-pos/NOUN]()-[he-pos/VERB]() (8; 0% instances), [he-pos/PRON]()-[he-pos/PROPN]() (7; 0% instances), [he-pos/PROPN]()-[he-pos/PRON]() (7; 0% instances), [he-pos/PRON]()-[he-pos/NOUN]() (6; 0% instances), [he-pos/PROPN]()-[he-pos/PROPN]() (6; 0% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (3; 0% instances), [he-pos/NUM]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (2; 0% instances), [he-pos/X]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/PART]() (1; 0% instances), [he-pos/NUM]()-[he-pos/NUM]() (1; 0% instances), [he-pos/NUM]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/PRON]()-[he-pos/VERB]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/ADV]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/NUM]() (1; 0% instances), [he-pos/VERB]()-[he-pos/ADV]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PRON]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/X]()-[he-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:poss	color:blue
1	התבוננתי	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	ב	_	ADP	ADP	_	3	case	_	_
3	בן	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	1	iobj	_	_
4	שיחי	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod:smixut	_	_
5	אני_	_	PRON	PRON	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	_
6	ב	_	ADP	ADP	_	7	case	_	_
7	הפתעה	_	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod	_	_
8	ניכרת	_	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	_
9	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:poss	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:poss	color:blue
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


