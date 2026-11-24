---
layout: base
title:  'Statistics of dep:cop in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:cop`

This relation is a language-specific subtype of .
There are also 5 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

12 nodes (1%) are attached to their parents as `dep:cop`.

12 instances of `dep:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 2 pairs of parts of speech are connected with `dep:cop`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (8; 67% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (4; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep:cop	color:blue
1	Panigten	panig	NOUN	_	Case=Abs|Number=Plur|Number[psor]=Sing|Person[psor]=2	2	nsubj	_	Analysis=panig(N)^[Abs.2SgPoss.Pl]|Gloss=your-daughters|MSeg=Panig+ten
2	aghnagha	aghnagha	NOUN	_	_	0	root	_	Analysis=aghnaghagh*(N)|Gloss=girl
3	ghllag	ghllag	NOUN	_	_	2	nmod	_	Analysis=–ghllag(N→N)|Gloss=big-N
4	uut	u	X	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Subcat=Intr	2	dep:cop	_	Analysis=~:(ng)u(N→V)^[Ind.Intr]^[3Pl]|Gloss=to-be-N|MSeg=u+u+t
5	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:cop	color:blue
1	Kina	kina	PRON	_	PronType=Int	0	root	_	Analysis=kina(WH)|Gloss=who
2	nguzin	ngu	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	1	dep:cop	_	Analysis=~:(ng)u(N→V)^[Intrg.Intr.2Sg]|Gloss=to-be-N|MSeg=ngu+zin
3	?	?	PUNCT	_	_	1	punct	_	Analysis=?

~~~


