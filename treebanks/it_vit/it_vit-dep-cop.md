---
layout: base
title:  'Statistics of cop in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `cop`

This relation is universal.

2331 nodes (1%) are attached to their parents as `cop`.

2292 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83268983268983.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (956; 41% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (925; 40% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (193; 8% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (117; 5% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (72; 3% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (54; 2% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	come	come	ADP	E	_	4	case	_	_
3	un'	uno	NUM	N	Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	SpaceAfter=No
4	energia	energia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
6	sta	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	crescendo	crescere	VERB	V	VerbForm=Ger	4	acl:relcl	_	_
8	complessivamente	complessivamente	ADV	B	_	7	advmod	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	mercato	mercato	NOUN	S	Gender=Masc|Number=Sing	9	nsubj	_	_
3	europeo	europeo	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
4	di	di	ADP	E	_	6	case	_	_
5	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	office	office	X	SW	Foreign=Yes	2	nmod	_	_
7	automation	automation	X	SW	Foreign=Yes	6	flat:foreign	_	_
8	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	enorme	enorme	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
10	:	:	PUNCT	FC	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	quella	quello	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	_
4	ad	a	ADP	E	_	5	mark	_	_
5	ammazzar	ammazzare	VERB	V	VerbForm=Inf	3	ccomp	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
7	,	,	PUNCT	FF	_	10	punct	_	_
8	ne	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl	_	_
9	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	sputata	sputare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
11	fuori	fuori	ADV	B	_	10	advmod	_	_
12	tanta	tanto	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	3	punct	_	_

~~~


