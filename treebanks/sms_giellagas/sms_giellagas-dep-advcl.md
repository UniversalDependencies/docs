---
layout: base
title:  'Statistics of advcl in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advcl`

This relation is universal.

27 nodes (1%) are attached to their parents as `advcl`.

17 instances of `advcl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.03703703703704.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (16; 59% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (3; 11% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
1	čiččâm	čiččâm	NUM	Num	Case=Nom|Number=Sing|NumType=Card	2	nummod	_	GTtags=Sg,Nom
2	eeʹǩǩed	eeʹǩǩ	NOUN	N	Case=Par	3	nsubj	_	GTtags=Par
3	mâânn	mõõnnâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	GTtags=Ind,Prs,Sg3
4	ouddâl	ouddâl	ADV	Adv	ExtPos=SCONJ	6	mark	_	_
5	ko	ko	SCONJ	CS	_	4	fixed	_	_
6	peäss	piâssâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl	color:blue
1	Ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	2	aux	_	GTtags=Neg,Ind,Sg3
2	kuuʹǩǩ	kuʹǩǩ	ADV	Adv	_	4	advmod	_	GTtags=Sg,Nom
3	leämmaž	leeʹd	AUX	V	Aspect=Perf|VerbForm=Part	4	cop	_	GTtags=IV,Act,PrfPrc
4	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	0	root	_	GTtags=Sg,Loc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	iʹttli	iʹttled	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	advcl	_	GTtags=Ind,Prt,Sg3
7	kuʹmpp	kuʹmpp	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
8	väʹst	väʹst	ADV	Adv	_	6	advmod	_	_
9	mååust	mååust	ADV	Adv	_	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	Jiõm	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin	2	aux	_	GTtags=Neg,Ind,Sg1
2	pâsttam	pâʹstted	VERB	Aux	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt,ConNeg
3	seuʹrrjed	seuʹrrjed	VERB	V	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	GTtags=Pers,Sg3,Gen
5	urččmõõžž	urččmõš	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc
6	ǥu	ǥu	SCONJ	CS	_	10	mark	_	_
7	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	GTtags=Pers,Sg3,Nom
8	leäi	leeʹd	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	GTtags=IV,Ind,Prt,Sg3
9	samai	samai	ADV	Adv	_	10	advmod	_	_
10	jåʹttel	jåʹttel	ADJ	A	Case=Nom|Number=Sing	2	advcl	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


