---
layout: base
title:  'Statistics of csubj in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `csubj`

This relation is universal.

259 nodes (0%) are attached to their parents as `csubj`.

246 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.86872586872587.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (124; 48% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (65; 25% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (26; 10% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-AUX.html">AUX</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	polmer	polmer	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	pronunciation=polmer|Gos2.1_token_id=Gos060.tok3060
2	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	pronunciation=bo|Gos2.1_token_id=Gos060.tok3061
3	treba	treba	ADV	Rgp	Degree=Pos	2	advmod	_	pronunciation=treba|Gos2.1_token_id=Gos060.tok3062
4	izračunati	izračunati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	2	csubj	_	pronunciation=zračunat|Gos2.1_token_id=Gos060.tok3063
5	,	,	PUNCT	Z	_	6	punct	_	_
6	ne	ne	PART	Q	Polarity=Neg	4	discourse	_	pronunciation=ne|Gos2.1_token_id=Gos060.tok3064
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	ja	ja	PART	Q	_	6	discourse	_	pronunciation=ja|Gos2.1_token_id=Gos248.tok2649
2	,	,	PUNCT	Z	_	1	punct	_	_
3	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	pronunciation=to|Gos2.1_token_id=Gos248.tok2650
4	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	6	aux	_	pronunciation=bi|Gos2.1_token_id=Gos248.tok2651
5	bilo	biti	AUX	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	6	cop	_	pronunciation=blo|Gos2.1_token_id=Gos248.tok2652
6	zanimivo	zanimiv	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	pronunciation=zanimivo|Gos2.1_token_id=Gos248.tok2653
7	primerjati	primerjati	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	6	csubj	_	pronunciation=primerjat|Gos2.1_token_id=Gos248.tok2654
8	,	,	PUNCT	Z	_	9	punct	_	_
9	ja	ja	PART	Q	_	6	discourse	_	pronunciation=ja|Gos2.1_token_id=Gos248.tok2655
10	,	,	PUNCT	Z	_	9	punct	_	_
11	v	v	ADP	Sl	Case=Loc	12	case	_	pronunciation=v|Gos2.1_token_id=Gos248.tok2657
12	mestu	mesto	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	13	obl	_	pronunciation=mestu|Gos2.1_token_id=Gos248.tok2658
13	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	parataxis	_	pronunciation=majo|Gos2.1_token_id=Gos248.tok2659
14	tudi	tudi	PART	Q	_	15	advmod	_	pronunciation=tud|Gos2.1_token_id=Gos248.tok2660
15	te	ta	DET	Pd-mpa	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	13	obj	_	pronunciation=te|Gos2.1_token_id=Gos248.tok2661
16	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	ja	ja	PART	Q	_	4	discourse	_	pronunciation=ja|Gos2.1_token_id=Gos179.tok978
2	,	,	PUNCT	Z	_	1	punct	_	_
3	samo	samo	PART	Q	_	4	cc	_	pronunciation=sam|Gos2.1_token_id=Gos179.tok979
4	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	0	root	_	pronunciation=vprašanje|Gos2.1_token_id=Gos179.tok980
5	,	,	PUNCT	Z	_	7	punct	_	_
6	kdo	kdo	PRON	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	7	nsubj	_	pronunciation=kdo|Gos2.1_token_id=Gos179.tok981
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	csubj	_	pronunciation=je|Gos2.1_token_id=Gos179.tok982
8	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	expl	_	pronunciation=to|Gos2.1_token_id=Gos179.tok983
9	v	v	ADP	Sl	Case=Loc	10	case	_	pronunciation=v|Gos2.1_token_id=Gos179.tok984
10	resnici	resnica	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	7	obl	_	pronunciation=resnici|Gos2.1_token_id=Gos179.tok985
11	izza	izza	ADP	Sg	Case=Gen	12	case	_	pronunciation=izza|Gos2.1_token_id=Gos179.tok986
12	tega	ta	DET	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	obl	_	pronunciation=tega|Gos2.1_token_id=Gos179.tok987
13	,	,	PUNCT	Z	_	14	punct	_	_
14	ne	ne	PART	Q	Polarity=Neg	4	discourse	_	pronunciation=ne|Gos2.1_token_id=Gos179.tok988
15	.	.	PUNCT	Z	_	4	punct	_	_

~~~


