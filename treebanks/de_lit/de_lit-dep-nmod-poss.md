---
layout: base
title:  'Statistics of nmod:poss in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-nmod.html">nmod</a></tt>.

69 nodes (0%) are attached to their parents as `nmod:poss`.

61 instances of `nmod:poss` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73913043478261.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (40; 58% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (10; 14% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (8; 12% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (7; 10% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Lessings	Lessing	PROPN	NE	_	2	nmod:poss	_	_
2	Ironie	Ironie	NOUN	NN	Case=Nom	4	nsubj	_	_
3	ist	sein	AUX	VAFIN	_	4	cop	_	_
4	Instinkt	Instinkt	NOUN	NN	Case=Nom	0	root	_	SpaceAfter=No
5	;	;	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:poss	color:blue
1	Es	es	PRON	PPER	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	gibt	geben	VERB	VVFIN	_	0	root	_	_
3	Menschen	Mensch	NOUN	NN	Case=Nom	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	3	punct	_	_
5	deren	der	PRON	PRELAT	Case=Gen|PronType=Dem,Rel	7	nmod:poss	_	_
6	ganze	ganz	ADJ	ADJA	_	7	amod	_	_
7	Tätigkeit	Tätigkeit	NOUN	NN	Case=Nom	9	nsubj	_	_
8	darin	darin	ADV	PAV	PronType=Dem	9	advmod	_	_
9	besteht	bestehen	VERB	VVFIN	_	3	acl	_	SpaceAfter=No
10	,	,	PUNCT	$,	_	9	punct	_	_
11	immer	immer	ADV	ADV	_	14	advmod	_	_
12	Nein	Nein	NOUN	NN	Case=Acc	14	obj	_	_
13	zu	zu	PART	PTKZU	_	14	mark	_	_
14	sagen	sagen	VERB	VVINF	_	9	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	Es	es	PRON	PPER	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	gibt	geben	VERB	VVFIN	_	0	root	_	_
3	einen	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	5	det	_	_
4	andern	anderer	DET	ADJA	PronType=Ind	5	det	_	_
5	Ehrgeiz	Ehrgeiz	NOUN	NN	Case=Acc	2	obj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	8	punct	_	_
7	der	der	DET	PRELS	Definite=Def|PronType=Art	8	det	_	_
8	lieber	lieber	ADV	ADV	_	5	parataxis	_	_
9	wie	wie	CCONJ	KOKOM	_	11	case	_	_
10	Tassos	Tasso	PROPN	NE	_	11	nmod:poss	_	_
11	Gabriel	Gabriel	PROPN	NE	_	8	nmod	_	SpaceAfter=No
12	:	:	PUNCT	$.	_	2	punct	_	_

~~~


