---
layout: base
title:  'Statistics of xcomp:pred in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-subj.html">xcomp:subj</a></tt>.

72 nodes (0%) are attached to their parents as `xcomp:pred`.

43 instances of `xcomp:pred` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93055555555556.

The following 13 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (28; 39% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (25; 35% instances), <tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 7% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 xcomp:pred	color:blue
1	Miłość	miłość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	16:nsubj	SpaceAfter=No|Translit=Miłość
2	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
3	którą	który	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	12	obj	12:obj	Translit=ktorą
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Acc|Translit=przez
5	całe	cały	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	Translit=całe
6	życie	życie	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	12	obl	12:obl	Translit=życie
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc|Translit=w
8	sercu	serce	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	12	obl	12:obl	Translit=sercu
9	moim	mój	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	8	det:poss	8:det:poss	Translit=moim
10	ku	ku	ADP	prep:dat	AdpType=Prep	11	case	11:case	Case=Dat|Translit=ku
11	tobie	ty	PRON	ppron12:sg:dat:sec:akc	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Long	12	obl	12:obl	Translit=tobie
12	nosić	nosić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	1	acl:relcl	1:acl:relcl	Translit=nosić
13	będę	być	AUX	fut:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	12	aux	12:aux	SpaceAfter=No|Translit=będę
14	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
15	moją	mój	DET	adj:sg:inst:f:pos	Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	17	det:poss	17:det:poss	Translit=moią
16	będzie	być	VERB	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=będzie
17	wymówką	wymówka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	16	xcomp:pred	16:xcomp:pred	SpaceAfter=No|Translit=wymowką
18	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp:pred	color:blue
1	Odległość	odległość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	Translit=Odległość
2	Planet	planeta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	nmod:arg	1:nmod:arg	Translit=Planet
3	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Gen|Translit=od
4	ziemi	Ziemia	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod:arg	1:nmod:arg	Translit=ziemi
5	dwojaka	dwojaki	ADJ	adjnum:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	6	xcomp:pred	6:xcomp:pred	Translit=dwoiaka
6	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=iest
7	większa	duży	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	6	xcomp:pred	6:xcomp:pred	SpaceAfter=No|Translit=większa
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
9	i	i	CCONJ	conj	_	10	cc	10:cc	Translit=y
10	mniejsza	mały	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	7	conj	6:xcomp:pred|7:conj	SpaceAfter=No|Translit=mnieysza
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp:pred	color:blue
1	4	4	NUM	dig	NumForm=Digit	11	list	11:list	SpaceAfter=No|Translit=4
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Bo	bo	SCONJ	comp	_	11	mark	11:mark	Translit=Bo
4	aczkolwiek	aczkolwiek	SCONJ	comp	_	5	mark	5:mark	Translit=ácżkolwiek
5	ukrzyżowany	ukrzyżować	ADJ	ppas:sg:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	11	advcl	11:advcl	Translit=ukrzyżowány
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	Translit=jest
7	jako	jako	ADP	prep:nom	AdpType=Prep	5	dep	5:dep	Case=Nom|Translit=jáko
8	słaby	słaby	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	xcomp:pred	7:xcomp:pred	SpaceAfter=No|Translit=słáby
9	/	/	PUNCT	interp	PunctType=Slsh	11	punct	11:punct	Translit=/
10	ale	ale	CCONJ	conj	_	11	cc	11:cc	Translit=ále
11	żywie	żyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=żywie
12	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Gen|Translit=z
13	mocy	moc	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	11	obl	11:obl	Translit=mocy
14	Bożej	boży	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	SpaceAfter=No|Translit=Bożey
15	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	Translit=.

~~~


