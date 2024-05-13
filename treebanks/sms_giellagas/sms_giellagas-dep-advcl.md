---
layout: base
title:  'Statistics of advcl in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="sms_giellagas-dep-advcl-tcl.html">advcl:tcl</a></tt>.

22 nodes (1%) are attached to their parents as `advcl`.

16 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.04545454545455.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (11; 50% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
1	čiččâm	čiččâm	NUM	Num	Case=Nom|Number=Sing|NumType=Card	2	nummod	_	GTtags=Sg,Nom
2	eeʹǩǩed	eeʹǩǩ	NOUN	N	Case=Par	3	nsubj	_	GTtags=Par
3	mâânn	mõõnnâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3
4	ouddâl	ouddâl	ADV	Adv	_	6	mark	_	_
5	ko	ko	SCONJ	CS	_	4	fixed	_	_
6	peäss	piâssâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	advcl	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl	color:blue
1	Ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Ind,Sg3
2	kuuʹǩǩ	kuʹǩǩ	ADV	Adv	_	4	advmod:tmod	_	GTtags=Sg,Nom
3	leämmaž	leeʹd	AUX	V	Aspect=Perf|VerbForm=Part	4	cop	_	GTtags=IV,Act,PrfPrc
4	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	0	root	_	GTtags=Sg,Loc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	iʹttli	iʹttled	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	advcl	_	GTtags=Ind,Prt,Sg3
7	kuʹmpp	kuʹmpp	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
8	väʹst	väʹst	ADV	Adv	_	6	advmod	_	_
9	mååust	mååust	ADV	Adv	_	6	advmod:lmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 advcl	color:blue
1	Suʹst	son	PRON	Pron	Case=Loc|Number=Sing|Person=3|PronType=Prs	4	obl:agent	_	GTtags=Pers,Sg3,Loc
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux	_	GTtags=IV,Ind,Prt,Sg3
3	õlggâm	õlggâd	AUX	Aux	Aspect=Perf|VerbForm=Part	4	aux	_	GTtags=Act,PrfPrc
4	leeʹd	leeʹd	AUX	V	VerbForm=Inf	0	root	_	GTtags=IV,Inf
5	tõn	tõt	DET	Det	Case=Gen|Number=Sing|PronType=Dem	6	det	_	GTtags=Dem,Sg,Gen
6	peeiʹv	peiʹvv	NOUN	N	Case=Gen|Number=Sing	4	obl:tmod	_	GTtags=Sg,Gen
7	čååǥǥâʹttmen	čååǥǥâʹttmen	VERB	V	_	4	xcomp	_	_
8	vuõptees	vuõptt	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	obj	_	GTtags=Pl,Acc,PxSg3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	leša	leša	CCONJ	CC	_	13	mark	_	_
11	mii	mii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Rel,Sg,Nom
12	leežž	leeʹd	AUX	Aux	Mood=Pot|Number=Sing|Person=3	13	aux	_	GTtags=IV,Pot,Sg3
13	šõddâm	šõddâd	VERB	V	Aspect=Perf|VerbForm=Part	4	advcl	_	GTtags=Act,PrfPrc
14	ǥu	ǥu	SCONJ	CS	_	18	mark	_	_
15	ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	18	aux:neg	_	GTtags=Neg,Ind,Sg3
16	tâʹl	tâʹl	ADV	Adv	AdvType=Tim	18	advmod:tmod	_	GTtags=Sem/Time
17	ni	ni	PART	Pcle	_	18	advmod:neg	_	_
18	vuäittam	vueiʹtted	VERB	V	Aspect=Perf|VerbForm=Part	13	advcl	_	GTtags=Act,PrfPrc|SpaceAfter=No
19	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


