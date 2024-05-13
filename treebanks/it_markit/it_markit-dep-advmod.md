---
layout: base
title:  'Statistics of advmod in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `advmod`

This relation is universal.

2089 nodes (5%) are attached to their parents as `advmod`.

1726 instances of `advmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19195787458114.

The following 17 pairs of parts of speech are connected with `advmod`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (953; 46% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (581; 28% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (339; 16% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (88; 4% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (75; 4% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (23; 1% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="it_markit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advmod	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	proprio	proprio	ADV	B	_	3	advmod	_	_
3	questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
6	che	che	PRON	PR	_	7	nsubj	_	_
7	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	più	più	DET	DI	_	9	advmod	_	_
9	male	male	ADV	B	_	7	advmod	_	_
10	ad	ad	ADP	E	_	12	case	_	_
11	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	giovane	giovane	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
13	:	:	PUNCT	FC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
2	proprio	proprio	ADV	B	_	5	advmod	_	_
3	a	a	ADP	E	_	5	case	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	domanda	domanda	NOUN	S	Gender=Fem|Number=Sing	10	obl	_	_
6	che	che	SCONJ	CS	_	10	mark	_	_
7	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	scienziati	scienziato	NOUN	S	Gender=Masc|Number=Plur	10	nsubj	_	_
9	stanno	stare	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	lavorando	lavorare	VERB	V	VerbForm=Ger	0	root	_	_
11	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	sentimento	sentimento	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	che	che	PRON	PR	_	6	nsubj	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	vuole	volere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
7	mediazioni	mediazione	NOUN	S	Gender=Fem|Number=Plur	6	obj	_	_
8	,	,	PUNCT	FF	_	10	punct	_	_
9	puramente	puramente	ADV	B	_	10	advmod	_	_
10	istintivo	istintivo	ADJ	A	Gender=Masc|Number=Sing	3	amod	_	_
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


