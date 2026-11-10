---
layout: base
title:  'Statistics of nmod in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="ess_sli-dep-nmod-arg.html">nmod:arg</a></tt>.

68 nodes (5%) are attached to their parents as `nmod`.

44 instances of `nmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01470588235294.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (62; 91% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	Ataka	ata	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	Analysis=ata(N)^[Abs.1SgPoss.Sg]|Gloss=my-father|MSeg=Ata+ka
2	angya	angya	NOUN	_	_	4	obj	_	Analysis=angyagh(N)|Gloss=boat
3	ghlla	ghlla	NOUN	_	_	2	nmod	_	Analysis=–ghllag(N→N)|Gloss=large-N
4	lguuq	lgu	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=–lgu(N→V)^[Ind.Intr]^[3Sg]|Gloss=to-have-N|MSeg=lgu+u+q
5	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Kitum	kitu	PRON	_	Case=Gen|Number=Sing|PronType=Int	2	nmod	_	Analysis=kitu(WH)^[Rel.Sg]|Gloss=whose|MSeg=Kitu+m
2	qikmii	qikmii	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	Analysis=qikmigh(N)^[Abs.3SgPoss.Sg]|Gloss=his-dog
3	qilug	qilug	VERB	_	_	0	root	_	Analysis=qilug(V)|Gloss=to-bark
4	aqa	aq	X	_	Aspect=Prog|Number[subj]=Sing|Person[subj]=3|Tense=Pres	3	dep:aux	_	Analysis=~(g)aqe(V→V)^[Intrg.Intr]^[3Sg]|Gloss=to-be-currently-V-ing|MSeg=aq+a
5	pikani	pikani	ADV	_	Case=Loc	3	advmod	_	Analysis=pikani(DEM.ADV.Loc)|Gloss=up-there|SpaceAfter=No
6	?	?	PUNCT	_	_	3	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Yughaghtet	yughaghte	NOUN	_	Case=Gen|Number=Plur	2	nmod	_	Analysis=yughaghte(N)^[Rel.Pl]|Gloss=the-ministers'|MSeg=Yughaghte+t
2	taghnughhiit	taghnughhiit	X	_	Case=Abs|Number=Plur|Number[psor]=Plur|Person[psor]=3	4	nsubj	_	Analysis=taghnughhagh*(N)^[Abs.3PlPoss.Pl]|Gloss=their-children
3	aghula	aghula	VERB	_	_	4	xcomp	_	Analysis=aghula(V)|Gloss=to-dance
4	yugtut	yug	VERB	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=@~fyug(V→V)^[Ind.Intr]^[3Pl]|Gloss=to-want-to-V|MSeg=yug+tu+t
5	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


