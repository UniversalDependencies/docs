---
layout: base
title:  'Statistics of amod:flat in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `amod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-amod.html">amod</a></tt>.

271 nodes (1%) are attached to their parents as `amod:flat`.

155 instances of `amod:flat` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01476014760148.

The following 2 pairs of parts of speech are connected with `amod:flat`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (182; 67% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (89; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod:flat	color:blue
1	Gospodarzem	gospodarz	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
2	Uniwersjady	uniwersjada	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod:arg	1:nmod:arg	_
3	Zimowej	zimowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	2	amod:flat	2:amod:flat	_
4	2019	2019	X	dig	NumForm=Digit	2	flat	2:flat	_
5	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	cop	1:cop	_
6	Krasnojarsk	Krasnojarsk	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	1:nsubj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod:flat	color:blue
1	Karolina	Karolina	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
2	Północna	północny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	amod:flat	1:amod:flat	_
3	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	cop	7:cop	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
5	tych	ten	DET	adj:pl:loc:n:pos	Case=Loc|Gender=Neut|Number=Plur|PronType=Dem	6	det	6:det	_
6	wyborach	wybory	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	7	obl	7:obl	_
7	strefą	strefa	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	0	root	0:root	_
8	zero	zero	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


