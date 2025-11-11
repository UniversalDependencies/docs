---
layout: base
title:  'Statistics of xcomp:subj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp:subj`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-pred.html">xcomp:pred</a></tt>.

37 nodes (0%) are attached to their parents as `xcomp:subj`.

23 instances of `xcomp:subj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64864864864865.

The following 5 pairs of parts of speech are connected with `xcomp:subj`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (23; 62% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (8; 22% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp:subj	color:blue
1	Na	na	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc|Translit=Na
2	dwu	dwa	NUM	num:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur|NumForm=Word	3	nummod	3:nummod	Translit=dwu
3	rzeczach	rzecz	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	5	obl:arg	5:obl:arg	Translit=rzeczach
4	potym	potym	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	Translit=potym
5	zeszło	zejść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=zeszło
6	J	jego	ADV	brev:pun	Abbr=Yes	5	xcomp:subj	5:xcomp:subj	SpaceAfter=No|Translit=J
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.
8	K	królewski	ADV	brev:pun	Abbr=Yes	6	flat	6:flat	SpaceAfter=No|Translit=K
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	Translit=.
10	M	mość	ADV	brev:pun	Abbr=Yes	6	flat	6:flat	SpaceAfter=No|Translit=M
11	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	Translit=.
12	potym	potym	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	Translit=potym
13	s	s	X	ign	Foreign=Yes	12	obl	12:obl	SpaceAfter=No|Translit=s
14	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 xcomp:subj	color:blue
1	CUdowne	cudowny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	3	amod	3:amod	Translit=CUdowne
2	Dyszkurować	dyszkurować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	Translit=dyszkurowáć
3	rzeczy	rzecz	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	SpaceAfter=No|Translit=rzeczy
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	Translit=iest
6	jedno	jedno	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=iedno
7	co	co	SCONJ	comp	_	9	mark	9:mark	Translit=co
8	cudaki	cudak	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	9	obj	9:obj	Translit=cudaki
9	prawić	prawić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	advcl:cmpr	6:advcl:cmpr	SpaceAfter=No|Translit=práwić
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 xcomp:subj	color:blue
1	Niemała	niemały	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	Translit=Nie máła
2	Mądrość	mądrość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Mądrość
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
4	mądrze	mądrze	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	Translit=mądrze
5	mówić	mówić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp:subj	2:xcomp:subj	SpaceAfter=No|Translit=mowić
6	;	;	PUNCT	interp	PunctType=Semi	8	punct	8:punct	Translit=;
7	lecz	lecz	CCONJ	conj	_	8	cc	8:cc	Translit=lecz
8	największa	duży	ADJ	adj:sg:nom:f:sup	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	2	conj	2:conj	SpaceAfter=No|Translit=naywiększa
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
10	MĄDRZE	mądrze	ADV	adv:pos	Degree=Pos	11	advmod	11:advmod	Translit=MADRZE
11	Czynić	czynić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp:subj	8:xcomp:subj	SpaceAfter=No|Translit=CZYNIC
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


