---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-nmod.html">nmod</a></tt>.

2347 nodes (2%) are attached to their parents as `nmod:poss`.

1930 instances of `nmod:poss` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1989774179804.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1462; 62% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (446; 19% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (401; 17% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (25; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:poss	color:blue
1	Ale	ale	CCONJ	conj	_	3	cc	3:cc	_
2	gazety	gazeta	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	piszą	pisać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	nie	nie	PART	qub	Polarity=Neg	7	advmod	7:advmod	_
5	tylko	tylko	PART	qub	_	7	advmod	7:advmod	_
6	o	o	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	osiągnięciach	osiągnięcie	NOUN	subst:pl:loc:n	Case=Loc|Gender=Neut|Number=Plur	3	obl	3:obl:o	_
8	swoich	swój	DET	adj:pl:gen:m1:pos	Case=Gen|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes|SubGender=Masc1	9	det	9:det	_
9	pięściarzy	pięściarz	NOUN	subst:pl:gen:m1	Case=Gen|Gender=Masc|Number=Plur|SubGender=Masc1	7	nmod:poss	7:nmod:poss	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	Ale	ale	CCONJ	conj	_	4	cc	4:cc	_
2	przedstawiciele	przedstawiciel	NOUN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	4	nsubj	4:nsubj	_
3	LOT-u	LOT	PROPN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	2	nmod:poss	2:nmod:poss	_
4	twierdzą	twierdzić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	że	że	SCONJ	comp	_	7	mark	7:mark	_
7	to	to	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	ccomp	4:ccomp	_
8	czysty	czysty	ADJ	adj:sg:nom:m3:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	9	amod	9:amod	_
9	przypadek	przypadek	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	7	nsubj	7:nsubj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Ale	ale	CCONJ	conj	_	5	cc	5:cc	_
2	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Long	3	nmod:poss	3:nmod:poss	_
3	siostrę	siostra	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
4	trochę	trochę	ADV	adv	_	5	advmod	5:advmod	_
5	osłabił	osłabić	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


