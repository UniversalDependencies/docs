---
layout: base
title:  'Statistics of dep:aux in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:aux`

This relation is a language-specific subtype of .
There are also 5 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

120 nodes (8%) are attached to their parents as `dep:aux`.

120 instances of `dep:aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01666666666667.

The following 1 pairs of parts of speech are connected with `dep:aux`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (120; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep:aux	color:blue
1	Tukuqa	tuku	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	Analysis=tukugh(N)^[Abs.1SgPoss.Sg]|Gloss=my-host|MSeg=Tuku+qa
2	neghsameng	neghsa	NOUN	_	Case=Abl|Number=Sing	3	obl:mod	_	Analysis=neghsagh(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-seal|MSeg=neghsa+meng
3	gaagh	gaagh	VERB	_	_	0	root	_	Analysis=gaagh(V)|Gloss=to-cook
4	aquq	aq	X	_	Aspect=Prog|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	3	dep:aux	_	Analysis=~(g)aqe(V→V)^[Ind.Intr]^[3Sg]|Gloss=to-be-currently-V-ing|MSeg=aq+u+q
5	.	.	PUNCT	_	_	3	punct	_	Analysis=.

~~~


