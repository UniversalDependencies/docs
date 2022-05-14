---
layout: base
title:  'Statistics of ccomp in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `ccomp`

This relation is universal.

1927 nodes (1%) are attached to their parents as `ccomp`.

1899 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.28489880643487.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1418; 74% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (250; 13% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (104; 5% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (102; 5% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (14; 1% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	Že	že	PART	Q	_	3	advmod	_	NER=O
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 ccomp	color:blue
1	Z	z	ADP	Si	Case=Ins	2	case	_	NER=O
2	leti	leto	NOUN	Ncnpi	Case=Ins|Gender=Neut|Number=Plur	4	obl	_	NER=O
3	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	NER=O
4	spoznal	spoznati	VERB	Vmbp-sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	NER=O|SpaceAfter=No
5	,	,	PUNCT	Z	_	11	punct	_	NER=O
6	da	da	SCONJ	Cs	_	11	mark	_	NER=O
7	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	NER=O
8	Fara	Fara	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	NER=O
9	nenavadno	nenavadno	ADV	Rgp	Degree=Pos	10	advmod	_	NER=O
10	zanimiva	zanimiv	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	NER=O
11	vas	vas	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	NER=O|SpaceAfter=No
12	.	.	PUNCT	Z	_	4	punct	_	NER=O

~~~


