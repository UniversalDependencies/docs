---
layout: base
title:  'Statistics of advmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="sms_giellagas-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="sms_giellagas-dep-advmod-tmod.html">advmod:tmod</a></tt>.

63 nodes (5%) are attached to their parents as `advmod`.

46 instances of `advmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93650793650794.

The following 9 pairs of parts of speech are connected with `advmod`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (42; 67% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (6; 10% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (5; 8% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (5; 8% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Nuʹtt	nuʹtt	ADV	Adv	_	2	advmod	_	_
2	kuâđđje	kuâđđjed	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3
3	vaʹlljeeǩâni	vaʹlljeed	VERB	V	Case=Abe|VerbForm=Ger	2	advcl	_	GTtags=VAbess
4	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Mal,Attr
5	Smith	Smith	PROPN	N	Animacy=Hum|Case=Nom|NameType=Sur|Number=Sing	4	flat:name	_	GTtags=Prop,Sem/Sur,Sg,Nom
6	diǥu	diǥu	SCONJ	CS	_	9	mark	_	_
7	še	še	ADV	Pcle	_	9	advmod	_	_
8	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	4	conj	_	GTtags=Prop,Sem/Fem,Attr
9	Brown	Brown	PROPN	N	Animacy=Hum|Case=Nom|NameType=Sur|Number=Sing	8	flat:name	_	GTtags=Prop,Sem/Sur,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod	color:blue
1	Puätt	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
2	,	,	PUNCT	CLB	_	6	punct	_	_
3	de	de	ADV	Adv	_	6	advmod	_	GTtags=@CVP
4	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	5	det	_	GTtags=Dem,Sg,Nom,@<SUBJ
5	ooumaž	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sem/Hum,Sg,Nom
6	väldd	väʹldd	NOUN	N	Case=Nom|Number=Sing	1	conj	_	GTtags=Sg,Nom
7	dõnnõǥškuätt	dõnõõkkâd	VERB	V	Derivation=InchL|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	conj	_	GTtags=Der/InchL,Ind,Prs,Sg3,@+FMAINV
8	što	što	SCONJ	CS	_	11	mark	_	GTtags=@CVP
9	”	”	PUNCT	PUNCT	_	11	punct	_	GTtags=RIGHT|SpaceAfter=No
10	mâiʹd	mâiʹd	PRON	Pron	PronType=Int	11	obj	_	GTtags=Interr
11	pooutak	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	7	ccomp	_	GTtags=Ind,Prs,Sg2,@+FMAINV|SpaceAfter=No
12	?	?	PUNCT	CLB	_	11	punct	_	SpaceAfter=No
13	”	”	PUNCT	PUNCT	_	1	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod	color:blue
1	Seeʹst	son	PRON	Pron	Case=Loc|Number=Plur|Person=3|PronType=Prs	2	obl	_	GTtags=Pers,Pl3,Loc
2	jeäʹla	iʹlla	AUX	V	Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=V
3	ǩeeʹrjteeʹjest	ǩeeʹrjteei	NOUN	N	Case=Loc|Number=Sing	2	obl	_	GTtags=Sg,Loc
4	võl	võl	ADV	Adv	AdvType=Tim	2	advmod	_	GTtags=Sem/Time
5	ni	ni	PART	Pcle	_	6	advmod:neg	_	_
6	måkam	måkam	DET	Det	_	7	det	_	GTtags=Attr
7	jurddi	juurd	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	GTtags=Pl,Nom|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


