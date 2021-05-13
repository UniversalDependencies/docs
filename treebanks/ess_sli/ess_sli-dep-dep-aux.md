---
layout: base
title:  'Statistics of dep:aux in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:aux`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-infl.html">dep:infl</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

120 nodes (5%) are attached to their parents as `dep:aux`.

120 instances of `dep:aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01666666666667.

The following 1 pairs of parts of speech are connected with `dep:aux`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (120; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep:aux	color:blue
1	Tuku	tuku	NOUN	_	_	5	nsubj	_	Analysis=tukugh(N)|Gloss=host
2	qa	qa	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	dep:infl	_	Analysis=[Abs.1SgPoss.Sg]
3	neghsa	neghsa	NOUN	_	_	5	obl:mod	_	Analysis=neghsagh(N)|Gloss=seal
4	meng	meng	X	_	Case=Abl|Number=Sing	3	dep:infl	_	Analysis=[Abl_Mod.Sg]
5	gaagh	gaagh	VERB	_	_	0	root	_	Analysis=gaagh(V)|Gloss=to-cook
6	aq	aq	VERB	_	Aspect=Prog|Tense=Pres	5	dep:aux	_	Analysis=~(g)aqe(V→V)|Gloss=to-be-currently-V-ing
7	u	u	X	_	Mood=Ind|Subcat=Intr	6	dep:infl	_	Analysis=[Ind.Intr]
8	q	q	X	_	Number[subj]=Sing|Person[subj]=3	6	dep:infl	_	Analysis=[3Sg]
9	.	.	PUNCT	_	_	5	punct	_	Analysis=.

~~~


