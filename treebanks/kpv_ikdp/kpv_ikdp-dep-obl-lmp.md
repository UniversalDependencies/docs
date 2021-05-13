---
layout: base
title:  'Statistics of obl:lmp in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obl:lmp`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="kpv_ikdp-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_ikdp-dep-obl-tmod.html">obl:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:lmp`.

1 instances of `obl:lmp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.

The following 1 pairs of parts of speech are connected with `obl:lmp`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 obl:lmp	color:blue
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


