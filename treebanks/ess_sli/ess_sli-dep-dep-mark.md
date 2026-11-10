---
layout: base
title:  'Statistics of dep:mark in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:mark`

This relation is a language-specific subtype of .
There are also 5 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-ana.html">dep:ana</a></tt>, <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

5 nodes (0%) are attached to their parents as `dep:mark`.

5 instances of `dep:mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `dep:mark`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep:mark	color:blue
1	Amaa	amaa	NOUN	_	Case=Abs|Number=Sing	3	nsubj	_	Analysis=amaa(N)^[Abs.Sg]|Gloss=the-wolf
2	aagken	aagken	ADV	_	Case=Abl	3	obl	_	Analysis=aagken(DEM.ADV.Abl_Mod)|Gloss=over-there
3	tagi	tagi	VERB	_	_	0	root	_	Analysis=tagi(V)|Gloss=to-come
4	malghii	ma	X	_	Number[subj]=Sing|Person[subj]=3|Tense=Past	3	dep:aux	_	Analysis=@~:(i/u)ma(V→V)^[Ptcp.Intr]^[3Sg]|Gloss=to-have-V-ed|MSeg=ma+lghii
5	negh	negh	VERB	_	_	3	advcl	_	Analysis=negh(V)|Gloss=to-eat
6	naluku	na	VERB	_	Mood=Sbr|Number[obj]=Sing|Person[obj]=3|Subcat=Tran	5	dep:mark	_	Analysis=@~fna(V→V)^[Sbrd.Trns]^[_.3Sg]|Gloss=in-order-to-V|MSeg=na+lu+ku
7	nefkuuraq	nefkuuraq	NOUN	_	Case=Abs|Number=Sing	5	obj	_	Analysis=nefkuuragh(N)^[Abs.Sg]|Gloss=the-dried-meat|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 dep:mark	color:blue
1	Aakaqa	aaka	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	Analysis=aakagh*(N)^[Abs.1SgPoss.Sg]|Gloss=my-sister|MSeg=Aaka+qa
2	estugagh	estugagh	NOUN	_	_	3	obj	_	Analysis=estugagh(N)|Gloss=store
3	tuq	t	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=+te(N→V)^[Ind.Intr]^[3Sg]|Gloss=to-go-to-N|MSeg=t+u+q
4	yavluni	yavlu	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=3|Reflex=Yes	5	obj	_	Analysis=yavlu(N)^[Abs.4SgPoss.Sg]|Gloss=her-sweetheart|MSeg=yavlu+ni
5	tasluqluku	tasluq	VERB	_	Mood=Sbr|Number[obj]=Sing|Person[obj]=3|Subcat=Tran	3	advcl	_	Analysis=tasluqe(V)^[Sbrd.Trns]^[_.3Sg]|Gloss=holding-hands-with-him|MSeg=tasluq+lu+ku
6	tukfigh	tukfigh	VERB	_	_	3	advcl	_	Analysis=tukfigh(V)|Gloss=to-buy
7	i	i	X	_	_	6	dep:aux	_	Analysis=~i(V→V)|Gloss=to-V-something
8	naluni	na	VERB	_	Mood=Sbr|Number[subj]=Sing|Person[subj]=3|Reflex[subj]=Yes|Subcat=Intr	7	dep:mark	_	Analysis=@~fna(V→V)^[Sbrd.Intr]^[4Sg]|Gloss=in-order-to-V|MSeg=na+lu+ni
9	laluwaaymeng	laluwaay	NOUN	_	Case=Abl|Number=Sing	6	obl:mod	_	Analysis=laluwaaye(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-dried-onion|MSeg=laluwaay+meng|SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	Analysis=.

~~~


