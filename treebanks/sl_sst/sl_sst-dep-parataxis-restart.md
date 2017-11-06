---
layout: base
title:  'Statistics of parataxis:restart in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `parataxis:restart`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="sl_sst-dep-parataxis-discourse.html">parataxis:discourse</a></tt>.

91 nodes (0%) are attached to their parents as `parataxis:restart`.

88 instances of `parataxis:restart` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.64835164835165.

The following 17 pairs of parts of speech are connected with `parataxis:restart`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (58; 64% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 parataxis:restart	color:blue
1	ja	ja	PART	Q	_	8	discourse	_	word=ja|msd=L
2	zdaj	zdaj	ADV	Rgp	Degree=Pos	8	discourse	_	word=ze|msd=Rsn
3	če	če	SCONJ	Cs	_	4	orphan	_	word=če|msd=Vd
4	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	reparandum	_	word=se|msd=Zp------k
5	če	če	SCONJ	Cs	_	8	mark	_	word=če|msd=Vd
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	expl	_	word=se|msd=Zp------k
7	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	8	obj	_	word=vam|msd=Zod-md
8	zdi	zdeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=zdi|msd=Ggnste
9	frizer	frizer	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	word=frizer|msd=Somei
10	če	če	SCONJ	Cs	_	12	mark	_	word=če|msd=Vd
11	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	12	obj	_	word=ga|msd=Zotmet--k
12	damo	dati	VERB	Vmer1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	8	parataxis:restart	_	word=damo|msd=Ggdspm
13	med	med	ADP	Sa	Case=Acc	14	case	_	word=med|msd=Dt
14	nezasebne	nezaseben	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	12	obl	_	word=nezasebne|msd=Ppnmmt
15	super	super	ADV	Rgp	Degree=Pos	12	discourse	_	word=super|msd=Rsn

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis:restart	color:blue
1	uuu	uuu	INTJ	I	_	2	discourse	_	word=uuu|msd=M
2	nisem	biti	VERB	Va-r1s-y	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	word=nisem|msd=Gp-spe-d
3	zdajle	zdajle	ADV	Rgp	Degree=Pos	2	advmod	_	word=zdajle|msd=Rsn
4	za	za	ADP	Sa	Case=Acc	5	case	_	word=za|msd=Dt
5	raču	_	X	Xt	_	2	obl	_	word=raču|msd=Nt
6	[gap]	[gap]	X	X	_	2	punct	_	word=[gap]|msd=N
7	nep	nep	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	parataxis:restart	_	word=Nep|msd=Somei
8	nep	nep	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	parataxis	_	word=Nep|msd=Somei
9	ja	ja	PART	Q	_	8	discourse	_	word=ja|msd=L

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 parataxis:restart	color:blue
1	lahko	lahko	ADV	Rgp	Degree=Pos	0	root	_	word=loh|msd=Rsn
2	pa	pa	CCONJ	Cc	_	1	advmod	_	word=pa|msd=Vp
3	da	da	SCONJ	Cs	_	4	orphan	_	word=da|msd=Vd
4	nikoli	nikoli	ADV	Rgp	Degree=Pos	1	csubj	_	word=nkol|msd=Rsn
5	no	no	PART	Q	_	1	discourse	_	word=no|msd=L
6	ampak	ampak	CCONJ	Cc	_	8	cc	_	word=ampak|msd=Vp
7	bolj	bolj	ADV	Rgc	Degree=Cmp	8	reparandum	_	word=bolj|msd=Rsr
8	bolj	bolj	ADV	Rgc	Degree=Cmp	4	orphan	_	word=bolj|msd=Rsr
9	saj	saj	CCONJ	Cc	_	11	cc	_	word=sej|msd=Vp
10	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	word=s|msd=Gp-sde-n
11	videl	videti	VERB	Vmbp-sm	Gender=Masc|Number=Sing|VerbForm=Part	1	parataxis:restart	_	word=vidu|msd=Ggvd-em
12	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N

~~~


