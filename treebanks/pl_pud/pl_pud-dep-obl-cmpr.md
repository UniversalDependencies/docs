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
Average distance between parent and child is 3.7.

The following 17 pairs of parts of speech are connected with `obl:cmpr`: <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (17; 28% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (11; 18% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (10; 17% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:cmpr	color:blue
1	Czasem	czas	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	4:nmod	_
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	takie	taki	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root	_
5	jak	jak	SCONJ	comp	ConjType=Cmpr	6	mark	6:mark	_
6	supermoc	supermoc	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	obl:cmpr	4:obl:cmpr	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 obl:cmpr	color:blue
1	Trudno	trudno	ADV	adv:pos	Degree=Pos	0	root	0:root	_
2	uwierzyć	uwierzyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	że	że	SCONJ	comp	_	6	mark	6:mark	_
5	Włochy	Włochy	PROPN	subst:pl:nom:n:pt	Case=Nom|Gender=Neut|Number=Ptan	6	nsubj	6:nsubj	_
6	mają	mieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
7	mniej	mniej	DET	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	8	det:numgov	8:det:numgov	_
8	kilometrów	kilometr	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	iobj	6:iobj	_
9	metra	metr	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod:arg	8:nmod:arg	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
11	niż	niż	SCONJ	comp	ConjType=Cmpr	12	mark	12:mark	_
12	Madryt	Madryt	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	obl:cmpr	7:obl:cmpr	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

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


