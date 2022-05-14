---
layout: base
title:  'Statistics of expl in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_isdt-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_isdt-dep-expl-pass.html">expl:pass</a></tt>.

2181 nodes (1%) are attached to their parents as `expl`.

1759 instances of `expl` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22696011004127.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (2171; 100% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Vi	vi	PRON	PC	Clitic=Yes|PronType=Prs	2	expl	2:expl	_
2	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	migliaia	migliaio	NOUN	S	Gender=Fem|Number=Plur	2	nsubj	2:nsubj	_
4	di	di	ADP	E	_	5	case	5:case	_
5	casi	caso	NOUN	S	Gender=Masc|Number=Plur	3	nmod	3:nmod:di	_
6	di	di	ADP	E	_	8	case	8:case	_
7	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
8	genere	genere	NOUN	S	Gender=Masc|Number=Sing	5	nmod	5:nmod:di	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Ce	ce	PRON	PC	Clitic=Yes|PronType=Prs	4	expl	4:expl	_
2	n'	ne	PRON	PC	Clitic=Yes|PronType=Prs	4	iobj	4:iobj	SpaceAfter=No
3	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	4:cop	_
4	abbastanza	abbastanza	ADV	B	_	0	root	0:root	_
5	per	per	ADP	E	_	6	mark	6:mark	_
6	avvertire	avvertire	VERB	V	VerbForm=Inf	4	advcl	4:advcl:per	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	_
8	magistratura	magistratura	NOUN	S	Gender=Fem|Number=Sing	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Dove	dove	ADV	B	_	3	advmod	3:advmod	_
2	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	expl	3:expl	_
3	verifica	verifica	NOUN	S	Gender=Fem|Number=Sing	0	root	0:root	_
4	El	El	PROPN	SP	_	3	nsubj	3:nsubj	_
5	Nino	Nino	PROPN	SP	_	4	flat:name	4:flat:name	SpaceAfter=No
6	?	?	PUNCT	FS	_	3	punct	3:punct	_

~~~


