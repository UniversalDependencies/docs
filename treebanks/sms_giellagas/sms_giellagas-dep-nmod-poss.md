---
layout: base
title:  'Statistics of nmod:poss in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-nmod.html">nmod</a></tt>.

11 nodes (0%) are attached to their parents as `nmod:poss`.

11 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09090909090909.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 27% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Siõm	siõmm	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	3	nmod	_	GTtags=Sem/Hum,Sg,Gen
2	heäppaž	heävaš	NOUN	N	Case=Gen|Number=Sing	3	nmod:poss	_	GTtags=Sg,Gen
3	ââlǥaž	ââlǥaž	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sem/Ani,Sg,Nom
4	ǩiʹcsti	ǩiʹcsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
5	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Gen
6	ool	ool	ADP	Po	AdpType=Post	5	case	_	GTtags=<gen>|SpaceAfter=No
7	,	,	PUNCT	CLB	_	12	punct	_	_
8	tõn	tõt	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	12	obj	_	GTtags=Dem,Sg,Acc,@OBJ>
9	vaaʹldi	väʹldded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	reparandum	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
10	...	...	PUNCT	PUNCT	_	12	punct	_	_
11	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	12	aux	_	GTtags=Neg,Ind,Sg3,@+FAUXV
12	välddam	väʹldded	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past	4	conj	_	GTtags=Ind,Prt,ConNeg|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Jiõm	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	2	aux	_	GTtags=Neg,Ind,Sg1
2	pâsttam	pâʹstted	VERB	Aux	Connegative=Yes|Mood=Ind|Tense=Past	0	root	_	GTtags=Ind,Prt,ConNeg
3	seuʹrrjed	seuʹrrjed	VERB	V	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	GTtags=Pers,Sg3,Gen
5	urččmõõžž	urččmõš	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc
6	ǥu	ǥu	SCONJ	CS	_	10	mark	_	_
7	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	GTtags=Pers,Sg3,Nom
8	leäi	leeʹd	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	GTtags=IV,Ind,Prt,Sg3
9	samai	samai	ADV	Adv	_	10	advmod:deg	_	_
10	jåʹttel	jåʹttel	ADJ	A	Case=Nom|Number=Sing	2	advcl	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	jälsti	jälsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	čõõđ	čõõđ	ADP	Pr	AdpType=Prep	4	case	_	_
4	ääiʹj	äiʹǧǧ	NOUN	N	Case=Gen|Number=Sing	2	obl:tmod	_	GTtags=Sg,Gen
5	Pariizzâst	Pariizzâst	PROPN	N	Case=Loc|NameType=Geo|Number=Sing	2	obl:lmod	_	GTtags=Prop,Sem/Plc,Sg,Loc|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	Franskkjânnam	Franskkjânnam	PROPN	N	Case=Gen|NameType=Geo|Number=Sing	8	nmod:poss	_	GTtags=Prop,Sem/Plc,Sg,Gen
8	vueiʹvvgåårdest	vueiʹvvgåårad	NOUN	N	Case=Loc|Number=Sing	5	appos	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


