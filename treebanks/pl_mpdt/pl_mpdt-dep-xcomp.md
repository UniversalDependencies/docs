---
layout: base
title:  'Statistics of xcomp in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp`

This relation is universal.
There are 3 language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-pred.html">xcomp:pred</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-subj.html">xcomp:subj</a></tt>.

721 nodes (2%) are attached to their parents as `xcomp`.

434 instances of `xcomp` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88488210818308.

The following 15 pairs of parts of speech are connected with `xcomp`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (590; 82% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (53; 7% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (18; 2% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (17; 2% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (16; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Oporni	oporny	NOUN	subst:pl:nom:manim1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	15	nsubj	15:nsubj	Translit=Oporni
2	zaś	zaś	CCONJ	conj	_	15	cc	15:cc	Translit=zaś
3	i	i	CCONJ	conj	_	4	cc	4:cc	Translit=i
4	niechcący	chcieć	ADJ	pact:pl:nom:manim1:imperf:neg:pos	Animacy=Hum|Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg|VerbForm=Part|Voice=Act	1	conj	1:conj|15:nsubj	Translit=niechcący
5	onych	on	ADJ	adj:pl:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	6	obj	6:obj	Translit=onych
6	przyjmować	przyjmować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	SpaceAfter=No|Translit=przyymować
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
8	jako	jako	ADP	prep:nom	AdpType=Prep	13	dep	13:dep	Case=Nom|Translit=iako
9	przeciwni	przeciwny	ADJ	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	8	xcomp:pred	8:xcomp:pred	Translit=przeciwni
10	powstaniu	powstanie	NOUN	subst:sg:dat:n	Case=Dat|Gender=Neut|Number=Sing	9	obl:arg	9:obl:arg	Translit=powstaniu
11	narodowemu	narodowy	ADJ	adj:sg:dat:n:pos	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	SpaceAfter=No|Translit=narodowemu
12	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
13	uważani	uważać	ADJ	ppas:pl:nom:manim1:imperf:aff:pos	Animacy=Hum|Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	15	ccomp	15:ccomp	Translit=uważani
14	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	13	aux:pass	13:aux:pass	Translit=być
15	mają	mieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=maią
16	.	.	PUNCT	interp	PunctType=Peri	15	punct	15:punct	Translit=.

~~~


