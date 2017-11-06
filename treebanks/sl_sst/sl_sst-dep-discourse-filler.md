---
layout: base
title:  'Statistics of discourse:filler in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `discourse:filler`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-discourse.html">discourse</a></tt>.

728 nodes (2%) are attached to their parents as `discourse:filler`.

707 instances of `discourse:filler` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13873626373626.

The following 14 pairs of parts of speech are connected with `discourse:filler`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (345; 47% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (207; 28% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (60; 8% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (26; 4% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (19; 3% instances), <tt><a href="sl_sst-pos-PART.html">PART</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (18; 2% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (15; 2% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (11; 2% instances), <tt><a href="sl_sst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (7; 1% instances), <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (7; 1% instances), <tt><a href="sl_sst-pos-ADP.html">ADP</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (5; 1% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (4; 1% instances), <tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="sl_sst-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse:filler	color:blue
1	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	word=to|msd=Zk-sei
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	6	expl	_	word=se|msd=Zp------k
4	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	6	aux	_	word=bo|msd=Gp-pte-n
5	očitno	očitno	ADV	Rgp	Degree=Pos	6	advmod	_	word=očitno|msd=Rsn
6	razmahnilo	razmahniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=razmahnilo|msd=Ggdd-es

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse:filler	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse:filler	color:blue
1	eem	eem	INTJ	I	_	4	discourse:filler	_	word=eem|msd=M
2	iz	iz	ADP	Sg	Case=Gen	3	reparandum	_	word=iz|msd=Dr
3	iz	iz	ADP	Sg	Case=Gen	4	case	_	word=iz|msd=Dr
4	jugovzhodne	jugovzhoden	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	word=jugovzhodne|msd=Ppnzer

~~~


