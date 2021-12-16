---
layout: base
title:  'Statistics of compound in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="qtd_sagt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="qtd_sagt-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="qtd_sagt-dep-compound-redup.html">compound:redup</a></tt>.

136 nodes (0%) are attached to their parents as `compound`.

120 instances of `compound` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19852941176471.

The following 15 pairs of parts of speech are connected with `compound`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (62; 46% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (28; 21% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (10; 7% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (7; 5% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Yani	yani	ADV	_	_	6	advmod	_	CSID=TR|Lang=tr
2	hangisi	hangisi	PRON	_	Case=Nom|Number=Sing|Person=3	6	obj	_	CSID=TR|Lang=tr
3	daha	daha	ADV	_	_	6	advmod	_	CSID=TR|Lang=tr
4	fazla	fazla	ADJ	_	_	6	advmod	_	CSID=TR|Lang=tr
5	hoşuna	hoş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	CSID=TR|Lang=tr
6	gitti	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	CSID=TR|Lang=tr
7	zu	zu	ADP	_	_	9	case	_	CSID=DE|Lang=de
8	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	CSID=DE|Lang=de
9	Lesen	lesen	VERB	_	VerbForm=Inf	6	obl	_	CSID=DE|Lang=de|SpaceAfter=No
10	?	?	PUNCT	_	_	6	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	En	en	ADV	_	_	2	advmod	_	CSID=TR|Lang=tr
2	son	son	NOUN	_	Case=Nom|Number=Sing	10	obl	_	CSID=TR|Lang=tr
3	sinemaya	sinema	NOUN	_	Case=Dat|Number=Sing	10	obl	_	CSID=TR|Lang=tr
4	belki	belki	ADV	_	_	10	advmod	_	CSID=TR|Lang=tr
5	eh	eh	INTJ	_	_	10	discourse	_	CSID=TR|Lang=tr
6	vor	vor	ADP	_	_	9	case	_	CSID=DE|Lang=de
7	ein	ein	NUM	_	NumType=Card	8	compound	_	CSID=DE|Lang=de
8	zwei	zwei	NUM	_	NumType=Card	9	nummod	_	CSID=DE|Lang=de
9	Monaten	Monat	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	10	obl	_	CSID=DE|Lang=de
10	gittim	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	CSID=TR|Lang=tr|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	CSID=TR|Lang=tr
2	ondan	o	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Prs	6	advmod	_	CSID=TR|Lang=tr
3	sonra	sonra	ADP	_	_	2	fixed	_	CSID=TR|Lang=tr
4	ona	o	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	6	obl	_	CSID=TR|Lang=tr
5	wechseln	wechseln	VERB	_	VerbForm=Inf	6	compound	_	CSID=DE|Lang=de
6	edeceğim	et	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Fut	0	root	_	CSID=TR|Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	CSID=OTHER

~~~


