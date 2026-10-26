---
layout: base
title:  'Statistics of det:poss in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-det.html">det</a></tt>.

521 nodes (1%) are attached to their parents as `det:poss`.

329 instances of `det:poss` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19769673704415.

The following 4 pairs of parts of speech are connected with `det:poss`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (500; 96% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (18; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 det:poss	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 det:poss	color:blue
1	Aby	aby	SCONJ	comp	_	3	mark	3:mark	Translit=Aby
2	nam	my	PRON	ppron12:pl:dat:pri	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	iobj	3:iobj	Translit=nam
3	dobrze	dobrze	ADV	adv:pos	Degree=Pos	0	root	0:root	Translit=dobrze
4	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	SpaceAfter=No|Translit=było
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
6	gdy	gdy	ADV	adv	_	7	advmod	7:advmod	Translit=gdy
7	usłuchamy	usłuchać	VERB	fin:pl:pri:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	Translit=usłuchamy
8	głosu	głos	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	7	obj	7:obj	Translit=głosu
9	Pana	pan	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	8	nmod	8:nmod	Translit=Páná
10	Boga	Bóg	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	9	appos	9:appos	Translit=Bogá
11	naszego	nasz	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	SpaceAfter=No|Translit=nászégo
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 det:poss	color:blue
1	13	13	NUM	dig	NumForm=Digit	4	list	4:list|15:list	SpaceAfter=No|Translit=13
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Figa	figa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	Translit=Figá
4	wypuściła	wypuścić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=wypuśćiłá
5	niedojźrzałe	niedojźrzały	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	6:amod	Translit=niedoyźrzáłé
6	figi	figa	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	Translit=figi
7	swoje	swój	DET	adj:pl:acc:f:pos	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	6	det:poss	6:det:poss	SpaceAfter=No|Translit=swoie
8	:	:	PUNCT	interp	PunctType=Colo	11	punct	11:punct	Translit=:
9	Winnice	winnica	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	11	nsubj	11:nsubj	Translit=Winnice
10	kwitnące	kwitnąć	ADJ	pact:pl:nom:f:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	9	acl	9:acl	Translit=kwitnącé
11	wydały	wydać	VERB	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	4:conj	Translit=wydáły
12	wonność	wonność	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	11	obj	11:obj	Translit=wonność
13	swoję	swój	DET	adjb:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes|Variant=Short	12	det:poss	12:det:poss	SpaceAfter=No|Translit=swoię
14	:	:	PUNCT	interp	PunctType=Colo	15	punct	15:punct	Translit=:
15	Wstań	wstać	VERB	impt:sg:sec:perf	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	conj	4:conj	Translit=Wstań
16	przyjaciółko	przyjaciółka	NOUN	subst:sg:voc:f	Case=Voc|Gender=Fem|Number=Sing	15	vocative	15:vocative|23:vocative	Translit=przyiaćiołko
17	moja	mój	DET	adj:sg:voc:f:pos	Case=Voc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	16	det:poss	16:det:poss	SpaceAfter=No|Translit=moiá
18	,	,	PUNCT	interp	PunctType=Comm	19	punct	19:punct	Translit=,
19	piękna	piękny	ADJ	adj:sg:voc:f:pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	16	conj	15:vocative|16:conj|23:vocative	Translit=piękna
20	moja	mój	DET	adj:sg:voc:f:pos	Case=Voc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	19	det:poss	19:det:poss	SpaceAfter=No|Translit=moiá
21	,	,	PUNCT	interp	PunctType=Comm	23	punct	23:punct	Translit=,
22	a	a	CCONJ	conj	_	23	cc	23:cc	Translit=á
23	przyjdzi	przyjść	VERB	impt:sg:sec:imperf	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	15	conj	4:conj|15:conj	SpaceAfter=No|Translit=prziydźi
24	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


