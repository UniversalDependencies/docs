---
layout: base
title:  'Statistics of nmod:arg in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

576 nodes (3%) are attached to their parents as `nmod:arg`.

573 instances of `nmod:arg` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30034722222222.

The following 12 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (459; 80% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (78; 14% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="pl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:arg	color:blue
1	Obecny	obecny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	czas	czas	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	oczekiwania	oczekiwać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nmod:arg	2:nmod:arg	_
4	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
5	osiem	osiem	NUM	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	6	nummod:gov	6:nummod:gov	_
6	tygodni	tydzień	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:arg	color:blue
1	Do	do	ADP	prep:gen	AdpType=Prep	3	case	3:case	Case=Gen
2	1563	1563	X	dig	NumForm=Digit	3	nmod:flat	3:nmod:flat	_
3	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	7	obl	7:obl	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
5	populacja	populacja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
6	Wenecji	Wenecja	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod:arg	5:nmod:arg	_
7	spadła	spaść	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	do	do	ADP	prep:gen	AdpType=Prep	11	case	11:case	Case=Gen
9	około	około	PART	part	_	11	advmod	11:advmod	_
10	168000	168000	NUM	num:pl:gen:f:congr	Case=Gen|Gender=Fem|Number=Plur|NumForm=Digit|NumType=Card	11	nummod	11:nummod	_
11	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	7	obl	7:obl	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 nmod:arg	color:blue
1	Największy	duży	ADJ	adj:sg:nom:m3:sup	Animacy=Inan|Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	wymiar	wymiar	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	13:nsubj	_
3	grzywny	grzywna	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod:arg	2:nmod:arg	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
5	jaką	jaki	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|PronType=Int	9	obj	9:obj	_
6	RECO	RECO	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
7	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	2:acl:relcl	_
8	obecnie	obecnie	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	_
9	nałożyć	nałożyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
10	na	na	ADP	prep:acc	AdpType=Prep	11	case	11:case	Case=Acc
11	agenta	agent	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	9	obl:arg	9:obl:arg	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
13	wynosi	wynosić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
14	25000	25000	X	dig	NumForm=Digit	13	iobj	13:iobj	_
15	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	14	nmod:arg	14:nmod:arg	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	13	punct	13:punct	_

~~~


