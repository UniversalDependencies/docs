---
layout: base
title:  'Statistics of csubj:reported in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:reported`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.
There are also 3 other language-specific subtypes of `csubj`: <tt><a href="la_ittb-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="la_ittb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_ittb-dep-csubj-relcl.html">csubj:relcl</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:reported`.

1 instances of `csubj:reported` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:reported`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj:reported	color:blue
1	uel	uel	CCONJ	O4|vgr1	_	4	cc	_	_
2	sicut	sicut	SCONJ	O4|vgr1	Compound=Yes	4	mark	_	_
3	si	si	SCONJ	O4	_	4	mark	_	_
4	diceretur	dico	VERB	N3|modK|tem2|gen6	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	iustus	iustus	ADJ	B1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	9	nsubj	_	_
7	non	non	PART	O4	Polarity=Neg	9	advmod:neg	_	_
8	iniusta	iniustus	ADJ	B1|grn1|casM|gen3|vgr2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	9	obj	_	_
9	agit	ago	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:reported	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	:	:	PUNCT	Punc	_	11	punct	_	_
11	scilicet	scilicet	CCONJ	O4	Compound=Yes|VerbForm=Fin	15	cc	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	11	punct	_	_
13	inquantum	in	SCONJ	O4|grn8|comZ	_	15	mark	_	_
14	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
15	iustus	iustus	ADJ	B1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	9	conj:expl	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


