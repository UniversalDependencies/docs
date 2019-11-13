---
layout: base
title:  'Statistics of parataxis:hashtag in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `parataxis:hashtag`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_twittiro-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_twittiro-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_twittiro-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_twittiro-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_twittiro-dep-parataxis-obj.html">parataxis:obj</a></tt>.

548 nodes (2%) are attached to their parents as `parataxis:hashtag`.

439 instances of `parataxis:hashtag` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.3905109489051.

The following 16 pairs of parts of speech are connected with `parataxis:hashtag`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (297; 54% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (157; 29% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (43; 8% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (14; 3% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (11; 2% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (10; 2% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (6; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis:hashtag	color:blue
1	Pure	pure	ADV	B	_	5	advmod	_	_
2	Passera	Passera	PROPN	SP	_	5	nsubj	_	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	_	_
4	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	definire	definire	VERB	V	VerbForm=Inf	0	root	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	membro	membro	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
8	di	di	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	5	punct	_	_
12	#monti	#monti	SYM	SYM	_	5	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis:hashtag	color:blue
1	#tornoascuola	#tornoascuola	SYM	SYM	_	5	parataxis:hashtag	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	“	“	PUNCT	FB	_	5	punct	_	_
4	buona	buono	ADJ	A	Gender=Fem|Number=Sing	5	amod	_	_
5	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	“	“	PUNCT	FB	_	5	punct	_	_
7	permettendo	permettire	VERB	V	VerbForm=Ger	5	advcl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 parataxis:hashtag	color:blue
1	#labuonascuola	#labuonascuola	SYM	SYM	_	3	parataxis:hashtag	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	interessante	interessante	ADJ	A	Number=Sing	0	root	_	_
4	quanto	quanto	ADP	E	_	6	case	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	tweet	tweet	NOUN	S	_	3	nmod	_	_
7	di	di	ADP	E	_	8	case	_	_
8	@user	@user	SYM	SYM	_	6	nmod	_	SpaceAfter=\n

~~~


