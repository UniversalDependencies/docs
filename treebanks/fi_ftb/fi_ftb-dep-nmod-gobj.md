---
layout: base
title:  'Statistics of nmod:gobj in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `nmod:gobj`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ftb-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="fi_ftb-dep-nmod-poss.html">nmod:poss</a></tt>.

264 nodes (0%) are attached to their parents as `nmod:gobj`.

264 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11363636363636.

The following 5 pairs of parts of speech are connected with `nmod:gobj`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (224; 85% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (28; 11% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:gobj	color:blue
1	Miehen	mies	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	hengen	henki	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	3	nmod:gobj	_	Alt=nmod:gobj
3	pelastaminen	pelastaminen	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
4	vaati	vaatia	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	kaksi	kaksi	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	leikkausta	leikkaus	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	obj	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gobj	color:blue
1	Uskon	uskoa	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	Pun	_	1	punct	_	_
3	että	että	SCONJ	Pcle,CS	_	6	mark	_	_
4	sen	se	PRON	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	5	nmod:gobj	_	Alt=nmod:gobj
5	toteuttaminen	toteuttaminen	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj	_	_
6	tulisi	tulla	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	ccomp	_	_
7	hyvin	hyvin	ADV	Adv	_	8	advmod	_	_
8	kalliiksi	kallis	ADJ	A,Sg,Tra	Case=Tra|Number=Sing	6	nmod	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gobj	color:blue
1	Tallinnan	tallinna	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	3	nmod	_	_
2	hotelli	hotelli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	compound:nn	_	Alt=compound:nn
3	Virun	viru	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	4	nmod:gobj	_	Alt=nmod:gobj
4	rakentamisen	rakentaminen	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	0	root	_	_
5	myötä	myötä	ADP	Adp	_	4	case	_	_

~~~


