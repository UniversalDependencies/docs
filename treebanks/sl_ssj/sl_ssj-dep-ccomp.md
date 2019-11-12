---
layout: base
title:  'Statistics of ccomp in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `ccomp`

This relation is universal.

1215 nodes (1%) are attached to their parents as `ccomp`.

1191 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.13662551440329.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (911; 75% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (159; 13% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (62; 5% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (59; 5% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	Že	že	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
2	dolgo	dolgo	ADV	Rgp	Degree=Pos	3	advmod	_	Dep=3|Rel=AdvO
3	poslušam	poslušati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	in	in	CCONJ	Cc	_	5	cc	_	Dep=5|Rel=Conj
5	sledim	slediti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	SpaceAfter=No|Dep=0|Rel=Root
6	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
7	ali	ali	ADV	Rgp	Degree=Pos	9	mark	_	Dep=9|Rel=Conj
8	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	9	aux	_	Dep=9|Rel=PPart
9	bili	biti	VERB	Va-p-pm	Gender=Masc|Number=Plur|VerbForm=Part	5	ccomp	_	Dep=5|Rel=Obj
10	kakšni	kakšen	DET	Pq-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Int	12	det	_	Dep=12|Rel=Atr
11	takšni	takšen	DET	Pd-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	12	det	_	Dep=12|Rel=Atr
12	nameni	namen	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	SpaceAfter=No|Dep=9|Rel=Sb
13	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CCONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	Dep=7|Rel=PPart
7	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	PronType=Ind	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


