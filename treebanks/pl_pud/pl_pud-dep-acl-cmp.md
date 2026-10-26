---
layout: base
title:  'Statistics of acl:cmp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `acl:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="pl_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

7 nodes (0%) are attached to their parents as `acl:cmp`.

7 instances of `acl:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `acl:cmp`: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 acl:cmp	color:blue
1	Caplan	Caplan	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	odrzuca	odrzucać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	głosowanie	głosowanie	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	2	obj	2:obj	_
4	retrospektywne	retrospektywny	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	3	amod	3:amod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	cytując	cytować	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	2	advcl	2:advcl	_
7	naukowców	naukowiec	NOUN	subst:pl:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	którzy	który	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	10	nsubj	10:nsubj	_
10	określili	określić	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	_
11	je	on	PRON	ppron3:pl:acc:n:ter:akc:npraep	Case=Acc|Gender=Neut|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	obj	10:obj	_
12	jako	jako	SCONJ	comp	ConjType=Pred	16	mark	16:mark	_
13	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	16	punct	16:punct	SpaceAfter=No
14	nie	nie	PART	part	Polarity=Neg	15	advmod:neg	15:advmod:neg	_
15	bardziej	bardzo	ADV	adv:com	Degree=Cmp	16	advmod	16:advmod	_
16	racjonalne	racjonalny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	10	obl	10:obl	SpaceAfter=No
17	,	,	PUNCT	interp	PunctType=Comm	19	punct	19:punct	_
18	niż	niż	SCONJ	comp	ConjType=Comp	19	mark	19:mark	_
19	zabijanie	zabijać	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	16	acl:cmp	16:acl:cmp	_
20	faraona	faraon	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	19	obj	19:obj	SpaceAfter=No
21	,	,	PUNCT	interp	PunctType=Comm	25	punct	25:punct	_
22	gdy	gdy	ADV	adv	_	25	advmod	25:advmod	_
23	Nil	Nil	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	25	nsubj	25:nsubj	_
24	nie	nie	PART	part	Polarity=Neg	25	advmod:neg	25:advmod:neg	_
25	wylał	wylać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	19	acl:relcl	19:acl:relcl	SpaceAfter=No
26	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	16	punct	16:punct	SpaceAfter=No
27	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:cmp	color:blue
1	Gdy	gdy	ADV	adv	_	2	advmod	2:advmod	_
2	narasta	narastać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	10:advcl	_
3	histeria	histeria	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
4	wokół	wokół	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen
5	wyborów	wybory	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	3	nmod	3:nmod	_
6	prezydenckich	prezydencki	ADJ	adj:pl:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	5	amod	5:amod	_
7	2016	2016	X	dig	NumForm=Digit	5	amod	5:amod	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
9	Karel	Karel	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	10	iobj	10:iobj	_
10	martwi	martwić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	coś	coś	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	10	nsubj	10:nsubj	_
12	poważniejszego	poważny	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	11	amod	11:amod	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	_
14	niż	niż	SCONJ	comp	ConjType=Comp	15	mark	15:mark	_
15	bzdury	bzdura	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	11	acl:cmp	11:acl:cmp	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 acl:cmp	color:blue
1	Zwrócił	zwrócić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	również	również	PART	part	_	1	advmod:emph	1:advmod:emph	_
3	uwagę	uwaga	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
5	że	że	SCONJ	comp	_	10	mark	10:mark	_
6	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	10	punct	10:punct	SpaceAfter=No
7	istnienie	istnieć	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	nsubj	10:nsubj	_
8	takiego	taki	DET	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	9	det	9:det	_
9	dokumentu	dokument	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:arg	7:nmod:arg	_
10	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	_
11	mieć	mieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	_
12	konsekwencje	konsekwencja	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	11	iobj	11:iobj	_
13	równie	równie	ADV	adv:pos	Degree=Pos	14	advmod	14:advmod	_
14	prawdopodobne	prawdopodobny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	12	amod	12:amod	SpaceAfter=No
15	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
16	co	co	SCONJ	comp	_	17	mark	17:mark	_
17	nieakceptowalne	nieakceptowalny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	14	acl:cmp	14:acl:cmp	SpaceAfter=No
18	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	10	punct	10:punct	SpaceAfter=No
19	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


