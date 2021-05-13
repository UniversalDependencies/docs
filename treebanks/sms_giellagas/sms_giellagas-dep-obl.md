---
layout: base
title:  'Statistics of obl in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sms_giellagas-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="sms_giellagas-dep-obl-tmod.html">obl:tmod</a></tt>.

31 nodes (1%) are attached to their parents as `obl`.

20 instances of `obl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93548387096774.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (13; 42% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (8; 26% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Tõt	tõt	DET	Det	Case=Nom|Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg,Nom
2	nijdd	nijdd	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	3	nsubj	_	GTtags=Sem/Kin,Sg,Nom
3	ǩeeʹrjti	ǩeeʹrjted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=Ind,Prt,Sg3
4	ǩeeʹrj	ǩeʹrjj	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc
5	taaurõššʼses	taaurõš	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	GTtags=Sg,Ill,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl	color:blue
1	Eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	nsubj	_	GTtags=Sem/Kin,Sg,Nom,PxSg2
2	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	4	cop	_	GTtags=IV,Ind,Prs,Sg3
3	luândstes	luândd	NOUN	N	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	GTtags=Sg,Loc,PxSg3
4	lääʹđesmiõllsab	lääʹđesmiõllsaž	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	GTtags=Comp,Sg,Nom
5	ǥu	ǥu	ADV	Adv	_	6	mark	_	_
6	eččan	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	obl	_	GTtags=Sem/Kin,Sg,Nom,PxSg1|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


