---
layout: base
title:  'Statistics of xcomp in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `xcomp`

This relation is universal.

3647 nodes (1%) are attached to their parents as `xcomp`.

3494 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03811351795997.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (3167; 87% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (204; 6% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (130; 4% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (91; 2% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (13; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (11; 0% instances), <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Vol	voler	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	jugar	jugar	VERB	VERB	VerbForm=Inf	1	xcomp	_	_
3	al	al	ADP	ADP	AdpType=Preppron	4	case	_	_
4	centre	centre	NOUN	NOUN	Gender=Masc|Number=Sing	2	obl	_	_
5	i	i	CCONJ	CCONJ	_	7	cc	_	_
6	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	dir	dir	VERB	VERB	VerbForm=Inf	1	conj	_	_
8	que	que	SCONJ	SCONJ	_	10	mark	_	_
9	està	estar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	preparat	preparat	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	_
11	per	per	ADP	ADP	AdpType=Prep	14	case	_	_
12	a	a	ADP	ADP	AdpType=Prep	14	case	_	_
13	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	banqueta	banqueta	NOUN	NOUN	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	No	no	ADV	ADV	Polarity=Neg	3	advmod	_	_
2	ens	jo	PRON	PRON	Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs	3	obj	_	_
3	sembla	semblar	VERB	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	just	just	ADJ	ADJ	Gender=Masc|Number=Sing	3	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Rivaldo	Rivaldo	PROPN	PROPN	_	2	nsubj	_	_
2	segueix	seguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	decidit	decidit	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	2	obj	_	_
4	a	a	ADP	ADP	AdpType=Prep	6	mark	_	_
5	no	no	ADV	ADV	Polarity=Neg	6	advmod	_	_
6	jugar	jugar	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
7	més	més	ADV	ADV	Degree=Cmp	6	advmod	_	_
8	com	com	SCONJ	SCONJ	_	10	case	_	MWE=com_a|MWEPOS=ADP
9	a	a	ADP	ADP	AdpType=Prep	8	fixed	_	_
10	extrem	extrem	NOUN	NOUN	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


