---
layout: base
title:  'Statistics of appos in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `appos`

This relation is universal.

25 nodes (1%) are attached to their parents as `appos`.

25 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (12; 48% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
3	сорок	сорок	NUM	Num	Case=Nom|NumType=Card	4	nummod	_	Lang=ru
4	первом	первый	ADJ	A	Case=Ins|Number=Sing	5	amod	_	Lang=ru
5	году	год	NOUN	N	Case=Dat|Number=Sing	2	obl	_	Lang=ru|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	девятого	девятый	ADJ	A	Case=Gen|Number=Sing	8	amod	_	Lang=ru
8	юля	юль	NOUN	N	Case=Gen|Number=Sing	5	appos	_	Lang=ru|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 appos	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	_
2	мӧдъясыслэн	мӧд	PRON	Pron	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=Pl,Gen,PxSg3,Err/Dial
3	сыа	сійӧ	PRON	Pron	PronType=Dem	2	nsubj:cop	_	GTtags=Err/Dial,Dem
4	выйым	эм	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	GTtags=Ind,Prs,Sg3,WORK|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	но	но	CCONJ	CC	_	7	cc	_	_
7	сідз	сідзи	ADV	Adv	AdvType=Man	2	conj	_	GTtags=Manner
8	и	и	CCONJ	CC	_	9	cc	_	_
9	тадз	тадзи	ADV	Adv	AdvType=Man	7	conj	_	GTtags=Manner|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	12	punct	_	_
11	мый	мый	SCONJ	CS	_	12	mark	_	_
12	куимнан	куимнан	PRON	Pron	Case=Nom|Number=Sing	2	conj	_	GTtags=AssocColl,Sg,Nom
13	войтырыс	войтыр	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	15	punct	_	_
15	ӧ	ӧ	INTJ	Interj	_	17	discourse	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	15	punct	_	_
17	кӧреннэйяс	кӧреннӧй	ADJ	A	Case=Nom|Number=Plur	13	appos	_	GTtags=Err/Dial,Pl,Nom|SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 appos	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	сы	сійӧ	PRON	Pron	PronType=Dem	10	obl:lmp	_	GTtags=Dem
3	кузя	кузя	ADP	Adp	AdpType=Post	2	case	_	GTtags=Po
4	нин	нин	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Sem/Time|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	сыа	сійӧ	PRON	Pron	PronType=Dem	7	det	_	GTtags=Err/Dial,Dem
7	тема	тема	NOUN	N	Case=Nom|Number=Sing	2	appos	_	GTtags=Sg,Nom
8	кузяыс	кузя	ADP	Adp	AdpType=Post|Number[psor]=Sing|Person[psor]=3	7	case	_	GTtags=Po,PxSg3
9	водзе	водзӧ	ADV	Adv	_	10	advmod:lto	_	GTtags=Err/Dial
10	мунны	мунны	VERB	V	VerbForm=Inf	0	root	_	GTtags=Inf|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	научнэй	научнӧй	ADJ	A	Case=Nom|Number=Sing	13	amod	_	GTtags=Err/Dial,Sg,Nom
13	мыйке	мыйкӧ	PRON	Pron	Case=Nom|Definite=Ind|Derivation=Ko|Number=Sing|PronType=Ind	10	dislocated	_	GTtags=Indef,Indef,Sg,Nom,Der/кӧ
14	кузяыс	кузя	ADP	Adp	AdpType=Post|Number[psor]=Sing|Person[psor]=3	13	case	_	GTtags=Po,PxSg3|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


