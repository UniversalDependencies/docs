---
layout: base
title:  'Statistics of det:poss in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pdb-dep-det-nummod.html">det:nummod</a></tt>.

1687 nodes (0%) are attached to their parents as `det:poss`.

1651 instances of `det:poss` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18790752815649.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1666; 99% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (18; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det:poss	color:blue
1	Beata	Beata	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	nigdy	nigdy	ADV	adv	PronType=Neg	4	advmod	4:advmod	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	zobaczyła	zobaczyć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	swojego	swój	DET	adj:sg:gen:m2:pos	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det:poss	7:det:poss	_
6	wydrukowanego	wydrukować	ADJ	ppas:sg:gen:m2:perf:aff	Animacy=Nhum|Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	acl	7:acl	_
7	Aniołka	aniołek	NOUN	subst:sg:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Sing	4	obj	4:obj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:poss	color:blue
1	Oto	oto	PART	part	_	5	advmod	5:advmod	_
2	nagle	nagle	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	gazecie	gazeta	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	obl	5:obl	_
5	spotkał	spotkać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	5	aux:clitic	5:aux:clitic	_
7	naszą	nasz	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det:poss	8:det:poss	_
8	Kassandrę	Kassandra	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:poss	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	3	punct	3:punct	_
2	Czy	czy	PART	part	PartType=Int	3	advmod	3:advmod	_
3	mam	mieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj	_
5	potraktować	potraktować	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
6	jako	jako	SCONJ	comp	ConjType=Pred	7	mark	7:mark	_
7	lekcję	lekcja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	moja	mój	DET	adj:sg:voc:f:pos	Case=Voc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	_
10	droga	drogi	ADJ	adj:sg:voc:f:pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	3	vocative	3:vocative	SpaceAfter=No
11	?	?	PUNCT	interp	PunctType=Qest	3	punct	3:punct	_

~~~


