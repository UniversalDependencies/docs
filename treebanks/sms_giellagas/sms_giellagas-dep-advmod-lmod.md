---
layout: base
title:  'Statistics of advmod:lmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="sms_giellagas-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="sms_giellagas-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="sms_giellagas-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="sms_giellagas-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="sms_giellagas-dep-advmod-tmod.html">advmod:tmod</a></tt>.

49 nodes (2%) are attached to their parents as `advmod:lmod`.

31 instances of `advmod:lmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83673469387755.

The following 4 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (43; 88% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (4; 8% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advmod:lmod	color:blue
1	Ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Ind,Sg3
2	kuuʹǩǩ	kuʹǩǩ	ADV	Adv	Case=Nom|Number=Sing	4	advmod:tmod	_	GTtags=Sg,Nom
3	leämmaž	leeʹd	AUX	V	Aspect=Perf|VerbForm=Part	4	cop	_	GTtags=IV,Act,PrfPrc
4	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	0	root	_	GTtags=Sg,Loc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	iʹttli	iʹttled	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	4	advcl	_	GTtags=Ind,Prt,Sg3
7	kuʹmpp	kuʹmpp	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
8	väʹst	väʹst	ADV	Adv	_	6	advmod	_	_
9	mååust	mååust	ADV	Adv	_	6	advmod:lmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:lmod	color:blue
1	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	4	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	da	da	CCONJ	CC	_	3	cc	_	_
3	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	1	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom
4	âskkõʹlle	âskkõõllâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=Ind,Prt,Pl3
5	da	da	CCONJ	CC	_	6	cc	_	_
6	liõʹhtte	liõhttâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	4	conj	_	GTtags=Ind,Prt,Pl3
7	meädda	meädda	ADV	Adv	_	8	advmod:lmod	_	_
8	lõõnjâst	lõnnj	NOUN	N	Case=Loc|Number=Sing	6	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 advmod:lmod	color:blue
1	Na	na	INTJ	Interj	_	3	discourse	_	_
2	tuk	tut	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	3	nsubj	_	GTtags=Dem,Pl,Nom
3	ceäʹlǩǩe	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
4	:	:	PUNCT	CLB	_	3	punct	_	_
5	”	”	PUNCT	PUNCT	_	3	punct	_	GTtags=RIGHT|SpaceAfter=No
6	Gu	Gu	SCONJ	CS	AdvType=Tim	8	mark	_	GTtags=Temp
7	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	GTtags=Ind,Prs,Sg3
8	nåkkam	nåkkam	PRON	Pron	Case=Nom|Number=Sing	11	advcl	_	GTtags=Sg,Nom
9	nuʹt	nuʹtt	ADV	Adv	Typo=Yes	11	advmod	_	CorrectForm=nuʹtt|GTtags=Err/Orth
10	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	aux	_	GTtags=Ind,Prs,Sg3
11	šõddâm	šõddâd	VERB	V	Aspect=Perf|VerbForm=Part	3	ccomp	_	GTtags=Act,PrfPrc
12	ja	ja	CCONJ	CC	_	14	cc	_	_
13	tok-i	tok	ADV	Adv	Clitic=AddI	14	advmod:lmod	_	GTtags=Clt
14	ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	17	nsubj:cop	_	GTtags=Pers,Sg2,Nom
15	še	še	ADV	Adv	_	14	advmod:eval	_	_
16	leʹjjiǩ	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	17	cop	_	GTtags=Ind,Prt,Sg2
17	mõõnnâd	mõõnnâd	VERB	V	VerbForm=Inf	11	conj	_	GTtags=Inf
18	mutta	mutta	CCONJ	CC	_	20	cc	_	_
19	jeäʹp	ij	AUX	V	Mood=Ind|Number=Plur|Person=1|Polarity=Neg	20	aux:neg	_	GTtags=Neg,Ind,Pl1
20	teâttam	tieʹtted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past	11	conj	_	GTtags=Ind,Prt,ConNeg|SpaceAfter=No
21	.	.	PUNCT	CLB	_	3	punct	_	SpaceAfter=No
22	”	”	PUNCT	PUNCT	_	3	punct	_	GTtags=RIGHT

~~~


