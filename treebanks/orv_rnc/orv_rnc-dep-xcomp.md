---
layout: base
title:  'Statistics of xcomp in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `xcomp`

This relation is universal.

353 nodes (1%) are attached to their parents as `xcomp`.

290 instances of `xcomp` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.32294617563739.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (316; 90% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (20; 6% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Роспись	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	wf="Роспись"|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	wf=","|SpaceAfter=Yes
3	скол(ь)ко	сколько	NUM	_	Case=Nom|NumForm=Word|NumType=Card	1	acl	_	wf="сколько"|SpaceAfter=Yes
4	судов	судъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nsubj	_	wf="судов"|SpaceAfter=Yes
5	медных	мѣдный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	wf="медных"|SpaceAfter=Yes
6	худых	худой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	wf="худых"|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	wf=","|SpaceAfter=Yes
8	что	что	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	9	obj	_	wf="что"|SpaceAfter=Yes
9	отдат(ь)	отдати	VERB	_	VerbForm=Inf|Voice=Act	4	acl:relcl	_	wf="отдать"|SpaceAfter=Yes
10	делат(ь)	дѣлати	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	wf="делать"|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	wf="."|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Имѣти	имѣти	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	_
2	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	iobj	_	_
3	менѧ	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	_
4	себѣ	себя	PRON	_	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	_
5	братѡм	братъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	xcomp	_	_
6	старѣишим	старѣйший	ADJ	_	Case=Ins|Degree=Cmp|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	а	а	CCONJ	_	_	5	cc	_	_
2	мꙋжикъ	мужикъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	ꙋ	у	ADP	_	_	4	case	_	_
4	меня	я	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
5	добытъ	добыти	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	16	ccomp	_	_
6	и	и	CCONJ	_	_	10	cc	_	_
7	бꙋдетъ	быти	SCONJ	_	_	10	mark	_	_
8	вамъ	вы	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	10	iobj	_	_
9	не	не	PART	_	Polarity=Neg	10	advmod	_	_
10	возможъно	возможный	ADJ	AdjType=Predic	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	5	conj	_	_
11	избыть	избыти	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	10	xcomp	_	_
12	и	и	CCONJ	_	_	16	cc	_	_
13	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	16	nsubj	_	_
14	ко	къ	ADP	_	_	15	case	_	_
15	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	16	obl	_	_
16	отпишите	отписати	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


