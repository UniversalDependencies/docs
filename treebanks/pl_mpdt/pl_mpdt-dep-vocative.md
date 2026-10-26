---
layout: base
title:  'Statistics of vocative in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `vocative`

This relation is universal.

100 nodes (0%) are attached to their parents as `vocative`.

54 instances of `vocative` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.67.

The following 14 pairs of parts of speech are connected with `vocative`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (52; 52% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (23; 23% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (8; 8% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 vocative	color:blue
1	Ah	ach	INTJ	interj	_	3	discourse:intj	3:discourse:intj	Translit=Ah
2	Matulu	matula	NOUN	subst:sg:voc:f	Case=Voc|Gender=Fem|Number=Sing	3	vocative	3:vocative	Translit=Matulu
3	poczekaj	poczekać	VERB	impt:sg:sec:perf	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=poczekay
4	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	8	punct	8:punct	Translit=…
5	ja	ja	PRON	ppron12:sg:nom:pri	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	8:nsubj	Translit=ia
6	cię	ty	PRON	ppron12:sg:gen:sec:nakc	Case=Gen|Number=Sing|Person=2|PronType=Prs|Variant=Short	8	obj	8:obj	Translit=cię
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	Translit=nie
8	odstąpię	odstąpić	VERB	fin:sg:pri:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	3	conj	3:conj	Translit=odstąpię
9	do	do	ADP	prep:gen	AdpType=Prep	10	case	10:case	Case=Gen|Translit=do
10	śmierci	śmierć	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl	SpaceAfter=No|Translit=śmierci
11	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	SpaceAfter=No|Translit=.
12	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	SpaceAfter=No|Translit=.
13	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 vocative	color:blue
1	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Gen|SpaceAfter=No|Translit=z
2	-	-	PUNCT	interp	PunctType=Dash	3	punct	3:punct	SpaceAfter=No|Translit=-
3	krajów	kraj	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	9	nmod	9:nmod	Translit=kráiow
4	MałoPolskich	małopolski	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	3	amod	3:amod	SpaceAfter=No|Translit=MáłoPolskch
5	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	Translit=,
6	gdzie	gdzie	PART	part	_	8	advmod	8:advmod	Translit=gdźie
7	ście	być	AUX	aglt:pl:sec:imperf:nwok	Aspect=Imp|Number=Plur|Person=2|Variant=Short	8	aux:clitic	8:aux:clitic	Translit=śćie
8	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=są
9	Tęczyńscy	Tęczyński	PROPN	subst:pl:voc:manim1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Plur	8	vocative	8:vocative	SpaceAfter=No|Translit=Tęczyńscy
10	?	?	PUNCT	interp	PunctType=Qest	8	punct	8:punct	Translit=?

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 vocative	color:blue
1	Prawosł	prawosławny	ADV	brev:pun	Abbr=Yes	3	advmod	3:advmod	SpaceAfter=No|Translit=Prawosł
2	:	:	PUNCT	interp	PunctType=Colo	1	punct	1:punct	Translit=:
3	Czytel	czytelnik	ADV	brev:pun	Abbr=Yes	6	vocative	6:vocative|11:vocative|15:vocative	SpaceAfter=No|Translit=Czytel
4	:	:	PUNCT	interp	PunctType=Colo	3	punct	3:punct	Translit=:
5	Strus	strus	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj|11:nsubj|15:nsubj	Translit=Strus
6	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=ma
7	skrzydła	skrzydło	NOUN	subst:pl:acc:n	Case=Acc|Gender=Neut|Number=Plur	6	iobj	6:iobj	SpaceAfter=No|Translit=skrzydłá
8	/	/	PUNCT	interp	PunctType=Slsh	11	punct	11:punct	Translit=/
9	latać	latać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	11	xcomp	11:xcomp	Translit=latać
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	Translit=nie
11	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	6:conj	SpaceAfter=No|Translit=może
12	/	/	PUNCT	interp	PunctType=Slsh	15	punct	15:punct	Translit=/
13	także	także	PART	part	_	15	advmod:emph	15:advmod:emph	Translit=tákże
14	i	i	PART	part	_	15	advmod:emph	15:advmod:emph	Translit=y
15	pyszny	pyszny	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	conj	6:conj	SpaceAfter=No|Translit=pyszny
16	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


