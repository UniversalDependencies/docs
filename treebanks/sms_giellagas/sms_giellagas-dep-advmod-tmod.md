---
layout: base
title:  'Statistics of advmod:tmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="sms_giellagas-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-neg.html">advmod:neg</a></tt>.

38 nodes (3%) are attached to their parents as `advmod:tmod`.

33 instances of `advmod:tmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60526315789474.

The following 4 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (32; 84% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (3; 8% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:tmod	color:blue
1	Mâiʹd	mâiʹd	PRON	Pron	Case=Acc|PronType=Int	2	obj	_	GTtags=Interr,Acc
2	joordak	juʹrdded	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg2
3	što	što	SCONJ	CS	_	5	mark	_	_
4	kuäʹss	kuäʹss	ADV	Adv	_	5	advmod:tmod	_	_
5	piâzzčiǩ	piâssâd	VERB	V	Mood=Cnd|Number=Sing|Person=2	2	xcomp	_	GTtags=Cond,Sg2|SpaceAfter=No
6	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:tmod	color:blue
1	Ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	4	aux:neg	_	GTtags=Neg,Ind,Sg3
2	kuuʹǩǩ	kuʹǩǩ	ADV	Adv	Case=Nom|Number=Sing	4	advmod:tmod	_	GTtags=Sg,Nom
3	leämmaž	leeʹd	AUX	V	Aspect=Perf|Valency=1|VerbForm=Part	4	cop	_	GTtags=IV,Act,PrfPrc
4	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	0	root	_	GTtags=Sg,Loc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	iʹttli	iʹttled	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	advcl	_	GTtags=Ind,Prt,Sg3
7	kuʹmpp	kuʹmpp	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
8	väʹst	väʹst	ADV	Adv	_	6	advmod	_	_
9	mååust	mååust	ADV	Adv	_	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 advmod:tmod	color:blue
1	Näʹde	näʹde	INTJ	Interj	_	4	discourse	_	_
2	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time
4	vuõʹlji	vueʹlǧǧed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	11	punct	_	_
6	näʹde	näʹde	INTJ	Interj	_	11	discourse	_	_
7	tät	tät	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	8	det	_	GTtags=Dem,Sg,Nom
8	jeäʹnnes	jeäʹnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	GTtags=Sem/Kin,Sg,Nom,PxSg3
9	teâđast	teâđast	ADV	Adv	_	11	advmod	_	_
10	nuʹt-i	nuʹtt	ADV	Adv	Clitic=AddI|Typo=Yes	11	advmod	_	GTtags=Err/Orth,Clt|CorrectForm=nuʹtt-i
11	paaʹʒʒi	pääʹcced	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	4	conj	_	GTtags=Ind,Prt,Sg3
12	pääʹltâʹstted	pääʹltâʹstted	VERB	V	VerbForm=Inf	11	advcl	_	GTtags=Inf|SpaceAfter=No
13	,	,	PUNCT	CLB	_	17	punct	_	_
14	di	di	CCONJ	CC	_	17	cc	_	_
15	leuʹdd	leuʹdd	NOUN	N	Case=Nom|Number=Sing	17	nsubj	_	GTtags=Sg,Nom
16	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	17	advmod:tmod	_	GTtags=Sem/Time
17	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	4	conj	_	GTtags=Ind,Prt,Sg3
18	mâŋŋa	mâŋŋa	ADV	Adv	AdvType=Tim	17	advmod:tmod	_	GTtags=Sem/Time
19	tõʹst	tõt	PRON	Pron	Case=Loc|Number=Sing|PronType=Dem	18	nmod	_	GTtags=Dem,Sg,Loc|SpaceAfter=No
20	:	:	PUNCT	CLB	_	4	punct	_	_

~~~


