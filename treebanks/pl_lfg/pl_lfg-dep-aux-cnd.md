---
layout: base
title:  'Statistics of aux:cnd in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `aux:cnd`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_lfg-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_lfg-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_lfg-dep-aux-pass.html">aux:pass</a></tt>.

346 nodes (0%) are attached to their parents as `aux:cnd`.

268 instances of `aux:cnd` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26011560693642.

The following 5 pairs of parts of speech are connected with `aux:cnd`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (320; 92% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (20; 6% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:cnd	color:blue
1	Aby	aby	SCONJ	comp	_	3	mark	3:mark	_
2	mnie	ja	PRON	ppron12:sg:acc:m1:pri:akc	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs|SubGender=Masc1|Variant=Long	3	obj	3:obj	_
3	zamordować	zamordować	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	5	ccomp	5:ccomp	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	_
5	wystarczyło	wystarczyć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	by	by	AUX	qub	Mood=Cnd	5	aux:cnd	5:aux:cnd	_
7	dwóch	dwa	NUM	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc1	8	nummod	8:nummod	DepType=Rec
8	żołnierzy	żołnierz	NOUN	subst:pl:gen:m1	Case=Gen|Gender=Masc|Number=Plur|SubGender=Masc1	5	nsubj	5:nsubj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:cnd	color:blue
1	Bogart	Bogart	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
2	był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	SpaceAfter=No
3	by	by	AUX	qub	Mood=Cnd	4	aux:cnd	4:aux:cnd	_
4	zdziwiony	zdziwiony	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:cnd	color:blue
1	Był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	SpaceAfter=No
2	by	by	AUX	qub	Mood=Cnd	4	aux:cnd	4:aux:cnd	_
3	znakomitym	znakomity	ADJ	adj:sg:inst:m1:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	4	amod	4:amod	_
4	pedagogiem	pedagog	NOUN	subst:sg:inst:m1	Case=Ins|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	_
5	uwielbianym	uwielbiać	ADJ	ppas:sg:inst:m1:imperf:aff	Aspect=Imp|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc1|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
6	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Acc
7	studentów	student	NOUN	subst:pl:acc:m1	Case=Acc|Gender=Masc|Number=Plur|SubGender=Masc1	5	obl:agent	5:obl:agent	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


