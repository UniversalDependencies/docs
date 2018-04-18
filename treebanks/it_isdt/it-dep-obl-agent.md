---
layout: base
title:  'Statistics of obl:agent in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it-dep-obl.html">obl</a></tt>.

1139 nodes (0%) are attached to their parents as `obl:agent`.

1110 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.36435469710272.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (903; 79% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (161; 14% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (44; 4% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	977	977	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Enfiteusi	enfiteusi	NOUN	S	Gender=Fem	0	root	_	_
4	costituite	costituire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	7	case	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	persone	persona	NOUN	S	Gender=Fem|Number=Plur	4	obl:agent	_	_
8	giuridiche	giuridico	ADJ	A	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	Cosa	cosa	PRON	PQ	Number=Sing|PronType=Int	3	nsubj:pass	_	_
2	viene	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	prodotto	produrre	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Oracle	Oracle	PROPN	SP	_	3	obl:agent	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	1059	1059	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Servitù	servitù	NOUN	S	Gender=Fem	0	root	_	_
4	concessa	concedere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	6	case	_	_
6	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	obl:agent	_	_
7	di	di	ADP	E	_	9	case	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	comproprietari	comproprietario	NOUN	S	Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


