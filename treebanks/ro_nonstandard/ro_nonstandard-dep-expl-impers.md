---
layout: base
title:  'Statistics of expl:impers in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

136 nodes (0%) are attached to their parents as `expl:impers`.

122 instances of `expl:impers` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21323529411765.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (134; 99% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:impers	color:blue
1	Dară	dar	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=MATT18.12
2	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	nsubj	_	ref=MATT18.12
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:impers	_	ref=MATT18.12
4	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT18.12
5	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	4	iobj	_	ref=MATT18.12|SpaceAfter=No
6	?	?	PUNCT	QUEST	_	4	punct	_	ref=MATT18.12

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 expl:impers	color:blue
1	Nu	nu	ADV	Qz	Polarity=Neg	3	advmod	_	ref=IOAN3.7
2	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	3	expl:pv	_	ref=IOAN3.7
3	mira	mira	VERB	Vmm-2s--z	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	0	root	_	ref=IOAN3.7
4	căce	căci	SCONJ	Cscsp	Compound=Yes|Polarity=Pos	5	mark	_	ref=IOAN3.7
5	ziș	zice	VERB	Vmis1s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	advcl	_	ref=IOAN3.7
6	ție	tu	PRON	Pp2-sd--------s	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Strong	5	iobj	_	ref=IOAN3.7|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	ref=IOAN3.7
8	cade-	cădea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	ref=IOAN3.7|SpaceAfter=No
9	să	să	PART	Qs	PartType=Sub	8	expl:impers	_	ref=IOAN3.7
10	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	8	iobj	_	ref=IOAN3.7
11	a	a	PART	Qn	PartType=Inf	13	mark	_	ref=IOAN3.7
12	vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	13	expl:pv	_	ref=IOAN3.7
13	naște	naște	VERB	Vmn	VerbForm=Inf	8	csubj	_	ref=IOAN3.7
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	mark	_	ref=IOAN3.7
15	nou	nou	ADV	Rg	_	13	advmod	_	ref=IOAN3.7|SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	3	punct	_	ref=IOAN3.7

~~~


