---
layout: base
title:  'Statistics of amod in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `amod`

This relation is universal.

1002 nodes (3%) are attached to their parents as `amod`.

951 instances of `amod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19960079840319.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (949; 95% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (22; 2% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	in	in	CCONJ	Cc	_	4	cc	_	pronunciation=in
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	expl	_	pronunciation=to
3	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	pronunciation=so
4	mešali	mešati	VERB	Vmpp-pm	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	pronunciation=mešal
5	kar	kar	ADV	Rgp	Degree=Pos	6	advmod	_	pronunciation=kr
6	eno	en	NUM	Mlpnsa	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card	7	nummod	_	pronunciation=en
7	olje	olje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	pronunciation=ole
8	pa	pa	CCONJ	Cc	_	14	cc	_	pronunciation=pa
9	ene	en	NUM	Mlpfpa	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	14	nummod	_	pronunciation=ene
10	take	tak	DET	Pd-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	14	det	_	pronunciation=take
11	č-	_	X	Xt	_	13	reparandum	_	pronunciation=č
12	[gap]	[gap]	PUNCT	X	_	13	punct	_	pronunciation=[gap]
13	stare	star	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	pronunciation=stare
14	barve	barva	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	conj	_	pronunciation=barve

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	julijske	julijski	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	_	pronunciation=Julijske
2	alpe	Alpe	PROPN	Npfpn	Case=Nom|Gender=Fem|Number=Plur	0	root	_	pronunciation=Alpe
3	najprej	najprej	ADV	Rgs	Degree=Sup	2	advmod	_	pronunciation=najprej

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 amod	color:blue
1	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	expl	_	pronunciation=tov
2	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	5	expl	_	pronunciation=se
3	zdaj	zdaj	ADV	Rgp	Degree=Pos	5	advmod	_	pronunciation=zdaj
4	takšne	takšen	DET	Pd-fpn	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	5	nsubj	_	pronunciation=takšne
5	pogučavljejo	pogučavati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	pronunciation=pogučavlejo
6	brezvezne	brezvezen	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	pronunciation=brezvezne
7	[gap]	[gap]	PUNCT	X	_	9	punct	_	pronunciation=[gap]
8	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	pronunciation=ne
9	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis:discourse	_	pronunciation=vem
10	ko	ko	SCONJ	Cs	_	5	advcl	_	pronunciation=ko
11	eh	eh	INTJ	I	_	5	discourse	_	pronunciation=eh

~~~


