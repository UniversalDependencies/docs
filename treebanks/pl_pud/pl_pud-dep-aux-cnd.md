---
layout: base
title:  'Statistics of aux:cnd in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `aux:cnd`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="pl_pud-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pud-dep-aux-pass.html">aux:pass</a></tt>.

24 nodes (0%) are attached to their parents as `aux:cnd`.

21 instances of `aux:cnd` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.125.

The following 2 pairs of parts of speech are connected with `aux:cnd`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (21; 88% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (3; 13% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux:cnd	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	wiadomo	wiadomo	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
4	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Acc
5	jaki	jaki	DET	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Int	6	det	6:det	_
6	sposób	sposób	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	obl	11:obl	_
7	dwaj	dwa	NUM	num:pl:nom:m1:congr:ncol	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	8	nummod	8:nummod	_
8	dramaturdzy	dramaturg	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	_
9	mieli	mieć	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
10	by	by	AUX	part	_	9	aux:cnd	9:aux:cnd	_
11	współpracować	współpracować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	9	xcomp	9:xcomp	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 aux:cnd	color:blue
1	Duża	duży	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	wysokość	wysokość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	przyczynia	przyczyniać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	do	do	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen
6	ochłodzenia	ochłodzić	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	3	obl:arg	3:obl:arg	_
7	klimatu	klimat	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obj	6:obj	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
9	który	który	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	16	nsubj	16:nsubj	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc
11	przeciwnym	przeciwny	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	_
12	razie	raz	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	16	obl	16:obl	_
13	był	być	AUX	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
14	by	by	AUX	part	_	16	aux:cnd	16:aux:cnd	_
15	bardzo	bardzo	ADV	adv:pos	Degree=Pos	16	advmod	16:advmod	_
16	gorący	gorący	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	acl:relcl	7:acl:relcl	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


