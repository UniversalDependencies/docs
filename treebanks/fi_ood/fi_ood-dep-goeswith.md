---
layout: base
title:  'Statistics of goeswith in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (2; 67% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	C	cpap	NOUN	_	Case=Nom|Number=Sing|Typo=Yes	3	compound:nn	_	Gen=Hengitys
2	pap	_	X	_	_	1	goeswith	_	Gen_desc=hengityskoneen_ohjelma|Gen=kone
3	-maskilla	maski	NOUN	_	Case=Ade|Number=Sing	0	root	_	_
4	koko	koko	ADJ	_	_	5	amod	_	_
5	yön	yö	NOUN	_	Case=Gen|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	Käteisen	käteinen	NOUN	_	Case=Gen|Number=Sing	2	nmod:gobj	_	_
2	käytöstäkin	käyttö	NOUN	_	Case=Ela|Clitic=Kin|Number=Sing	3	obl	_	_
3	löytyy	löytyä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tietoa	tieto	NOUN	_	Case=Par|Number=Sing	3	nsubj	_	_
5	@SuomenPankki	@SuomenPankki	PROPN	_	Case=Gen|Number=Sing|Typo=Yes	7	nmod:poss	_	Note=embedded
6	’n	_	X	_	_	5	goeswith	_	Note=embedded
7	#maksuliiketilastot	#maksu#liike#tilasto	NOUN	_	Case=Nom|Number=Plur	4	appos	_	Note=embedded
8	–	–	PUNCT	_	_	9	punct	_	_
9	Euro	euro	NOUN	_	Case=Nom|Number=Sing	7	parataxis	_	_
10	ja	ja	CCONJ	_	_	11	cc	_	_
11	talous	talous	NOUN	_	Case=Nom|Number=Sing	9	conj	_	_
12	https://t.co/5eNrWcrxHY	https://t.co/5eNrWcrxHY	SYM	_	_	3	discourse	_	_
13	#eurojatalous	#eurojatalous	X	_	_	3	discourse	_	SpacesAfter=\n\n

~~~


