---
layout: base
title:  'Statistics of ccomp in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `ccomp`

This relation is universal.

312 nodes (1%) are attached to their parents as `ccomp`.

312 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63141025641026.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (221; 71% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (30; 10% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (25; 8% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (7; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=veš|msd=Ggnsde
2	kako	kako	ADV	Rgp	Degree=Pos	3	advmod	_	word=kako|msd=Rsn
3	vrti	vrteti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	word=vrti|msd=Ggnste
4	tisto	tisti	DET	Pd-fsa	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	word=tisto|msd=Zk-zet
5	kosilnico	kosilnica	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	word=kosilnico|msd=Sozet
6	brez	brez	ADP	Sg	Case=Gen	7	case	_	word=brez|msd=Dr
7	motorja	motor	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	word=motorja|msd=Somer

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	eee	eee	INTJ	I	_	3	discourse:filler	_	word=eee|msd=M
2	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	word=jz|msd=Zop-ei
3	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=mislim|msd=Ggnspe
4	da	da	SCONJ	Cs	_	5	mark	_	word=da|msd=Vd
5	ni	biti	VERB	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	reparandum	_	word=ni|msd=Gp-ste-d
6	eee	eee	INTJ	I	_	11	discourse:filler	_	word=eee|msd=M
7	da	da	SCONJ	Cs	_	11	mark	_	word=da|msd=Vd
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	word=je|msd=Gp-ste-n
9	zelo	zelo	ADV	Rgp	Degree=Pos	10	advmod	_	word=zlo|msd=Rsn
10	dobra	dober	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	word=dobra|msd=Ppnzei
11	smučarka	smučarka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	ccomp	_	word=smučarka|msd=Sozei
12	in	in	CCONJ	Cc	_	13	cc	_	word=in|msd=Vp
13	vsestranska	vsestranski	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	conj	_	word=vsestranska|msd=Ppnzei

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	pa	pa	CCONJ	Cc	_	3	cc	_	word=pa|msd=Vp
2	najprej	najprej	ADV	Rgs	Degree=Sup	3	advmod	_	word=najprej|msd=Rss
3	povejmo	povedati	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	0	root	_	word=povejmo|msd=Ggdvpm
4	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	6	nsubj	_	word=kaj|msd=Zv-sei
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	word=je|msd=Gp-ste-n
6	značilno	značilen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp	_	word=značilno|msd=Ppnsei
7	za	za	ADP	Sa	Case=Acc	9	case	_	word=za|msd=Dt
8	ljudske	ljudski	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	word=ljudske|msd=Ppnzmt
9	pesmi	pesem	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	6	obl	_	word=pesmi|msd=Sozmt

~~~


