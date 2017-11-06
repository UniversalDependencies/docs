---
layout: base
title:  'Statistics of amod in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `amod`

This relation is universal.

8899 nodes (4%) are attached to their parents as `amod`.

6142 instances of `amod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28160467468255.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (8468; 95% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (214; 2% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (83; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (63; 1% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (18; 0% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="pt-pos-X.html">X</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	Horário	horário	NOUN	<np-idf>|N|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PU|@PU	_	1	punct	_	_
3	em	em	ADP	<sam->|PRP|@N<PRED	_	5	case	_	_
4	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	dia	dia	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	1	nmod	_	_
6	12	12	NUM	<card>|NUM|M|P|@N<	NumType=Card	5	nummod	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	10	punct	_	_
8	de	de	ADP	<first-cjt>|<sam->|PRP|@N<PRED	_	10	case	_	_
9	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	19h	19h	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	1	nmod	_	_
11	a	a	ADP	<sam->|<cjt>|PRP|@N<PRED	_	14	case	_	_
12	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	último	último	ADJ	<NUM-ord>|ADJ|M|S|@>N	Gender=Masc|Number=Sing|NumType=Ord	14	amod	_	_
14	cliente	cliente	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	10	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Godard	Godard	PROPN	PROP|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	_
3	intergaláctico	intergaláctico	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	2	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	jovem	jovem	ADJ	<n>|<np-def>|ADJ|M|S|@SUBJ>	Gender=Masc|Number=Sing	7	nsubj	_	_
3	sportinguista	sportinguista	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	2	amod	_	_
4	Nélson	Nélson	PROPN	PROP|M|S|@N<	Gender=Masc|Number=Sing	2	nmod:npmod	_	_
5	terá	ter	AUX	<aux>|V|FUT|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux	_	_
6	de	de	ADP	PRP|@PRT-AUX<	_	7	obl	_	_
7	esperar	esperar	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


