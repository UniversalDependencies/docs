---
layout: base
title:  'Statistics of compound in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi-dep-compound-prt.html">compound:prt</a></tt>.

236 nodes (0%) are attached to their parents as `compound`.

235 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05508474576271.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (116; 49% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (40; 17% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (24; 10% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt> (16; 7% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt> (9; 4% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt> (6; 3% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-SYM.html">SYM</a></tt> (5; 2% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fi-pos-SYM.html">SYM</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-SYM.html">SYM</a></tt>-<tt><a href="fi-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Poron	poro	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	lihaa	liha	NOUN	N	Case=Par|Number=Sing	5	obj	_	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	_	_
4	vuosittain	vuosittain	ADV	Adv	Derivation=Ttain	5	advmod	_	_
5	myytävänä	myydä	VERB	V	Case=Ess|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
6	noin	noin	ADV	Adv	_	8	advmod	_	_
7	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	8	compound	_	_
8	miljoonaa	miljoona	NUM	Num	Case=Par|Number=Sing|NumType=Card	9	nummod	_	_
9	kiloa	kilo	NOUN	N	Case=Par|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	vauvan	vauva	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	paino	paino	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Punct	_	6	punct	_	_
4	2	2	NUM	Num	NumType=Card	5	compound	_	_
5	kg	kg	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	6	compound	_	_
6	315	315	NUM	Num	NumType=Card	2	appos	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Kypsennä	kypsentää	VERB	V	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	uuniseitä	uuni#sei	NOUN	N	Case=Par|Number=Sing	1	obj	_	_
3	175	175	NUM	Num	NumType=Card	4	compound	_	_
4	-	-	PUNCT	Punct	_	5	compound	_	_
5	200	200	NUM	Num	NumType=Card	6	nummod	_	_
6	asteessa	aste	NOUN	N	Case=Ine|Number=Sing	1	obl	_	_
7	n.	n.	ADV	Adv	Abbr=Yes	8	advmod	_	_
8	30-40	30-40	NUM	Num	NumType=Card	9	nummod	_	_
9	minuttia	minuutti	NOUN	N	Case=Par|Number=Sing|Typo=Yes	1	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


