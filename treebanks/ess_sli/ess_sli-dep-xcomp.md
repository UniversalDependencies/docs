---
layout: base
title:  'Statistics of xcomp in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `xcomp`

This relation is universal.

34 nodes (2%) are attached to their parents as `xcomp`.

32 instances of `xcomp` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05882352941176.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (33; 97% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Apan	apa	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	nsubj	_	Analysis=apa(N)^[Abs.2SgPoss.Sg]|Gloss=your-grandfather|MSeg=Apa+n
2	naayghamun	naaygha	NOUN	_	Case=All|Number=Sing	3	obl	_	Analysis=naayghagh(N)^[All.Sg]|Gloss=to-the-mountain|MSeg=naaygha+mun
3	mayugh	mayugh	VERB	_	_	4	xcomp	_	Analysis=mayugh(V)|Gloss=to-climb
4	yugtuq	yug	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=@~fyug(V→V)^[Ind.Intr]^[3Sg]|Gloss=to-want-to-V|MSeg=yug+tu+q
5	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	Apeghtughistem	Apeghtughiste	NOUN	_	Case=Erg|Number=Sing	2	nsubj	_	Analysis=Apeghtughiste(N)^[Rel.Sg]|Gloss=the-teacher|MSeg=Apeghtughiste+m
2	tuune	tuune	VERB	_	_	0	root	_	Analysis=tuune(V)|Gloss=to-give
3	lleqii	lleq	X	_	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Fut	2	dep:aux	_	Analysis=@lleqe(V→V)^[Ind.Trns]^[3Sg.3Pl]|Gloss=will-V|MSeg=lleq+i+i
4	tuquuqat	tuquuqa	NOUN	_	Case=Abs|Number=Plur	2	obj	_	Analysis=tuquuqagh(N)^[Abs.Pl]|Gloss=the-nails|MSeg=tuquuqa+t
5	taaghtamun	taaghta	NOUN	_	Case=All|Number=Sing	2	obl	_	Analysis=taaghta(N)^[All.Sg]|Gloss=to-the-doctor|MSeg=taaghta+mun
6	sufluga	sufluga	NOUN	_	_	7	nmod:arg	_	Analysis=suflugagh(N)|Gloss=gun
7	legmun	leg	NOUN	_	Case=All|Number=Sing	5	appos	_	Analysis=–leg(N→N)^[All.Sg]|Gloss=one-with-N|MSeg=leg+mun
8	naav	naav	VERB	_	_	9	xcomp	_	Analysis=naave(V)|Gloss=to-break
9	nga	nga	VERB	_	_	10	xcomp	_	Analysis=~fnga(V→V)|Gloss=to-be-in-a-state-of-V
10	lghiimeng	lghii	NOUN	_	Case=Abl|Number=Sing	6	appos	_	Analysis=@–lghii(V→N)^[Abl_Mod.Sg]|Gloss=one-that-is-V-ing|MSeg=lghii+meng
11	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


