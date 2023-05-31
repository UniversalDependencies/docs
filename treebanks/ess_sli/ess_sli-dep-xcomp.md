---
layout: base
title:  'Statistics of xcomp in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `xcomp`

This relation is universal.

34 nodes (1%) are attached to their parents as `xcomp`.

32 instances of `xcomp` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05882352941176.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (33; 97% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Apa	apa	NOUN	_	_	6	nsubj	_	Analysis=apa(N)|Gloss=grandfather
2	n	n	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	1	dep:infl	_	Analysis=[Abs.2SgPoss.Sg]
3	naaygha	naaygha	NOUN	_	_	5	obl	_	Analysis=naayghagh(N)|Gloss=mountain
4	mun	mun	X	_	Case=All|Number=Sing	3	dep:infl	_	Analysis=[All.Sg]
5	mayugh	mayugh	VERB	_	_	6	xcomp	_	Analysis=mayugh(V)|Gloss=to-climb
6	yug	yug	VERB	_	_	0	root	_	Analysis=@~fyug(V→V)|Gloss=to-want-to-V
7	tu	tu	X	_	Mood=Ind|Subcat=Intr	6	dep:infl	_	Analysis=[Ind.Intr]
8	q	q	X	_	Number[subj]=Sing|Person[subj]=3	6	dep:infl	_	Analysis=[3Sg]
9	.	.	PUNCT	_	_	6	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 xcomp	color:blue
1	Apeghtughiste	Apeghtughiste	NOUN	_	_	3	nsubj	_	Analysis=Apeghtughiste(N)|Gloss=teacher
2	m	m	X	_	Case=Erg|Number=Sing	1	dep:infl	_	Analysis=[Rel.Sg]
3	tuune	tuune	VERB	_	_	0	root	_	Analysis=tuune(V)|Gloss=to-give
4	lleq	lleq	VERB	_	Tense=Fut	3	dep:aux	_	Analysis=@lleqe(V→V)|Gloss=will-V
5	i	i	X	_	Mood=Ind|Subcat=Tran	4	dep:infl	_	Analysis=[Ind.Trns]
6	i	i	X	_	Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=3	4	dep:infl	_	Analysis=[3Sg.3Pl]
7	tuquuqa	tuquuqa	NOUN	_	_	3	obj	_	Analysis=tuquuqagh(N)|Gloss=nail
8	t	t	X	_	Case=Abs|Number=Plur	7	dep:infl	_	Analysis=[Abs.Pl]
9	taaghta	taaghta	NOUN	_	_	3	obl	_	Analysis=taaghta(N)|Gloss=doctor
10	mun	mun	X	_	Case=All|Number=Sing	9	dep:infl	_	Analysis=[All.Sg]
11	sufluga	sufluga	NOUN	_	_	12	nmod:arg	_	Analysis=suflugagh(N)|Gloss=gun
12	leg	leg	NOUN	_	_	9	appos	_	Analysis=–leg(N→N)|Gloss=one-with-N
13	mun	mun	X	_	Case=All|Number=Sing	12	dep:infl	_	Analysis=[All.Sg]
14	naav	naav	VERB	_	_	15	xcomp	_	Analysis=naave(V)|Gloss=to-break
15	nga	nga	VERB	_	_	16	xcomp	_	Analysis=~fnga(V→V)|Gloss=to-be-in-a-state-of-V
16	lghii	lghii	NOUN	_	_	11	appos	_	Analysis=@–lghii(V→N)|Gloss=one-that-is-V-ing
17	meng	meng	X	_	Case=Abl|Number=Sing	16	dep:infl	_	Analysis=[Abl_Mod.Sg]
18	.	.	PUNCT	_	_	3	punct	_	Analysis=.

~~~


