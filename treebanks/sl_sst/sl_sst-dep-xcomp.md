---
layout: base
title:  'Statistics of xcomp in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `xcomp`

This relation is universal.

243 nodes (1%) are attached to their parents as `xcomp`.

229 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11934156378601.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (183; 75% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (40; 16% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (11; 5% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	word=je|msd=Gp-ste-n
2	že	že	PART	Q	_	3	advmod	_	word=že|msd=L
3	moglo	moči	VERB	Vmpp-sn	Aspect=Imp|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=mogl|msd=Ggnd-es
4	biti	biti	VERB	Va-n	VerbForm=Inf	3	xcomp	_	word=bit|msd=Gp-n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	ki	ki	SCONJ	Cs	_	3	mark	_	word=k|msd=Vd
2	se	se	PRON	Px------y	PronType=Prs|Variant=Short	3	expl	_	word=se|msd=Zp------k
3	začne	začeti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=začne|msd=Ggdste
4	v	v	ADP	Sl	Case=Loc	6	case	_	word=v|msd=Dm
5	gvinejskem	gvinejski	ADJ	Agpmsl	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	word=Gvinejskem|msd=Ppnmem
6	zalivu	zaliv	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	word=zalivu|msd=Somem
7	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	expl	_	word=se|msd=Zp------k
8	imenuje	imenovati	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=imenuje|msd=Ggvste
9	zalivski	zalivski	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	8	xcomp	_	word=Zalivski|msd=Ppnmeid
10	zalivski	zalivski	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	word=Zalivski|msd=Ppnmeid
11	tok	tok	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	9	appos	_	word=tok|msd=Somei

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	ravno	ravno	PART	Q	_	2	advmod	_	word=ravno|msd=L
2	prav	prav	PART	Q	_	4	reparandum	_	word=prav|msd=L
3	ravno	ravno	PART	Q	_	4	advmod	_	word=ravno|msd=L
4	pravšnja	pravšnji	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	word=pravšnja|msd=Ppnzei
5	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
6	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
7	moč	moč	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	8	xcomp	_	word=moč|msd=Sozei
8	mora	morati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=mora|msd=Ggnste
9	biti	biti	AUX	Va-n	VerbForm=Inf	7	cop	_	word=bit|msd=Gp-n
10	a	a	ADV	Rgp	Degree=Pos	8	discourse	_	word=a|msd=Rsn
11	ne	ne	PART	Q	_	10	fixed	_	word=ne|msd=L

~~~


