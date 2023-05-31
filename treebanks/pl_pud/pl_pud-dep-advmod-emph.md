---
layout: base
title:  'Statistics of advmod:emph in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pud-dep-advmod-neg.html">advmod:neg</a></tt>.

225 nodes (1%) are attached to their parents as `advmod:emph`.

195 instances of `advmod:emph` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47111111111111.

The following 12 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (62; 28% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (56; 25% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (32; 14% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (31; 14% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (18; 8% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (11; 5% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:emph	color:blue
1	To	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	właśnie	właśnie	PART	part	_	3	advmod:emph	3:advmod:emph	_
3	sprawia	sprawiać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
5	że	że	SCONJ	comp	_	7	mark	7:mark	_
6	wciąż	wciąż	ADV	adv	_	7	advmod	7:advmod	_
7	wracamy	wracać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	_
8	po	po	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc
9	więcej	więcej	DET	num:pl:acc:n:rec	Case=Acc|Gender=Neut|Number=Plur|NumType=Card|PronType=Ind	7	obl:arg	7:obl:arg	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	Samoloty	samolot	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	obj	2:obj	_
2	widzieli	widzieć	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	poprzednio	poprzednio	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	_
4	tylko	tylko	PART	part	_	5	advmod:emph	5:advmod:emph	_
5	blogerzy	bloger	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:emph	color:blue
1	Katarzyna	Katarzyna	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
2	II	II	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumForm=Roman|NumType=Ord	1	amod:flat	1:amod:flat	_
3	również	również	PART	part	_	6	advmod:emph	6:advmod:emph	_
4	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	bardzo	bardzo	ADV	adv:pos	Degree=Pos	6	advmod	6:advmod	_
6	zadowolona	zadowolony	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


