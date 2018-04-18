---
layout: base
title:  'Statistics of expl:impers in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `expl:impers`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="pl_lfg-dep-expl-pv.html">expl:pv</a></tt>.

146 nodes (0%) are attached to their parents as `expl:impers`.

101 instances of `expl:impers` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29452054794521.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (144; 99% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 expl:impers	color:blue
1	Bo	bo	SCONJ	comp	_	3	mark	3:mark|12:mark	_
2	już	już	PART	qub	_	3	advmod	3:advmod	_
3	mamy	mieć	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	wiosnę	wiosna	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
6	a	a	CCONJ	conj	_	12	cc	12:cc	_
7	dopiero	dopiero	PART	qub	_	12	advmod	12:advmod	_
8	się	się	PRON	qub	PronType=Prs|Reflex=Yes	12	expl:impers	12:expl:impers	_
9	o	o	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc
10	tym	ten	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	11	det	11:det	_
11	wszystkim	wszystko	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Tot	12	obl	12:obl:o	_
12	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl:impers	color:blue
1	"	"	PUNCT	interp	PunctSide=Ini|PunctType=Quot	2	punct	2:punct	SpaceAfter=No
2	Tam	tam	ADV	adv	PronType=Dem	0	root	0:root	_
3	się	się	PRON	qub	PronType=Prs|Reflex=Yes	2	expl:impers	2:expl:impers	_
4	bywa	bywać	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop:locat	2:cop:locat	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	tu	tu	ADV	adv	PronType=Dem	2	conj	2:conj	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:impers	6:expl:impers	_
8	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop:locat	6:cop:locat	SpaceAfter=No
9	"	"	PUNCT	interp	PunctSide=Fin|PunctType=Quot	2	punct	2:punct	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


