---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="pl_mpdt-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_mpdt-dep-nmod-flat.html">nmod:flat</a></tt>.

326 nodes (1%) are attached to their parents as `nmod:poss`.

248 instances of `nmod:poss` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52453987730061.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (144; 44% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (129; 40% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (39; 12% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (11; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	2	nsubj	2:nsubj|7:nsubj	Translit=Kto
2	wierzy	wierzyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=wierzy
3	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Acc|Translit=w
4	Chrystusa	Chrystus	PROPN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg	SpaceAfter=No|Translit=Chrystusá
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
6	a	a	CCONJ	conj	_	7	cc	7:cc	Translit=á
7	wstydzi	wstydzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj	Translit=wstydzi
8	się	się	PRON	part	PronType=Prs|Reflex=Yes	7	expl:pv	7:expl:pv	Translit=się
9	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod:poss	10:nmod:poss	Translit=iego
10	Ewangeliej	ewangelia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	iobj	7:iobj	SpaceAfter=No|Translit=Ewangeliey
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:poss	color:blue
1	Proszę	prosić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis:insert	4:parataxis:insert	Translit=Proszę
2	cię	ty	PRON	ppron12:sg:acc:sec:nakc	Case=Acc|Number=Sing|Person=2|PronType=Prs|Variant=Short	1	obj	1:obj	Translit=cię
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	SpaceAfter=No|Translit=nie
4	wiesz	wiedzieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=wiesz
5	że	ż	PART	part:wok	_	4	advmod:emph	4:advmod:emph	Translit=że
6	nic	nic	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	4	iobj	4:iobj	Translit=nic
7	o	o	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc|Translit=o
8	Losach	los	NOUN	subst:pl:loc:m	Case=Loc|Gender=Masc|Number=Plur	4	obl:arg	4:obl:arg	Translit=Losach
9	Królowy	królowa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	nmod:poss	8:nmod:poss	SpaceAfter=No|Translit=Krolowy
10	!	!	PUNCT	interp	PunctType=Excl	4	punct	4:punct	Translit=!

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:poss	color:blue
1	3285	3285	NUM	dig	NumForm=Digit	6	list	6:list	SpaceAfter=No|Translit=3285
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	4	punct	4:punct	SpaceAfter=No|Translit=(
4	615	615	NUM	dig	NumForm=Digit	1	amod	1:amod	SpaceAfter=No|Translit=615
5	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	4	punct	4:punct	Translit=)
6	Sprawa	sprawa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	Translit=Sprawa
7	Jędrzeja	Jędrzej	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	6	nmod:poss	6:nmod:poss	Translit=Yedrzeia
8	Krótkiego	Krótki	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	7	flat	7:flat	Translit=Krotkiego
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins|Translit=z
10	Wrzecionkami	Wrzecionek	PROPN	subst:pl:inst:m	Case=Ins|Gender=Masc|Number=Plur	6	nmod:arg	6:nmod:arg	SpaceAfter=No|Translit=Wrzecionkami
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


