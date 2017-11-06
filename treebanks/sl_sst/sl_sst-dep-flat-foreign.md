---
layout: base
title:  'Statistics of flat:foreign in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="sl_sst-dep-flat-name.html">flat:name</a></tt>.

62 nodes (0%) are attached to their parents as `flat:foreign`.

62 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25806451612903.

The following 4 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (56; 90% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (3; 5% instances), <tt><a href="sl_sst-pos-PART.html">PART</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (2; 3% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	genau	genau	X	Xf	Foreign=Yes	0	root	_	word=genau|msd=Nj
2	wo	wo	X	Xf	Foreign=Yes	1	flat:foreign	_	word=vo|msd=Nj
3	ist	ist	X	Xf	Foreign=Yes	1	flat:foreign	_	word=isn[split_1-2]|msd=Nj
4	den	den	X	Xf	Foreign=Yes	1	flat:foreign	_	word=isn[split_2-2]|msd=Nj
5	das	das	X	Xf	Foreign=Yes	1	flat:foreign	_	word=dos|msd=Nj
6	?	?	PUNCT	Z	_	1	punct	_	word=?|msd=U
7	ach	ach	X	Xf	Foreign=Yes	1	parataxis	_	word=a|msd=Nj
8	so	so	X	Xf	Foreign=Yes	7	flat:foreign	_	word=so|msd=Nj
9	da	da	X	Xf	Foreign=Yes	7	flat:foreign	_	word=do|msd=Nj

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 flat:foreign	color:blue
1	aaa	aaa	INTJ	I	_	2	discourse:filler	_	word=aaa|msd=M
2	spreminja	spreminjati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=spreminja|msd=Ggnste
3	pa	pa	CCONJ	Cc	_	2	advmod	_	word=pa|msd=Vp
4	se	se	PRON	Px------y	PronType=Prs|Variant=Short	2	expl	_	word=se|msd=Zp------k
5	vsebina	vsebina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	word=vsebina|msd=Sozei
6	operacije	operacija	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	word=operacije|msd=Sozer
7	nato	Nato	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	word=Nejto|msd=Slmei
8	training	Training	X	Xf	Foreign=Yes	7	flat:foreign	_	word=Trejning|msd=Nj
9	mission	Mission	X	Xf	Foreign=Yes	7	flat:foreign	_	word=Mišn|msd=Nj
10	in	in	X	Xf	Foreign=Yes	7	flat:foreign	_	word=in|msd=Nj
11	irak	Irak	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	7	flat:foreign	_	word=Irak|msd=Slmei

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat:foreign	color:blue
1	ki	ki	SCONJ	Cs	_	3	mark	_	word=k|msd=Vd
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	word=je|msd=Gp-ste-n
3	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=bla|msd=Gp-d-ez
4	tam	tam	ADV	Rgp	Degree=Pos	3	advmod	_	word=tm|msd=Rsn
5	nekaj	nekaj	DET	Rgp	PronType=Ind	3	advmod	_	word=neki|msd=Rsn
6	pri	pri	ADP	Sl	Case=Loc	7	case	_	word=pr|msd=Dm
7	[name:personal]	[name:personal]	PROPN	X	_	3	obl	_	word=[name:personal]|msd=N
8	ali	ali	CCONJ	Cc	_	9	cc	_	word=al|msd=Vp
9	nekaj	nekaj	DET	Pi-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	7	conj:extend	_	word=neki|msd=Zn-sei
10	takega	tak	DET	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	9	nmod	_	word=tazga|msd=Zk-ser
11	ma	ma	PART	Q	_	15	cc	_	word=ma|msd=L
12	para	para	X	Xf	Foreign=Yes	11	flat:foreign	_	word=para|msd=Nj
13	da	da	SCONJ	Cs	_	15	mark	_	word=d|msd=Vd
14	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	cop	_	word=je|msd=Gp-ste-n
15	ona	on	PRON	Pp3fsn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	conj	_	word=uana|msd=Zotzei

~~~


