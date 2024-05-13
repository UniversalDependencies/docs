---
layout: base
title:  'Statistics of flat in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="sk_snk-dep-flat-foreign.html">flat:foreign</a></tt>.

18 nodes (0%) are attached to their parents as `flat`.

18 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16666666666667.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (13; 72% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 11% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-SYM.html">SYM</a></tt> (2; 11% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	Okolo	okolo	ADP	Eu2	AdpType=Prep|Case=Gen	2	case	2:case	_
2	neho	ono	PRON	PFns2	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obl	4:obl:okolo:gen	_
3	neskôr	neskôr	ADV	Dx	Degree=Pos	4	advmod	4:advmod	_
4	vyrástlo	vyrásť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
5	nové	nový	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	_
6	mesto	mesto	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	4:nsubj	_
7	nazývané	nazývaný	ADJ	Gtns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	amod	6:amod	_
8	Spalato	spalato	PROPN	SSns1:r	Case=Nom|Gender=Neut|Number=Sing	7	obl	7:obl:nom	_
9	–	–	PUNCT	Z	_	10	punct	10:punct	_
10	Split	split	PROPN	SSis1:r	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	flat	8:flat	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	2	2	NUM	0	NumForm=Digit	4	nsubj	4:nsubj	_
2	+	+	SYM	ZIP	ConjType=Oper	1	flat	1:flat	_
3	2	2	NUM	0	NumForm=Digit	1	flat	1:flat	_
4	=	=	SYM	ZIP	_	0	root	0:root	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	2	2	NUM	0	NumForm=Digit	4	nsubj	4:nsubj	_
2	+	+	SYM	ZIP	ConjType=Oper	1	flat	1:flat	_
3	2	2	NUM	0	NumForm=Digit	1	flat	1:flat	_
4	=	=	SYM	ZIP	_	0	root	0:root	_

~~~


