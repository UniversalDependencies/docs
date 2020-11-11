---
layout: base
title:  'Statistics of punct in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `punct`

This relation is universal.

33883 nodes (11%) are attached to their parents as `punct`.

26938 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.41011716790131.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (15452; 46% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (10194; 30% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (2847; 8% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (1733; 5% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (1687; 5% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (1122; 3% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (624; 2% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (101; 0% instances), <tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (56; 0% instances), <tt><a href="it_isdt-pos-AUX.html">AUX</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (39; 0% instances), <tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="it_isdt-pos-DET.html">DET</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-ADP.html">ADP</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it_isdt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 punct	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	3:det:predet	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	5:nsubj|9:nsubj	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	3:amod	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	di	di	ADP	E	_	9	mark	9:mark	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	9:aux	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	9:cop	_
9	più	più	ADV	B	_	5	xcomp	5:xcomp	_
10	di	di	ADP	E	_	11	case	11:case	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	9:obl:di|13:nsubj	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	11:ref	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	0	root	0:root	_
2	in	in	ADP	E	_	4	case	4:case	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	_
4	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	1	nmod	1:nmod:in	SpaceAfter=No
5	:	:	PUNCT	FC	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Tudjman	Tudjman	PROPN	SP	_	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	1:punct	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	4:det	SpaceAfter=No
4	arte	arte	NOUN	S	Gender=Fem|Number=Sing	1	nmod	1:nmod	_
5	di	di	ADP	E	_	7	case	7:case	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	7:det	_
7	vendetta	vendetta	NOUN	S	Gender=Fem|Number=Sing	4	nmod	4:nmod:di	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


