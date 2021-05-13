---
layout: base
title:  'Statistics of dep:ana in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:ana`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-infl.html">dep:infl</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

7 nodes (0%) are attached to their parents as `dep:ana`.

7 instances of `dep:ana` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `dep:ana`: <tt><a href="ess_sli-pos-ADV.html">ADV</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (4; 57% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (3; 43% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 dep:ana	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:ana	color:blue
1	Qawaak	qawaak	NOUN	_	Case=Abs|Number=Sing	4	obj	_	Analysis=qawaag(N)^[Abs.Sg]|Gloss=bird
2	es	es	X	_	_	3	dep:ana	_	Analysis=[Anaphor]
3	pagna	pagna	PRON	_	Case=Abs|Number=Sing|PronType=Dem	1	appos	_	Analysis=paagna(DEM.PRO.Abs.Sg)|Gloss=that-up-there
4	guut	guut	VERB	_	_	0	root	_	Analysis=guute(V)|Gloss=to-shoot
5	igu	igu	X	_	Mood=Opt|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Pres	4	dep:infl	_	Analysis=[Opt.Pres.Trns.2Sg.3Sg]
6	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


