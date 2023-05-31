---
layout: base
title:  'Statistics of dep:emo in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:emo`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-infl.html">dep:infl</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

1 nodes (0%) are attached to their parents as `dep:emo`.

1 instances of `dep:emo` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:emo`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep:emo	color:blue
1	Qugina	qugina	X	_	_	2	dep:emo	_	Analysis=quginag(EMO)|Gloss=spooked
2	k	k	VERB	_	_	0	root	_	Analysis=~–ke(EMO→V)|Gloss=to-feel-R-toward-object
3	a	a	X	_	Mood=Ind|Subcat=Tran	2	dep:infl	_	Analysis=[Ind.Trns]
4	nka	nka	X	_	Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1	2	dep:infl	_	Analysis=[1Sg.3Pl]
5	uyviingh	uyviingh	NOUN	_	_	2	obj	_	Analysis=uyviinegh(N)|Gloss=shaman-who-can-work-evil
6	et	et	X	_	Case=Abs|Number=Plur	5	dep:infl	_	Analysis=[Abs.Pl]
7	kaat	kaat	VERB	_	_	2	advcl	_	Analysis=kaate(V)|Gloss=to-arrive
8	fagilga	fagilga	X	_	Mood=Prc|Subcat=Intr	7	dep:infl	_	Analysis=[Prec.Intr]
9	ta	ta	X	_	Number[subj]=Plur|Person[subj]=3	7	dep:infl	_	Analysis=[3Pl]
10	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


