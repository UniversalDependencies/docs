---
layout: base
title:  'Statistics of acl in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pl_pdb-dep-acl-relcl.html">acl:relcl</a></tt>.

4767 nodes (1%) are attached to their parents as `acl`.

2747 instances of `acl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05412208936438.

The following 13 pairs of parts of speech are connected with `acl`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4573; 96% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (105; 2% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (28; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (18; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl	color:blue
1	Biała	biały	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	kaczka	kaczka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	stoi	stać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
5	wodzie	woda	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	_
6	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Ins
7	rozpostartymi	rozpostrzeć	ADJ	ppas:pl:inst:n:perf:aff	Aspect=Perf|Case=Ins|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	8	acl	8:acl	_
8	skrzydłami	skrzydło	NOUN	subst:pl:inst:n:ncol	Case=Ins|Gender=Neut|Number=Plur	2	nmod	2:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Funt	Funt	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	doganiał	doganiać	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mnie	ja	PRON	ppron12:sg:acc:f:pri:akc	Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Variant=Long	2	obj	2:obj	_
4	kłusem	kłus	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	obl	2:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	spocony	spocić	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	acl	1:acl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins
9	twarzą	twarz	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	6	conj	1:acl|6:conj	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
11	wypiekach	wypieki	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	9	nmod:arg	9:nmod:arg	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Etap	etap	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	C	C	X	brev:pun	Abbr=Yes	1	nmod	1:nmod	_
3	skurczona	skurczyć	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
4	próbka	próbka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj|11:nsubj	_
5	zaczyna	zaczynać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	1:acl	_
6	zapadać	zapadać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	_
7	się	się	PRON	part	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
8	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Acc
9	dół	dół	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl	6:obl	_
10	i	i	CCONJ	conj	_	11	cc	11:cc	_
11	upłynnia	upłynniać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:acl|5:conj	_
12	się	się	PRON	part	PronType=Prs|Reflex=Yes	11	expl:pv	11:expl:pv	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


