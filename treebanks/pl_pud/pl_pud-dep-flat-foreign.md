---
layout: base
title:  'Statistics of flat:foreign in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-flat.html">flat</a></tt>.

35 nodes (0%) are attached to their parents as `flat:foreign`.

35 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (21; 60% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (6; 17% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (3; 9% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc
2	nowych	nowy	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	3	amod	3:amod	_
3	odcinkach	odcinek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	4	obl	4:obl	_
4	emitowany	emitować	ADJ	ppas:sg:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
6	program	program	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
7	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	8	punct	8:punct	SpaceAfter=No
8	The	the	X	ign	Foreign=Yes	6	nmod	6:nmod	_
9	Talking	talking	X	ign	Foreign=Yes	8	flat:foreign	8:flat:foreign	_
10	Dead	dead	X	ign	Foreign=Yes	9	flat:foreign	9:flat:foreign	SpaceAfter=No
11	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	8	punct	8:punct	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Być	być	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	advmod:emph	7:advmod:emph	_
2	może	może	PART	part	PartType=Mod	1	fixed	1:fixed	_
3	dress	dress	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
4	code	code	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	flat:foreign	3:flat:foreign	_
5	był	być	AUX	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	zbyt	zbyt	ADV	adv	_	7	advmod	7:advmod	_
7	sztywny	sztywny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 flat:foreign	color:blue
1	Telefony	telefon	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	_
2	Mate	Mate	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	1	nmod	1:nmod	_
3	9	9	X	dig	NumForm=Digit	2	flat	2:flat	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	posiadają	posiadać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	interfejsu	interfejs	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obj	5:obj	_
7	opartego	oprzeć	ADJ	ppas:sg:gen:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	acl	6:acl	_
8	o	o	ADP	prep:acc	AdpType=Prep	10	case	10:case	Case=Acc
9	sztuczną	sztuczny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	inteligencję	inteligencja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obl:arg	7:obl:arg	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
12	jak	jak	SCONJ	comp	ConjType=Comp	13	mark	13:mark|16:mark	_
13	Google	Google	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	obl:cmpr	5:obl:cmpr	_
14	Assistant	Assistant	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	flat:foreign	13:flat:foreign	_
15	czy	czy	CCONJ	conj	_	16	cc	16:cc	_
16	Siri	Siri	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	13	conj	5:obl:cmpr|13:conj	_
17	Apple’a	Apple	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	16	nmod:poss	16:nmod:poss	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


