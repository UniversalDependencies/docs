---
layout: base
title:  'Statistics of amod in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `amod`

This relation is universal.

11800 nodes (8%) are attached to their parents as `amod`.

11517 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26110169491525.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (11439; 97% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (247; 2% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (56; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (25; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (9; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Zaradi	zaradi	ADP	Sg	Case=Gen	2	case	_	Dep=2|Rel=Atr
2	nas	jaz	PRON	Pp1-pg	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	obl	_	Dep=4|Rel=AdvO
3	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	bili	biti	VERB	Va-p-pm	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	lahko	lahko	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=PPart
6	tudi	tudi	PART	Q	_	4	advmod	_	Dep=0|Rel=Root
7	snežno	snežno	ADV	Rgp	Degree=Pos	8	advmod	_	Dep=8|Rel=Atr
8	beli	bel	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	Dep=9|Rel=Atr
9	Slovenci	Slovenec	PROPN	Npmpn	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No|Dep=4|Rel=Sb
10	!	!	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Česa	kaj	PRON	Pq-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	6	obj	_	Dep=6|Rel=Obj
2	bolj	bolj	ADV	Rgc	Degree=Cmp	3	advmod	_	Dep=3|Rel=Atr
3	določnega	določen	ADJ	Agpnsg	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	1	amod	_	Dep=1|Rel=Atr
4	zaenkrat	zaenkrat	ADV	Rgp	Degree=Pos	6	advmod	_	Dep=6|Rel=AdvO
5	ne	ne	PART	Q	Polarity=Neg	6	advmod	_	Dep=6|Rel=PPart
6	zmoremo	zmoči	VERB	Vmer1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
7	.	.	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


