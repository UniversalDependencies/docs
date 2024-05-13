---
layout: base
title:  'Statistics of advcl in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `advcl`

This relation is universal.

350 nodes (2%) are attached to their parents as `advcl`.

256 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.7857142857143.

The following 13 pairs of parts of speech are connected with `advcl`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (262; 75% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (29; 8% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (21; 6% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (16; 5% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 advcl	color:blue
1	Se	se	SCONJ	CS	_	4	mark	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	testo	testo	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
4	rimane	rimanere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	_
5	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	4	obj	_	_
6	di	di	ADP	E	_	8	case	_	_
7	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	emendamento	emendamento	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	4	punct	_	_
10	va	andare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	bene	bene	ADV	B	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl	color:blue
1	Lei	lei	PRON	PE	Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	doveva	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	_
3	essere	essere	AUX	V	VerbForm=Inf	5	cop	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	0	root	_	_
6	a	a	ADP	E	_	7	mark	_	_
7	preoccupar	preoccupare	VERB	V	VerbForm=Inf	5	advcl	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl	_	_
9	di	di	ADP	E	_	10	case	_	_
10	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	7	obl	_	_
11	e	e	CCONJ	CC	_	15	cc	_	_
12	non	non	ADV	BN	PronType=Neg	15	advmod	_	_
13	l'	lo	PRON	PC	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	15	obj	_	SpaceAfter=No
14	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	conj	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 advcl	color:blue
1	Secondo	secondo	ADP	E	_	2	case	_	_
2	me	me	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	obl	_	_
3	bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	anche	anche	ADV	B	_	5	advmod	_	_
5	usare	usare	VERB	V	VerbForm=Inf	3	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	11	punct	_	_
7	per	per	ADP	E	_	8	case	_	_
8	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	11	obl	_	_
9	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	11	expl	_	_
10	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	possibile	possibile	ADJ	A	Number=Sing	3	advcl	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	11	punct	_	_
13	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	linguaggio	linguaggio	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
15	di	di	ADP	E	_	16	case	_	_
16	verità	verità	NOUN	S	Gender=Fem	14	nmod	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	3	punct	_	_

~~~


