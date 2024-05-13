---
layout: base
title:  'Statistics of nmod in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="ess_sli-dep-nmod-arg.html">nmod:arg</a></tt>.

68 nodes (3%) are attached to their parents as `nmod`.

44 instances of `nmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63235294117647.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (62; 91% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Ata	ata	NOUN	_	_	5	nsubj	_	Analysis=ata(N)|Gloss=father
2	ka	ka	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	dep:infl	_	Analysis=[Abs.1SgPoss.Sg]
3	angya	angya	NOUN	_	_	5	obj	_	Analysis=angyagh(N)|Gloss=boat
4	ghlla	ghlla	NOUN	_	_	3	nmod	_	Analysis=–ghllag(N→N)|Gloss=large-N
5	lgu	lgu	VERB	_	_	0	root	_	Analysis=–lgu(N→V)|Gloss=to-have-N
6	u	u	X	_	Mood=Ind|Subcat=Intr	5	dep:infl	_	Analysis=[Ind.Intr]
7	q	q	X	_	Number[subj]=Sing|Person[subj]=3	5	dep:infl	_	Analysis=[3Sg]
8	.	.	PUNCT	_	_	5	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Kitu	kitu	PRON	_	PronType=Int	3	nmod	_	Analysis=kitu(WH)|Gloss=who
2	m	m	X	_	Case=Gen|Number=Sing	1	dep:infl	_	Analysis=[Rel.Sg]
3	qikmii	qikmii	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	Analysis=qikmigh(N)^[Abs.3SgPoss.Sg]|Gloss=his-dog
4	qilug	qilug	VERB	_	_	0	root	_	Analysis=qilug(V)|Gloss=to-bark
5	aq	aq	VERB	_	Aspect=Prog|Tense=Pres	4	dep:aux	_	Analysis=~(g)aqe(V→V)|Gloss=to-be-currently-V-ing
6	a	a	X	_	Number[subj]=Sing|Person[subj]=3	5	dep:infl	_	Analysis=[Intrg.Intr]^[3Sg]
7	pikani	pikani	ADV	_	Case=Loc	4	advmod	_	Analysis=pikani(DEM.ADV.Loc)|Gloss=up-there|SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Yughaghte	yughaghte	NOUN	_	_	3	nmod	_	Analysis=yughaghte(N)|Gloss=minister
2	t	t	X	_	Case=Gen|Number=Plur	1	dep:infl	_	Analysis=[Rel.Pl]
3	taghnughhiit	taghnughhiit	X	_	Case=Abs|Number=Plur|Number[psor]=Plur|Person[psor]=3	5	nsubj	_	Analysis=taghnughhagh*(N)^[Abs.3PlPoss.Pl]|Gloss=their-children
4	aghula	aghula	VERB	_	_	5	xcomp	_	Analysis=aghula(V)|Gloss=to-dance
5	yug	yug	VERB	_	_	0	root	_	Analysis=@~fyug(V→V)|Gloss=to-want-to-V
6	tu	tu	X	_	Mood=Ind|Subcat=Intr	5	dep:infl	_	Analysis=[Ind.Intr]
7	t	t	X	_	Number[subj]=Plur|Person[subj]=3	5	dep:infl	_	Analysis=[3Pl]
8	.	.	PUNCT	_	_	5	punct	_	Analysis=.

~~~


