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
1	in	in	CCONJ	Cc	_	4	cc	_	word=in|msd=Vp
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	expl	_	word=to|msd=Zk-sei
3	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	word=so|msd=Gp-stm-n
4	mešali	mešati	VERB	Vmpp-pm	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=mešal|msd=Ggnd-mm
5	kar	kar	ADV	Rgp	Degree=Pos	6	advmod	_	word=kr|msd=Rsn
6	eno	en	NUM	Mlpnsa	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card	7	nummod	_	word=en|msd=Kbzset
7	olje	olje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	word=ole|msd=Soset
8	pa	pa	CCONJ	Cc	_	14	cc	_	word=pa|msd=Vp
9	ene	en	NUM	Mlpfpa	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	14	nummod	_	word=ene|msd=Kbzzmt
10	take	tak	DET	Pd-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	14	det	_	word=take|msd=Zk-zmt
11	č	_	X	Xt	_	13	reparandum	_	word=č|msd=Nt
12	[gap]	[gap]	PUNCT	X	_	13	punct	_	word=[gap]|msd=N
13	stare	star	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	word=stare|msd=Ppnzmt
14	barve	barva	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	conj	_	word=barve|msd=Sozmt

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	julijske	julijski	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	_	word=Julijske|msd=Ppnzmi
2	alpe	Alpe	PROPN	Npfpn	Case=Nom|Gender=Fem|Number=Plur	0	root	_	word=Alpe|msd=Slzmi
3	najprej	najprej	ADV	Rgs	Degree=Sup	2	advmod	_	word=najprej|msd=Rss

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 amod	color:blue
1	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	expl	_	word=tov|msd=Zk-sei
2	se	se	PRON	Px------y	PronType=Prs|Variant=Short	5	expl	_	word=se|msd=Zp------k
3	zdaj	zdaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=zdaj|msd=Rsn
4	takšne	takšen	DET	Pd-fpn	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	5	nsubj	_	word=takšne|msd=Zk-zmi
5	pogučavljejo	pogučavati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=pogučavlejo|msd=Ggnstm
6	brezvezne	brezvezen	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	word=brezvezne|msd=Ppnzmi
7	[gap]	[gap]	PUNCT	X	_	9	punct	_	word=[gap]|msd=N
8	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	word=ne|msd=L
9	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis:discourse	_	word=vem|msd=Ggnspe
10	ko	ko	SCONJ	Cs	_	5	advcl	_	word=ko|msd=Vd
11	eh	eh	INTJ	I	_	5	discourse	_	word=eh|msd=M

~~~


