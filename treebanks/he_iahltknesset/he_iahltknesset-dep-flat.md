---
layout: base
title:  'Statistics of flat in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `flat`

This relation is universal.

307 nodes (0%) are attached to their parents as `flat`.

307 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34527687296417.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (281; 92% instances), <tt><a href="he_iahltknesset-pos-X.html">X</a></tt>-<tt><a href="he_iahltknesset-pos-X.html">X</a></tt> (24; 8% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	רשות	רשות	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	0	root	_	Entity=(ORG
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	דיבור	דיבור	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound	_	Entity=ORG)
4	ל	ל	ADP	ADP	_	5	case	_	_
5	חבר	חבר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	nmod	_	_
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	Entity=(ORG
7	כנסת	כנסת	PROPN	PROPN	_	5	compound	_	Entity=ORG)
8	אופיר	אופיר	PROPN	PROPN	_	5	appos	_	Entity=(PER
9	פינס	פינס	PROPN	PROPN	_	8	flat	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
11	פז	פז	PROPN	PROPN	_	8	flat	_	Entity=PER)|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	לא	לא	ADV	ADV	Polarity=Neg	3	advmod	_	_
3	עושה	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	"	"	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
5	על	על	X	X	Foreign=Yes	3	dep	_	_
6	הבאב	הבאב	X	X	Foreign=Yes	5	flat	_	_
7	אללה	אללה	X	X	Foreign=Yes	5	flat	_	SpaceAfter=No
8	"	"	PUNCT	PUNCT	_	5	punct	_	_
9	שום	שום	DET	DET	Definite=Cons	10	det	_	_
10	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	יסלח	סלח	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Fut|Voice=Act	0	root	_	_
2	ל	ל	ADP	ADP	_	3	case	_	_
3	י	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=1|PronType=Prs	1	obl	_	_
4	מר	מר	ADJ	ADJ	Gender=Masc|Number=Sing	1	nsubj	_	_
5	טסלר	טסלר	PROPN	PROPN	_	4	flat	_	Entity=(PER)|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	אני	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	באמת	באמת	ADV	ADV	_	9	advmod	_	_
9	רוצה	רצה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	1	parataxis	_	_
10	לדבר	דיבר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	9	xcomp	_	_
11	על	על	ADP	ADP	_	13	case	_	_
12	ה	ה	DET	DET	Definite=Def|PronType=Art	13	det	_	_
13	עובדים	עובד	NOUN	NOUN	Gender=Masc|Number=Plur	10	obl	_	_
14	,	,	PUNCT	PUNCT	_	19	punct	_	_
15	ו	ו	CCONJ	CCONJ	_	19	cc	_	_
16	כך	כך	ADV	ADV	_	19	advmod	_	_
17	גם	גם	ADV	ADV	_	19	advmod	_	_
18	ה	ה	DET	DET	Definite=Def|PronType=Art	19	det	_	Entity=(ORG
19	הסתדרות	הסתדרות	PROPN	PROPN	Gender=Fem|Number=Sing	10	conj	_	Entity=ORG)
20	ב	ב	ADP	ADP	_	21	case	_	_
21	אילת	אילת	PROPN	PROPN	_	19	nmod	_	Entity=(GPE)
22	,	,	PUNCT	PUNCT	_	19	punct	_	_
23	אבי	אבי	PROPN	PROPN	_	26	nsubj	_	Entity=(PER
24	אזולאי	אזולאי	PROPN	PROPN	_	23	flat	_	Entity=PER)
25	בוודאי	בוודאי	ADV	ADV	_	26	advmod	_	_
26	דיבר	דיבר	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Act	1	parataxis	_	_
27	את	את	ADP	ADP	Case=Acc	28	case	_	_
28	ך	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	26	obj	_	_
29	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


