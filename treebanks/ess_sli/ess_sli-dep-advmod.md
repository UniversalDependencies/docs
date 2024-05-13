---
layout: base
title:  'Statistics of advmod in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `advmod`

This relation is universal.

76 nodes (3%) are attached to their parents as `advmod`.

52 instances of `advmod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27631578947368.

The following 3 pairs of parts of speech are connected with `advmod`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-ADV.html">ADV</a></tt> (62; 82% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PART.html">PART</a></tt> (12; 16% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-ADV.html">ADV</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Qavngaq	qavngaq	ADV	_	PronType=Int	2	advmod	_	Analysis=qavngaq(WH)|Gloss=when
2	kaate	kaate	VERB	_	_	0	root	_	Analysis=kaate(V)|Gloss=to-arrive
3	tsi	tsi	X	_	Mood=Int|Number[subj]=Plur|Person[subj]=2|Subcat=Intr	2	dep:infl	_	Analysis=[Intrg.Intr.2Pl]
4	Sivuqagh	Sivuqagh	NOUN	_	_	2	obl	_	Analysis=Sivuqagh(N)|Gloss=Gambell
5	mun	mun	X	_	Case=All|Number=Sing	4	dep:infl	_	Analysis=[All.Sg]
6	?	?	PUNCT	_	_	2	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advmod	color:blue
1	Yug	yug	NOUN	_	_	7	nsubj	_	Analysis=yug(N)|Gloss=man
2	et	et	X	_	Case=Abs|Number=Plur	1	dep:infl	_	Analysis=[Abs.Pl]
3	elngaatall	elngaatall	PART	_	_	7	advmod	_	Analysis=elngaatall(PTCL)|Gloss=very-much
4	aqavzig	aqavzig	NOUN	_	_	6	obl:mod	_	Analysis=aqavzig(N)|Gloss=cloudberry
5	meng	meng	X	_	Case=Abl|Number=Sing	4	dep:infl	_	Analysis=[Abl_Mod.Sg]
6	inghu	inghu	VERB	_	_	7	xcomp	_	Analysis=inghu(V)|Gloss=to-pick-berries
7	yug	yug	VERB	_	_	0	root	_	Analysis=@~fyug(V→V)|Gloss=to-want-to-V
8	tu	tu	X	_	Mood=Ind|Subcat=Intr	7	dep:infl	_	Analysis=[Ind.Intr]
9	t	t	X	_	Number[subj]=Plur|Person[subj]=3	7	dep:infl	_	Analysis=[3Pl]
10	nunivag	nunivag	NOUN	_	_	6	obl	_	Analysis=nunivag(N)|Gloss=tundra
11	mi	mi	X	_	Case=Loc|Number=Sing	10	dep:infl	_	Analysis=[Loc.Sg]
12	.	.	PUNCT	_	_	7	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 advmod	color:blue
1	Naafq	naafq	VERB	_	_	0	root	_	Analysis=naafqe(V)|Gloss=to-break
2	a	a	X	_	Mood=Ind|Subcat=Tran	1	dep:infl	_	Analysis=[Ind.Trns]
3	qa	qa	X	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1	1	dep:infl	_	Analysis=[1Sg.3Sg]
4	sufluga	sufluga	NOUN	_	_	1	obj	_	Analysis=suflugagh(N)|Gloss=gun
5	n	n	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	dep:infl	_	Analysis=[Abs.2SgPoss.Sg]
6	tukfi	tukfi	VERB	_	_	7	acl	_	Analysis=tukfigh(V)|Gloss=to-buy
7	qe	qe	NOUN	_	_	4	appos	_	Analysis=@~–(g)ke(V→N)|Gloss=the-one's-possessor-V-ed
8	n	n	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	dep:infl	_	Analysis=[Abs.2SgPoss.Sg]
9	estuga	estuga	NOUN	_	_	6	obl	_	Analysis=estugagh(N)|Gloss=store
10	meng	meng	X	_	Case=Abl|Number=Sing	9	dep:infl	_	Analysis=[Abl_Mod.Sg]
11	ta	ta	X	_	_	12	dep:ana	_	Analysis=[Anaphor]
12	maani	maani	ADV	_	Case=Loc	9	advmod	_	Analysis=maani(DEM.ADV.Loc)|Gloss=in-this-area
13	.	.	PUNCT	_	_	1	punct	_	Analysis=.

~~~


