---
layout: base
title:  'Statistics of xcomp in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `xcomp`

This relation is universal.

1972 nodes (1%) are attached to their parents as `xcomp`.

1896 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.00760649087221.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1422; 72% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (240; 12% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (221; 11% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (59; 3% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Predvsem	predvsem	PART	Q	_	3	advmod	_	NER=O
2	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	NER=O
3	morate	morati	VERB	Vmpr2p	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
4	naučiti	naučiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	3	xcomp	_	NER=O
5	vsakodnevne	vsakodneven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	NER=O
6	pravilne	pravilen	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	NER=O
7	prehrane	prehrana	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	4	obj	_	NER=O|SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	_	NER=O

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Vsaj	vsaj	PART	Q	_	2	advmod	_	NER=O
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	NER=O
3	v	v	ADP	Sl	Case=Loc	4	case	_	NER=O
4	ničemer	nič	PRON	Pz-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Neg	8	obl	_	NER=O
5	ne	ne	PART	Q	Polarity=Neg	6	advmod	_	NER=O
6	more	moči	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
7	biti	biti	AUX	Va-n	VerbForm=Inf	8	cop	_	NER=O
8	sporno	sporen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	xcomp	_	NER=O|SpaceAfter=No
9	.	.	PUNCT	Z	_	6	punct	_	NER=O

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	Zavarovanje	zavarovanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	NER=O
2	pravne	praven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	NER=O
3	zaščite	zaščita	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	NER=O
4	običajno	običajno	ADV	Rgp	Degree=Pos	5	advmod	_	NER=O
5	velja	veljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
6	tudi	tudi	PART	Q	_	5	advmod	_	NER=O
7	za	za	ADP	Sa	Case=Acc	8	case	_	NER=O
8	tujino	tujina	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	xcomp	_	NER=O|SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	_	NER=O

~~~


