---
layout: base
title:  'Statistics of xcomp in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `xcomp`

This relation is universal.

89 nodes (2%) are attached to their parents as `xcomp`.

49 instances of `xcomp` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93258426966292.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (41; 46% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (23; 26% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (23; 26% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Դեղ	դեղ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Deġ|LTranslit=deġ
2	գայլցաւու	գայլցաւ	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	1	nmod:poss	_	SpaceAfter=No|Translit=gaylc’awow|LTranslit=gaylc’aw
3	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
4	եբ	եբ	ADV	_	PronType=Rel|Style=Var	6	mark	_	Translit=eb|LTranslit=eb
5	ուժով	ուժով	ADJ	_	Degree=Pos	6	xcomp	_	Translit=owžov|LTranslit=owžov
6	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl:relcl	_	SpaceAfter=No|Translit=lini|LTranslit=linel
7	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Ծ	Ծ.	NUM	_	NumForm=Armenian|NumType=Card	4	discourse	_	SpaceAfter=No|Translit=Ç|LTranslit=Ç.
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Յաղագս	յաղագս	ADP	_	AdpType=Prep	4	case	_	Translit=Yaġags|LTranslit=yaġags
4	ցաւուն	ցաւ	NOUN	_	Case=Dat|Definite=Def|Number=Sing	0	root	_	SpaceAfter=No|Translit=c’awown|LTranslit=c’aw
5	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	7	nsubj	_	Translit=or|LTranslit=or
7	կոչի	կոչիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl:relcl	_	Translit=koč’i|LTranslit=koč’il
8	համր	համր	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	7	xcomp	_	SpaceAfter=No|Translit=hamr|LTranslit=hamr
9	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 xcomp	color:blue
1	Թէ	թէ	SCONJ	_	_	2	mark	_	Translit=T’ē|LTranslit=t’ē
2	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	6	advcl	_	Translit=lini|LTranslit=linel
3	ի	ի	ADP	_	AdpType=Prep	4	case	_	Translit=i|LTranslit=i
4	գարոյ	գարի	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	2	obl	_	SpaceAfter=No|Translit=garoy|LTranslit=gari
5	՝	՝	PUNCT	_	_	6	punct	_	Translit=:|LTranslit=:
6	տուր	տալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	Translit=towr|LTranslit=tal
7	ցորեն	ցորեն	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	6	obj	_	SpaceAfter=No|Translit=c’oren|LTranslit=c’oren
8	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
9	որ	որ	SCONJ	_	_	10	mark	_	Translit=or|LTranslit=or
10	ուտէ	ուտել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	6	xcomp	_	SpaceAfter=No|Translit=owtē|LTranslit=owtel
11	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


