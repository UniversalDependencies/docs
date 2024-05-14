---
layout: base
title:  'Statistics of advmod:emph in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pud-dep-advmod-neg.html">advmod:neg</a></tt>.

281 nodes (2%) are attached to their parents as `advmod:emph`.

241 instances of `advmod:emph` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8220640569395.

The following 22 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (80; 28% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (68; 24% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (39; 14% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (31; 11% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (17; 6% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (8; 3% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (6; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (5; 2% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
9	więcej	więcej	DET	num:pl:acc:n:rec	Case=Acc|Gender=Neut|Number=Plur|PronType=Ind	7	obl:arg	7:obl:arg	SpaceAfter=No
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advmod:emph	color:blue
1	To	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	nsubj	12:nsubj	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	co	co	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	5:obj|7:obj	_
4	ona	on	PRON	ppron3:sg:nom:f:ter:akc:npraep	Case=Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	5	nsubj	5:nsubj|7:nsubj	_
5	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	robi	robić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:acl:relcl|5:conj	_
8	–	–	PUNCT	interp	PunctType=Dash	12	punct	12:punct	_
9	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	12	cop	12:cop	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	12:aux	_
11	właściwie	właściwie	PART	part	_	12	advmod:emph	12:advmod:emph	_
12	niewiarygodne	niewiarygodny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


