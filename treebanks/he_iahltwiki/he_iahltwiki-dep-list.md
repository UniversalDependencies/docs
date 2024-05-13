---
layout: base
title:  'Statistics of list in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `list`

This relation is universal.

15 nodes (0%) are attached to their parents as `list`.

15 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.8.

The following 5 pairs of parts of speech are connected with `list`: <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (10; 67% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 list	color:blue
1	"	"	PUNCT	PUNCT	_	4	punct	_	_
2	(	(	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
3	ב	ב	ADP	ADP	_	4	case	_	_
4	ראשית	ראשית	PROPN	PROPN	_	0	root	_	_
5	נז	נז	NUM	NUM	_	4	list	_	SpaceAfter=No
6	)	)	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 34 list	color:blue
1	ייתכן	ייתכן	VERB	VERB	VerbType=Mod	0	root	_	_
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	יש	יש	VERB	VERB	_	1	csubj	_	_
4	לראות	ראה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	3	csubj	_	_
5	ב	ב	ADP	ADP	_	6	case	_	_
6	כך	כך	PRON	PRON	PronType=Dem	4	obl	_	_
7	סמל	סמל	NOUN	NOUN	Gender=Masc|Number=Sing	4	obj	_	_
8	ל	ל	ADP	ADP	_	10	case	_	SpaceAfter=No
9	'	'	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
10	מלכות	מלכות	PROPN	PROPN	Definite=Cons	7	nmod	_	_
11	ה	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	שמים	שמיים	PROPN	PROPN	_	10	compound	_	_
13	'	'	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	19	punct	_	_
15	ש	ש	SCONJ	SCONJ	_	19	mark	_	_
16	את	את	ADP	ADP	Case=Acc	17	case	_	_
17	מפתחותי	מפתח	NOUN	NOUN	Gender=Masc|Number=Plur	19	obj	_	_
18	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	nmod:poss	_	_
19	העניק	העניק	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past|Voice=Act	7	acl:relcl	_	_
20	ישו	ישו	PROPN	PROPN	_	19	nsubj	_	_
21	ל	ל	ADP	ADP	_	22	case	_	_
22	פטרוס	פטרוס	PROPN	PROPN	_	19	obl	_	_
23	לפני	לפני	ADP	ADP	_	24	case	_	_
24	מות	מוות	NOUN	NOUN	Gender=Masc|Number=Sing	19	obl	_	_
25	ו	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	24	nmod:poss	_	_
26	(	(	PUNCT	PUNCT	_	28	punct	_	SpaceAfter=No
27	ה	ה	DET	DET	Definite=Def|PronType=Art	28	det	_	_
28	בשורה	בשורה	PROPN	PROPN	_	19	parataxis	_	_
29	על	על	ADP	ADP	_	32	case	_	SpaceAfter=No
30	-	-	PUNCT	PUNCT	_	31	punct	_	SpaceAfter=No
31	פי	פה	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	29	fixed	_	_
32	מתי	מתי	PROPN	PROPN	_	28	nmod	_	SpaceAfter=No
33	,	,	PUNCT	PUNCT	_	34	punct	_	_
34	פרק	פרק	NOUN	NOUN	Gender=Masc|Number=Sing	28	list	_	_
35	ט"ז	ט"ז	NUM	NUM	_	34	dep	_	Comment=nmod:desc|SpaceAfter=No
36	)	)	PUNCT	PUNCT	_	28	punct	_	SpaceAfter=No
37	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 list	color:blue
1	עורך	עורך	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PUNCT	_	3	punct	_	_
3	מיכאל	מיכאל	PROPN	PROPN	_	1	parataxis	_	_
4	תפוח	תפוח	PROPN	PROPN	_	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	תל	תל	PROPN	PROPN	_	1	list	_	_
7	אביב	אביב	PROPN	PROPN	_	6	compound	_	SpaceAfter=No
8	:	:	PUNCT	PUNCT	_	9	punct	_	_
9	הוצאת	הוצאה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	6	parataxis	_	_
10	כנרת	כנרת	PROPN	PROPN	_	9	compound	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	12	punct	_	_
12	1981	1981	NUM	NUM	_	9	parataxis	_	_

~~~


