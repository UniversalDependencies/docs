---
layout: base
title:  'Statistics of ccomp in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `ccomp`

This relation is universal.

311 nodes (1%) are attached to their parents as `ccomp`.

311 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63987138263666.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (221; 71% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (30; 10% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (25; 8% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (7; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	pronunciation=je
2	videl	videti	VERB	Vmbp-sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	pronunciation=vidu
3	kakšne	kakšen	DET	Pq-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Int	4	det	_	pronunciation=kakšne
4	barve	barva	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	pronunciation=barve
5	mešajo	mešati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	pronunciation=mešajo

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	pronunciation=mislim
2	da	da	SCONJ	Cs	_	6	mark	_	pronunciation=da
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	pronunciation=je
4	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	pronunciation=to
5	velik	velik	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	pronunciation=velik
6	problem	problem	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	ccomp	_	pronunciation=problem

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	sony	Sony	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	pronunciation=soni
2	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	pronunciation=mislm
3	pa	pa	CCONJ	Cc	_	2	advmod	_	pronunciation=pa
4	da	da	SCONJ	Cs	_	7	mark	_	pronunciation=da
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	pronunciation=je
6	malo	malo	DET	Rgp	PronType=Ind	7	advmod	_	pronunciation=mal
7	dražji	drag	ADJ	Agcmsny	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Sing	2	ccomp	_	pronunciation=dražji
8	ne	ne	PART	Q	Polarity=Neg	2	discourse	_	pronunciation=ne
9	?	?	PUNCT	Z	_	2	punct	_	pronunciation=?

~~~


