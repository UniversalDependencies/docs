---
layout: base
title:  'Statistics of acl in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pl_mpdt-dep-acl-relcl.html">acl:relcl</a></tt>.

594 nodes (1%) are attached to their parents as `acl`.

420 instances of `acl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24747474747475.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (524; 88% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (37; 6% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Poszycia	poszycie	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	5	iobj	5:iobj	Translit=Poszycia
2	na	na	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc|Translit=na
3	niej	on	PRON	ppron3:sg:loc:f:ter:neut:praep	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	5	obl	5:obl	Translit=niej
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	masz	mieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=masz
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
7	posowa	posowa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	conj	5:conj	Translit=posowa
8	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen|Translit=z
9	tarcic	tarcica	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	7	nmod	7:nmod	Translit=tarcic
10	rżniętych	rżnąć	ADJ	ppas:pl:gen:f:imperf:aff:pos	Aspect=Imp|Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	9	acl	9:acl	SpaceAfter=No|Translit=rżniętych
11	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	1	1	NUM	dig	NumForm=Digit	3	list	3:list	SpaceAfter=No|Translit=1
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Salem	Salem	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Salem
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
5	potym	potym	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	Translit=potym
6	Akra	Akra	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	iobj	7:iobj	Translit=Akra
7	zwaną	zwać	ADJ	ppas:sg:acc:f:imperf:aff:pos	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	acl	3:acl	SpaceAfter=No|Translit=zwaną
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen|Translit=od
10	Melchisedecha	Melchisedech	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	11	obl:agent	11:obl:agent	Translit=Melchisedecha
11	założoną	założyć	ADJ	ppas:sg:acc:f:perf:aff:pos	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	conj	3:acl|7:conj	SpaceAfter=No|Translit=założoną
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 acl	color:blue
1	Toskański	toskański	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	Translit=Toskański
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Translit=iest
3	najprostszy	prosty	ADJ	adj:sg:nom:m:sup	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	0	root	0:root	Translit=nayprostszy
4	siedm	siedm	NUM	num:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word	5	nummod:gov	5:nummod:gov	Translit=siedm
5	śrzednic	śrzednica	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	11	iobj	11:iobj	Translit=śrzednic
6	grubości	grubość	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod:arg	5:nmod:arg	Translit=grubości
7	swego	swój	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det:poss	8:det:poss	Translit=swego
8	słupa	słup	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod	Translit=słupa
9	na	na	ADP	prep:acc	AdpType=Prep	10	case	10:case	Case=Acc|Translit=na
10	wysokość	wysokość	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	11	obl	11:obl	Translit=wysokość
11	mający	mieć	ADJ	pact:sg:nom:m:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	1	acl	1:acl	SpaceAfter=No|Translit=maiący
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


