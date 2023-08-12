---
layout: base
title:  'Statistics of advmod in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `advmod`

This relation is universal.

25 nodes (4%) are attached to their parents as `advmod`.

16 instances of `advmod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 3 pairs of parts of speech are connected with `advmod`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (20; 80% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (4; 16% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	epagare	paga	VERB	v	IF=Ass	0	root	_	wait;esperar
2	toro	toro	ADV	adv	_	1	advmod	_	there;lá
3	ceno	ce	X	x	Clusivity=Ex|Number=Plur|Person=1|Poss=Yes	4	nmod	_	_
4	dinheiro	dinheiro	NOUN	n	_	1	obl	_	_
5	bagai	bagai	ADP	posp	_	4	case	_	for;por

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	inoba	ino	ADV	adv	Int=Yes	2	advmod	_	how;como
2	akiere	ie	NOUN	n	IF=Ass|Number=Sing|Person=2	0	root	_	name;nome
3	?	?	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	Imi	imi	PRON	pron	Number=Sing|Person=1|PronType=Prs	0	root	_	_
2	karega	karega	ADV	adv	Polarity=Neg	1	advmod	_	negates.other.than.the.predicate;negação.mão.de.predicado
3	.	.	PUNCT	_	_	1	punct	_	_
4	Imaragodymodykare	maragody	VERB	v	IF=Ass|Number=Sing|Person=1|Polarity=Neg|Tense=Fut	1	parataxis	_	work;trabalhar

~~~


