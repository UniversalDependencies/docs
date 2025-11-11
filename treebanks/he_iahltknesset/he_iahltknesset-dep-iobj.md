---
layout: base
title:  'Statistics of iobj in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `iobj`

This relation is universal.

7 nodes (0%) are attached to their parents as `iobj`.

7 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85714285714286.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (6; 86% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	אתה	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	לא	לא	ADV	ADV	Polarity=Neg	4	advmod	_	_
3	יכול	יכל	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|VerbForm=Part|VerbType=Mod	4	aux	_	_
4	לשאול	שאל	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	_
5	אות	את	ADP	ADP	Case=Acc	6	case	_	_
6	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
7	עכשיו	עכשיו	ADV	ADV	_	4	advmod	_	_
8	שאלה	שאלה	NOUN	NOUN	Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	אני	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	רוצה	רצה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
3	לשאול	שאל	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	את	את	ADP	ADP	Case=Acc	5	case	_	_
5	מפקד	מפקד	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	3	iobj	_	Entity=(TTL
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	מרחב	מרחב	NOUN	NOUN	Gender=Masc|Number=Sing	5	compound	_	Entity=TTL)
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	אני	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	מבקש	ביקש	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	2	parataxis	_	_
11	לדעת	ידע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	10	xcomp	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	ידוע	ידע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	2	parataxis	_	_
14	ל	ל	ADP	ADP	_	15	case	_	_
15	י	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	13	obl	_	_
16	,	,	PUNCT	PUNCT	_	13	punct	_	_
17	אולי	אולי	ADV	ADV	_	19	advmod	_	_
18	אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	19	nsubj	_	_
19	טועה	טעה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	13	parataxis	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	26	punct	_	_
21	ש	ש	SCONJ	SCONJ	_	26	mark	_	_
22	ב	ב	ADP	ADP	Definite=Def|PronType=Art	23	case	_	_
23	שנתיים	שנה	NOUN	NOUN	Gender=Fem|Number=Dual	26	obl	_	_
24	ה	ה	DET	DET	Definite=Def|PronType=Art	25	det	_	_
25	אחרונות	אחרון	ADJ	ADJ	Gender=Fem|Number=Plur	23	amod	_	_
26	היו	היה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	13	csubj:pass	_	_
27	פה	פה	ADV	ADV	_	26	advmod	_	_
28	23	23	NUM	NUM	_	29	nummod	_	_
29	מקרי	מקרה	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	26	nsubj	_	_
30	רצח	רצח	NOUN	NOUN	Gender=Masc|Number=Sing	29	compound	_	SpaceAfter=No
31	,	,	PUNCT	PUNCT	_	32	punct	_	_
32	כמה	כמה	DET	DET	PronType=Rel	35	nsubj:pass	_	_
33	מתוכ	מתוך	NOUN	NOUN	Gender=Fem|Number=Sing	34	case	_	_
34	ם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	32	nmod	_	_
35	פוענחו	פוענח	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past|Voice=Mid,Pass	3	ccomp	_	SpaceAfter=No
36	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


