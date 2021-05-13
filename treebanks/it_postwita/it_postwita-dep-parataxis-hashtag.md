---
layout: base
title:  'Statistics of parataxis:hashtag in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:hashtag`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_postwita-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_postwita-dep-parataxis-obj.html">parataxis:obj</a></tt>.

2253 nodes (2%) are attached to their parents as `parataxis:hashtag`.

1764 instances of `parataxis:hashtag` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.670661340435.

The following 14 pairs of parts of speech are connected with `parataxis:hashtag`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1108; 49% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (672; 30% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (157; 7% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (128; 6% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (69; 3% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (42; 2% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (30; 1% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (28; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (13; 1% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis:hashtag	color:blue
1	#monti	#monti	SYM	SYM	_	4	parataxis:hashtag	_	_
2	Bene	bene	ADV	B	_	4	advmod	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
5	Monti	Monti	PROPN	SP	_	4	nmod	_	SpaceAfter=No
6	:	:	PUNCT	FC	_	4	punct	_	_
7	ma	ma	CCONJ	CC	_	8	discourse	_	_
8	allora	allora	ADV	B	_	4	discourse	_	SpaceAfter=No
9	!	!	PUNCT	FS	_	4	punct	_	_
10	#oramonti	#oramonti	SYM	SYM	_	4	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 parataxis:hashtag	color:blue
1	#Maroni	#Maroni	SYM	SYM	_	9	parataxis:hashtag	_	_
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	politica	politica	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
4	di	di	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	governo	governo	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	_
7	Monti	Monti	PROPN	SP	_	6	nmod	_	_
8	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	sbagliata	sbagliato	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_

~~~


