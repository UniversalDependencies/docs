---
layout: base
title:  'Statistics of csubj in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `csubj`

This relation is universal.

68 nodes (0%) are attached to their parents as `csubj`.

58 instances of `csubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (31; 46% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (21; 31% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (8; 12% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	İşte	işte	INTJ	_	_	10	discourse	_	CSID=TR|Lang=tr
2	bir	bir	DET	_	Definite=Ind	3	det	_	CSID=TR|Lang=tr
3	dil	dil	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	CSID=TR|Lang=tr
4	üzerine	üzeri	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=2	10	obl	_	CSID=TR|Lang=tr
5	şey	şey	NOUN	_	Case=Nom|Number=Sing	6	obj	_	CSID=TR|Lang=tr
6	yapmam	yap	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|VerbForm=Vnoun	7	csubj	_	CSID=TR|Lang=tr
7	lazım	lazım	ADJ	_	_	10	reparandum	_	CSID=TR|Lang=tr
8	präsentieren	präsentieren	VERB	_	VerbForm=Inf	9	compound:lvc	_	CSID=DE|Lang=de
9	etmem	et	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|VerbForm=Vnoun	10	csubj	_	CSID=TR|Lang=tr
10	lazım	lazım	ADJ	_	_	0	root	_	CSID=TR|Lang=tr|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Bosch'ta	Bosch	PROPN	_	Case=Loc|Number=Sing	4	obl	_	CSID=MIXED|CSPoint=Bosch§'ta|DeCase=Dat|Lang=qtd
2	da	da	ADV	_	_	1	advmod:emph	_	CSID=TR|Lang=tr
3	çok	çok	ADV	_	_	4	advmod	_	CSID=TR|Lang=tr
4	soran	sor	VERB	_	Case=Nom|Number=Sing|Tense=Pres|VerbForm=Part	5	csubj	_	CSID=TR|Lang=tr
5	oluyor	ol	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	CSID=TR|Lang=tr
6	mesela	mesela	ADV	_	_	5	advmod	_	CSID=TR|Lang=tr
7	ja	ja	INTJ	_	_	9	discourse	_	CSID=DE|Lang=de
8	woher	woher	ADV	_	_	9	advmod	_	CSID=DE|Lang=de
9	kommen	kommen	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	CSID=DE|Lang=de
10	Sie	sie	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	CSID=DE|Lang=de
11	denn	denn	ADV	_	_	9	advmod	_	CSID=DE|Lang=de|SpaceAfter=No
12	?	?	PUNCT	_	_	5	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Fanı	Fan	NOUN	_	Case=Acc|Number=Sing	3	obj	_	CSID=MIXED|CSPoint=Fan§ı|Lang=qtd
2	komple	komple	ADJ	_	_	3	amod	_	CSID=TR|Lang=tr
3	temizlemem	temizle	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|VerbForm=Vnoun	4	csubj	_	CSID=TR|Lang=tr
4	gerek	gerek	NOUN	_	Case=Nom|Number=Sing	0	root	_	CSID=TR|Lang=tr|SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	CSID=OTHER
6	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	CSID=DE|Lang=de
7	viel	viel	ADV	_	_	10	advmod	_	CSID=DE|Lang=de
8	zu	zu	ADP	_	_	10	mark	_	CSID=DE|Lang=de
9	staubig	staubig	ADJ	_	_	10	reparandum	_	CSID=DE|Lang=de
10	staubig	staubig	ADJ	_	_	4	conj	_	CSID=DE|Lang=de
11	innen	innen	ADV	_	_	10	advmod	_	CSID=DE|Lang=de|SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	CSID=OTHER

~~~


