---
layout: base
title:  'Statistics of flat in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="it_vit-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_vit-dep-flat-name.html">flat:name</a></tt>.

813 nodes (0%) are attached to their parents as `flat`.

813 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28167281672817.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (474; 58% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (259; 32% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (59; 7% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (15; 2% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Scuole	scuola	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
2	materne	materno	ADJ	A	Gender=Fem|Number=Plur	1	amod	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	20	20	NUM	N	NumType=Card	1	nmod	_	_
5	aprile	aprile	NOUN	S	Gender=Masc|Number=Sing	4	flat	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 flat	color:blue
1	1	1	NUM	N	NumType=Card	4	nummod	_	SpaceAfter=No
2	)	)	PUNCT	FB	_	1	punct	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	data	data	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	di	di	ADP	E	_	6	case	_	_
6	scadenza	scadenza	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	pagamento	pagamento	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
11	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	30	30	NUM	N	NumType=Card	4	nmod	_	_
14	giugno	giugno	NOUN	S	Gender=Masc|Number=Sing	13	flat	_	_
15	1994	1994	NUM	N	NumType=Card	13	flat	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Merone	Merone	PROPN	SP	_	0	root	_	_
2	(	(	PUNCT	FB	_	3	punct	_	SpaceAfter=No
3	quotaz	Quotaz	NOUN	S	_	1	appos	_	_
4	azioni	azione	NOUN	S	Gender=Fem|Number=Plur	3	compound	_	_
5	ordinarie	ordinario	ADJ	A	Gender=Fem|Number=Plur	4	amod	_	SpaceAfter=No
6	)	)	PUNCT	FB	_	3	punct	_	_
7	maggio	maggio	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
8	1994	1994	NUM	N	NumType=Card	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


