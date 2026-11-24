---
layout: base
title:  'Statistics of dep:ana in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `dep:ana`

This relation is a language-specific subtype of .
There are also 5 other language-specific subtypes of `dep`: <tt><a href="ess_sli-dep-dep-aux.html">dep:aux</a></tt>, <tt><a href="ess_sli-dep-dep-cop.html">dep:cop</a></tt>, <tt><a href="ess_sli-dep-dep-emo.html">dep:emo</a></tt>, <tt><a href="ess_sli-dep-dep-mark.html">dep:mark</a></tt>, <tt><a href="ess_sli-dep-dep-pos.html">dep:pos</a></tt>.

7 nodes (0%) are attached to their parents as `dep:ana`.

7 instances of `dep:ana` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `dep:ana`: <tt><a href="ess_sli-pos-ADV.html">ADV</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (4; 57% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (3; 43% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep:ana	color:blue
1	Naafqaqa	naafq	VERB	_	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran	0	root	_	Analysis=naafqe(V)^[Ind.Trns]^[1Sg.3Sg]|Gloss=I-broke-it|MSeg=Naafq+a+qa
2	suflugan	sufluga	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	1	obj	_	Analysis=suflugagh(N)^[Abs.2SgPoss.Sg]|Gloss=your-gun|MSeg=sufluga+n
3	tukfi	tukfi	VERB	_	_	4	acl	_	Analysis=tukfigh(V)|Gloss=to-buy
4	qen	qe	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	2	appos	_	Analysis=@~–(g)ke(V→N)^[Abs.2SgPoss.Sg]|Gloss=the-one's-possessor-V-ed|MSeg=qe+n
5	estugameng	estuga	NOUN	_	Case=Abl|Number=Sing	3	obl	_	Analysis=estugagh(N)^[Abl_Mod.Sg]|Gloss=from-the-store|MSeg=estuga+meng
6	ta	ta	X	_	_	7	dep:ana	_	Analysis=[Anaphor]
7	maani	maani	ADV	_	Case=Loc	5	advmod	_	Analysis=maani(DEM.ADV.Loc)|Gloss=in-this-area
8	.	.	PUNCT	_	_	1	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:ana	color:blue
1	Qawaak	qawaak	NOUN	_	Case=Abs|Number=Sing	4	obj	_	Analysis=qawaag(N)^[Abs.Sg]|Gloss=bird
2	es	es	X	_	_	3	dep:ana	_	Analysis=[Anaphor]
3	pagna	pagna	PRON	_	Case=Abs|Number=Sing|PronType=Dem	1	appos	_	Analysis=paagna(DEM.PRO.Abs.Sg)|Gloss=that-up-there
4	guutigu	guut	VERB	_	Mood=Opt|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Pres	0	root	_	Analysis=guute(V)^[Opt.Pres.Trns.2Sg.3Sg]|Gloss=shoot-it|MSeg=guut+igu|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


