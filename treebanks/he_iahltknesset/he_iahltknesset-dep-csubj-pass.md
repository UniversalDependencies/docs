---
layout: base
title:  'Statistics of csubj:pass in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="he_iahltknesset-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="he_iahltknesset-dep-csubj-outer.html">csubj:outer</a></tt>.

15 nodes (0%) are attached to their parents as `csubj:pass`.

15 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.26666666666667.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (13; 87% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 csubj:pass	color:blue
1	עד	עד	ADP	ADP	_	2	case	_	_
2	היום	היום	ADV	ADV	_	8	advmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	יום	יום	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	2	appos	_	Entity=(TIMEX
5	שני	שני	PROPN	PROPN	_	4	compound	_	Entity=TIMEX)|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	_
7	לא	לא	ADV	ADV	Polarity=Neg	8	advmod	_	_
8	דֻווח	דֻווח	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
9	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
10	נמצאו	נמצא	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past|Voice=Mid	8	csubj:pass	_	_
11	חשודים	חשוד	NOUN	NOUN	Gender=Masc|Number=Plur	10	nsubj	_	_
12	או	או	CCONJ	CCONJ	_	13	cc	_	_
13	הוגשו	הוגש	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	10	conj	_	_
14	כתבי	כתב	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	13	nsubj:pass	_	_
15	אישום	אישום	NOUN	NOUN	Gender=Masc|Number=Sing	14	compound	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 32 csubj:pass	color:blue
1	אדונ	אדון	NOUN	NOUN	Gender=Masc|Number=Sing	8	vocative	_	_
2	י	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	1	nmod:poss	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	יושב	יושב	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	appos	_	_
5	-	-	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
6	ראש	ראש	NOUN	NOUN	Gender=Masc|Number=Sing	4	compound	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	8	punct	_	_
8	יש	יש	VERB	VERB	Polarity=Pos	0	root	_	_
9	כמה	כמה	DET	DET	Definite=Cons	10	det	_	_
10	חברי	חבר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	8	nsubj	_	_
11	כנסת	כנסת	PROPN	PROPN	_	10	compound	_	Entity=(ORG)
12	ש	ש	SCONJ	SCONJ	_	13	mark	_	_
13	עשו	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	10	acl:relcl	_	_
14	ל	ל	ADP	ADP	_	15	case	_	_
15	עצמם	עצמו	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	13	obl	_	_
16	מנהג	מנהג	NOUN	NOUN	Gender=Masc|Number=Sing	13	obj	_	_
17	לרכוב	רכב	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	16	acl	_	_
18	על	על	ADP	ADP	_	19	case	_	_
19	גב	גב	NOUN	NOUN	Gender=Masc|Number=Sing	17	obl	_	_
20	ם	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	19	nmod:poss	_	_
21	של	של	ADP	ADP	Case=Gen	22	case	_	_
22	חברי	חבר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	19	nmod:poss	_	_
23	ה	ה	DET	DET	Definite=Def|PronType=Art	24	det	_	Entity=(ORG
24	כנסת	כנסת	PROPN	PROPN	_	22	compound	_	Entity=ORG)
25	ה	ה	DET	DET	Definite=Def|PronType=Art	26	det	_	_
26	ערבים	ערבי	ADJ	ADJ	Gender=Masc|Number=Plur	22	amod	_	_
27	,	,	PUNCT	PUNCT	_	29	punct	_	_
28	כי	כי	SCONJ	SCONJ	_	29	mark	_	_
29	הוכח	הוכח	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	13	advcl	_	_
30	ש	ש	SCONJ	SCONJ	_	32	mark	_	_
31	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	32	nsubj	_	_
32	מתכון	מתכון	NOUN	NOUN	Gender=Masc|Number=Sing	29	csubj:pass	_	_
33	נכון	נכון	ADJ	ADJ	Gender=Masc|Number=Sing	32	amod	_	_
34	ל	ל	ADP	ADP	_	35	case	_	_
35	אהדה	אהדה	NOUN	NOUN	Gender=Fem|Number=Sing	32	nmod	_	_
36	בין	בין	ADP	ADP	_	37	case	_	_
37	בוחרי	בוחר	NOUN	NOUN	Gender=Masc|Number=Plur	32	obl	_	_
38	הם	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	37	nmod:poss	_	_
39	ה	ה	DET	DET	Definite=Def|PronType=Art	40	det	_	_
40	ימנים	ימני	ADJ	ADJ	Gender=Masc|Number=Plur	37	amod	_	_
41	או	או	CCONJ	CCONJ	_	42	cc	_	_
42	מרכזי	מרכז	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	37	conj	_	_
43	ה	ה	DET	DET	Definite=Def|PronType=Art	44	det	_	_
44	מפלגות	מפלגה	NOUN	NOUN	Gender=Fem|Number=Plur	42	compound	_	_
45	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


