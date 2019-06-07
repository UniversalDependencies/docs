---
layout: base
title:  'Statistics of advcl in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `advcl`

This relation is universal.

600 nodes (1%) are attached to their parents as `advcl`.

384 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.295.

The following 13 pairs of parts of speech are connected with `advcl`: <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (524; 87% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (38; 6% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt> (16; 3% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pl_sz-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_sz-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Bartek	Bartek	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	sprzedaje	sprzedawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	książki	książka	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	interp	_	6	punct	_	_
5	bo	bo	SCONJ	comp	_	6	mark	_	_
6	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	11	expl:pv	_	_
8	ich	on	PRON	ppron3:pl:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	11	obj	_	_
9	po	po	ADP	prep:acc	AdpType=Prep|Case=Acc	11	advmod	_	_
10	prostu	prosty	ADJ	adjp	PrepCase=Pre	9	case	_	_
11	pozbyć	pozbyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf	6	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	interp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advcl	color:blue
1	Początkowa	początkowy	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	sytuacja	sytuacja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
3	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	cop	_	SpaceAfter=No
4	,	,	PUNCT	interp	_	7	punct	_	_
5	jak	jak	ADV	adv	_	7	advmod	_	_
6	się	się	PRON	qub	PronType=Prs|Reflex=Yes	7	expl:pv	_	_
7	zdawało	zdawać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	advcl	_	SpaceAfter=No
8	,	,	PUNCT	interp	_	7	punct	_	_
9	niezwykle	niezwykle	ADV	adv:pos	Degree=Pos	10	advmod	_	_
10	jasna	jasny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	interp	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	Najmłodsi	młody	ADJ	adj:pl:nom:m1:sup	Animacy=Hum|Case=Nom|Degree=Sup|Gender=Masc|Number=Plur	4	amod	_	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	3	case	_	_
3	Lubinie	Lubin	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl	_	_
4	handlowcy	handlowiec	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
5	oceniają	oceniać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	,	,	PUNCT	interp	_	10	punct	_	_
7	że	że	SCONJ	comp	_	10	mark	_	_
8	popyt	popyt	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
9	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	duży	duży	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	advcl	_	SpaceAfter=No
11	.	.	PUNCT	interp	_	5	punct	_	_

~~~


