---
layout: base
title:  'Statistics of nsubj in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="it_parlamint-dep-nsubj-outer.html">nsubj:outer</a></tt>.

898 nodes (4%) are attached to their parents as `nsubj`.

715 instances of `nsubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.39643652561247.

The following 16 pairs of parts of speech are connected with `nsubj`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (432; 48% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (301; 34% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (51; 6% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (40; 4% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (23; 3% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (16; 2% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	Tante	tanto	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	famiglie	famiglia	NOUN	S	Gender=Fem|Number=Plur	6	nsubj	_	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl	_	_
4	possono	potere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	dunque	dunque	ADV	B	_	6	advmod	_	_
6	trovare	trovare	VERB	V	VerbForm=Inf	0	root	_	_
7	in	in	ADP	E	_	9	case	_	_
8	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	condizione	condizione	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	_	_
2	dev'	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	SpaceAfter=No
3	essere	essere	AUX	VA	VerbForm=Inf	4	aux	_	_
4	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	salvo	salvo	ADJ	A	Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Stato	stato	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	V	VerbForm=Inf	5	cop	_	_
5	presente	presente	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


