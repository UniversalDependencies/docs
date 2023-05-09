---
layout: base
title:  'Statistics of csubj:pass in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="no_nynorsk-dep-csubj-outer.html">csubj:outer</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.33333333333333.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 csubj:pass	color:blue
1	Korleis	korleis	ADV	adv	_	3	advmod	_	_
2	livet	liv	NOUN	subst	Gender=Neut	3	nsubj	_	_
3	var	vere	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	14	csubj:pass	_	_
4	den	den	DET	det	Gender=Masc|PronType=Dem	5	det	_	_
5	gongen	gong	NOUN	subst	Gender=Masc	3	obl	_	_
6	når	når	SCONJ	sbu	_	8	mark	_	_
7	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	8	expl	_	_
8	galt	gjelde	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl	_	_
9	ulike	ulik	ADJ	adj	Degree=Pos|Number=Plur	10	amod	_	_
10	former	form	NOUN	subst	Definite=Ind|Gender=Fem|Number=Plur	8	obj	_	_
11	for	for	ADP	prep	_	12	case	_	_
12	handverk	handverk	NOUN	subst	Definite=Ind|Gender=Neut	10	nmod	_	_
13	blei	bli	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	14	aux:pass	_	_
14	vist	vise	ADJ	adj	Definite=Ind|Gender=Neut|VerbForm=Part	0	root	_	SpaceAfter=No
15	.	$.	PUNCT	clb	_	14	punct	_	_

~~~


