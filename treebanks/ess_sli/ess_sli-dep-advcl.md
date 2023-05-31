---
layout: base
title:  'Statistics of advcl in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `advcl`

This relation is universal.

73 nodes (3%) are attached to their parents as `advcl`.

53 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.72602739726027.

The following 2 pairs of parts of speech are connected with `advcl`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (72; 99% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Sangavek	sangavek	ADV	_	PronType=Int	2	advmod	_	Analysis=sangavek(WH)|Gloss=why
2	atightugh	atightugh	VERB	_	_	0	root	_	Analysis=atightugh(V)|Gloss=to-read
3	aq	aq	VERB	_	Aspect=Prog|Tense=Pres	2	dep:aux	_	Analysis=~(g)aqe(V→V)|Gloss=to-be-currently-V-ing
4	sin	sin	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	3	dep:infl	_	Analysis=[Intrg.Intr.2Sg]
5	ingagh	ingagh	X	_	_	6	dep:pos	_	Analysis=ingagh*(POS)|Gloss=lying-down
6	nga	nga	VERB	_	_	2	advcl	_	Analysis=~fnga(POS→STATIVE)|Gloss=to-be-in-the-R-posture
7	gpek	gpek	X	_	Number[subj]=Sing|Person[subj]=2	6	dep:infl	_	Analysis=[2Sg]
8	efluga	efluga	NOUN	_	_	5	obl	_	Analysis=eflugagh(N)|Gloss=floor
9	mi	mi	X	_	Case=Loc|Number=Sing	8	dep:infl	_	Analysis=[Loc.Sg]
10	?	?	PUNCT	_	_	2	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 advcl	color:blue
1	Ungipaat	ungipaat	VERB	_	_	0	root	_	Analysis=ungipaate(V)|Gloss=to-tell
2	a	a	X	_	Mood=Ind|Subcat=Tran	1	dep:infl	_	Analysis=[Ind.Trns]
3	anga	anga	X	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=1|Person[subj]=3	1	dep:infl	_	Analysis=[3Sg.1Sg]
4	yug	yug	NOUN	_	_	6	nsubj	_	Analysis=yug(N)|Gloss=man
5	et	et	X	_	Case=Abs|Number=Plur	4	dep:infl	_	Analysis=[Abs.Pl]
6	kiyaghh	kiyaghh	VERB	_	_	8	xcomp	_	Analysis=kiyaghte(V)|Gloss=to-live
7	neghin	neghin	VERB	_	Polarity=Neg	6	dep:aux	_	Analysis=@–nghite(V→V)|Gloss=to-not-V
8	ni	ni	VERB	_	_	1	advcl	_	Analysis=@~fni(CmpdVbl)|Gloss=to-say-that-one-is-V-ing
9	lu	lu	X	_	Mood=Sbr|Subcat=Tran	8	dep:infl	_	Analysis=[Sbrd.Trns]
10	ki	ki	X	_	Number[obj]=Plur|Person[obj]=3	8	dep:infl	_	Analysis=[_.3Pl]
11	guygu	guygu	NOUN	_	_	6	obl	_	Analysis=guygu(N)|Gloss=summer-house
12	ni	ni	X	_	Case=Loc|Number=Plur	11	dep:infl	_	Analysis=[Loc.Pl]
13	taghnughha	taghnughha	NOUN	_	_	8	advcl	_	Analysis=taghnughhagh*(N)|Gloss=child
14	u	u	VERB	_	_	13	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
15	gaqnga	gaqnga	X	_	Mood=Cn2|Subcat=Intr	14	dep:infl	_	Analysis=[Cnsq2.Intr]
16	mi	mi	X	_	Number[subj]=Sing|Person[subj]=3|Reflex[subj]=Yes	14	dep:infl	_	Analysis=[4Sg]
17	.	.	PUNCT	_	_	13	punct	_	Analysis=.

~~~


