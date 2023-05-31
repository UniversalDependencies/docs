---
layout: base
title:  'Statistics of punct in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `punct`

This relation is universal.

310 nodes (12%) are attached to their parents as `punct`.

309 instances of `punct` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.38064516129032.

The following 4 pairs of parts of speech are connected with `punct`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (295; 95% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (9; 3% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (4; 1% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 punct	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	negh	negh	VERB	_	_	0	root	_	Analysis=negh(V)|Gloss=to-eat
3	tu	tu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	pagunghagh	pagunghagh	NOUN	_	_	2	obl:mod	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Kina	kina	PRON	_	PronType=Int	0	root	_	Analysis=kina(WH)|Gloss=who
2	ngu	ngu	VERB	_	_	1	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
3	zin	zin	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	2	dep:infl	_	Analysis=[Intrg.Intr.2Sg]
4	?	?	PUNCT	_	_	1	punct	_	Analysis=?

~~~


