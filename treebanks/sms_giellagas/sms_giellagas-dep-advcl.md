---
layout: base
title:  'Statistics of advcl in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="sms_giellagas-dep-advcl-tmod.html">advcl:tmod</a></tt>.

18 nodes (1%) are attached to their parents as `advcl`.

11 instances of `advcl` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27777777777778.

The following 6 pairs of parts of speech are connected with `advcl`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (10; 56% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advcl	color:blue
1	Nuʹtt	nuʹtt	ADV	Adv	_	2	advmod	_	_
2	kuâđđje	kuâđđjed	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3
3	vaʹlljeeǩâni	vaʹlljeed	VERB	V	Case=Abe|VerbForm=Ger	2	advcl	_	GTtags=VAbess
4	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Mal,Attr
5	Smith	Smith	PROPN	N	Animacy=Hum|Case=Nom|NameType=Sur|Number=Sing	4	flat:name	_	GTtags=Prop,Sem/Sur,Sg,Nom
6	diǥu	diǥu	SCONJ	CS	_	9	mark	_	_
7	še	še	ADV	Pcle	_	9	advmod	_	_
8	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	4	conj	_	GTtags=Prop,Sem/Fem,Attr
9	Brown	Brown	PROPN	N	Animacy=Hum|Case=Nom|NameType=Sur|Number=Sing	8	flat:name	_	GTtags=Prop,Sem/Sur,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advcl	color:blue
1	Tät	tät	DET	Det	Case=Nom|Number=Sing|PronType=Dem	4	det	_	GTtags=Dem,Sg,Nom
2	jåhtta	jåhtta	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time
3	tuåimtum	tuåimted	VERB	V	Aspect=Perf|VerbForm=Part|Voice=Pass	4	advcl	_	GTtags=Pass,PrfPrc
4	ǩeʹrjj	ǩeʹrjj	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	GTtags=Sg,Nom
5	lij	leeʹd	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	7	cop	_	GTtags=IV,Ind,Prs,Sg3
6	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	7	obl	_	GTtags=Prop,Sem/Mal,Sg,Nom
7	vuõltteem	vuõltteed	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	GTtags=Act,PrfPrc|SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 advcl	color:blue
1	Suʹst	son	PRON	Pron	Case=Loc|Number=Sing|Person=3|PronType=Prs	4	obl:agent	_	GTtags=Pers,Sg3,Loc
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	4	aux	_	GTtags=IV,Ind,Prt,Sg3
3	õlggâm	õlggâd	AUX	Aux	Aspect=Perf|VerbForm=Part	4	aux	_	GTtags=Act,PrfPrc
4	leeʹd	leeʹd	AUX	V	Valency=1|VerbForm=Inf	0	root	_	GTtags=IV,Inf
5	tõn	tõt	DET	Det	Case=Gen|Number=Sing|PronType=Dem	6	det	_	GTtags=Dem,Sg,Gen
6	peeiʹv	peiʹvv	NOUN	N	Case=Gen|Number=Sing	4	obl:tmod	_	GTtags=Sg,Gen
7	čååǥǥâʹttmen	čååǥǥâʹttmen	VERB	V	_	4	xcomp	_	_
8	vuõptees	vuõptt	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	obj	_	GTtags=Pl,Acc,PxSg3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	leša	leša	CCONJ	CC	_	13	mark	_	_
11	mii	mii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Rel,Sg,Nom
12	leežž	leeʹd	AUX	Aux	Mood=Pot|Number=Sing|Person=3|Valency=1	13	aux	_	GTtags=IV,Pot,Sg3
13	šõddâm	šõddâd	VERB	V	Aspect=Perf|VerbForm=Part	4	advcl	_	GTtags=Act,PrfPrc
14	ǥu	ǥu	SCONJ	CS	_	18	mark	_	_
15	ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	18	aux:neg	_	GTtags=Neg,Ind,Sg3
16	tâʹl	tâʹl	ADV	Adv	AdvType=Tim	18	advmod:tmod	_	GTtags=Sem/Time
17	ni	ni	PART	Pcle	_	18	advmod:neg	_	_
18	vuäittam	vueiʹtted	VERB	V	Aspect=Perf|VerbForm=Part	13	advcl	_	GTtags=Act,PrfPrc|SpaceAfter=No
19	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


