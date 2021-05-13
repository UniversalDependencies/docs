---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `parataxis`

This relation is universal.

14 nodes (1%) are attached to their parents as `parataxis`.

11 instances of `parataxis` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.71428571428571.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (9; 64% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	устроитчи	устроитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	OrigLang=ru
4	рӧбитны	рӧбитны	VERB	V	VerbForm=Inf	3	xcomp	_	OrigLang=ru|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	локті	локны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	parataxis	_	_
7	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	8	nmod	_	_
8	сиктэ	сикт	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
9	да	да	PART	Pcle	_	8	advmod	_	OrigLang=ru|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	Маме	мам	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	OrigLang=ru|Note=CheckAll
2	вед	вед	PART	Pcle	_	1	advmod:mmod	_	_
3	сэчем	сэчем	ADV	Adv	_	6	advmod	_	_
4	же	жӧ	PART	Pcle	_	3	advmod	_	OrigLang=ru
5	гӧг	гӧг	NOUN	N	Case=Nom|Number=Sing	6	compound	_	_
6	баб	баб	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	вӧліс	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	CLB	_	6	punct	_	_
9	сыа	сыа	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
10	зэй	зэй	ADV	Adv	_	12	advmod:deg	_	_
11	уна	уна	ADV	Adv	_	12	advmod	_	_
12	мыйке	мыйке	PRON	Pron	Case=Nom|PronType=Ind	6	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	14	punct	_	_
14	челядь	челядь	NOUN	N	Case=Nom|Number=Sing	15	obj	_	_
15	босьтіс	босьтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	conj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	примитіс	примитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	15	conj	_	OrigLang=ru|SpaceAfter=No
18	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	Университетын	университет	NOUN	N	Case=Ine|Number=Sing	0	root	_	GTtags=Sg,Ine|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	да	да	SCONJ	CS	_	1	parataxis	_	SpaceAfter=No
4	?	?	PUNCT	PUNCT	_	1	punct	_	_

~~~


