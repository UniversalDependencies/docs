---
layout: base
title:  'Statistics of vocative in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `vocative`

This relation is universal.

194 nodes (0%) are attached to their parents as `vocative`.

128 instances of `vocative` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28865979381443.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (99; 51% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (88; 45% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	2	punct	2:punct	_
2	Dziękuję	dziękować	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	panu	pan	NOUN	subst:sg:dat:m1	Case=Dat|Gender=Masc|Number=Sing|SubGender=Masc1	2	iobj	2:iobj	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
5	sierżancie	sierżant	NOUN	subst:sg:voc:m1	Case=Voc|Gender=Masc|Number=Sing|SubGender=Masc1	2	vocative	2:vocative	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 vocative	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	5	punct	5:punct	_
2	Mój	mój	DET	adj:sg:voc:m1:pos	Case=Voc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs|SubGender=Masc1	3	det	3:det	_
3	Boże	Bóg	PROPN	subst:sg:voc:m1	Case=Voc|Gender=Masc|Number=Sing|SubGender=Masc1	5	vocative	5:vocative	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
5	pokonywał	pokonywać	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	mnie	ja	PRON	ppron12:sg:acc:f:pri:akc	Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Variant=Long	5	obj	5:obj	_
7	każdym	każdy	DET	adj:sg:inst:n:pos	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	8	det	8:det	_
8	słowem	słowo	NOUN	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 vocative	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	8	punct	8:punct	_
2	Panie	pan	NOUN	subst:sg:voc:m1	Case=Voc|Gender=Masc|Number=Sing|SubGender=Masc1	8	vocative	8:vocative	_
3	majorze	major	NOUN	subst:sg:voc:m1	Case=Voc|Gender=Masc|Number=Sing|SubGender=Masc1	2	flat	2:flat	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
5	nasza	nasz	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	6	det	6:det	_
6	siatka	siatka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
7	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	_
8	odbudowana	odbudować	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


