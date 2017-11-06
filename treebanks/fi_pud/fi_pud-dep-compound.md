---
layout: base
title:  'Statistics of compound in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi_pud-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi_pud-dep-compound-prt.html">compound:prt</a></tt>.

29 nodes (0%) are attached to their parents as `compound`.

29 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06896551724138.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (14; 48% instances), <tt><a href="fi_pud-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (7; 24% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-PUNCT.html">PUNCT</a></tt> (6; 21% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Tonavaa	Tonava	PROPN	_	Case=Par|Number=Sing	3	obl	_	_
2	myöten	myöten	ADP	_	AdpType=Post	1	case	_	_
3	kuljetettujen	kuljettaa	VERB	_	Case=Gen|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
4	tavaroiden	tavara	NOUN	_	Case=Gen|Number=Plur	5	nmod:poss	_	_
5	määrä	määrä	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
6	kasvoi	kasvaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	noin	noin	ADV	_	_	9	advmod	_	_
8	100	100	NUM	_	NumType=Card	9	compound	_	_
9	miljoonaan	miljoona	NUM	_	Case=Ill|Number=Sing|NumType=Card	10	nummod	_	_
10	tonniin	tonni	NOUN	_	Case=Ill|Number=Sing	6	obl	_	_
11	vuonna	vuosi	NOUN	_	Case=Ess|Number=Sing	6	obl	_	_
12	1987	1987	NUM	_	NumType=Card	11	nummod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	nummod	_	_
2	kuningas	kuningas	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	Mojmír	Mojmír	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
5	I	I	ADJ	_	NumType=Ord	4	flat:name	_	_
6	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	hallitsi	hallita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
8	830	830	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
9	-	-	PUNCT	_	_	10	compound	_	SpaceAfter=No
10	846	846	NUM	_	NumType=Card	7	obl	_	SpaceAfter=No
11	)	)	PUNCT	_	_	7	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	nummod	_	_
2	kuningas	kuningas	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	Mojmír	Mojmír	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
5	I	I	ADJ	_	NumType=Ord	4	flat:name	_	_
6	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	hallitsi	hallita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
8	830	830	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
9	-	-	PUNCT	_	_	10	compound	_	SpaceAfter=No
10	846	846	NUM	_	NumType=Card	7	obl	_	SpaceAfter=No
11	)	)	PUNCT	_	_	7	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


