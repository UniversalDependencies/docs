---
layout: base
title:  'Statistics of parataxis:discourse in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="sl_sst-dep-parataxis-restart.html">parataxis:restart</a></tt>.

224 nodes (1%) are attached to their parents as `parataxis:discourse`.

143 instances of `parataxis:discourse` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.78125.

The following 12 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (138; 62% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (39; 17% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (21; 9% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-AUX.html">AUX</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-PART.html">PART</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis:discourse	color:blue
1	tu	tu	ADV	Rgp	Degree=Pos	0	root	_	word=tu|msd=Rsn
2	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
3	ko	ko	SCONJ	Cs	_	4	mark	_	word=ko|msd=Vd
4	greš	iti	VERB	Vmbr2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	word=greš|msd=Ggvsde
5	v	v	ADP	Sa	Case=Acc	6	case	_	word=v|msd=Dt
6	šolo	šola	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	word=šolo|msd=Sozet
7	pa	pa	CCONJ	Cc	_	10	cc	_	word=pa|msd=Vp
8	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	word=si|msd=Gp-sde-n
9	prvič	prvič	ADV	Rgp	Degree=Pos	10	advmod	_	word=prvič|msd=Rsn
10	ocenjen	ocenjen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	4	conj	_	word=ocenjen|msd=Pdnmein
11	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	4	parataxis:discourse	_	word=recimo|msd=Ggdvpm
12	a	a	ADV	Rgp	Degree=Pos	4	discourse	_	word=a|msd=Rsn
13	ne	ne	PART	Q	_	12	fixed	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 parataxis:discourse	color:blue
1	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	3	parataxis:discourse	_	word=recimo|msd=Ggdvpm
2	eee	eee	INTJ	I	_	3	discourse:filler	_	word=eee|msd=M
3	čevlje	čevelj	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	0	root	_	word=čevle|msd=Sommt
4	nogavice	nogavica	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	3	conj	_	word=nogavice|msd=Sozmt
5	ali	ali	CCONJ	Cc	_	7	cc	_	word=ali|msd=Vp
6	pa	pa	CCONJ	Cc	_	5	fixed	_	word=pa|msd=Vp
7	kravato	kravata	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	conj	_	word=kravato|msd=Sozet
8	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	word=jz|msd=Zop-ei
9	sem	biti	VERB	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=sem|msd=Gp-spe-n
10	rec	_	X	Xt	_	9	reparandum	_	word=rec|msd=Nt
11	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis:discourse	color:blue
1	glih	glih	ADV	Rgp	Degree=Pos	2	advmod	_	word=lih|msd=Rsn
2	tako	tako	ADV	Rgp	Degree=Pos	5	advmod	_	word=takue|msd=Rsn
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	word=je|msd=Gp-ste-n
4	bilo	biti	AUX	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	5	cop	_	word=blo|msd=Gp-d-es
5	lepo	lep	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=lepu|msd=Ppnsei
6	lahko	lahko	ADV	Rgp	Degree=Pos	7	advmod	_	word=lohko|msd=Rsn
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	parataxis	_	word=je|msd=Gp-ste-n
8	majica	majica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	word=majca|msd=Sozei
9	glej	gledati	VERB	Vmpm2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	5	parataxis:discourse	_	word=lej|msd=Ggnvde

~~~


