---
layout: base
title:  'Statistics of xcomp in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `xcomp`

This relation is universal.

265 nodes (1%) are attached to their parents as `xcomp`.

219 instances of `xcomp` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75849056603774.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (236; 89% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (18; 7% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	И	и	CCONJ	_	_	4	cc	_	_
2	про	про	ADP	_	_	3	case	_	_
3	то	то	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	_
4	послано	послати	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	обыскивать	обыскивати	VERB	Transit=Tran	Aspect=Perf|VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_
7	{	{	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	л.	_	X	_	_	4	parataxis	_	_
9	7	_	X	_	_	8	dep	_	SpaceAfter=No
10	}	}	PUNCT	_	_	8	punct	_	_

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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	И	и	CCONJ	_	_	8	cc	_	_
2	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
3	по	по	ADP	_	_	4	case	_	_
4	тому	тотъ	DET	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	8	obl	_	_
5	ли	ли	PART	_	_	4	advmod	_	_
6	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	7	iobj	_	_
7	великъ	великий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	8	xcomp	_	_
8	хощешь	хотѣти	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	быти	быти	AUX	_	VerbForm=Inf	7	cop	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	что	что	SCONJ	_	_	13	mark	_	_
12	насъ	мы	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	13	obj	_	_
13	отчитаешь	отчитати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	_
14	от	отъ	ADP	_	_	15	case	_	_
15	Августа	Августъ	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	13	obl	_	_
16	кесаря	кесарь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	appos	_	SpaceAfter=No
17	?	?	PUNCT	_	_	8	punct	_	_

~~~


