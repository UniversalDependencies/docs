---
layout: base
title:  'Statistics of advcl in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `advcl`

This relation is universal.

73 nodes (5%) are attached to their parents as `advcl`.

53 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.23287671232877.

The following 2 pairs of parts of speech are connected with `advcl`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (72; 99% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	Sangavek	sangavek	ADV	_	PronType=Int	2	advmod	_	Analysis=sangavek(WH)|Gloss=why
2	atightugh	atightugh	VERB	_	_	0	root	_	Analysis=atightugh(V)|Gloss=to-read
3	aqsin	aq	X	_	Aspect=Prog|Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	2	dep:aux	_	Analysis=~(g)aqe(V→V)^[Intrg.Intr.2Sg]|Gloss=to-be-currently-V-ing|MSeg=aq+sin
4	ingagh	ingagh	X	_	_	5	dep:pos	_	Analysis=ingagh*(POS)|Gloss=lying-down
5	ngaghpek	nga	VERB	_	Number[subj]=Sing|Person[subj]=2	2	advcl	_	Analysis=~fnga(POS→STATIVE)^[2Sg]|Gloss=to-be-in-the-R-posture|MSeg=nga+gpek
6	eflugami	efluga	NOUN	_	Case=Loc|Number=Sing	4	obl	_	Analysis=eflugagh(N)^[Loc.Sg]|Gloss=on-the-floor|MSeg=efluga+mi|SpaceAfter=No
7	?	?	PUNCT	_	_	2	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl	color:blue
1	Ungipaataanga	ungipaat	VERB	_	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=1|Person[subj]=3|Subcat=Tran	0	root	_	Analysis=ungipaate(V)^[Ind.Trns]^[3Sg.1Sg]|Gloss=he-told-me|MSeg=Ungipaat+a+anga
2	yuget	yug	NOUN	_	Case=Abs|Number=Plur	3	nsubj	_	Analysis=yug(N)^[Abs.Pl]|Gloss=people|MSeg=yug+et
3	kiyaghh	kiyaghh	VERB	_	_	5	xcomp	_	Analysis=kiyaghte(V)|Gloss=to-live
4	neghin	neghin	X	_	Polarity=Neg	3	dep:aux	_	Analysis=@–nghite(V→V)|Gloss=to-not-V
5	niluki	ni	VERB	_	Mood=Sbr|Number[obj]=Plur|Person[obj]=3|Subcat=Tran	1	advcl	_	Analysis=@~fni(CmpdVbl)^[Sbrd.Trns]^[_.3Pl]|Gloss=to-say-that-one-is-V-ing|MSeg=ni+lu+ki
6	guyguni	guygu	NOUN	_	Case=Loc|Number=Plur	3	obl	_	Analysis=guygu(N)^[Loc.Pl]|Gloss=in-summer-houses|MSeg=guygu+ni
7	taghnughha	taghnughha	NOUN	_	_	5	advcl	_	Analysis=taghnughhagh*(N)|Gloss=child
8	awaqngami	u	X	_	Mood=Cn2|Number[subj]=Sing|Person[subj]=3|Reflex[subj]=Yes|Subcat=Intr	7	dep:cop	_	Analysis=~:(ng)u(N→V)^[Cnsq2.Intr]^[4Sg]|Gloss=to-be-N|MSeg=u+gaqnga+mi
9	.	.	PUNCT	_	_	7	punct	_	Analysis=.

~~~


