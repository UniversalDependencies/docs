---
layout: base
title:  'Statistics of obl in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sms_giellagas-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="sms_giellagas-dep-obl-tmod.html">obl:tmod</a></tt>.

40 nodes (1%) are attached to their parents as `obl`.

25 instances of `obl` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (16; 40% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (12; 30% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 8% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl	color:blue
1	teʹl	teʹl	ADV	Adv	_	2	advmod:tmod	_	_
2	piʹjje	piijjâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3
3	čiččâm	čiččâm	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	GTtags=Sg,Nom
4	ekka	eeʹǩǩ	NOUN	N	Case=Ill|Number=Sing	2	obl:tmod	_	GTtags=Sg,Ill
5	sluužba	sluuʹžb	NOUN	N	Case=Ill|Number=Sing	2	obl	_	GTtags=Sg,Ill|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3
3	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	obl	_	GTtags=Dem,Sg,Nom
4	što	što	SCONJ	CS	_	8	mark	_	_
5	”	”	PUNCT	PUNCT	_	8	punct	_	GTtags=RIGHT|SpaceAfter=No
6	ååʹn	ååʹn	ADV	Adv	AdvType=Tim	8	advmod:tmod	_	GTtags=Sem/Time
7	muännaid	mon	PRON	Pron	Case=Acc|Number=Dual|Person=1|PronType=Prs	8	obj	_	GTtags=Pers,Du1,Acc
8	kåʹdde	kåʹdded	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	2	ccomp	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
9	”	”	PUNCT	PUNCT	_	8	punct	_	GTtags=RIGHT|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 obl	color:blue
1	Ceäʹlǩǩe	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
2	:	:	PUNCT	PUNCT	_	19	punct	_	_
3	”	”	PUNCT	PUNCT	_	19	punct	_	GTtags=RIGHT|SpaceAfter=No
4	Ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	19	nsubj:cop	_	GTtags=Pers,Sg2,Nom|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	vot	vot	ADV	Adv	_	7	advmod	_	_
7	miʹjjid	mon	PRON	Pron	Case=Ill|Number=Plur|Person=1|PronType=Prs	10	reparandum	_	GTtags=Pers,Pl1,Ill|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	vot	vot	ADV	Adv	_	10	advmod	_	_
10	miʹjjid	mon	PRON	Pron	Case=Ill|Number=Plur|Person=1|PronType=Prs	14	obl	_	GTtags=Pers,Pl1,Ill
11	i	i	ADV	Adv	_	10	advmod	_	_
12	dõõt	dõõt	PRON	Pron	Case=Nom|Number=Sing	14	reparandum	_	GTtags=Pron,Sg,Nom
13	...	...	PUNCT	PUNCT	_	12	punct	_	_
14	triâŋgg	triâŋgg	NOUN	N	Case=Nom|Number=Sing	19	reparandum	_	GTtags=Sg,Nom|SpaceAfter=No
15	,	,	PUNCT	CLB	_	14	punct	_	_
16	vot	vot	ADV	Adv	_	17	advmod	_	_
17	miʹjjid	mon	PRON	Pron	Case=Ill|Number=Plur|Person=1|PronType=Prs	19	obl	_	GTtags=Pers,Pl1,Ill
18	i	i	ADV	Adv	_	17	advmod	_	_
19	triâŋgg	triâŋgg	NOUN	N	Case=Nom|Number=Sing	1	parataxis	_	GTtags=Sg,Nom|SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No
21	”	”	PUNCT	PUNCT	_	19	punct	_	GTtags=RIGHT

~~~


