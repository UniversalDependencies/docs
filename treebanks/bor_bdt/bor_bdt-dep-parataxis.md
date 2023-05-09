---
layout: base
title:  'Statistics of parataxis in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `parataxis`

This relation is universal.

4 nodes (1%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Akaiwodo	aiwo	VERB	v	Number=Sing|Person=2|Voice=Cau	0	root	_	look.at;olhar.para
2	,	,	PUNCT	punct	_	1	punct	_	_
3	imana	imana	NOUN	n	_	1	vocative	_	older.brother;irmão.mais.velho
4	.	.	PUNCT	punct	_	3	punct	_	_
5	Ire	i	PRON	bi	IF=Ass|Number=Sing|Person=1|PronType=Bi	7	nsubj	_	_
6	karo	karo	NOUN	n	_	7	obj	_	_
7	bito	bi	VERB	v	Number=Sing|Person=3|Voice=Cau	1	parataxis	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Imi	imi	PRON	pron	Number=Sing|Person=1|PronType=Prs	0	root	_	_
2	karega	karega	ADV	adv	Polarity=Neg	1	advmod	_	negates.other.than.the.predicate;negação.mão.de.predicado
3	.	.	PUNCT	_	_	1	punct	_	_
4	Imaragodymodykare	maragody	VERB	v	IF=Ass|Number=Sing|Person=1|Polarity=Neg|Tense=Fut	1	parataxis	_	work;trabalhar

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	U	u	INTJ	intj	_	4	discourse	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	boe	_	NOUN	n	_	4	nsubj	_	_
4	pemegare	pemega	VERB	v	IF=Ass	0	root	_	_
5	.	_	PUNCT	punct	_	4	punct	_	_
6	Ike	ke	NOUN	_	Number=Sing|Person=1	7	nsubj	_	food;comida
7	boere	boe	VERB	v	IF=Ass	4	parataxis	_	_
8	ii	ji	ADP	posp	_	7	obl	_	_
9	.	_	PUNCT	_	_	7	punct	_	_
10	Pamode	pa	PRON	bi	Clusivity=In|IF=Ass|Number=Plur|Person=1|PronType=Bi|Tense=Fut	4	parataxis	_	_
11	karo	karo	NOUN	_	_	12	obj	_	_
12	kowuje	kowuje	VERB	v	_	10	xcomp	_	_
13	?	?	PUNCT	punct	_	12	punct	_	_

~~~


