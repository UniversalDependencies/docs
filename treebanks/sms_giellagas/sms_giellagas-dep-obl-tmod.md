---
layout: base
title:  'Statistics of obl:tmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sms_giellagas-dep-obl-lmod.html">obl:lmod</a></tt>.

6 nodes (1%) are attached to their parents as `obl:tmod`.

3 instances of `obl:tmod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83333333333333.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:tmod	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	jälsti	jälsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	čõõđ	čõõđ	ADP	Adp	_	4	case	_	_
4	ääiʹj	äiʹǧǧ	NOUN	N	Case=Gen|Number=Sing	2	obl:tmod	_	GTtags=Sg,Gen
5	Pariizzâst	Pariizzâst	PROPN	N	Case=Loc|NameType=Geo|Number=Sing	2	obl:lmod	_	GTtags=Prop,Sem/Plc,Sg,Loc|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	Franskkjânnam	Franskkjânnam	PROPN	N	Case=Gen|NameType=Geo|Number=Sing	8	nmod	_	GTtags=Prop,Sem/Plc,Sg,Gen
8	vueiʹvvgåårdest	vueiʹvvgåårad	NOUN	N	Case=Loc|Number=Sing	5	appos	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:tmod	color:blue
1	Na	na	INTJ	Interj	_	8	discourse	_	GTtags=Interj
2	teʹl	teʹl	ADV	Adv	_	8	advmod:tmod	_	_
3	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Sem/Time
4	čiččâm	čiččâm	NUM	Num	Case=Nom|Number=Sing	5	nummod	_	GTtags=Sg,Nom
5	eeʹjj	eeʹǩǩ	NOUN	N	Case=Acc|Number=Sing	8	obl:tmod	_	GTtags=Sg,Acc
6	feʹrttji	feʹrttjed	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Past	8	aux	_	GTtags=Ind,Prt,Sg3
7	leeʹd	leeʹd	AUX	Aux	Valency=1|VerbForm=Inf	8	cop	_	GTtags=IV,Inf
8	säldten	säldten	NOUN	N	Case=Ess	0	root	_	GTtags=Ess
9	ja	ja	CCONJ	CC	_	11	cc	_	_
10	vasta	vasta	ADV	Adv	_	11	advmod:tmod	_	_
11	puätt	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	conj	_	GTtags=Ind,Prs,Sg3
12	mååust	mååust	ADV	Adv	_	11	advmod	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


