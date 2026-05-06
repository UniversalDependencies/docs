---
layout: base
title:  'Statistics of obl in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sms_giellagas-dep-obl-tmod.html">obl:tmod</a></tt>.

111 nodes (4%) are attached to their parents as `obl`.

61 instances of `obl` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89189189189189.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (73; 66% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (17; 15% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	teʹl	teʹl	ADV	Adv	_	2	advmod	_	_
2	piʹjje	piijjâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt,Pl3
3	čiččâm	čiččâm	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	GTtags=Sg,Nom
4	ekka	eeʹǩǩ	NOUN	N	Case=Ill|Number=Sing	2	obl	_	GTtags=Sg,Ill
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
2	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	GTtags=Ind,Prs,Sg3
3	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	obl	_	GTtags=Dem,Sg,Nom
4	što	što	SCONJ	CS	_	8	mark	_	_
5	”	”	PUNCT	PUNCT	_	8	punct	_	GTtags=RIGHT|SpaceAfter=No
6	ååʹn	ååʹn	ADV	Adv	AdvType=Tim	8	advmod	_	GTtags=Sem/Time
7	muännaid	mon	PRON	Pron	Case=Acc|Number=Dual|Person=1|PronType=Prs	8	obj	_	GTtags=Pers,Du1,Acc
8	kåʹdde	kåʹdded	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
9	”	”	PUNCT	PUNCT	_	8	punct	_	GTtags=RIGHT|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl	color:blue
1	Tuänna	Tuänna	PRON	Pron	Case=Nom|Number=Dual|Person=2|PronType=Prs	3	nsubj	_	GTtags=?
2	leʹččid	leeʹd	AUX	V	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	3	aux	_	GTtags=IV,Cond,Pl2
3	mõõnnâm	mõõnnâd	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	GTtags=IV,Act,PrfPrc
4	Taʹrre	Taarr	PROPN	N	Case=Ill|Number=Sing	3	obl	_	GTtags=Prop,Sem/Plc,Sg,Ill|SpaceAfter=No
5	,	,	PUNCT	CLB	_	3	punct	_	GTtags=CLB
6	jõs	jõs	SCONJ	CS	_	8	mark	_	GTtags=
7	leʹččid	leeʹd	AUX	V	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	8	aux	_	GTtags=IV,Cond,Pl2
8	vuäǯǯam	vuäǯǯad	VERB	V	Aspect=Perf|VerbForm=Part	3	advcl	_	GTtags=TV,Act,PrfPrc
9	aaut	aaut	NOUN	N	Case=Nom|Number=Plur	8	obj	_	GTtags=Pl,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


