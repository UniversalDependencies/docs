---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pt_porttinari-dep-ccomp-speech.html">ccomp:speech</a></tt>.

1111 nodes (1%) are attached to their parents as `ccomp`.

1107 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.55715571557156.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (854; 77% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (113; 10% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (102; 9% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (20; 2% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	Eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|5:nsubj	_
2	quase	quase	ADV	_	_	3	advmod	3:advmod	_
3	desmaiei	desmaiar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	e	e	CCONJ	_	_	5	cc	5:cc	_
5	percebi	perceber	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	conj	3:conj:e	_
6	que	que	SCONJ	_	_	8	mark	8:mark	_
7	não	não	ADV	_	_	8	advmod	8:advmod	_
8	compensava	compensar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	5:ccomp	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	_
10	sacrifício	sacrifício	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	8:nsubj	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 ccomp	color:blue
1	Garotinho	Garotinho	PROPN	_	_	2	nsubj	2:nsubj	_
2	afirma	afirmar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	que	que	SCONJ	_	_	10	mark	10:mark	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	apreensão	apreensão	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
6	de	de	ADP	_	_	8	case	8:case	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	material	material	NOUN	_	Gender=Masc|Number=Sing	5	nmod	5:nmod:de	_
9	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	10:cop	_
10	ilegal	ilegal	ADJ	_	Number=Sing	2	ccomp	2:ccomp	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Mas	mas	CCONJ	_	_	4	cc	4:cc	_
2	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	_
3	não	não	ADV	_	_	4	advmod	4:advmod	_
4	entende	entender	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	que	que	SCONJ	_	_	7	mark	7:mark	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	parte	parte	NOUN	_	Gender=Fem|Number=Sing	4	ccomp	4:ccomp	_
8	de	de	ADP	_	_	10	case	10:case	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	10:det	_
10	solução	solução	NOUN	_	Gender=Fem|Number=Sing	7	nmod	7:nmod:de	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


