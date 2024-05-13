---
layout: base
title:  'Statistics of det:poss in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_isdt-dep-det-predet.html">det:predet</a></tt>.

1870 nodes (1%) are attached to their parents as `det:poss`.

1804 instances of `det:poss` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10695187165775.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (1850; 99% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 det:poss	color:blue
1	"	"	PUNCT	FB	_	5	punct	5:punct	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	Pivetti	Pivetti	PROPN	SP	_	5	nsubj	5:nsubj|8:nsubj	_
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
6	benissimo	bene	ADV	B	Degree=Abs	5	advmod	5:advmod	_
7	a	a	ADP	E	_	8	mark	8:mark	_
8	decidere	decidere	VERB	V	VerbForm=Inf	5	xcomp	5:xcomp	_
9	di	di	ADP	E	_	10	case	10:case	_
10	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	obl	8:obl:di	_
11	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:poss	color:blue
1	Quanti	quanto	DET	DQ	Gender=Masc|Number=Plur|PronType=Int	2	det	2:det	_
2	pianeti	pianeta	NOUN	S	Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
3	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	4	expl	4:expl	_
4	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	in	in	ADP	E	_	8	case	8:case	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
7	nostro	nostro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det:poss	8:det:poss	_
8	Sistema	Sistema	PROPN	SP	_	4	obl	4:obl:in	_
9	Solare	Solare	PROPN	SP	_	8	flat:name	8:flat:name	SpaceAfter=No
10	?	?	PUNCT	FS	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:poss	color:blue
1	Femmine	femmina	NOUN	S	Gender=Fem|Number=Plur	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	1:punct	_
3	dopo	dopo	ADP	E	_	5	case	5:case	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	svezzamento	svezzamento	NOUN	S	Gender=Masc|Number=Sing	1	nmod	1:nmod:dopo	_
6	di	di	ADP	E	_	10	case	10:case	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	_
8	loro	loro	DET	AP	Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	_
9	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	10	amod	10:amod	_
10	piccolo	piccolo	ADJ	A	Gender=Masc|Number=Sing	5	nmod	5:nmod:di	SpaceAfter=No
11	,	,	PUNCT	FF	_	1	punct	1:punct	_
12	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
13	tasso	tasso	NOUN	S	Gender=Masc|Number=Sing	1	nmod	1:nmod	_
14	inferiore	inferiore	ADJ	A	Degree=Cmp|Number=Sing	13	amod	13:amod	SpaceAfter=No
15	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


