---
layout: base
title:  'Statistics of obl:lmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sms_giellagas-dep-obl-tmod.html">obl:tmod</a></tt>.

25 nodes (2%) are attached to their parents as `obl:lmod`.

14 instances of `obl:lmod` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 5 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (20; 80% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:lmod	color:blue
1	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	4	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	da	da	CCONJ	CC	_	3	cc	_	_
3	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	1	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom
4	âskkõʹlle	âskkõõllâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3
5	da	da	CCONJ	CC	_	6	cc	_	_
6	liõʹhtte	liõhttâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	conj	_	GTtags=Ind,Prt,Pl3
7	meädda	meädda	ADV	Adv	_	8	advmod:lmod	_	_
8	lõõnjâst	lõnnj	NOUN	N	Case=Loc|Number=Sing	6	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obl:lmod	color:blue
1	No	no	CCONJ	CC	_	5	cc	_	_
2	kaav	kaav	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	5	dislocated	_	GTtags=Kin,Sem/Kin,Sg,Nom
3	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	5	nsubj	_	GTtags=Dem,Sg,Nom
4	seämmanalla	seämmanalla	ADV	Adv	_	5	advmod	_	_
5	mõõni	mõõnnâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3
6	tõn	tõt	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	7	det	_	GTtags=Dem,Sg,Gen
7	njikkõnja	njikkõnja	NOUN	N	Case=Ill|Number=Sing	5	obl	_	GTtags=Sg,Ill
8	ja	ja	CCONJ	CC	_	10	cc	_	_
9	piirâs	piirâs	ADP	Adp	Number[psor]=Sing|Person[psor]=3	10	obl:lmod	_	GTtags=PxSg3
10	jåårǥli	jåårǥled	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	5	conj	_	GTtags=Ind,Prt,Sg3
11	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	14	advmod:tmod	_	GTtags=Sem/Time
12	kooum	koumm	NUM	Num	Case=Acc|Number=Sing	13	nummod	_	GTtags=Sg,Acc
13	vuâra	vuârr	NOUN	N	Case=Acc|Number=Sing	14	obl:tmod	_	GTtags=Sg,Acc
14	oʹlvvji	oʹlvvjed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	5	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	19	punct	_	_
16	de	de	CCONJ	CC	_	19	cc	_	_
17	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	GTtags=Pers,Sg3,Nom
18	še	še	ADV	Adv	_	17	advmod	_	_
19	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	5	conj	_	GTtags=Ind,Prt,Sg3
20	kämmǥižžen	kämmǥaž	NOUN	N	Case=Ess	19	xcomp	_	GTtags=Ess|SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	25	punct	_	_
22	de	de	CCONJ	CC	_	25	cc	_	_
23	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	25	nsubj	_	GTtags=Pers,Sg3,Nom
24	mieʹldd	mieʹldd	ADV	Adv	_	25	advmod	_	_
25	mõõni	mõõnnâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	5	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


