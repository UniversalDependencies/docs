---
layout: base
title:  'Statistics of advmod:neg in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_mpdt-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_mpdt-dep-advmod-emph.html">advmod:emph</a></tt>.

643 nodes (1%) are attached to their parents as `advmod:neg`.

643 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09797822706065.

The following 14 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (496; 77% instances), <tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (46; 7% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (28; 4% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (21; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (17; 3% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (15; 2% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (7; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (6; 1% instances), <tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	Jeśli	jeśli	SCONJ	comp	_	5	mark	5:mark	Translit=Jeśli
2	was	wy	PRON	ppron12:pl:gen:sec	Case=Gen|Number=Plur|Person=2|PronType=Prs	5	obj	5:obj	Translit=was
3	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	Translit=to
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	ruszy	ruszyć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	11	advcl	11:advcl	SpaceAfter=No|Translit=ruszy
6	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
7	co	co	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	11	nsubj	11:nsubj	Translit=co
8	was	wy	PRON	ppron12:pl:acc:sec	Case=Acc|Number=Plur|Person=2|PronType=Prs	10	iobj	10:iobj	Translit=wras
9	kiedy	kiedy	ADV	adv	PronType=Int	11	advmod	11:advmod	Translit=kiedy
10	ruszyć	ruszyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	11	xcomp	11:xcomp	Translit=ruszyć
11	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=może
12	?	?	PUNCT	interp	PunctType=Qest	11	punct	11:punct	Translit=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:neg	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	Translit=Nie
2	bądź	być	AUX	impt:sg:sec:imperf	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	cop	4:cop|6:cop	Translit=bądź
3	tylko	tylko	PART	part	_	4	cc:preconj	4:cc:preconj	Translit=tylko
4	pasterzem	pasterz	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	Translit=pásterzem
5	ale	ale	CCONJ	conj	_	6	cc	6:cc	Translit=ále
6	paszą	pasza	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	4	conj	4:conj	Translit=paszą
7	jako	jako	ADP	prep:nom	AdpType=Prep|ExtPos=CCONJ	9	case	9:case	Case=Nom|Translit=iáko
8	i	i	PART	part	_	7	fixed	7:fixed	Translit=i
9	Chrystus	Chrystus	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	6	obl:cmpr	6:obl:cmpr	SpaceAfter=No|Translit=Christus
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 advmod:neg	color:blue
1	Wszyscy	wszyscy	PRON	subst:pl:nom:manim1:pt	Animacy=Hum|Case=Nom|Gender=Masc|Number=Ptan|PronType=Tot	3	nsubj	3:nsubj	Translit=Wszyscy
2	teraz	teraz	ADV	adv	_	3	advmod	3:advmod	Translit=teraz
3	widzą	widzieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=widzą
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
5	że	że	SCONJ	comp	_	6	mark	6:mark	Translit=że
6	źle	źle	ADV	adv:pos	Degree=Pos	3	ccomp:obj	3:ccomp:obj	SpaceAfter=No|Translit=źle
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	Translit=,
8	że	że	SCONJ	comp	_	9	mark	9:mark	Translit=że
9	podrwili	podrwić	VERB	praet:pl:manim1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp	6:ccomp	SpaceAfter=No|Translit=podrwili
10	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	Translit=,
11	ale	ale	CCONJ	conj	_	15	cc	15:cc	Translit=ale
12	już	już	PART	part	_	15	advmod:emph	15:advmod:emph	Translit=już
13	nie	nie	PART	part	Polarity=Neg	15	advmod:neg	15:advmod:neg	Translit=nie
14	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Acc|Translit=w
15	czas	czas	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	3	conj	3:conj	SpaceAfter=No|Translit=czas
16	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


