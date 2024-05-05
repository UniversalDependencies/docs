---
layout: base
title:  'Statistics of ccomp in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `ccomp`

This relation is universal.

2022 nodes (1%) are attached to their parents as `ccomp`.

1865 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.86300692383778.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1528; 76% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (274; 14% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (116; 6% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (43; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	Že	že	PART	Q	_	2	advmod	_	NER=O
2	dolgo	dolgo	ADV	Rgp	Degree=Pos	3	advmod	_	NER=O
3	poslušam	poslušati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
4	in	in	CCONJ	Cc	_	5	cc	_	NER=O
5	sledim	slediti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	NER=O|SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	_	NER=O
7	ali	ali	ADV	Rgp	Degree=Pos	9	mark	_	NER=O
8	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	9	aux	_	NER=O
9	bili	biti	VERB	Va-p-pm	Gender=Masc|Number=Plur|VerbForm=Part	5	ccomp	_	NER=O
10	kakšni	kakšen	DET	Pq-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Int	12	det	_	NER=O
11	takšni	takšen	DET	Pd-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	12	det	_	NER=O
12	nameni	namen	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	NER=O|SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	_	NER=O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
2	pa	pa	CCONJ	Cc	_	1	advmod	_	NER=O
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	NER=O|SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	_	NER=O
5	da	da	SCONJ	Cs	_	9	mark	_	NER=O
6	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	NER=O
7	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	NER=O
8	ravno	ravno	PART	Q	_	9	advmod	_	NER=O
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	NER=O|SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 ccomp	color:blue
1	"	"	PUNCT	Z	_	6	punct	_	NER=O|SpaceAfter=No
2	Kdo	kdo	PRON	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj	_	NER=O
3	pa	pa	CCONJ	Cc	_	6	advmod	_	NER=O
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	NER=O
5	afriška	afriški	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	NER=O
6	osebnost	osebnost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	11	ccomp	_	NER=O
7	stoletja	stoletje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	NER=O|SpaceAfter=No
8	?	?	PUNCT	Z	_	6	punct	_	NER=O|SpaceAfter=No
9	"	"	PUNCT	Z	_	6	punct	_	NER=O
10	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	NER=O
11	spraševal	spraševati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	NER=O
12	dalje	dalje	ADV	Rgp	Degree=Pos	11	advmod	_	NER=O|SpaceAfter=No
13	.	.	PUNCT	Z	_	11	punct	_	NER=O

~~~


