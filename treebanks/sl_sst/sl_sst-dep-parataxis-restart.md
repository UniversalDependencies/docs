---
layout: base
title:  'Statistics of parataxis:restart in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `parataxis:restart`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="sl_sst-dep-parataxis-discourse.html">parataxis:discourse</a></tt>.

90 nodes (0%) are attached to their parents as `parataxis:restart`.

88 instances of `parataxis:restart` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.73333333333333.

The following 16 pairs of parts of speech are connected with `parataxis:restart`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (58; 64% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-X.html">X</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 parataxis:restart	color:blue
1	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	word=to|msd=Zk-sei
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
3	zdaj	zdaj	ADV	Rgp	Degree=Pos	2	advmod	_	word=zdej|msd=Rsn
4	mi	jaz	PRON	Pp1mpn	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	word=mi|msd=Zopmmi
5	jim	on	PRON	Pp3mpd--y	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	11	iobj	_	word=jim|msd=Zotmmd--k
6	lahko	lahko	ADV	Rgp	Degree=Pos	11	advmod	_	word=lah|msd=Rsn
7	višino	višina	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	word=višino|msd=Sozet
8	tona	ton	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	word=tona|msd=Somer
9	s	z	ADP	Si	Case=Ins	10	case	_	word=s|msd=Do
10	tem	ta	DET	Pd-nsi	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	11	obl	_	word=tem|msd=Zk-seo
11	določamo	določati	VERB	Vmpr1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis:restart	_	word=določamo|msd=Ggnspm
12	ne	ne	PART	Q	_	11	discourse	_	word=ne|msd=L

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
6	[gap]	[gap]	PUNCT	X	_	2	punct	_	word=[gap]|msd=N
7	nep	nep	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	parataxis:restart	_	word=Nep|msd=Somei
8	nep	nep	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	parataxis	_	word=Nep|msd=Somei
9	ja	ja	PART	Q	_	8	discourse	_	word=ja|msd=L

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:restart	color:blue
1	ne	ne	PART	Q	_	3	discourse	_	word=ne|msd=L
2	in	in	CCONJ	Cc	_	3	cc	_	word=in|msd=Vp
3	tako	tako	ADV	Rgp	Degree=Pos	0	root	_	word=taku|msd=Rsn
4	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
5	i	_	X	Xt	_	7	reparandum	_	word=i|msd=Nt
6	[gap]	[gap]	PUNCT	X	_	7	punct	_	word=[gap]|msd=N
7	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis:restart	_	word=veš|msd=Ggnsde
8	kakšen	kakšen	DET	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	10	det	_	word=kašn|msd=Zv-mei
9	lep	lep	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	word=lep|msd=Ppnmein
10	kostanj	kostanj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	ccomp	_	word=kostajn|msd=Somei
11	kako	kako	ADV	Rgp	Degree=Pos	12	advmod	_	word=kaku|msd=Rsn
12	dober	dober	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	word=dober|msd=Ppnmein
13	sladek	sladek	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	word=sladek|msd=Ppnmein

~~~


