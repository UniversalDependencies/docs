---
layout: base
title:  'Statistics of aux in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="qtd_sagt-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="qtd_sagt-dep-aux-q.html">aux:q</a></tt>.

691 nodes (2%) are attached to their parents as `aux`.

567 instances of `aux` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84370477568741.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (646; 93% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (17; 2% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (15; 2% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	Stresten	stres	NOUN	_	Case=Abl|Number=Sing	0	root	_	CSID=TR|Lang=tr
2	mi	mi	AUX	_	Number=Sing|Person=3	1	aux:q	_	CSID=TR|Lang=tr|SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	_	CSID=OTHER
4	hast	haben	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	aux	_	CSID=DE|Lang=de
5	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	CSID=DE|Lang=de
6	deswegen	deswegen	ADV	_	_	8	advmod	_	CSID=DE|Lang=de
7	mh	mh	INTJ	_	_	8	discourse	_	CSID=DE|Lang=de
8	zugenommen	zunehmen	VERB	_	VerbForm=Part	1	parataxis	_	CSID=DE|Lang=de|SpaceAfter=No
9	?	?	PUNCT	_	_	1	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Ah	ah	INTJ	_	_	5	discourse	_	CSID=DE|Lang=de
2	das	der	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	CSID=DE|Lang=de
3	wird	werden	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	CSID=DE|Lang=de
4	auch	auch	ADV	_	_	5	advmod	_	CSID=DE|Lang=de
5	krass	krass	ADJ	_	_	0	root	_	CSID=DE|Lang=de
6	bestimmt	bestimmen	ADV	_	_	5	advmod	_	CSID=DE|Lang=de
7	Ramazan	ramazan	NOUN	_	Case=Nom|Number=Sing	2	appos	_	CSID=TR|Lang=tr|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Ähm	Ähm	INTJ	_	_	3	discourse	_	CSID=DE|Lang=de
2	ja	ja	INTJ	_	_	3	discourse	_	CSID=DE|Lang=de
3	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	CSID=DE|Lang=de
4	könnte	können	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	CSID=DE|Lang=de
5	schon	schon	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
6	sein	sein	AUX	_	VerbForm=Inf	3	cop	_	CSID=DE|Lang=de
7	ama	ama	CCONJ	_	_	12	cc	_	CSID=TR|Lang=tr
8	em	em	INTJ	_	_	12	discourse	_	CSID=TR|Lang=tr
9	öyle	öyle	DET	_	_	11	det	_	CSID=TR|Lang=tr
10	bir	bir	DET	_	Definite=Ind	11	det	_	CSID=TR|Lang=tr
11	şey	şey	NOUN	_	Case=Nom|Number=Sing	12	nsubj	_	CSID=TR|Lang=tr
12	yok	yok	ADJ	_	_	3	conj	_	CSID=TR|Lang=tr
13	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	12	cop	_	CSID=TR|Lang=tr
14	ya	ya	INTJ	_	_	12	discourse	_	CSID=TR|Lang=tr
15	ehm	ehm	INTJ	_	_	12	discourse	_	CSID=TR|Lang=tr|SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


