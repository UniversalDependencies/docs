---
layout: base
title:  'Statistics of dep:cop in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:cop`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-infl.html">dep:infl</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

12 nodes (0%) are attached to their parents as `dep:cop`.

12 instances of `dep:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 2 pairs of parts of speech are connected with `dep:cop`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (8; 67% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (4; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep:cop	color:blue
1	Panig	panig	NOUN	_	_	3	nsubj	_	Analysis=panig(N)|Gloss=daughter
2	ten	ten	X	_	Case=Abs|Number=Plur|Number[psor]=Sing|Person[psor]=2	1	dep:infl	_	Analysis=[Abs.2SgPoss.Pl]
3	aghnagha	aghnagha	NOUN	_	_	0	root	_	Analysis=aghnaghagh*(N)|Gloss=girl
4	ghllag	ghllag	NOUN	_	_	3	nmod	_	Analysis=–ghllag(N→N)|Gloss=big-N
5	u	u	VERB	_	_	3	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
6	u	u	X	_	Mood=Ind|Subcat=Intr	5	dep:infl	_	Analysis=[Ind.Intr]
7	t	t	X	_	Number[subj]=Plur|Person[subj]=3	5	dep:infl	_	Analysis=[3Pl]
8	.	.	PUNCT	_	_	3	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:cop	color:blue
1	Kina	kina	PRON	_	PronType=Int	0	root	_	Analysis=kina(WH)|Gloss=who
2	ngu	ngu	VERB	_	_	1	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
3	zin	zin	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	2	dep:infl	_	Analysis=[Intrg.Intr.2Sg]
4	?	?	PUNCT	_	_	1	punct	_	Analysis=?

~~~


