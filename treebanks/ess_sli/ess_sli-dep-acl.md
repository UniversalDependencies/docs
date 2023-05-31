---
layout: base
title:  'Statistics of acl in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `acl`

This relation is universal.

17 nodes (1%) are attached to their parents as `acl`.

17 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11764705882353.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (16; 94% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 acl	color:blue
1	Ighnegh	ighnegh	NOUN	_	_	9	nsubj	_	Analysis=ighnegh(N)|Gloss=son
2	ma	ma	X	_	Case=Erg|Number=Plur|Number[psor]=Sing|Person[psor]=1	1	dep:infl	_	Analysis=[Rel.1SgPoss.Pl]
3	qughsatku	qughsatku	NOUN	_	_	7	nsubj	_	Analysis=qughsatku(N)|Gloss=king-polar-bear
4	mun	mun	X	_	Case=All|Number=Sing	3	dep:infl	_	Analysis=[All.Sg]
5	qazigya	qazigya	NOUN	_	_	7	obj	_	Analysis=qazigyagh(N)|Gloss=spotted-seal
6	t	t	X	_	Case=Abs|Number=Plur	5	dep:infl	_	Analysis=[Abs.Pl]
7	negh	negh	VERB	_	_	9	acl	_	Analysis=negh(V)|Gloss=to-eat
8	uma	uma	VERB	_	Tense=Past	7	dep:aux	_	Analysis=@~:(i/u)ma(V→V)|Gloss=to-have-V-ed
9	ni	ni	VERB	_	_	0	root	_	Analysis=@~fni(CmpdVbl)|Gloss=to-say-that-one-is-V-ing
10	it	it	X	_	Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3	9	dep:infl	_	Analysis=[Ind.Trns]^[3Pl.3Pl]
11	.	.	PUNCT	_	_	9	punct	_	Analysis=.

~~~


