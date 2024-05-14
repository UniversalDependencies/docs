---
layout: base
title:  'Statistics of aux:pass in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="pl_pud-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pud-dep-aux-cnd.html">aux:cnd</a></tt>.

141 nodes (1%) are attached to their parents as `aux:pass`.

130 instances of `aux:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40425531914894.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (141; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:pass	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	wydatki	wydatek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	3:nsubj:pass	_
3	finansowane	finansować	ADJ	ppas:pl:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen
6	zasobnego	zasobny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	konta	konto	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
8	Clinton	Clinton	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


