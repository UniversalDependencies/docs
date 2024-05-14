---
layout: base
title:  'Statistics of compound in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `compound`

This relation is universal.

154 nodes (0%) are attached to their parents as `compound`.

154 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25974025974026.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (57; 37% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (51; 33% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (12; 8% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (6; 4% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	Въ	въ	ADP	_	_	4	case	_	Norm="Въ"
2	Цари	Царь	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	4	compound	_	Norm="Цари"
3	же	же	PART	_	_	2	advmod	_	Norm="же"
4	граде	градъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	obl	_	Norm="граде"
5	тогда	тогда	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	Norm="тогда"
6	царствуя	царствовати	VERB	_	Tense=Pres|VerbForm=Conv|Voice=Act	0	root	_	Norm="царствуя"
7	Михаилъ	Михаилъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	nsubj	_	Norm="Михаилъ"
8	Пафлегоненинъ	Пафлегоненинъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing	7	flat:name	_	Norm="Пафлегоненинъ"|SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	Norm="."

~~~


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	А	а	CCONJ	_	_	3	cc	_	wf="А"
2	грамота	грамота	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	wf="грамота"
3	подписана	подписати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="подписана"
4	лета	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	3	obl:tmod	_	wf="лета"
5	7000	7000	ADJ	_	Case=Gen|Gender=Neut|Number=Sing|NumForm=Digit|NumType=Ord	7	compound	_	upos="ANUM"|wf="7000"
6	пятдесят	пятьдесятъ	NUM	_	Case=Acc|NumForm=Word|NumType=Card	7	compound	_	wf="пятдесят"
7	пятого	пятый	ADJ	_	Case=Gen|Gender=Neut|Number=Sing|NumForm=Word|NumType=Ord	4	amod	_	upos="ANUM"|wf="пятого"|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	wf=","
9	марта	мартъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	wf="марта"
10	в	въ	ADP	_	_	12	case	_	wf="в"
11	24	24	ADJ	_	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	12	amod	_	upos="ANUM"|wf="24"
12	день	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	wf="день"|SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	wf="."

~~~


