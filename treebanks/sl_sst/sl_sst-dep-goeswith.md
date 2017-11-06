---
layout: base
title:  'Statistics of goeswith in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `goeswith`

This relation is universal.

9 nodes (0%) are attached to their parents as `goeswith`.

9 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 5 pairs of parts of speech are connected with `goeswith`: <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (3; 33% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (2; 22% instances), <tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sl_sst-pos-INTJ.html">INTJ</a></tt> (2; 22% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (1; 11% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 goeswith	color:blue
1	saj	saj	CCONJ	Cc	_	9	cc	_	word=sej|msd=Vp
2	z	_	X	Xt	_	9	advmod	_	word=z|msd=Nt
3	[gap]	[gap]	X	X	_	9	punct	_	word=[gap]|msd=N
4	[gap]	[gap]	X	X	_	9	punct	_	word=[gap]|msd=N
5	dej	_	X	Xt	_	2	goeswith	_	word=dej|msd=Nt
6	pa	pa	CCONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
7	ja	ja	PART	Q	_	9	advmod	_	word=ja|msd=L
8	vse	ves	DET	Pg-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	9	obj	_	word=vse|msd=Zc-set
9	obdelajo	obdelati	VERB	Vmer3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=obdelajo|msd=Ggdstm

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 goeswith	color:blue
1	torej	torej	CCONJ	Cc	_	14	cc	_	word=torej|msd=Vp
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	_	word=to|msd=Zk-sei
3	kar	kar	PRON	Pr-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	_	word=kar|msd=Zz-set
4	nam	jaz	PRON	Pp1-pd	Case=Dat|Number=Plur|Person=1|PronType=Prs	5	iobj	_	word=nam|msd=Zop-md
5	kaže	kazati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	word=kaže|msd=Ggnste
6	za	za	ADP	Sa	Case=Acc	7	case	_	word=za|msd=Dt
7	zdaj	zdaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=zdaj|msd=Rsn
8	zadnja	zadnji	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	word=zadnja|msd=Ppnzei
9	vrsta	vrsta	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	word=vrsta|msd=Sozei
10	poljakov	Poljak	PROPN	Npmpg	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	word=Poljakov|msd=Slmmr
11	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	14	cop	_	word=ni|msd=Gp-ste-d
12	kdove	kdove	ADV	Rgp	Degree=Pos	14	advmod	_	word=kdove|msd=Rsn
13	kako	kako	ADV	Rgp	Degree=Pos	12	goeswith	_	word=kako|msd=Rsn
14	obetavno	obetaven	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=obetavno|msd=Ppnsei

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 goeswith	color:blue
1	pa	pa	CCONJ	Cc	_	3	cc	_	word=pa|msd=Vp
2	če	če	SCONJ	Cs	_	3	mark	_	word=če|msd=Vd
3	noče	hoteti	VERB	Vmpr3s-y	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	advcl	_	word=noče|msd=Ggnste-d
4	zaspati	zaspati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	3	xcomp	_	word=zaspat|msd=Ggdn
5	ko	ko	SCONJ	Cs	_	8	mark	_	word=ko|msd=Vd
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	word=je|msd=Gp-ste-n
7	še	še	PART	Q	_	8	advmod	_	word=še|msd=L
8	mala	mali	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	advcl	_	word=mala|msd=Ppnzei
9	pa	pa	CCONJ	Cc	_	11	cc	_	word=pa|msd=Vp
10	ji	on	PRON	Pp3fsd--y	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	_	word=ji|msd=Zotzed--k
11	špilaš	špilati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=špilaš|msd=Ggnsde
12	pred	pred	ADP	Si	Case=Ins	13	case	_	word=pred|msd=Do
13	posteljico	posteljica	NOUN	Ncfsi	Case=Ins|Gender=Fem|Number=Sing	11	obl	_	word=postelco|msd=Sozeo
14	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis:discourse	_	word=veš|msd=Ggnsde
15	[audience:laughter]	[audience:laughter]	X	X	_	11	punct	_	word=[audience:laughter]|msd=N
16	tako	tako	ADV	Rgp	Degree=Pos	17	advmod	_	word=tak|msd=Rsn
17	delaš	delati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	word=delaš|msd=Ggnsde
18	ti	ti	INTJ	I	_	17	discourse	_	word=ti|msd=M
19	di	di	INTJ	I	_	18	goeswith	_	word=di|msd=M
20	di	di	INTJ	I	_	18	goeswith	_	word=di|msd=M
21	pa	pa	CCONJ	Cc	_	23	cc	_	word=pa|msd=Vp
22	še	še	PART	Q	_	23	advmod	_	word=še|msd=L
23	igraš	igrati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	17	conj	_	word=igraš|msd=Ggnsde

~~~


