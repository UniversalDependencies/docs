---
layout: base
title:  'Statistics of aux:pass in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sk_snk-dep-aux.html">aux</a></tt>.

102 nodes (0%) are attached to their parents as `aux:pass`.

100 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79411764705882.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-AUX.html">AUX</a></tt> (102; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Bol	byť	AUX	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	2	aux:pass	2:aux:pass	_
2	zatknutý	zatknutý	ADJ	Gtms1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	za	za	ADP	Eu4	AdpType=Prep|Case=Acc	4	case	4:case	_
4	riadenie	riadenie	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	2	obl	2:obl:za:acc	_
5	auta	auto	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	4	nmod	4:nmod:gen	_
6	pod	pod	ADP	Eu7	AdpType=Prep|Case=Ins	7	case	7:case	_
7	vplyvom	vplyv	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	4:nmod:pod:ins	_
8	alkoholu	alkohol	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod:gen	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


