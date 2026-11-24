---
layout: base
title:  'Statistics of obl in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="ess_sli-dep-obl-mod.html">obl:mod</a></tt>.

69 nodes (5%) are attached to their parents as `obl`.

56 instances of `obl` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81159420289855.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (65; 94% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Laluramka	Laluramka	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=Laluramke(N)^[Abs.Sg]|Gloss=the-white-person
2	kaatuq	kaat	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=kaate(V)^[Ind.Intr]^[3Sg]|Gloss=he-arrived|MSeg=kaat+u+q
3	Sivungaghmeng	Sivungagh	NOUN	_	Case=Abl|Number=Sing	2	obl	_	Analysis=Sivungagh(N)^[Abl_Mod.Sg]|Gloss=from-Savoonga|MSeg=Sivungagh+meng|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Analysis=.

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
4	malghii	ma	X	_	Number[subj]=Sing|Person[subj]=3|Tense=Past	3	dep:aux	_	Analysis=@~:(i/u)ma(V→V)^[Ptcp.Intr]^[3Sg]|Gloss=to-have-V-ed|MSeg=ma+lghii
5	negh	negh	VERB	_	_	3	advcl	_	Analysis=negh(V)|Gloss=to-eat
6	naluku	na	VERB	_	Mood=Sbr|Number[obj]=Sing|Person[obj]=3|Subcat=Tran	5	dep:mark	_	Analysis=@~fna(V→V)^[Sbrd.Trns]^[_.3Sg]|Gloss=in-order-to-V|MSeg=na+lu+ku
7	nefkuuraq	nefkuuraq	NOUN	_	Case=Abs|Number=Sing	5	obj	_	Analysis=nefkuuragh(N)^[Abs.Sg]|Gloss=the-dried-meat|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Unaami	unaami	PART	_	_	2	obl	_	Analysis=unaami(PTCL)|Gloss=tomorrow
2	aghulaq	aghulaq	VERB	_	_	3	xcomp	_	Analysis=aghulaqe(V)|Gloss=to-leave
3	sugtunga	sug	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Subcat=Intr	0	root	_	Analysis=@~fyug(V→V)^[Ind.Intr]^[1Sg]|Gloss=to-want-to-V|MSeg=sug+tu+nga
4	naayvamun	naayva	NOUN	_	Case=All|Number=Sing	3	obl	_	Analysis=naayvagh(N)^[All.Sg]|Gloss=to-the-lake|MSeg=naayva+mun|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Analysis=.

~~~


