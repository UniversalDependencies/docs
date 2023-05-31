---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-acl.html">acl</a></tt>.

3173 nodes (1%) are attached to their parents as `acl:relcl`.

3167 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.256539552474.

The following 23 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (2330; 73% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (425; 13% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (196; 6% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (57; 2% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (54; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (18; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (14; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-DET.html">DET</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl:relcl	color:blue
1	Una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	libertà	libertà	NOUN	S	Gender=Fem	0	root	0:root|10:nsubj	_
3	che	che	PRON	PR	PronType=Rel	10	nsubj	2:ref	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	3:punct	_
5	a	a	ADP	E	_	6	case	6:case	_
6	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	10	obl	10:obl:a	_
7	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	6:acl:relcl	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	6:punct	_
9	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
10	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	2:acl:relcl	_
11	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	13:det	_
12	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det:poss	13:det:poss	_
13	frutti	frutto	NOUN	S	Gender=Masc|Number=Plur	10	obj	10:obj	SpaceAfter=No
14	:	:	PUNCT	FC	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 acl:relcl	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	3:det:predet	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	5:nsubj|9:nsubj	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	3:amod	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	di	di	ADP	E	_	9	mark	9:mark	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	9:aux	_
8	essere	essere	AUX	VA	VerbForm=Inf	9	cop	9:cop	_
9	più	più	ADV	B	_	5	xcomp	5:xcomp	_
10	di	di	ADP	E	_	11	case	11:case	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	9:obl:di|13:nsubj	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	11:ref	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No
2	Isola	isola	NOUN	S	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
3	verde	verde	ADJ	A	Number=Sing	2	amod	2:amod	_
4	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	omaggio	omaggio	NOUN	S	Gender=Masc|Number=Sing	4	obj	4:obj	_
6	a	a	ADP	E	_	9	case	9:case	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
8	«	«	PUNCT	FB	_	9	punct	9:punct	SpaceAfter=No
9	Cumenda	Cumenda	PROPN	SP	_	5	nmod	5:nmod:a|13:nsubj	SpaceAfter=No
10	»	»	PUNCT	FB	_	9	punct	9:punct	_
11	che	che	PRON	PR	PronType=Rel	13	nsubj	9:ref	_
12	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	_
13	ideò	ideare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl:relcl	9:acl:relcl	SpaceAfter=No
14	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


