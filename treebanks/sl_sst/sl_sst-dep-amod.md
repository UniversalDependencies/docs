---
layout: base
title:  'Statistics of amod in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `amod`

This relation is universal.

1001 nodes (3%) are attached to their parents as `amod`.

950 instances of `amod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1988011988012.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (949; 95% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (22; 2% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	torej	torej	CCONJ	Cc	_	5	cc	_	word=torej|msd=Vp
2	bomo	biti	AUX	Va-f1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	aux	_	word=bomo|msd=Gp-ppm-n
3	naslednji	naslednji	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	word=naslednji|msd=Ppnmetd
4	teden	teden	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	word=teden|msd=Sometn
5	doživeli	doživeti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=doživeli|msd=Ggdd-mm
6	stotko	stotka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	word=stotko|msd=Sozet
7	?	?	PUNCT	Z	_	5	punct	_	word=?|msd=U

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	severne	severen	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	word=Severne|msd=Ppnzer
2	irske	Irska	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	0	root	_	word=Irske|msd=Slzer

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
7	[gap]	[gap]	X	X	_	5	punct	_	word=[gap]|msd=N
8	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	word=ne|msd=L
9	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis:discourse	_	word=vem|msd=Ggnspe
10	ko	ko	SCONJ	Cs	_	5	advcl	_	word=ko|msd=Vd
11	eh	eh	INTJ	I	_	5	discourse	_	word=eh|msd=M

~~~


