---
layout: base
title:  'Statistics of aux in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux`

This relation is universal.
There are 4 language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_mpdt-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_mpdt-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_mpdt-dep-aux-pass.html">aux:pass</a></tt>.

154 nodes (0%) are attached to their parents as `aux`.

89 instances of `aux` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93506493506494.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (119; 77% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (20; 13% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (10; 6% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	SpaceAfter=No|Translit=Nie
2	przydał	przydać	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=przydał
3	by	by	AUX	part	_	2	aux:cnd	2:aux:cnd	Translit=by
4	był	być	AUX	plusq:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	aux	2:aux	Translit=był
5	że	że	SCONJ	comp	_	7	mark	7:mark	Translit=że
6	on	on	PRON	ppron3:sg:nom:m:ter:neut:npraep	Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	nsubj	7:nsubj	Translit=on
7	Dobry	dobry	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	ccomp:obj	2:ccomp:obj	SpaceAfter=No|Translit=Dobry
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	gdyby	gdyby	SCONJ	comp	_	11	mark	11:mark	Translit=gdyby
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	Translit=nie
11	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	Translit=było
12	pasterzów	pasterz	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	11	nsubj	11:nsubj	Translit=pásterzow
13	złych	zły	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	SpaceAfter=No|Translit=złych
14	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Żydówko	Żydówka	PROPN	subst:sg:voc:f	Case=Voc|Gender=Fem|Number=Sing	9	vocative	9:vocative	Translit=Zydowko
2	niegodna	niegodny	ADJ	adj:sg:voc:f:pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	1	amod	1:amod	Translit=niegodna
3	i	i	CCONJ	conj	_	4	cc	4:cc	Translit=i
4	obrzydła	obrzydły	ADJ	adj:sg:voc:f:pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	2	conj	1:amod|2:conj	SpaceAfter=No|Translit=obrzydła
5	!	!	PUNCT	interp	PunctType=Excl	1	punct	1:punct	Translit=!
6	twoje	twój	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	9	det:poss	9:det:poss	Translit=twoie
7	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	9	cop	9:cop	Translit=to
8	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	Translit=są
9	sztuki	sztuka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	0	root	0:root	SpaceAfter=No|Translit=sztuki
10	!	!	PUNCT	interp	PunctType=Excl	9	punct	9:punct	Translit=!

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	NAd	nad	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Acc|Translit=NAd
2	oczy	oko	NOUN	subst:du:acc:n	Case=Acc|Gender=Neut|Number=Dual	7	obl:cmp	7:obl:cmp	Translit=oczy
3	cóż	cóż	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	5	obj	5:obj	Translit=coż
4	wżdy	wżdy	ADV	adv	_	5	advmod	5:advmod	Translit=wżdy
5	stworzono	stworzyć	ADJ	ppasb:sg:nom:n:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	Translit=stworzono
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	Translit=iest
7	gorszego	zły	ADJ	adj:sg:gen:n:com	Case=Gen|Degree=Cmp|Gender=Neut|Number=Sing	3	amod	3:amod	SpaceAfter=No|Translit=gorszego
8	?	?	PUNCT	interp	PunctType=Qest	5	punct	5:punct	Translit=?

~~~


