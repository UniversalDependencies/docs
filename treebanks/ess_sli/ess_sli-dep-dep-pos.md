---
layout: base
title:  'Statistics of dep:pos in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:pos`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-infl.html">dep:infl</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>.

3 nodes (0%) are attached to their parents as `dep:pos`.

3 instances of `dep:pos` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:pos`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep:pos	color:blue
1	Sangavek	sangavek	ADV	_	PronType=Int	2	advmod	_	Analysis=sangavek(WH)|Gloss=why
2	atightugh	atightugh	VERB	_	_	0	root	_	Analysis=atightugh(V)|Gloss=to-read
3	aq	aq	VERB	_	Aspect=Prog|Tense=Pres	2	dep:aux	_	Analysis=~(g)aqe(V→V)|Gloss=to-be-currently-V-ing
4	sin	sin	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	3	dep:infl	_	Analysis=[Intrg.Intr.2Sg]
5	ingagh	ingagh	X	_	_	6	dep:pos	_	Analysis=ingagh*(POS)|Gloss=lying-down
6	nga	nga	VERB	_	_	2	advcl	_	Analysis=~fnga(POS→STATIVE)|Gloss=to-be-in-the-R-posture
7	gpek	gpek	X	_	Number[subj]=Sing|Person[subj]=2	6	dep:infl	_	Analysis=[2Sg]
8	efluga	efluga	NOUN	_	_	5	obl	_	Analysis=eflugagh(N)|Gloss=floor
9	mi	mi	X	_	Case=Loc|Number=Sing	8	dep:infl	_	Analysis=[Loc.Sg]
10	?	?	PUNCT	_	_	2	punct	_	Analysis=?

~~~


