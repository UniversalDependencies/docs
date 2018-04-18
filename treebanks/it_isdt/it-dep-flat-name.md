---
layout: base
title:  'Statistics of flat:name in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it-dep-flat-foreign.html">flat:foreign</a></tt>.

3382 nodes (1%) are attached to their parents as `flat:name`.

3382 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13897102306328.

The following 11 pairs of parts of speech are connected with `flat:name`: <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (3276; 97% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (56; 2% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (25; 1% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-SYM.html">SYM</a></tt> (8; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Corriere	Corriere	PROPN	SP	_	0	root	_	_
2	Sport	Sport	PROPN	SP	_	1	flat:name	_	_
3	da	da	ADP	E	_	4	case	_	_
4	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	23	23	NUM	N	NumType=Card	4	nummod	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
8	26	26	NUM	N	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Quando	quando	ADV	B	_	3	advmod	_	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	lanciato	lanciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Apollo	Apollo	PROPN	SP	_	3	nsubj:pass	_	_
6	11	11	NUM	N	NumType=Card	5	flat:name	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	da	da	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Monte	monte	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
6	Igman	Igman	PROPN	SP	_	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	_	_
8	arriva	arrivare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	qualche	qualche	DET	DI	Number=Sing|PronType=Ind	10	det	_	_
10	colpo	colpo	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	su	su	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	città	città	NOUN	S	Gender=Fem	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	8	punct	_	_

~~~


