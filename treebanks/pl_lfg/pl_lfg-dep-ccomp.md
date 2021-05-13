---
layout: base
title:  'Statistics of ccomp in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pl_lfg-dep-ccomp-obj.html">ccomp:obj</a></tt>.

789 nodes (1%) are attached to their parents as `ccomp`.

783 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92902408111534.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (677; 86% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (54; 7% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (22; 3% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 ccomp	color:blue
1	Ale	ale	CCONJ	conj	_	5	cc	5:cc	_
2	demon	demon	NOUN	subst:sg:nom:m2	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc2	5	nsubj	5:nsubj	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	intuicji	intuicja	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	2	nmod	2:nmod:w	_
5	podpowiada	podpowiadać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	mi	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|SubGender=Masc1|Variant=Short	5	iobj	5:iobj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
8	żeby	żeby	SCONJ	comp	_	11	mark	11:mark	SpaceAfter=No
9	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	11	aux:clitic	11:aux:clitic	_
10	był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	ostrożny	ostrożny	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	5	ccomp	5:ccomp	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Bogumił	Bogumił	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	nsubj	2:nsubj	_
2	zamilkł	zamilknąć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	tak	tak	ADV	adv	PronType=Dem	2	advmod	2:advmod	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
5	że	że	SCONJ	comp	_	7	mark	7:mark	_
6	prawie	prawie	PART	qub	_	7	advmod	7:advmod	_
7	przestał	przestać	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	_
8	oddychać	oddychać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


