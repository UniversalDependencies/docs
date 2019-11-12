---
layout: base
title:  'Statistics of xcomp in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `xcomp`

This relation is universal.

194 nodes (1%) are attached to their parents as `xcomp`.

157 instances of `xcomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.74742268041237.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (173; 89% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (16; 8% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	И	и	CCONJ	_	_	4	cc	_	_
2	про	про	ADP	_	_	3	case	_	_
3	то	то	PRON	_	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	_
4	послано	послати	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	обыскивать	обыскивати	VERB	OOV|Transit=Tran	Aspect=Perf|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_
7	{	{	PUNCT	OOV	_	8	punct	_	SpaceAfter=No
8	л.	_	X	_	_	4	parataxis	_	_
9	7	_	X	_	_	8	dep	_	SpaceAfter=No
10	}	}	PUNCT	OOV	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Имѣти	имѣти	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
2	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	iobj	_	_
3	менѧ	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	_
4	себѣ	себя	PRON	_	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	_
5	братѡм	братъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	xcomp	_	_
6	старѣишим	старѣйший	ADJ	_	Case=Ins|Degree=Cmp|Gender=Masc|Number=Sing|Variant=Long	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	а	а	CCONJ	_	_	4	cc	_	_
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	4	iobj	_	_
4	платешшик	платежчикъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	токо	тако	ADV	_	Degree=Pos	7	advmod	_	_
6	не	не	PART	_	Polarity=Neg	7	advmod	_	_
7	дорого	дорого	ADV	_	Degree=Pos	8	xcomp	_	_
8	станет	стати	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	parataxis	_	_

~~~


