---
layout: base
title:  'Statistics of root in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `root`

This relation is universal.

309 nodes (12%) are attached to their parents as `root`.

309 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.14886731391586.

The following 4 pairs of parts of speech are connected with `root`: -<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (296; 96% instances), -<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), -<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (4; 1% instances), -<tt><a href="ess_sli-pos-X.html">X</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	negh	negh	VERB	_	_	0	root	_	Analysis=negh(V)|Gloss=to-eat
3	tu	tu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	pagunghagh	pagunghagh	NOUN	_	_	2	obl:mod	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Kina	kina	PRON	_	PronType=Int	0	root	_	Analysis=kina(WH)|Gloss=who
2	ngu	ngu	VERB	_	_	1	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
3	zin	zin	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	2	dep:infl	_	Analysis=[Intrg.Intr.2Sg]
4	?	?	PUNCT	_	_	1	punct	_	Analysis=?

~~~


