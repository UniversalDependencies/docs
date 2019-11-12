---
layout: base
title:  'Statistics of parataxis:discourse in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="sl_sst-dep-parataxis-restart.html">parataxis:restart</a></tt>.

225 nodes (1%) are attached to their parents as `parataxis:discourse`.

144 instances of `parataxis:discourse` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.77333333333333.

The following 11 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (138; 61% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (40; 18% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (21; 9% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-PART.html">PART</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 parataxis:discourse	color:blue
1	tudi	tudi	PART	Q	_	7	advmod	_	word=tut|msd=L
2	ko	ko	SCONJ	Cs	_	7	mark	_	word=ku|msd=Vd
3	pri	pri	ADP	Sl	Case=Loc	5	case	_	word=par|msd=Dm
4	štirje	štirje	NUM	Mlcmpn	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	word=Štirje|msd=Kbgmmi
5	revni	reven	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	obl	_	word=revni|msd=Ppnmmi
6	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:discourse	_	word=vajš|msd=Ggnsde
7	špila	špilati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=špejla|msd=Ggnste
8	na	na	ADP	Sa	Case=Acc	9	case	_	word=na|msd=Dt
9	glavnik	glavnik	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	word=glavnejk|msd=Sometn
10	pa	pa	CCONJ	Cc	_	11	cc	_	word=pa|msd=Vp
11	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	conj:extend	_	word=tav|msd=Zk-sei

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 parataxis:discourse	color:blue
1	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
2	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
3	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
4	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	word=kej|msd=Zv-sei
5	pa	pa	CCONJ	Cc	_	4	advmod	_	word=pa|msd=Vp
6	…	…	PUNCT	Z	_	9	punct	_	word=…|msd=U
7	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	parataxis:discourse	_	word=misim|msd=Ggnspe
8	brez	brez	ADP	Sg	Case=Gen	9	case	_	word=brez|msd=Dr
9	veze	veza	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	4	parataxis	_	word=veze|msd=Sozer
10	saj	saj	CCONJ	Cc	_	9	discourse	_	word=sej|msd=Vp
11	saj	saj	CCONJ	Cc	_	9	discourse	_	word=sej|msd=Vp

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis:discourse	color:blue
1	eee	eee	INTJ	I	_	5	discourse:filler	_	word=eee|msd=M
2	poglejte	pogledati	VERB	Vmem2p	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	5	parataxis:discourse	_	word=poglejte|msd=Ggdvdm
3	zaposleni	zaposlen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	5	nsubj	_	word=zaposleni|msd=Pdnmmi
4	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	word=so|msd=Gp-stm-n
5	zaskrbljeni	zaskrbljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=zaskrbljeni|msd=Pdnmmi
6	za	za	ADP	Sa	Case=Acc	9	case	_	word=za|msd=Dt
7	svoja	svoj	DET	Px-npa	Case=Acc|Gender=Neut|Number=Plur|PronType=Prs	9	det	_	word=svoja|msd=Zp-smt
8	delovna	deloven	ADJ	Agpnpa	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	9	amod	_	word=delovna|msd=Ppnsmt
9	mesta	mesto	NOUN	Ncnpa	Case=Acc|Gender=Neut|Number=Plur	5	obl	_	word=mesta|msd=Sosmt

~~~


