---
layout: base
title:  'Statistics of parataxis in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `parataxis`

This relation is universal.

93 nodes (1%) are attached to their parents as `parataxis`.

73 instances of `parataxis` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.94623655913978.

The following 17 pairs of parts of speech are connected with `parataxis`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (37; 40% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (15; 16% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (11; 12% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	proposta	proposta	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	pareceu	parecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	chocar	chocar	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	lo	lo	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	:	:	PUNCT	_	_	8	punct	_	_
7	-	-	PUNCT	_	_	8	punct	_	_
8	Amarrar	amarrar	VERB	_	VerbForm=Inf	3	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	resposta	resposta	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	simples	simples	ADJ	_	_	0	root	_	SpaceAfter=No
5	:	:	PUNCT	_	_	6	punct	_	_
6	tentei	tentar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	mas	mas	CCONJ	_	_	10	cc	_	_
9	não	não	ADV	_	_	10	advmod	_	_
10	consegui	conseguir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 parataxis	color:blue
1	E	e	CCONJ	_	_	9	cc	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	geografia	geografia	NOUN	_	Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	claro	claro	ADJ	_	Gender=Masc|Number=Sing	9	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	iobj	_	_
9	serviu	servir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	muito	muito	ADV	_	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


