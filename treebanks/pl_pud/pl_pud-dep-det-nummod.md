---
layout: base
title:  'Statistics of det:nummod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pud-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pud-dep-det-poss.html">det:poss</a></tt>.

12 nodes (0%) are attached to their parents as `det:nummod`.

12 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `det:nummod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (12; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det:nummod	color:blue
1	Rządził	rządzić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tylko	tylko	PART	part	_	3	advmod:emph	3:advmod:emph	_
3	piętnaście	piętnaście	NUM	num:pl:acc:m3:rec:ncol	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	4	nummod:gov	4:nummod:gov	_
4	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	obl	1:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	o	o	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	czym	co	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Int	8	obl:arg	8:obl:arg	_
8	świadczy	świadczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl:relcl	1:advcl:relcl	_
9	niekompletność	niekompletność	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
10	wielu	wiele	DET	num:pl:gen:f:congr	Case=Gen|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	12	det:nummod	12:det:nummod	_
11	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	12	nmod	12:nmod	_
12	budowli	budowla	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	9	nmod	9:nmod	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


