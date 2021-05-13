---
layout: base
title:  'Statistics of nsubj:cop in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-nsubj.html">nsubj</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:cop`.

4 instances of `nsubj:cop` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16666666666667.

The following 4 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:cop	color:blue
1	Водзе	водз	NOUN	N	Case=Ill|NounType=Relat|Number=Sing	0	root	_	GTtags=Relat,Sg,Err/Dial,Ill
2	вылэ	выв	ADP	Adp	Case=Ill|NounType=Relat|Number=Sing	1	case	_	GTtags=Relat,Sg,Err/Dial,Ill
3	кутшем	кутшӧм	ADJ	A	_	4	amod	_	GTtags=Err/Dial
4	планъяс	план	NOUN	N	Case=Nom|Number=Plur	1	nsubj:cop	_	GTtags=Pl,Nom|SpaceAfter=No
5	?	?	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Мый	мый	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	3	nsubj:cop	_	GTtags=Interr,Sg,Nom
2	нэ	нӧ	PART	Pcle	_	1	advmod	_	GTtags=Err/Dial
3	ещё	ещё	ADV	Adv	_	0	root	_	SpaceAfter=No
4	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:cop	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	заводиті	заводитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Err/Dial,Sg3
3	сіес	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	2	obj	_	GTtags=Pers,Sg3,Acc,Err/Dial|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	вошйи	вошйыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Err/Dial,Sg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	мыля	мыйла	SCONJ	CS	_	9	mark	_	GTtags=CS
8	ачум	ас	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	9	nsubj:cop	_	GTtags=Refl,Sg1,Err/Dial,Nom
9	коми-изьватас	коми-изьватас	NOUN	N	Case=Nom|Number=Sing	5	ccomp	_	GTtags=Sg,Nom
10	и	и	CCONJ	CC	_	13	cc	_	_
11	менэ	ме	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obj	_	GTtags=Pers,Sg1,Err/Dial,Acc
12	сыа	сійӧ	PRON	Pron	PronType=Dem	13	nsubj	_	GTtags=Err/Dial,Dem
13	интересуйтэ	интересуйтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Err/Dial,Sg3|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


