---
layout: base
title:  'Statistics of advcl:relcl in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="pl_pdb-dep-advcl-cmpr.html">advcl:cmpr</a></tt>.

76 nodes (0%) are attached to their parents as `advcl:relcl`.

74 instances of `advcl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.73684210526316.

The following 3 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (66; 87% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (6; 8% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (4; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 advcl:relcl	color:blue
1	Ćwiczy	ćwiczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	kilka	kilka	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	3	det:numgov	3:det:numgov	_
3	godzin	godzina	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	obl	1:obl	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
5	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Acc
6	co	co	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	8	obl	8:obl	_
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	_
8	wyrabia	wyrabiać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl:relcl	1:advcl:relcl	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
11	pracy	praca	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 16 advcl:relcl	color:blue
1	Stwierdziły	stwierdzić	VERB	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
3	że	że	SCONJ	comp	_	7	mark	7:mark	_
4	po	po	ADP	prep:acc	AdpType=Prep	5	case	5:case	Case=Acc
5	prostu	prosty	ADJ	adjp	PrepCase=Pre	7	obl	7:obl	_
6	nie	nie	PART	part	Polarity=Neg	7	advmod:neg	7:advmod:neg	_
7	chcą	chcieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:obj	1:ccomp:obj	_
8	dialogować	dialogować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
10	tej	ten	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	11	det	11:det	_
11	sprawie	sprawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl:arg	8:obl:arg	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
13	co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	16	nsubj	16:nsubj	_
14	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
15	rzeczywiście	rzeczywiście	ADV	adv:pos	Degree=Pos	16	parataxis:insert	16:parataxis:insert	_
16	zrozumiałe	zrozumiały	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	advcl:relcl	7:advcl:relcl	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 19 advcl:relcl	color:blue
1	Konkurencja	konkurencja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	skutkuje	skutkować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	niższymi	niski	ADJ	adj:pl:inst:f:com	Case=Ins|Degree=Cmp|Gender=Fem|Number=Plur	4	amod	4:amod	_
4	cenami	cena	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	2	iobj	2:iobj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	lepszą	dobry	ADJ	adj:sg:inst:f:com	Case=Ins|Degree=Cmp|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	jakością	jakość	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	4	conj	2:iobj|4:conj	_
8	usług	usługa	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	7	nmod:arg	7:nmod:arg	_
9	i	i	CCONJ	conj	_	11	cc	11:cc	_
10	większym	duży	ADJ	adj:sg:inst:m3:com	Animacy=Inan|Case=Ins|Degree=Cmp|Gender=Masc|Number=Sing	11	amod	11:amod	_
11	wyborem	wybór	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	conj	2:iobj|4:conj	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	19	punct	19:punct	_
13	dzięki	dzięki	ADP	prep:dat	AdpType=Prep	14	case	14:case	Case=Dat
14	czemu	co	PRON	subst:sg:dat:n:ncol	Case=Dat|Gender=Neut|Number=Sing|PronType=Int	19	nmod	19:nmod	_
15	konsumenci	konsument	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	19	nsubj	19:nsubj	_
16	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	19:cop	_
17	na	na	ADP	prep:loc	AdpType=Prep	19	case	19:case	Case=Loc
18	wygranej	wygrany	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	19	amod	19:amod	_
19	pozycji	pozycja	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	2	advcl:relcl	2:advcl:relcl	SpaceAfter=No
20	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


