---
layout: base
title:  'Statistics of cc in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `cc`

This relation is universal.

1363 nodes (3%) are attached to their parents as `cc`.

1326 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83932501834189.

The following 18 pairs of parts of speech are connected with `cc`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (606; 44% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (458; 34% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (149; 11% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (55; 4% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (41; 3% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (29; 2% instances), <tt><a href="it_markit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-X.html">X</a></tt>-<tt><a href="it_markit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 cc	color:blue
1	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	l'	il	DET	RD	_	3	det	_	_
3	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	che	che	PRON	PR	_	5	nsubj	_	_
5	razionalizza	razionalizzare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	natura	natura	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	_
8	"	"	PUNCT	FB	_	10	punct	_	_
9	in	in	ADP	E	_	10	case	_	_
10	cerchi	cerchio	NOUN	S	Gender=Masc|Number=Plur	5	obl	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	triangoli	triangolo	NOUN	S	Gender=Masc|Number=Plur	10	conj	_	_
13	"	"	PUNCT	FB	_	10	punct	_	_
14	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	E	e	CCONJ	CC	_	4	cc	_	_
2	perché	perché	SCONJ	CS	_	4	mark	_	_
3	allora	allora	SCONJ	CS	_	4	advcl	_	_
4	siamo	essere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	proprio	proprio	ADV	B	_	6	advmod	_	_
6	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
7	a	a	ADP	E	_	8	mark	_	_
8	distruggere	distruggere	VERB	V	VerbForm=Inf	6	acl	_	_
9	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	paesaggio	paesaggio	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	evento	evento	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
4	partecipano	partecipare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	soltanto	soltanto	ADV	B	_	6	advmod	_	_
6	artisti	artista	NOUN	S	Gender=Masc|Number=Plur	4	nsubj	_	_
7	già	già	ADV	B	_	8	advmod	_	_
8	noti	noto	ADJ	A	Gender=Masc|Number=Plur	6	amod	_	_
9	e	e	CCONJ	CC	_	10	cc	_	_
10	famosi	famoso	ADJ	A	Gender=Masc|Number=Plur	6	conj	_	_
11	;	[PUNCT]	PUNCT	FC	_	4	punct	_	_

~~~


