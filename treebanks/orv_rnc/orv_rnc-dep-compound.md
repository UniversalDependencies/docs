---
layout: base
title:  'Statistics of compound in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `compound`

This relation is universal.

66 nodes (0%) are attached to their parents as `compound`.

66 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1969696969697.

The following 9 pairs of parts of speech are connected with `compound`: <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (32; 48% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (12; 18% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 8% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 5% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Да	да	CCONJ	_	_	4	cc	_	wf="Да"|_
2	пят(ь)сот	пятьсотъ	NUM	_	Case=Acc|NumForm=Word|NumType=Card	3	compound	_	wf="пятьсот"|_
3	дватцат(ь)	двадцать	NUM	_	Case=Acc|NumForm=Word|NumType=Card	4	nummod:gov	_	wf="дватцать"|_
4	скал	скала	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	0	root	_	wf="скал"|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	Въ	въ	ADP	_	_	2	case	_	Norm="Въ"
2	Цари	Царь	PROPN	_	Case=Loc|Gender=Masc|Number=Sing	4	compound	_	Norm="Цари"
3	же	же	PART	_	_	2	advmod	_	Norm="же"
4	граде	градъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	obl	_	Norm="граде"
5	тогда	тогда	ADV	_	Degree=Pos	6	advmod	_	Norm="тогда"
6	царствуя	царствовати	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	0	root	_	Norm="царствуя"
7	Михаилъ	Михаилъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Norm="Михаилъ"
8	Пафлегоненинъ	Пафлегоненинъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	flat:name	_	Norm="Пафлегоненинъ"|SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 compound	color:blue
1	Роспис(ь)	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	wf="Роспись"|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	wf=","|_
3	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	10	det	_	wf="что"|_
4	на	на	ADP	_	_	5	case	_	wf="на"|_
5	Москве	Москва	PROPN	_	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	1	acl:relcl	_	wf="Москве"|SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	wf="-"|SpaceAfter=No
7	реке	рѣка	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	5	appos	_	wf="реке"|_
8	н[а]	на	ADP	_	_	9	case	_	wf="на"|_
9	берегу	берегъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	7	nmod	_	wf="берегу"|_
10	лесу	лѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	wf="лесу"|SpaceAfter=No
11	:	:	PUNCT	_	_	15	punct	_	wf=":"|_
12	четырех	четыре	NUM	_	Case=Gen|Gender=Masc|NumForm=Word|NumType=Card	13	compound	_	wf="четырех"|_
13	саженных	саженный	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	15	amod	_	wf="саженных"|_
14	230	230	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	15	nummod:gov	_	wf="230"|_
15	бревен	бревно	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	wf="бревен"|SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	wf=","|_
17	трех	трие	NUM	_	Case=Gen|Gender=Masc|NumForm=Word|NumType=Card	18	compound	_	wf="трех"|_
18	саженных	саженный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	20	amod	_	wf="саженных"|_
19	180	180	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	20	nummod:gov	_	wf="180"|_
20	бревен	бревно	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	15	conj	_	wf="бревен"|SpaceAfter=No
21	,	,	PUNCT	_	_	25	punct	_	wf=","|_
22	пяти	пять	NUM	_	Case=Gen|NumForm=Word|NumType=Card	23	compound	_	wf="пяти"|_
23	саженных	саженный	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	25	amod	_	wf="саженных"|_
24	15	15	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	25	nummod:gov	_	wf="15"|_
25	бревен	бревно	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	15	conj	_	wf="бревен"|SpaceAfter=No
26	,	,	PUNCT	_	_	31	punct	_	wf=","|_
27	да	да	CCONJ	_	_	31	cc	_	wf="да"|_
28	пяти	пять	NUM	_	Case=Gen|NumForm=Word|NumType=Card	29	compound	_	wf="пяти"|_
29	саженных	саженный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	31	amod	_	wf="саженных"|_
30	16	16	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	31	nummod:gov	_	wf="16"|_
31	брусов	брусъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	15	conj	_	wf="брусов"|SpaceAfter=No
32	.	.	PUNCT	_	_	1	punct	_	wf="."|_

~~~


