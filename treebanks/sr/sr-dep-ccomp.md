---
layout: base
title:  'Statistics of ccomp in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `ccomp`

This relation is universal.

1210 nodes (1%) are attached to their parents as `ccomp`.

1210 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66776859504132.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (771; 64% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (144; 12% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (99; 8% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (53; 4% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (49; 4% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (26; 2% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (19; 2% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Druga	drugi	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	2	nummod	_	_
2	dvojica	dvojica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	rekli	reći	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	neće	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prisustvovati	prisustvovati	VERB	_	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Pejović	Pejović	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
5	romansa	romansa	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
6	bila	biti	AUX	_	Gender=Fem|Number=Sing|VerbForm=Part	7	aux	_	_
7	osuđena	osuditi	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	2	ccomp	_	_
8	na	na	ADP	_	Case=Acc	9	case	_	_
9	propast	propast	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Oni	oni	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	traže	tražiti	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	9	mark	_	_
4	naša	naš	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=1|Poss=Yes	5	det	_	_
5	Uprava	uprava	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
6	prihoda	prihod	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
7	bude	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	cop	_	_
8	nezavisna	nezavisan	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	ustanova	ustanova	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


