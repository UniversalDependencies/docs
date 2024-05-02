---
layout: base
title:  'Statistics of obl:lmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sms_giellagas-dep-obl-tmod.html">obl:tmod</a></tt>.

51 nodes (2%) are attached to their parents as `obl:lmod`.

31 instances of `obl:lmod` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84313725490196.

The following 6 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (43; 84% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:lmod	color:blue
1	Vuõššân	vuõššân	ADV	_	AdvType=Tim	2	advmod	_	GTtags=Sem/Time
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	källsaž	källsaž	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
6	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt,Sg3
7	de	de	CCONJ	CC	_	9	cc	_	_
8	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	GTtags=Pers,Sg3,Nom
9	jåått	jååʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3
10	âʹtte	âʹtte	ADV	ADV	AdvType=Tim	9	advmod:tmod	_	GTtags=Sem/Time
11	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	9	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
12	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:lmod	color:blue
1	Peʹll	Peʹll	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Prop,Sg,Nom
2	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	seeʹst	son	PRON	Pron	Case=Loc|Number=Plur|Person=3|PronType=Prs	2	obl:lmod	_	GTtags=Pers,Pl3,Loc
4	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	GTtags=Dem,Sg,Nom|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	conj	_	GTtags=Dem,Sg,Nom
7	ooumaž	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	2	dislocated	_	GTtags=Sem/Hum,Sg,Nom
8	Peʹll	Peʹll	NOUN	N	Case=Nom|Number=Sing	7	appos	_	GTtags=Prop,Sg,Nom|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 obl:lmod	color:blue
1	Na	na	INTJ	Interj	_	4	discourse	_	_
2	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time,@ADVL>
4	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3,@+FMAINV
5	puk	puk	PRON	Pron	Case=Nom|Number=Sing	6	det	_	GTtags=Pron,Sg,Nom
6	jällmõõžžâz	jällmõš	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxPl3,@OBJ>
7	toʹben	toʹben	ADV	Adv	_	4	advmod:lmod	_	GTtags=@ADVL>|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV
16	tõzz	tõzz	ADV	Adv	_	15	obl:lmod	_	GTtags=@ADVL>
17	ool	ool	ADV	Adv	_	16	appos	_	_
18	de	de	CCONJ	CC	_	19	cc	_	GTtags=@CVP
19	iʹlmstââvv	iʹlmstõõvvâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
20	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


