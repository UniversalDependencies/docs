---
layout: base
title:  'Statistics of ccomp:speech in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `ccomp:speech`

This relation is a language-specific subtype of <tt><a href="pt_alienista-dep-ccomp.html">ccomp</a></tt>.

76 nodes (0%) are attached to their parents as `ccomp:speech`.

58 instances of `ccomp:speech` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.98684210526316.

The following 7 pairs of parts of speech are connected with `ccomp:speech`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (42; 55% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (16; 21% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (10; 13% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp:speech	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Agora	agora	ADV	_	_	3	advmod	_	_
3	espero	esperar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	ccomp:speech	_	_
4	que	que	SCONJ	_	_	3	dep	_	SpaceAfter=No
5	...	...	PUNCT	_	_	3	punct	_	_
6	-	-	PUNCT	_	_	3	punct	_	_
7	pensou	pensar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	sem	sem	ADP	_	_	10	mark	_	_
10	concluir	concluir	VERB	_	VerbForm=Inf	7	advcl	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	frase	frase	NOUN	_	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp:speech	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Pobre	pobre	ADJ	_	Number=Sing	3	amod	_	_
3	moço	moço	NOUN	_	Gender=Masc|Number=Sing	7	ccomp:speech	_	SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
6	,	,	PUNCT	_	_	3	punct	_	_
7	pensou	pensar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	alienista	alienista	NOUN	_	Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp:speech	color:blue
1	E	e	CCONJ	_	_	2	cc	_	_
2	acrescentava	acrescentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	6	punct	_	_
4	-	-	PUNCT	_	_	6	punct	_	_
5	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	preciso	preciso	ADJ	_	Gender=Masc|Number=Sing	2	ccomp:speech	_	_
7	derrubar	derrubar	VERB	_	VerbForm=Inf	6	csubj	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	tirano	tirano	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	!	!	PUNCT	_	_	2	punct	_	_

~~~


