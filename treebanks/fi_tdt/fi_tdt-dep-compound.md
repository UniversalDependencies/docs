---
layout: base
title:  'Statistics of compound in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi_tdt-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi_tdt-dep-compound-prt.html">compound:prt</a></tt>.

185 nodes (0%) are attached to their parents as `compound`.

184 instances of `compound` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18918918918919.

The following 13 pairs of parts of speech are connected with `compound`: <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (137; 74% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (15; 8% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt> (6; 3% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Poron	poro	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	2:nmod:poss	_
2	lihaa	liha	NOUN	N	Case=Par|Number=Sing	5	obj	5:obj	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
4	vuosittain	vuosittain	ADV	Adv	Derivation=Ttain	5	advmod	5:advmod	_
5	myytävänä	myydä	VERB	V	Case=Ess|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	noin	noin	ADV	Adv	_	8	advmod	8:advmod	_
7	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	8	compound	8:compound	_
8	miljoonaa	miljoona	NUM	Num	Case=Par|Number=Sing|NumType=Card	9	nummod	9:nummod	_
9	kiloa	kilo	NOUN	N	Case=Par|Number=Sing	5	obl	5:obl	SpaceAfter=No
10	.	.	PUNCT	Punct	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	vauvan	vauva	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	2:nmod:poss	_
2	paino	paino	NOUN	N	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	Punct	_	6	punct	6:punct	_
4	2	2	NUM	Num	NumType=Card	5	compound	5:compound	_
5	kg	kg	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	6	compound	6:compound	_
6	315	315	NUM	Num	NumType=Card	2	appos	2:appos	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 compound	color:blue
1	Toinen	toinen	ADJ	Num	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	sota	sota	NOUN	N	Case=Nom|Number=Sing	11	nsubj:cop	11:nsubj:cop	_
3	(	(	PUNCT	Punct	_	8	punct	8:punct	SpaceAfter=No
4	83	83	NUM	Num	NumType=Card	5	nummod	5:nummod	_
5	eaa.	eaa.	NOUN	N	Abbr=Yes	8	compound	8:compound	SpaceAfter=No
6	–	–	PUNCT	Punct	_	8	punct	8:punct	SpaceAfter=No
7	81	81	NUM	Num	NumType=Card	8	nummod	8:nummod	_
8	eaa.	eaa.	NOUN	N	Abbr=Yes	2	nmod	2:nmod	SpaceAfter=No
9	)	)	PUNCT	Punct	_	8	punct	8:punct	_
10	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	suppeampi	suppea	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	0:root	_
12	laajuudeltaan	laajuus	NOUN	N	Case=Abl|Derivation=Vs|Number=Sing|Person[psor]=3	11	obl	11:obl	SpaceAfter=No
13	.	.	PUNCT	Punct	_	11	punct	11:punct	_

~~~


