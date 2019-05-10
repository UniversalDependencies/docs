---
layout: base
title:  'Statistics of obl:cmpr in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `obl:cmpr`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="pl_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pl_pud-dep-obl-arg.html">obl:arg</a></tt>.

60 nodes (0%) are attached to their parents as `obl:cmpr`.

57 instances of `obl:cmpr` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58333333333333.

The following 17 pairs of parts of speech are connected with `obl:cmpr`: <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (12; 20% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (10; 17% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (10; 17% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (6; 10% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:cmpr	color:blue
1	Czasem	czas	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	obl	4:obl	_
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	takie	taki	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root	_
5	jak	jak	SCONJ	comp	ConjType=Cmpr	6	mark	6:mark	_
6	supermoc	supermoc	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	obl:cmpr	4:obl:cmpr	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:cmpr	color:blue
1	Podobnie	podobnie	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	_
2	jak	jak	SCONJ	comp	ConjType=Cmpr	3	mark	3:mark	_
3	fiordy	fiord	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	1	obl:cmpr	1:obl:cmpr	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
5	jeziora	jezioro	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	9	nsubj	9:nsubj	_
6	słodkowodne	słodkowodny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	5	amod	5:amod	_
7	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
8	często	często	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	_
9	głębokie	głęboki	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 obl:cmpr	color:blue
1	To	ten	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	2:det	_
2	państwo	państwo	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
3	-	-	PUNCT	interp	PunctType=Hyph	4	punct	4:punct	SpaceAfter=No
4	miasto	miasto	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	conj	2:conj|5:nsubj	_
5	pojawiło	pojawić	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
8	tym	ten	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	10	det	10:det	_
9	samym	sam	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	8	fixed	8:fixed	_
10	okresie	okres	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
12	co	co	ADP	prep:nom	AdpType=Prep	13	case	13:case	Case=Nom
13	Sukhothai	Sukhothai	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	8	obl:cmpr	8:obl:cmpr	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


