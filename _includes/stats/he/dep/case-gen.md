

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [case]().
There are also 1 other language-specific subtypes of `case`: [case:acc]().

4511 nodes (3%) are attached to their parents as `case:gen`.

4504 instances of `case:gen` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17202394147639.

The following 12 pairs of parts of speech are connected with `case:gen`: [he-pos/PRON]()-[he-pos/ADP]() (2556; 57% instances), [he-pos/NOUN]()-[he-pos/PART]() (1420; 31% instances), [he-pos/PROPN]()-[he-pos/PART]() (431; 10% instances), [he-pos/PRON]()-[he-pos/PART]() (29; 1% instances), [he-pos/ADV]()-[he-pos/PART]() (24; 1% instances), [he-pos/NUM]()-[he-pos/PART]() (16; 0% instances), [he-pos/ADJ]()-[he-pos/PART]() (14; 0% instances), [he-pos/VERB]()-[he-pos/PART]() (14; 0% instances), [he-pos/DET]()-[he-pos/PART]() (3; 0% instances), [he-pos/SCONJ]()-[he-pos/PART]() (2; 0% instances), [he-pos/ADP]()-[he-pos/PART]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case:gen	color:blue
1	התבוננתי	התבונן	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	ב	ב	ADP	ADP	_	3	case	_	_
3	בן	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	iobj	_	_
4	שיח_	שיח	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	3	compound:smixut	_	_
5	_של_	של	ADP	ADP	_	6	case:gen	_	_
6	_אני	הוא	PRON	PRON	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	_
7	ב	ב	ADP	ADP	_	8	case	_	_
8	הפתעה	הפתעה	NOUN	NOUN	Gender=Fem|Number=Sing	1	obl	_	_
9	ניכרת	ניכר	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
10	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case:gen	color:blue
1	כאן	כאן	ADV	ADV	_	3	advmod	_	_
2	אין	_	ADV	ADV	Polarity=Neg	3	advmod	_	_
3	אוהבים	אהב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
4	ביותר	ביותר	ADV	ADV	_	3	advmod	_	_
5	את	את	PART	PART	Case=Acc	7	case:acc	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	רעיון	רעיון	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
8	של	של	PART	PART	Case=Gen	9	case:gen	_	_
9	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	7	nmod:poss	_	_
10	ב	ב	ADP	ADP	_	12	case	_	_
11	ה_	ה	DET	DET	PronType=Art	12	det:def	_	_
12	מפרץ	מפרץ	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod	_	_
13	ה	ה	DET	DET	PronType=Art	14	det:def	_	_
14	פרסי	פרסי	ADJ	ADJ	Gender=Masc|Number=Sing	12	amod	_	_
15	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case:gen	color:blue
1	אתמול	אתמול	ADV	ADV	_	2	obl:tmod	_	_
2	הושלכו	הושלך	VERB	VERB	Gender=Fem,Masc|HebBinyan=HUFAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	0	root	_	_
3	ששה	שישה	NUM	NUM	Gender=Masc|Number=Sing	4	nummod	_	_
4	בקבוקי	בקבוק	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	2	nsubj	_	_
5	תבערה	תבערה	NOUN	NOUN	Gender=Fem|Number=Sing	4	compound:smixut	_	_
6	על	על	ADP	ADP	_	7	case	_	_
7	סיורים	סיור	NOUN	NOUN	Gender=Masc|Number=Plur	2	iobj	_	_
8	של	של	PART	PART	Case=Gen	9	case:gen	_	_
9	צה"ל	צה"ל	PROPN	PROPN	Abbr=Yes	7	nmod	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	רפיח	רפיח	PROPN	PROPN	_	7	nmod	_	_
12	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


