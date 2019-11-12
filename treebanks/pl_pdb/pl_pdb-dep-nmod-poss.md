---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pdb-dep-nmod-pred.html">nmod:pred</a></tt>.

55 nodes (0%) are attached to their parents as `nmod:poss`.

38 instances of `nmod:poss` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14545454545455.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (23; 42% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (14; 25% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (13; 24% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Zdaniem	zdanie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	3	parataxis:insert	3:parataxis:insert	_
2	specjalistów	specjalista	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	1	nmod:poss	1:nmod:poss	_
3	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	pomóc	pomóc	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	zmiana	zmiana	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
6	prawa	prawo	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	5	nmod:arg	5:nmod:arg	_
7	budowlanego	budowlany	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod:poss	2:nmod:poss	_
2	zdaniem	zdanie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	3	parataxis:insert	3:parataxis:insert	_
3	zabrakło	zabraknąć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	informacji	informacja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
5	kiedy	kiedy	ADV	adv	PronType=Rel	8	advmod	8:advmod	_
6	awaria	awaria	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
7	zostanie	zostać	AUX	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	_
8	usunięta	usunąć	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl:relcl	4:acl:relcl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Postulaty	postulat	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	5:obj	_
2	protestujących	protestować	ADJ	pact:pl:gen:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	1	nmod:poss	1:nmod:poss	_
3	zarząd	zarząd	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
4	miasta	miasto	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	nmod	3:nmod	_
5	uznał	uznać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	za	za	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc
7	bezzasadne	bezzasadny	ADJ	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	obl:arg	5:obl:arg	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


