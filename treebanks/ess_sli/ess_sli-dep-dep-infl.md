---
layout: base
title:  'Statistics of dep:infl in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:infl`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

1087 nodes (42%) are attached to their parents as `dep:infl`.

1087 instances of `dep:infl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29990800367985.

The following 7 pairs of parts of speech are connected with `dep:infl`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (704; 65% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (361; 33% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="ess_sli-pos-ADV.html">ADV</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="ess_sli-pos-DET.html">DET</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="ess_sli-pos-NUM.html">NUM</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep:infl	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	negh	negh	VERB	_	_	0	root	_	Analysis=negh(V)|Gloss=to-eat
3	tu	tu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	pagunghagh	pagunghagh	NOUN	_	_	2	obl:mod	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep:infl	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	negh	negh	VERB	_	_	0	root	_	Analysis=negh(V)|Gloss=to-eat
3	tu	tu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	pagunghagh	pagunghagh	NOUN	_	_	2	obl:mod	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:infl	color:blue
1	Kitu	kitu	PRON	_	PronType=Int	4	nsubj	_	Analysis=kitu(WH)|Gloss=who
2	m	m	X	_	Case=Erg|Number=Sing	1	dep:infl	_	Analysis=[Rel.Sg]
3	qiya	qiya	VERB	_	_	4	xcomp	_	Analysis=qiya(V)|Gloss=to-cry
4	st	st	VERB	_	_	0	root	_	Analysis=+(te)ste(CmpdVbl)|Gloss=to-make-one-V
5	a	a	X	_	Mood=Int|Subcat=Tran	4	dep:infl	_	Analysis=[Intrg.Trns]
6	ten	ten	X	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3	4	dep:infl	_	Analysis=[3Sg.2Sg]
7	?	?	PUNCT	_	_	4	punct	_	Analysis=?

~~~


