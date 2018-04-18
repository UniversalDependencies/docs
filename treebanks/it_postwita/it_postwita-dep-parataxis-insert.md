---
layout: base
title:  'Statistics of parataxis:insert in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_postwita-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_postwita-dep-parataxis-obj.html">parataxis:obj</a></tt>.

41 nodes (0%) are attached to their parents as `parataxis:insert`.

29 instances of `parataxis:insert` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.85365853658537.

The following 11 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (16; 39% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (8; 20% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (6; 15% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 parataxis:insert	color:blue
1	Parlando	parlare	VERB	V	VerbForm=Ger	11	parataxis:insert	_	_
2	di	di	ADP	E	_	3	case	_	_
3	politica	politica	NOUN	S	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	con	con	ADP	E	_	7	case	_	_
6	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	governo	governo	NOUN	S	Gender=Masc|Number=Sing	11	obl	_	_
8	Monti	Monti	PROPN	SP	_	7	nmod	_	_
9	a	a	ADP	E	_	10	case	_	_
10	cosa	cosa	PRON	PQ	PronType=Int	11	obl	_	_
11	servono	servire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	partiti	partito	NOUN	S	Gender=Masc|Number=Plur	11	nsubj	_	SpaceAfter=No
14	?	?	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis:insert	color:blue
1	Oggi	oggi	ADV	B	_	5	advmod	_	_
2	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	5	nsubj	_	_
3	a	a	ADP	E	_	5	case	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fiera	fiera	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	di	di	ADP	E	_	7	case	_	_
7	aprile	aprile	NOUN	S	Gender=Masc	5	nmod	_	_
8	a	a	ADP	E	_	9	case	_	_
9	Rivanazzano	Rivanazzano	PROPN	SP	_	7	nmod	_	_
10	immagino	immaginare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis:insert	_	_
11	...	...	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 parataxis:insert	color:blue
1	Io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
2	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
3	...	...	PUNCT	FS	_	5	punct	_	_
4	com'	come	ADV	B	_	5	advmod	_	_
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis:insert	_	_
6	che	che	SCONJ	CS	_	8	mark	_	_
7	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl:impers	_	_
8	dice	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	_
10	Paranoico	paranoico	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	10	punct	_	_

~~~


