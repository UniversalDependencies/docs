---
layout: base
title:  'Statistics of amod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_pud-dep-amod-flat.html">amod:flat</a></tt>.

1423 nodes (8%) are attached to their parents as `amod`.

896 instances of `amod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15390021082221.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1345; 95% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (53; 4% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (11; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Odbyło	odbyć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	nsubj	1:nsubj	_
4	łodziami	łódź	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	1	iobj	1:iobj	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	Europy	Europa	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	_
7	kontynentalnej	kontynentalny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc
2	latach	rok	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	6	obl	6:obl	_
3	1991	1991	X	dig	NumForm=Digit	2	amod	2:amod	SpaceAfter=No
4	–	–	PUNCT	interp	PunctType=Dash	5	punct	5:punct	SpaceAfter=No
5	1997	1997	X	dig	NumForm=Digit	3	conj	2:amod|3:conj	_
6	prowadziła	prowadzić	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	szkołę	szkoła	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	_
8	dla	dla	ADP	prep:gen	AdpType=Prep	9	case	9:case	Case=Gen
9	dzieci	dziecko	NOUN	subst:pl:gen:n:col	Case=Gen|Gender=Neut|Number=Plur|NumType=Sets	7	nmod	7:nmod	_
10	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Ins
11	trudnościami	trudność	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	9	nmod	9:nmod	_
12	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Loc
13	uczeniu	uczyć	NOUN	ger:sg:loc:n:imperf:aff	Aspect=Imp|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	11	nmod	11:nmod	_
14	się	się	PRON	part	PronType=Prs|Reflex=Yes	13	expl:pv	13:expl:pv	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


