---
layout: base
title:  'Statistics of nsubj:pass in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-nsubj.html">nsubj</a></tt>.

256 nodes (0%) are attached to their parents as `nsubj:pass`.

221 instances of `nsubj:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.84765625.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (211; 82% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (28; 11% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (11; 4% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	Aż	aż	SCONJ	comp	_	7	mark	7:mark	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
3	końcu	koniec	NOUN	subst:sg:loc:m3	Case=Loc|Gender=Masc|Number=Sing|SubGender=Masc3	7	obl	7:obl:w	_
4	podział	podział	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	7	nsubj:pass	7:nsubj:pass	_
5	ten	ten	DET	adj:sg:nom:m3:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem|SubGender=Masc3	4	det	4:det	_
6	został	zostać	AUX	praet:sg:m3:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	przezwyciężony	przezwyciężyć	ADJ	ppas:sg:nom:m3:perf:aff	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc3|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	I	i	PART	qub	_	2	advmod	2:advmod	_
2	ja	ja	PRON	ppron12:sg:nom:m1:pri	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs|SubGender=Masc1	4	nsubj:pass	4:nsubj:pass	_
3	jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	zaburzony	zaburzyć	ADJ	ppas:sg:nom:m1:perf:aff	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc1|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nsubj:pass	color:blue
1	Razem	razem	ADV	adv	_	3	advmod	3:advmod	_
2	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Ins
3	nim	on	PRON	ppron3:sg:inst:m1:ter:akc:praep	Case=Ins|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|SubGender=Masc1|Variant=Long	4	obl	4:obl:z	_
4	ułaskawiony	ułaskawić	ADJ	ppas:sg:nom:m1:perf:aff	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc1|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	został	zostać	AUX	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
6	Landowski	Landowski	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj:pass	4:nsubj:pass	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


