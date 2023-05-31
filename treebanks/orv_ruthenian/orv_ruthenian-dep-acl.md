---
layout: base
title:  'Statistics of acl in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="orv_ruthenian-dep-acl-relcl.html">acl:relcl</a></tt>.

54 nodes (1%) are attached to their parents as `acl`.

50 instances of `acl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.96296296296296.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (20; 37% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (12; 22% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (8; 15% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (8; 15% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 acl	color:blue
1	И	и	CCONJ	_	_	2	cc	_	wf="И"
2	послалъ	послати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="послалъ"
3	Чернѧта	Чернята	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	nsubj	_	wf="Чернѧта"
4	с	съ	ADP	_	_	5	case	_	wf="с"
5	Олександромъ	Олександръ	PROPN	_	Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	2	obl	_	wf="Олександромъ"
6	на	на	ADP	_	_	8	case	_	wf="на"
7	тыи	тотъ	DET	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	wf="тыи"
8	люд(и)	человѣкъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	2	obl	_	wf="люди"|SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	при	при	ADP	_	_	11	case	_	wf="при"
11	ком	кто	PRON	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Rel	13	obl	_	wf="ком"
12	ѡни	они	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	nsubj	_	wf="ѡни"
13	оударил(и)	ударити	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	8	acl	_	wf="оударили"
14	оу	въ	ADP	_	_	15	case	_	wf="оу"
15	руку	рука	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	13	obl	_	wf="руку"|SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl	color:blue
1	А	а	CCONJ	_	_	3	cc	_	wf="А"
2	ныне	нынѣ	ADV	_	Degree=Pos	3	orphan	_	wf="ныне"
3	кн(ѧ)зю	князь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	0	root	_	wf="кнѧзю"
4	Скирикгаилу	Скиригайло	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	3	appos	_	wf="Скирикгаилу"
5	и	и	CCONJ	_	_	7	advmod	_	wf="и"
6	с	съ	ADP	_	_	7	case	_	wf="с"
7	тымь	то	PRON	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	3	orphan	_	wf="тымь"|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	што	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	12	nsubj	_	wf="што"
10	к	къ	ADP	_	_	11	case	_	wf="к"
11	тому	то	PRON	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	12	obl	_	wf="тому"
12	тѧгло	тягнути	VERB	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	7	acl	_	wf="тѧгло"
13	и	и	CCONJ	_	_	14	cc	_	wf="и"
14	тѧгнеть	тягнути	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	wf="тѧгнеть"|SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	И	и	CCONJ	_	_	2	cc	_	wf="И"
2	далъ	дати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="далъ"
3	мои	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	wf="мои"
4	братъ	братъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	wf="братъ"|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	кн(ѧ)зь	князь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	wf="кнѧзь"
7	Скирикгаило	Скиригайло	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	appos	_	wf="Скирикгаило"|SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	оусю	весь	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Tot	11	det	_	wf="оусю"
10	тую	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	11	det	_	wf="тую"
11	дань	дань	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	wf="дань"|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	што	что	SCONJ	_	_	15	mark	_	wf="што"
14	нь	не	PART	_	Polarity=Neg	15	advmod	_	wf="нь"
15	есть	быти	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl	_	wf="есть"
16	дохода	доходъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	nsubj	_	wf="дохода"|SpaceAfter=No
17	,	,	PUNCT	_	_	15	punct	_	_
18	—	—	PUNCT	_	_	19	punct	_	_
19	дань	дань	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	11	appos	_	wf="дань"
20	серебренаѧ	серебреный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	wf="серебренаѧ"|SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	бобры	бобръ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	19	conj	_	wf="бобры"|SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	_	_
24	белки	бѣлка	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	19	conj	_	wf="белки"
25	и	и	CCONJ	_	_	26	cc	_	wf="и"
26	лукна	лукно	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	19	conj	_	wf="лукна"
27	всѧ	весь	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	26	det	_	wf="всѧ"|SpaceAfter=No
28	,	,	PUNCT	_	_	30	punct	_	_
29	и	и	CCONJ	_	_	30	cc	_	wf="и"
30	люди	человѣкъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	19	conj	_	wf="люди"
31	оуси	весь	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	30	det	_	wf="оуси"|SpaceAfter=No
32	.	.	PUNCT	_	_	2	punct	_	_

~~~


