---
layout: base
title:  'Statistics of goeswith in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `goeswith`

This relation is universal.

9 nodes (0%) are attached to their parents as `goeswith`.

9 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (5; 56% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (2; 22% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 11% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Favora	Favora-ihogeeli	NOUN	N,Prop,Sg,Nom	Case=Nom|Number=Sing|Typo=Yes	3	nsubj	_	Alt=goeswith|Was18gor=2
2	ihogeeli	_	X	_	_	1	goeswith	_	Was18gow=3:nsubj
3	levittyy	levittyä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	keveästi	keveästi	ADV	Adv	_	3	advmod	_	_
5	ja	ja	CCONJ	Pcle,CC	_	6	cc	_	_
6	imeytyy	imeytyä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	nopeasti	nopeasti	ADV	Adv	_	6	advmod	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Siis	siis	PART	Pcle	_	3	advmod	_	Was18goes=advmod:4
2	semmosta	semmoinen	DET	A,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	3	amod	_	Alt=DET|Was18goes=amod:4
3	ruokaruoka	ruokaruoka-tyyppinen	ADJ	A,Sg,Nom	Case=Par|Number=Sing|Typo=Yes	0	root	_	Alt=goeswith|Was18gor=4
4	tyyppistä	_	X	_	_	3	goeswith	_	Was18gow=0:root
5	.	.	PUNCT	Pun	_	3	punct	_	Was18goes=punct:4

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	asioita	asia	NOUN	N,Pl,Par	Case=Par|Number=Plur	0	root	_	_
2	,	,	PUNCT	Pun	_	1	punct	_	_
3	jotka	joka	PRON	Pron,Rel,Pl,Nom	Case=Nom|Number=Plur|PronType=Rel	4	nsubj	_	_
4	sivuavat	sivuta	VERB	V,Act,Ind,Pres,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
5	päätoimea	päätoimi	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	obj	_	_
6	tai	tai	CCONJ	Pcle,CC	_	7	cc	_	_
7	päin	päinvastoin	ADV	Adv	Typo=Yes	4	conj	_	_
8	vastoin	_	X	Adv	_	7	goeswith	_	_
9	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


