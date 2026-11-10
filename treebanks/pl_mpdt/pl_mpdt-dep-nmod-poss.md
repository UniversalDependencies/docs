---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_mpdt-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_mpdt-dep-nmod-cmp.html">nmod:cmp</a></tt>, <tt><a href="pl_mpdt-dep-nmod-flat.html">nmod:flat</a></tt>.

463 nodes (1%) are attached to their parents as `nmod:poss`.

343 instances of `nmod:poss` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52483801295896.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (204; 44% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (175; 38% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (65; 14% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (14; 3% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:poss	color:blue
1	45	45	NUM	dig	NumForm=Digit	12	list	12:list	SpaceAfter=No|Translit=45
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Ponieważ	ponieważ	SCONJ	comp	_	7	mark	7:mark	Translit=Poniewáż
4	go	on	PRON	ppron3:sg:acc:m:ter:nakc:npraep	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	obj	7:obj	Translit=go
5	tedy	tedy	CCONJ	conj	_	12	cc	12:cc	Translit=tedy
6	Dawid	Dawid	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	Translit=Dawid
7	nazywa	nazywać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	12:advcl	Translit=názywa
8	PAnem	pan	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	7	iobj	7:iobj	SpaceAfter=No|Translit=PAnem
9	/	/	PUNCT	interp	PunctType=Slsh	12	punct	12:punct	Translit=/
10	jakoż	jakoż	ADV	adv	_	12	advmod	12:advmod	Translit=jákoż
11	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	Translit=jest
12	Synem	syn	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	Translit=Synem
13	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	12	nmod:poss	12:nmod:poss	SpaceAfter=No|Translit=jego
14	?	?	PUNCT	interp	PunctType=Qest	12	punct	12:punct	Translit=?

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
4	615	615	NUM	dig	NumForm=Digit	1	nmod	1:nmod	SpaceAfter=No|Translit=615
5	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	4	punct	4:punct	Translit=)
6	Sprawa	sprawa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	Translit=Sprawa
7	Jędrzeja	Jędrzej	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	6	nmod:poss	6:nmod:poss	Translit=Yedrzeia
8	Krótkiego	Krótki	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	7	flat	7:flat	Translit=Krotkiego
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins|Translit=z
10	Wrzecionkami	Wrzecionek	PROPN	subst:pl:inst:m	Case=Ins|Gender=Masc|Number=Plur	6	nmod:arg	6:nmod:arg	SpaceAfter=No|Translit=Wrzecionkami
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


