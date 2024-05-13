---
layout: base
title:  'Statistics of root in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `root`

This relation is universal.

1920 nodes (5%) are attached to their parents as `root`.

1920 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.2296875.

The following 11 pairs of parts of speech are connected with `root`: -<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1051; 55% instances), -<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (454; 24% instances), -<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (226; 12% instances), -<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (114; 6% instances), -<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (27; 1% instances), -<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (24; 1% instances), -<tt><a href="de_lit-pos-DET.html">DET</a></tt> (13; 1% instances), -<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), -<tt><a href="de_lit-pos-X.html">X</a></tt> (2; 0% instances), -<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="de_lit-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	_
2	nennt	nennen	VERB	VVFIN	_	0	root	_	_
3	viele	viel	DET	PIAT	Case=Acc|PronType=Ind	2	obj	_	_
4	Künstler	Künstler	NOUN	NN	_	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	8	punct	_	_
6	die	der	PRON	PRELS	Case=Nom|PronType=Dem,Rel	8	nsubj	_	_
7	eigentlich	eigentlich	ADV	ADV	_	8	advmod	_	_
8	Kunstwerke	Kunstwerk	NOUN	NN	Case=Nom	3	acl	_	_
9	der	der	DET	ART	Definite=Def|PronType=Art	10	det	_	_
10	Natur	Natur	NOUN	NN	_	8	nmod	_	_
11	sind	sein	AUX	VAFIN	_	8	cop	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Witz	Witz	NOUN	NN	Case=Nom	5	nsubj	_	_
2	ist	sein	AUX	VAFIN	_	5	cop	_	_
3	unbedingt	unbedingt	ADV	ADV	_	4	advmod	_	_
4	geselliger	gesellig	ADJ	ADJD	_	5	amod	_	_
5	Geist	Geist	NOUN	NN	Case=Nom	0	root	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	5	punct	_	_
7	oder	oder	CCONJ	KON	_	9	cc	_	_
8	fragmentarische	fragmentarisch	ADJ	ADJD	_	9	amod	_	_
9	Genialität	Genialität	NOUN	NN	_	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	ist	sein	AUX	VAFIN	_	7	cop	_	_
3	freilich	freilich	ADV	ADV	_	7	advmod	_	_
4	nur	nur	ADV	ADV	_	5	advmod	_	_
5	beinah	beinah	ADV	ADV	_	6	advmod	_	_
6	genialisch	genialisch	ADV	ADV	_	7	advmod	_	_
7	dumm	dumm	ADJ	ADJD	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


