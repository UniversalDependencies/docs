---
layout: base
title:  'Statistics of appos in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `appos`

This relation is universal.

21 nodes (1%) are attached to their parents as `appos`.

21 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (18; 86% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (3; 14% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	Aghna	aghna	NOUN	_	_	3	nmod	_	Analysis=aghnagh(N)|Gloss=woman
2	ghllagem	ghllag	NOUN	_	Case=Gen|Number=Sing	1	nmod	_	Analysis=–ghllag(N→N)^[Rel.Sg]|Gloss=large-N|MSeg=ghllag+em
3	ighneghi	ighnegh	NOUN	_	Case=Abs|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	Analysis=ighnegh(N)^[Abs.3SgPoss.Pl]|Gloss=her-sons|MSeg=ighnegh+i
4	neghe	neghe	VERB	_	_	0	root	_	Analysis=neghe(V)|Gloss=eat
5	llequt	lleq	X	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Subcat=Intr|Tense=Fut	4	dep:aux	_	Analysis=@lleqe(V→V)^[Ind.Intr]^[3Pl]|Gloss=will-V|MSeg=lleq+u+t
6	akuutameng	akuuta	NOUN	_	Case=Abl|Number=Sing	4	obl:mod	_	Analysis=akuutagh(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-mixture|MSeg=akuuta+meng
7	aqavzi	aqavzi	NOUN	_	_	8	nmod:arg	_	Analysis=aqavzig(N)|Gloss=cloudberry
8	legmeng	leg	NOUN	_	Case=Abl|Number=Sing	6	appos	_	Analysis=–leg(N→N)^[Abl_Mod.Sg]|Gloss=one-having-N|MSeg=leg+meng
9	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Qawaak	qawaak	NOUN	_	Case=Abs|Number=Sing	4	obj	_	Analysis=qawaag(N)^[Abs.Sg]|Gloss=bird
2	es	es	X	_	_	3	dep:ana	_	Analysis=[Anaphor]
3	pagna	pagna	PRON	_	Case=Abs|Number=Sing|PronType=Dem	1	appos	_	Analysis=paagna(DEM.PRO.Abs.Sg)|Gloss=that-up-there
4	guutigu	guut	VERB	_	Mood=Opt|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Pres	0	root	_	Analysis=guute(V)^[Opt.Pres.Trns.2Sg.3Sg]|Gloss=shoot-it|MSeg=guut+igu|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


