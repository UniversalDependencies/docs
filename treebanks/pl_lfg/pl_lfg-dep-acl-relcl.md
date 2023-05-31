---
layout: base
title:  'Statistics of acl:relcl in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-acl.html">acl</a></tt>.

130 nodes (0%) are attached to their parents as `acl:relcl`.

130 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.87692307692308.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (96; 74% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (11; 8% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (11; 8% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Dawno	dawno	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	_
2	minęli	minąć	VERB	praet:pl:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	śmy	być	AUX	aglt:pl:pri:imperf:nwok	Aspect=Imp|Number=Plur|Person=1|Variant=Short	2	aux:clitic	2:aux:clitic	_
4	wzgórze	wzgórze	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	2	obj	2:obj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	którym	który	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	8	obl	8:obl:na	_
8	pożegnał	pożegnać	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	SpaceAfter=No
9	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	8	aux:clitic	8:aux:clitic	_
10	Cavalerra	Cavalerr	PROPN	subst:sg:acc:m1	Case=Acc|Gender=Masc|Number=Sing|SubGender=Masc1	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Pamiętam	pamiętać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tylko	tylko	PART	qub	_	3	advmod	3:advmod	_
3	te	ten	DET	adj:pl:acc:m3:pos	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem|SubGender=Masc3	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
5	które	który	DET	adj:pl:nom:m3:pos	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel|SubGender=Masc3	9	nsubj	9:nsubj	_
6	mi	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|SubGender=Masc1|Variant=Short	9	iobj	9:iobj	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	9	expl:pv	9:expl:pv	_
8	bardziej	bardzo	ADV	adv:com	Degree=Cmp	9	advmod	9:advmod	_
9	podobają	podobać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Przywołał	przywołać	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	eś	być	AUX	aglt:sg:sec:imperf:wok	Aspect=Imp|Number=Sing|Person=2|Variant=Long	1	aux:clitic	1:aux:clitic	_
3	Michała	Michał	PROPN	subst:sg:acc:m1	Case=Acc|Gender=Masc|Number=Sing|SubGender=Masc1	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	który	który	DET	adj:sg:nom:m1:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel|SubGender=Masc1	6	nsubj	6:nsubj	_
6	galopował	galopować	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	_
7	gdzieś	gdzieś	ADV	adv	PronType=Ind	9	advmod	9:advmod	_
8	przed	przed	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins
9	nami	my	PRON	ppron12:pl:inst:m1:pri	Case=Ins|Gender=Masc|Number=Plur|Person=1|PronType=Prs|SubGender=Masc1	6	obl	6:obl:przed	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


