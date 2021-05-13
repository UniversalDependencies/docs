---
layout: base
title:  'Statistics of mark in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `mark`

This relation is universal.

1852 nodes (1%) are attached to their parents as `mark`.

1852 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.50647948164147.

The following 13 pairs of parts of speech are connected with `mark`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (1342; 72% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (306; 17% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (101; 5% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (44; 2% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (26; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (7; 0% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	pan	pan	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
3	poseł	poseł	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	flat	2:flat	_
4	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	że	że	SCONJ	comp	_	8	mark	8:mark	_
7	nie	nie	PART	qub	Polarity=Neg	8	advmod	8:advmod	_
8	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:obj	4:ccomp:obj	_
9	Polski	Polska	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl	_
10	zaściankowej	zaściankowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	9	acl	9:acl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	Aga	Aga	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	cały	cały	ADJ	adj:sg:acc:m3:pos	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	3	amod	3:amod	_
3	czas	czas	NOUN	subst:sg:acc:m3	Case=Acc|Gender=Masc|Number=Sing|SubGender=Masc3	4	obl	4:obl	_
4	pyta	pytać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
6	czy	czy	PART	qub	PartType=Int	10	mark	10:mark	_
7	nie	nie	PART	qub	Polarity=Neg	10	advmod	10:advmod	_
8	będę	być	AUX	bedzie:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	10	aux	10:aux	_
9	się	się	PRON	qub	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
10	nudził	nudzić	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 mark	color:blue
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


