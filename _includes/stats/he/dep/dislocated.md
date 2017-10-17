

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

15 nodes (0%) are attached to their parents as `dislocated`.

15 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.8.

The following 9 pairs of parts of speech are connected with `dislocated`: [he-pos/VERB]()-[he-pos/NOUN]() (6; 40% instances), [he-pos/AUX]()-[he-pos/NOUN]() (2; 13% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 7% instances), [he-pos/ADV]()-[he-pos/ADV]() (1; 7% instances), [he-pos/ADV]()-[he-pos/NOUN]() (1; 7% instances), [he-pos/AUX]()-[he-pos/PRON]() (1; 7% instances), [he-pos/AUX]()-[he-pos/VERB]() (1; 7% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (1; 7% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	איך	איך	ADV	ADV	PronType=Int	2	advmod	_	_
2	ייתכן	ייתכן	AUX	AUX	VerbType=Mod	0	root	_	_
3	ש	ש	SCONJ	SCONJ	_	8	mark	_	_
4	מוצר	מוצר	NOUN	NOUN	Gender=Masc|Number=Sing	8	dislocated	_	_
5	ה	ה	SCONJ	SCONJ	_	6	mark	_	_
6	מכיל	הכיל	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	4	acl:relcl	_	_
7	ביצים	ביצה	NOUN	NOUN	Gender=Fem|Number=Plur	6	obj	_	_
8	אין	אין	VERB	VERB	HebExistential=True	2	advcl	_	_
9	בו	ב	ADP	ADP	_	10	case	_	_
10	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
11	כולסטרול	כולסטרול	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	_
12	?	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dislocated	color:blue
1	אינג	אינג	PROPN	PROPN	_	3	nsubj	_	_
2	הרצברג	הרצברג	PROPN	PROPN	_	1	flat:name	_	_
3	מדגישה	הדגיש	VERB	VERB	Gender=Fem|HebBinyan=HIFIL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
4	,	_	PUNCT	PUNCT	_	3	punct	_	_
5	כי	כי	SCONJ	SCONJ	_	8	mark	_	_
6	דלת	דלת	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	8	dislocated	_	_
7	מטבח	מטבח	NOUN	NOUN	Gender=Masc|Number=Sing	6	compound:smixut	_	_
8	חשוב	חשוב	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	3	ccomp	_	_
9	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
10	תהיה	היה	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbType=Cop	11	aux	_	_
11	קלה	קל	ADJ	ADJ	Gender=Fem|Number=Sing	8	advcl	_	_
12	ו	ו	CCONJ	CCONJ	_	13	cc	_	_
13	חזקה	חזק	ADJ	ADJ	Gender=Fem|Number=Sing	11	conj	_	_
14	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 30 dislocated	color:blue
1	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	4	aux	_	_
2	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
3	בלתי	בלתי	ADV	ADV	Prefix=Yes	4	advmod	_	_
4	נמנע	נמנע	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Mid	0	root	_	_
5	ש	ש	SCONJ	SCONJ	_	13	mark	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	פני	פנים	NOUN	NOUN	Definite=Cons|Gender=Fem,Masc|Number=Plur	13	obl	_	_
8	חלק	חלק	NOUN	NOUN	Gender=Masc|Number=Sing	7	compound:smixut	_	_
9	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	amod	_	_
10	של	של	PART	PART	Case=Gen	12	case:gen	_	_
11	ה	ה	DET	DET	PronType=Art	12	det:def	_	_
12	ציבור	ציבור	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
13	תעמוד	עמד	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Fut|Voice=Act	4	acl	_	_
14	ברירה	ברירה	NOUN	NOUN	Gender=Fem|Number=Sing	13	nsubj	_	_
15	אכזרית	אכזרי	ADJ	ADJ	Gender=Fem|Number=Sing	14	amod	_	_
16	,	_	PUNCT	PUNCT	_	14	punct	_	_
17	ה	ה	SCONJ	SCONJ	_	18	mark	_	_
18	מוצאת	מצא	VERB	VERB	Gender=Fem|Number=Sing|Person=1,2,3|VerbForm=Part	14	acl:relcl	_	_
19	יום	יום	NOUN	NOUN	Gender=Masc|Number=Sing	18	dep	_	_
20	-	_	PUNCT	PUNCT	_	19	punct	_	_
21	יום	יום	NOUN	NOUN	Gender=Masc|Number=Sing	19	nmod	_	_
22	את	את	PART	PART	Case=Acc	23	case:acc	_	_
23	חיזוק_	חיזוק	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	18	obj	_	_
24	_של_	של	ADP	ADP	_	25	case:gen	_	_
25	_היא	הוא	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	23	nmod:poss	_	_
26	ב	ב	ADP	ADP	_	28	case	_	_
27	ה_	ה	DET	DET	PronType=Art	28	det:def	_	_
28	מציאות	מציאות	NOUN	NOUN	Gender=Fem|Number=Sing	18	obl	_	_
29	:	_	PUNCT	PUNCT	_	4	punct	_	_
30	המשך_	המשך	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	41	dislocated	_	_
31	_של_	של	ADP	ADP	_	32	case:gen	_	_
32	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	30	nmod:poss	_	_
33	של	של	PART	PART	Case=Gen	35	case:gen	_	_
34	ה	ה	DET	DET	PronType=Art	35	det:def	_	_
35	מצב	מצב	NOUN	NOUN	Gender=Masc|Number=Sing	30	nmod:poss	_	_
36	ה	ה	DET	DET	PronType=Art	37	det:def	_	_
37	קיים	קיים	ADJ	ADJ	Gender=Masc|Number=Sing	35	amod	_	_
38	משמע_	משמע	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	41	nsubj	_	_
39	_של_	של	ADP	ADP	_	40	case:gen	_	_
40	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	38	nmod:poss	_	_
41	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	4	conj:discourse	_	_
42	יום	יום	NOUN	NOUN	Gender=Masc|Number=Sing	41	amod	_	_
43	-	_	PUNCT	PUNCT	_	42	punct	_	_
44	יומית	יומי	ADJ	ADJ	Gender=Fem|Number=Sing	42	dep	_	_
45	ב	ב	ADP	ADP	_	47	case	_	_
46	כל	כול	DET	DET	Definite=Cons	47	det	_	_
47	חצר	חצר	NOUN	NOUN	Gender=Fem|Number=Sing	41	nmod	_	_
48	,	_	PUNCT	PUNCT	_	41	punct	_	_
49	ב	ב	ADP	ADP	_	51	case	_	_
50	כל	כול	DET	DET	Definite=Cons	51	det	_	_
51	סופרמרקט	סופרמרקט	NOUN	NOUN	Gender=Masc|Number=Sing	41	nmod	_	_
52	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


