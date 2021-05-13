---
layout: base
title:  'Statistics of dep:mark in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:mark`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-infl.html">dep:infl</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

5 nodes (0%) are attached to their parents as `dep:mark`.

5 instances of `dep:mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:mark`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (5; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dep:mark	color:blue
1	Amaa	amaa	NOUN	_	Case=Abs|Number=Sing	3	nsubj	_	Analysis=amaa(N)^[Abs.Sg]|Gloss=the-wolf
2	aagken	aagken	ADV	_	Case=Abl	3	obl	_	Analysis=aagken(DEM.ADV.Abl_Mod)|Gloss=over-there
3	tagi	tagi	VERB	_	_	0	root	_	Analysis=tagi(V)|Gloss=to-come
4	ma	ma	VERB	_	Tense=Past	3	dep:aux	_	Analysis=@~:(i/u)ma(V→V)|Gloss=to-have-V-ed
5	lghii	lghii	X	_	Number[subj]=Sing|Person[subj]=3	4	dep:infl	_	Analysis=[Ptcp.Intr]^[3Sg]
6	negh	negh	VERB	_	_	3	advcl	_	Analysis=negh(V)|Gloss=to-eat
7	na	na	VERB	_	_	6	dep:mark	_	Analysis=@~fna(V→V)|Gloss=in-order-to-V
8	lu	lu	X	_	Mood=Sbr|Subcat=Tran	7	dep:infl	_	Analysis=[Sbrd.Trns]
9	ku	ku	X	_	Number[obj]=Sing|Person[obj]=3	7	dep:infl	_	Analysis=[_.3Sg]
10	nefkuuraq	nefkuuraq	NOUN	_	Case=Abs|Number=Sing	6	obj	_	Analysis=nefkuuragh(N)^[Abs.Sg]|Gloss=the-dried-meat|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	Analysis=.

~~~


