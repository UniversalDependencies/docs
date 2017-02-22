

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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 dislocated	color:blue
1	"	_	PUNCT	PUNCT	_	11	punct	_	_
2	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	11	dislocated	_	_
3	ש	ש	SCONJ	SCONJ	_	6	mark	_	_
4	מכבי	מכבי	PROPN	PROPN	_	6	nsubj	_	_
5	כבר	כבר	ADV	ADV	_	6	advmod	_	_
6	נוצח	נוצח	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	2	acl:relcl	_	_
7	ב	ב	ADP	ADP	_	9	case	_	_
8	שני	שניים	NUM	NUM	Definite=Cons|Gender=Masc|Number=Plur	9	nummod	_	_
9	משחקים	משחק	NOUN	NOUN	Gender=Masc|Number=Plur	6	obl	_	_
10	,	_	PUNCT	PUNCT	_	11	punct	_	_
11	אין	אין	AUX	AUX	VerbType=Mod	35	ccomp	_	_
12	בו	ב	ADP	ADP	_	13	case	_	_
13	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obl	_	_
14	לטשטש	טשטש	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	11	xcomp	_	_
15	את	את	PART	PART	Case=Acc	17	case:acc	_	_
16	ה	ה	DET	DET	PronType=Art	17	det:def	_	_
17	עובדה	עובדה	NOUN	NOUN	Gender=Fem|Number=Sing	14	obj	_	_
18	ש	ש	SCONJ	SCONJ	_	24	mark	_	_
19	ה	ה	DET	DET	PronType=Art	20	det:def	_	_
20	פועל	פועל	NOUN	NOUN	Gender=Masc|Number=Sing	24	nsubj	_	_
21	ירושלים	ירושלים	PROPN	PROPN	_	20	flat:name	_	_
22	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	24	aux	_	_
23	ה	ה	DET	DET	PronType=Art	24	det:def	_	_
24	בולט	בולט	ADJ	ADJ	Gender=Masc|Number=Sing	17	acl:relcl	_	_
25	ב	ב	ADP	ADP	_	27	case	_	_
26	ה_	ה	DET	DET	PronType=Art	27	det:def	_	_
27	ליגה	ליגה	NOUN	NOUN	Gender=Fem|Number=Sing	24	advmod	_	_
28	ו	ו	CCONJ	CCONJ	_	32	cc	_	_
29	מקום_	מקום	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	32	nsubj	_	_
30	_של_	של	ADP	ADP	_	31	case:gen	_	_
31	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	29	nmod:poss	_	_
32	מוצדק	הוצדק	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Pass	24	conj	_	_
33	"	_	PUNCT	PUNCT	_	11	punct	_	_
34	,	_	PUNCT	PUNCT	_	35	punct	_	_
35	אומר	אמר	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
36	שרף	שרף	NOUN	NOUN	Gender=Masc|Number=Sing	35	nsubj	_	_
37	.	_	PUNCT	PUNCT	_	35	punct	_	_

~~~


