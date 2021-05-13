---
layout: base
title:  'Statistics of csubj:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-csubj.html">csubj</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj:pass	color:blue
1	Перад	перад	ADP	IN	_	2	case	2:case	_
2	ужываннем	ужыванне	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	3	obl	3:obl:перад:ins	_
3	пажадана	пажадаць	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	азнаёміцца	азнаёміцца	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Mid	3	csubj:pass	3:csubj:pass	_
5	з	з	ADP	IN	_	6	case	6:case	_
6	прадуктам	прадукт	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	obl	4:obl:з:ins	SpaceAfter=No
7	!	!	PUNCT	PUNCT	_	3	punct	3:punct	_

~~~


