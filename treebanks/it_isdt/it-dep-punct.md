---
layout: base
title:  'Statistics of punct in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `punct`

This relation is universal.

33364 nodes (11%) are attached to their parents as `punct`.

26622 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.49979019302242.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (15171; 45% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (9994; 30% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (2769; 8% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (1699; 5% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (1690; 5% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (1130; 3% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (597; 2% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (95; 0% instances), <tt><a href="it-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (58; 0% instances), <tt><a href="it-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (57; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (50; 0% instances), <tt><a href="it-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (36; 0% instances), <tt><a href="it-pos-DET.html">DET</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="it-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="it-pos-ADP.html">ADP</a></tt>-<tt><a href="it-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 punct	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	ExtraSubj=Yes
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	in	in	ADP	E	_	4	case	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Tudjman	Tudjman	PROPN	SP	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	arte	arte	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	di	di	ADP	E	_	7	case	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	vendetta	vendetta	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


