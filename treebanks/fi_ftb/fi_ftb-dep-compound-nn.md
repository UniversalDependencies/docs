---
layout: base
title:  'Statistics of compound:nn in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_ftb-dep-compound-prt.html">compound:prt</a></tt>.

361 nodes (0%) are attached to their parents as `compound:nn`.

361 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17174515235457.

The following 9 pairs of parts of speech are connected with `compound:nn`: <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (269; 75% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (58; 16% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (13; 4% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:nn	color:blue
1	ritarinarvo	ritarinarvo	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
2	kuningatar	kuningatar	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	compound:nn	_	Alt=compound:nn
3	Elisabethiltä	elisabeth	PROPN	N,Prop,Sg,Abl	Case=Abl|Number=Sing	1	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:nn	color:blue
1	Loistavaa	loistaa	VERB	V,Act,PcpVa,Sg,Par	Case=Par|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	0	root	_	_
2	,	,	PUNCT	Pun	_	1	punct	_	_
3	aivan	aivan	PART	Pcle	_	4	advmod	_	_
4	nappi	nappi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	compound:nn	_	Alt=compound:nn
5	suoritus	suoritus	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	1	conj	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:nn	color:blue
1	Huoltoa	huolto	NOUN	N,Sg,Par	Case=Par|Number=Sing	0	root	_	_
2	Viljamaalla	viljamaa	PROPN	N,Prop,Sg,Ade	Case=Ade|Number=Sing	1	nmod	_	_
3	erikoiskoe	erikoiskoe	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	compound:nn	_	Alt=compound:nn
4	20:n	20	NUM	Num,Card,Sg,Gen	Case=Gen|Number=Sing|NumType=Card	1	nummod	_	_
5	jälkeen	jälkeen	ADP	Adp	_	4	case	_	_
6	.	.	PUNCT	Pun	_	4	punct	_	Was18=punct:5:case

~~~


