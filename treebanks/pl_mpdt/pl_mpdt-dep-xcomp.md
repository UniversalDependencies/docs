---
layout: base
title:  'Statistics of xcomp in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp`

This relation is universal.
There are 3 language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-pred.html">xcomp:pred</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-subj.html">xcomp:subj</a></tt>.

898 nodes (2%) are attached to their parents as `xcomp`.

549 instances of `xcomp` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8195991091314.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (730; 81% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (69; 8% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (25; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (21; 2% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (18; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Inszym	inszy	ADJ	adj:pl:dat:m:pos	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	iobj	3:iobj	Translit=Inszym
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	Translit=nie
3	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=może
4	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	cop	5:cop	Translit=być
5	dobrym	dobry	ADJ	adj:sg:inst:m:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	3:xcomp	SpaceAfter=No|Translit=dobrym
6	/	/	PUNCT	interp	PunctType=Slsh	12	punct	12:punct	Translit=/
7	kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	12	nsubj	12:nsubj	Translit=kto
8	by	by	AUX	part	_	12	aux:cnd	12:aux:cnd	Translit=by
9	sam	sam	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	Translit=sam
10	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	12	iobj	12:iobj	Translit=sobie
11	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	12:cop	Translit=był
12	złym	zły	ADJ	adj:sg:inst:m:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	SpaceAfter=No|Translit=złym
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc|SpaceAfter=No|Translit=W
2	zwierzchownych	zwierzchowny	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	Translit=zwierzchownych
3	także	także	PART	part	_	2	advmod:emph	2:advmod:emph	Translit=tákże
4	ranach	rana	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	9	obl	9:obl	SpaceAfter=No|Translit=ránach
5	/	/	PUNCT	interp	PunctType=Slsh	4	punct	4:punct	Translit=/
6	dobrze	dobrze	ADV	adv:pos	Degree=Pos	0	root	0:root	Translit=dobrze
7	jej	on	PRON	ppron3:sg:gen:f:ter:neut:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	9	obj	9:obj	Translit=iey
8	trunkiem	trunek	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	9	obl	9:obl	Translit=trunkiem
9	używać	używać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp	6:xcomp	SpaceAfter=No|Translit=vżywać
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


