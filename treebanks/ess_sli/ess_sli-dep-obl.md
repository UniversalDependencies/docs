---
layout: base
title:  'Statistics of obl in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="ess_sli-dep-obl-mod.html">obl:mod</a></tt>.

69 nodes (3%) are attached to their parents as `obl`.

56 instances of `obl` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.68115942028985.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (65; 94% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl	color:blue
1	Laluramka	Laluramka	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=Laluramke(N)^[Abs.Sg]|Gloss=the-white-person
2	kaat	kaat	VERB	_	_	0	root	_	Analysis=kaate(V)|Gloss=to-arrive
3	u	u	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	Sivungagh	Sivungagh	NOUN	_	_	2	obl	_	Analysis=Sivungagh(N)|Gloss=Savoonga
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Unaami	unaami	PART	_	_	2	obl	_	Analysis=unaami(PTCL)|Gloss=tomorrow
2	aghulaq	aghulaq	VERB	_	_	3	xcomp	_	Analysis=aghulaqe(V)|Gloss=to-leave
3	sug	sug	VERB	_	_	0	root	_	Analysis=@~fyug(V→V)|Gloss=to-want-to-V
4	tu	tu	X	_	Mood=Ind|Subcat=Intr	3	dep:infl	_	Analysis=[Ind.Intr]
5	nga	nga	X	_	Number[subj]=Sing|Person[subj]=1	3	dep:infl	_	Analysis=[1Sg]
6	naayva	naayva	NOUN	_	_	3	obl	_	Analysis=naayvagh(N)|Gloss=lake
7	mun	mun	X	_	Case=All|Number=Sing	6	dep:infl	_	Analysis=[All.Sg]
8	.	.	PUNCT	_	_	3	punct	_	Analysis=.

~~~


