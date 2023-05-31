---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nsubj.html">nsubj</a></tt>.

427 nodes (1%) are attached to their parents as `nsubj:pass`.

339 instances of `nsubj:pass` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.20608899297424.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (382; 89% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (24; 6% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (8; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (7; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Третеи	третий	ADJ	ANUM	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	2	amod	_	wf="Третеи"|_
2	куб	кубъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	wf="куб"|_
3	новои	новый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	wf="новои"|_
4	же	же	PART	_	_	5	advmod	_	wf="же"|_
5	подержен	подержати	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="подержен"|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	wf=","|_
7	уши	ухо	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	2	conj	_	wf="уши"|_
8	медные	мѣдный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	7	amod	_	wf="медные"|SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	wf=","|_
10	весу	вѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	nsubj	_	wf="весу"|_
11	24	24	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	12	nummod:gov	_	wf="24"|_
12	гривенки	гривенка	NOUN	_	Case=Nom|Gender=Fem|Number=Count	2	conj	_	wf="гривенки"|SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	wf="."|SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	Роспись	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	рыбе	рыба	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
5	прислана	прислати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	acl:relcl	_	_
6	ис	изъ	ADP	_	_	8	case	_	_
7	Селецкой	селецкий	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	слободки	слободка	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	obl	_	_
9	с	съ	ADP	_	_	10	case	_	_
10	Ларионом	Ларионъ	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	5	obl	_	_
11	Офонасьевым	Офонасьевъ	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	И	и	CCONJ	_	_	5	cc	_	wf="И"|_
2	Кирюшка	Кирюшка	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj:pass	_	wf="Кирюшка"|_
3	и	и	CCONJ	_	_	4	cc	_	wf="и"|_
4	Багдашка	Багдашка	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	conj	_	wf="Багдашка"|_
5	отпущены	отпустити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="отпущены"|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	wf="."|SpaceAfter=No

~~~


