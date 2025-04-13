---
layout: base
title:  'Statistics of nsubj:outer in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fi_ftb-dep-nsubj-cop.html">nsubj:cop</a></tt>.

29 nodes (0%) are attached to their parents as `nsubj:outer`.

29 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.96551724137931.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (23; 79% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (4; 14% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:outer	color:blue
1	Keskeinen	keskeinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	2	amod	_	_
2	ongelma	ongelma	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	nsubj:outer	_	_
3	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	,	,	PUNCT	Pun	_	5	punct	_	_
5	suostuuko	suostua	VERB	V,Act,Ind,Pres,Sg3,Ko	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj:cop	_	_
7	ehdokkaaksi	ehdokas	NOUN	N,Sg,Tra	Case=Tra|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Sinä	sinä	PRON	Pron,Pers,Sg2,Nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj:outer	_	_
2	olit	olla	AUX	V,Act,Ind,Past,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	parlamentin	parlamentti	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	4	nsubj:cop	_	_
4	kuultavana	kuulla	VERB	V,Pass,PcpVa,Sg,Ess	Case=Ess|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 2 nsubj:outer	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	A,Ord,Sg,Nom	Case=Nom|Number=Sing|NumType=Ord	2	amod	_	_
2	asia	asia	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	16	nsubj:outer	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	minkä	mikä	PRON	Pron,Rel,Gen	Case=Gen|PronType=Rel	6	obj	_	_
5	pääministeri	pääministeri	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj	_	_
6	sanoi	sanoa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl	_	_
7	minulle	minä	PRON	Pron,Pers,Sg1,All	Case=All|Number=Sing|Person=1|PronType=Prs	6	nmod	_	_
8	,	,	PUNCT	Pun	_	7	punct	_	_
9	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	_	_
10	että	että	SCONJ	Pcle,CS	_	16	mark	_	_
11	hänen	hän	PRON	Pron,Pers,Sg3,Gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	12	nmod:poss	_	_
12	hallituksensa	hallitus	NOUN	N,Sg,Nom,Px3	Case=Nom|Number=Sing|Person[psor]=3	16	nsubj:cop	_	_
13	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
14	vannoutunut	vannoutunut	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	16	amod	_	_
15	demokratian	demokratia	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	16	nmod	_	_
16	kannattaja	kannattaja	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
17	.	.	PUNCT	Pun	_	16	punct	_	_

~~~


