---
layout: base
title:  'Statistics of appos in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `appos`

This relation is universal.

21 nodes (1%) are attached to their parents as `appos`.

21 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85714285714286.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (18; 86% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (3; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Taghnughhaq	taghnughhaq	NOUN	_	Case=Abs|Number=Sing	4	nsubj	_	Analysis=taghnughhagh*(N)^[Abs.Sg]|Gloss=the-child
2	qinuyu	qinuyu	VERB	_	_	3	acl	_	Analysis=qinuyug(V)|Gloss=to-get-sick
3	lghii	lghii	NOUN	_	Case=Abs|Number=Sing	1	appos	_	Analysis=@–lghii(V→N)^[Abs.Sg]|Gloss=one-that-is-V-ing
4	iitgh	iitgh	VERB	_	_	0	root	_	Analysis=itegh(V)|Gloss=to-go-in
5	uma	uma	VERB	_	_	4	dep:aux	_	Analysis=@~:(i/u)ma(V→V)|Gloss=to-have-V-ed
6	a	a	X	_	Mood=Ind|Subcat=Intr	5	dep:infl	_	Analysis=[Ind.Intr]
7	q	q	X	_	Number[subj]=Sing|Person[subj]=3	5	dep:infl	_	Analysis=[3Sg]
8	apa	apa	NOUN	_	_	10	nmod	_	Analysis=apa(N)|Gloss=grandfather
9	mi	mi	X	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3|Reflex=Yes	8	dep:infl	_	Analysis=[Rel.4SgPoss.Sg]
10	mangtegha	mangtegha	NOUN	_	_	4	obl	_	Analysis=mangteghagh(N)|Gloss=house
11	anun	anun	X	_	Case=All|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	dep:infl	_	Analysis=[All.3SgPoss.Sg]
12	.	.	PUNCT	_	_	4	punct	_	Analysis=.

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
4	guut	guut	VERB	_	_	0	root	_	Analysis=guute(V)|Gloss=to-shoot
5	igu	igu	X	_	Mood=Opt|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Pres	4	dep:infl	_	Analysis=[Opt.Pres.Trns.2Sg.3Sg]
6	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


