---
layout: base
title:  'Statistics of fixed in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `fixed`

This relation is universal.

11 nodes (0%) are attached to their parents as `fixed`.

11 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (3; 27% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-ADP.html">ADP</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Кӧръяс	кӧр	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	GTtags=N,Pl,Nom
2	пиялэны	пиявны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=V,IV,Ind,Prs,Pl3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
4	посни	посни	ADJ	A	Case=Nom|Number=Sing	5	amod	_	GTtags=A,Sg,Nom
5	кӧрыс	кӧр	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	GTtags=N,Sg,Nom,PxSg3
6	пиялэ	пиявны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=V,IV,Ind,Prs,Sg3
7	как	как	SCONJ	CS	ExtPos=ADV	6	advmod	_	GTtags=CS|OrigLang=ru
8	раз	раз	NOUN	N	Case=Nom|Number=Sing	7	fixed	_	GTtags=N,Sg,Nom|OrigLang=ru|SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Сыысь	сійӧ	PRON	Pron	Case=Ela|Number=Sing|Person=3|PronType=Prs	6	obl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	гашке	гашкӧ	PART	Pcle	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	_
6	бросайтчы	бросайтчыны	VERB	V	Connegative=Yes	0	root	_	OrigLang=ru
7	в	в	ADP	Pr	_	8	case	_	Lang=ru
8	глаза	глаз	NOUN	N	Case=Nom|Number=Plur	6	obl	_	Lang=ru|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	потому	потому	SCONJ	CS	ExtPos=SCONJ	13	mark	_	Lang=ru
11	что	что	SCONJ	CS	_	10	fixed	_	Lang=ru
12	уна	уна	ADV	Adv	_	13	advmod	_	_
13	йӧз	йӧз	NOUN	N	Case=Nom|Number=Sing	6	advcl	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Так	так	PART	Pcle	ExtPos=SCONJ	8	mark	_	Lang=ru
2	что	что	PRON	Pron	_	1	fixed	_	Lang=ru|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	никучем	никутшӧм	ADV	Adv	Polarity=Neg	5	advmod	_	_
5	иностраннэй	иностраннӧй	ADJ	A	Case=Nom|Number=Sing	6	amod	_	OrigLang=ru
6	местаясэ	места	NOUN	N	Case=Ill|Number=Plur	8	obl	_	OrigLang=ru
7	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres	8	aux	_	_
8	ветлоо	ветлыны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


