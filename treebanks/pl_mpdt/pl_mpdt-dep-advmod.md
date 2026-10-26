---
layout: base
title:  'Statistics of advmod in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advmod`

This relation is universal.
There are 3 language-specific subtypes of `advmod`: <tt><a href="pl_mpdt-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_mpdt-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_mpdt-dep-advmod-neg.html">advmod:neg</a></tt>.

1708 nodes (4%) are attached to their parents as `advmod`.

1351 instances of `advmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75351288056206.

The following 21 pairs of parts of speech are connected with `advmod`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1040; 61% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (303; 18% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (94; 6% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (65; 4% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (57; 3% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (35; 2% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (25; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (18; 1% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (17; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (10; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (10; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (7; 0% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 advmod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc|Translit=W
2	Warszawie	Warszawa	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	Translit=Warszawie
3	być	być	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp	6:xcomp	Translit=być
4	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	Translit=sobie
5	nie	nie	PART	part	Polarity=Neg	6	advmod:neg	6:advmod:neg	Translit=nie
6	życzę	życzyć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=życzę
7	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
8	dla	dla	ADP	prep:gen	AdpType=Prep	11	case	11:case	Case=Gen|Translit=dla
9	większego	duży	ADJ	adj:sg:gen:m:com	Case=Gen|Degree=Cmp|Gender=Masc|Number=Sing	11	amod	11:amod	Translit=większego
10	daleko	daleko	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	Translit=daleko
11	niewczasu	niewczas	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	6	obl	6:obl	SpaceAfter=No|Translit=niewczasu
12	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Tu	tu	ADV	adv	PronType=Dem	3	advmod	3:advmod	Translit=Tu
2	ż	ż	PART	part	_	1	advmod	1:advmod	Translit=ż
3	monety	moneta	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	0	root	0:root	SpaceAfter=No|Translit=monety
4	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
5	gdzie	gdzie	ADV	adv	PronType=Int	12	advmod	12:advmod	SpaceAfter=No|Translit=gdźie
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
7	i	i	CCONJ	conj	_	10	cc	10:cc	Translit=y
8	na	na	ADP	prep:loc	AdpType=Prep	10	case	10:case	Case=Loc|Translit=ná
9	którym	który	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Int	10	det	10:det	Translit=ktorym
10	miejscu	miejsce	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	5	conj	5:conj|12:advmod	Translit=mieyscu
11	która	który	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Int	12	nsubj	12:nsubj	Translit=ktora
12	uchodzi	uchodzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	SpaceAfter=No|Translit=vchodźi
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


