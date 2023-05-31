---
layout: base
title:  'Statistics of acl:relcl in UD_North_Sami-Giella'
udver: '2'
---

## Treebank Statistics: UD_North_Sami-Giella: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sme_giella-dep-acl.html">acl</a></tt>.

268 nodes (1%) are attached to their parents as `acl:relcl`.

268 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.44402985074627.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-VERB.html">VERB</a></tt> (166; 62% instances), <tt><a href="sme_giella-pos-PRON.html">PRON</a></tt>-<tt><a href="sme_giella-pos-VERB.html">VERB</a></tt> (37; 14% instances), <tt><a href="sme_giella-pos-VERB.html">VERB</a></tt>-<tt><a href="sme_giella-pos-VERB.html">VERB</a></tt> (30; 11% instances), <tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme_giella-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="sme_giella-pos-PRON.html">PRON</a></tt>-<tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sme_giella-pos-NUM.html">NUM</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sme_giella-pos-VERB.html">VERB</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sme_giella-pos-VERB.html">VERB</a></tt>-<tt><a href="sme_giella-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Dát	dát	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	4	nsubj	_	_
2	ledje	leat	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	Jáhkoba	Jáhkob	PROPN	N	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	bártnit	bárdni	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
5	guđet	guhte	PRON	Pron	Case=Nom|Number=Plur|PronType=Rel	6	nsubj	_	_
6	riegádedje	riegádit	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
7	sutnje	son	PRON	Pron	Case=Ill|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	Paddan	Paddan	PROPN	N	Case=Nom|Number=Sing	9	compound:nn	_	_
9	Aramis	Aram	PROPN	N	Case=Loc|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Ale	ii	AUX	V	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	2	aux:neg	_	_
2	moaráhuva	moaráhuvvat	VERB	V	Connegative=Yes|Mood=Imp|VerbForm=Fin	0	root	_	_
3	munnje	mun	PRON	Pron	Case=Ill|Number=Sing|Person=1|PronType=Prs	2	obl	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	2	punct	_	_
5	don	don	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
6	guhte	guhte	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	7	nsubj	_	_
7	leat	leat	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	dego	dego	SCONJ	CS	_	9	mark	_	_
9	farao	farao	NOUN	N	Case=Nom|Number=Sing	7	advcl	_	_
10	ieš	ieš	PRON	Pron	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	9	det	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Eat	ii	AUX	V	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|VerbForm=Fin	3	aux:neg	_	_
2	mii	mun	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	dieđe	diehtit	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	gii	gii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	6	nsubj	_	_
5	leažžá	leat	AUX	V	Mood=Pot|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	bidjan	bidjat	VERB	V	Aspect=Perf|VerbForm=Part	3	acl:relcl	_	_
7	silbba	silba	NOUN	N	Case=Acc|Number=Sing	6	obj	_	_
8	min	mun	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	nmod:poss	_	_
9	seahkaide	seahkka	NOUN	N	Case=Ill|Number=Plur	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


