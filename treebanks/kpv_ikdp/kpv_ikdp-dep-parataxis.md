---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `parataxis`

This relation is universal.

4 nodes (0%) are attached to their parents as `parataxis`.

3 instances of `parataxis` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	тӧд	тӧдны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	мен	ме	PRON	Pron	Case=Dat|Person=1|PronType=Prs	5	nsubj	_	_
5	кажитче	кажитчыны	VERB	V	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	без	без	ADP	Pr	_	8	case	_	Lang=Rus
8	репетитора	репетитор	NOUN	N	Number=Sing	10	obl	_	Lang=Rus
9	сыа	сыа	PRON	Pron	Case=Nom|Person=3|PronType=Prs	10	nsubj	_	_
10	невозможнэ	невозможнэ	ADV	Adv	_	5	acl	_	Lang=Rus|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	Маме	мам	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	Lang=Mixed|Note=CheckAll
2	вед	вед	PART	Pcle	_	1	discourse	_	_
3	сэчем	сэчем	ADV	Adv	_	6	advmod	_	_
4	же	же	PART	Pcle	_	3	discourse	_	Lang=Mixed
5	гӧг	гӧг	NOUN	N	Case=Nom|Number=Sing	6	compound	_	_
6	баб	баб	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	вӧліс	вӧвны	AUX	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	CLB	_	6	punct	_	_
9	сыа	сыа	PRON	Pron	Case=Nom|Person=3|PronType=Prs	12	nsubj	_	_
10	зэй	зэй	ADV	Adv	_	12	advmod	_	_
11	уна	уна	ADV	Adv	Case=Nom|Number=Sing	12	advmod	_	_
12	мыйке	мыйке	PRON	Pron	_	6	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	14	punct	_	_
14	челядь	челядь	NOUN	N	Case=Nom|Number=Sing	15	obj	_	_
15	босьтіс	босьтны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	12	conj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	примитіс	примитны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	15	conj	_	Lang=Mixed|SpaceAfter=No
18	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 parataxis	color:blue
1	Супругаа	супруга	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	7	nsubj	_	Lang=Mixed|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	кудз	кудз	ADV	Adv	_	4	advmod	_	_
4	висьтооны	висьтооны	VERB	V	VerbForm=Inf	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	абу	абу	PART	Pcle	Polarity=Neg	7	aux	_	_
7	оленевод	оленевод	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Mixed
8	да	да	PART	Pcle	_	7	discourse	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	приведитчис	приведитчыны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	7	ccomp	_	Lang=Mixed
11	кольччыны	кольччыны	VERB	V	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


