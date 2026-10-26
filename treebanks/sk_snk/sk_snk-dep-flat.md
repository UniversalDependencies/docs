---
layout: base
title:  'Statistics of flat in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `flat`

This relation is universal.

99 nodes (0%) are attached to their parents as `flat`.

99 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62626262626263.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-X.html">X</a></tt> (81; 82% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (13; 13% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-SYM.html">SYM</a></tt> (2; 2% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	Oponentom	oponent	NOUN	SSms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
2	Olshanského	olshanský	PROPN	SAms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod:gen	_
3	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	1:cop	_
4	Steven	steven	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nmod	5:nmod:nom	_
5	Austad	austad	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	1:nsubj	_
6	z	z	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	7:case	_
7	University	university	X	%	Foreign=Yes	5	nmod	5:nmod:z:gen	_
8	of	of	X	%	Foreign=Yes	9	case	9:case	_
9	Idaho	idaho	X	%	Foreign=Yes	7	flat	7:flat	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	1	punct	1:punct	_

~~~


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


