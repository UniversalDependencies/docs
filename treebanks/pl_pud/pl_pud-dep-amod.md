---
layout: base
title:  'Statistics of amod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_pud-dep-amod-flat.html">amod:flat</a></tt>.

1431 nodes (8%) are attached to their parents as `amod`.

892 instances of `amod` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16631726065688.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1340; 94% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (48; 3% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (12; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (11; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 amod	color:blue
1	Od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Gen
2	IX	IX	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	3	amod:flat	3:amod:flat	_
3	w	wiek	X	brev:pun	Abbr=Yes|Pun=Yes	7	obl	7:obl	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
5	p.n.e	przed naszą erą	X	brev:pun	Abbr=Yes|Pun=Yes	3	amod	3:amod	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_
7	zaczęły	zacząć	VERB	praet:pl:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	pojawiać	pojawiać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	pierwsze	pierwszy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	_
11	greckie	grecki	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	_
12	teksty	tekst	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


