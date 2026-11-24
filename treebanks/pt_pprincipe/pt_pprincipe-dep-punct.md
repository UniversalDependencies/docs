---
layout: base
title:  'Statistics of punct in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `punct`

This relation is universal.

3323 nodes (20%) are attached to their parents as `punct`.

2132 instances of `punct` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.52904002407463.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (1880; 57% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (667; 20% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (323; 10% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (183; 6% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (121; 4% instances), <tt><a href="pt_pprincipe-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (70; 2% instances), <tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (30; 1% instances), <tt><a href="pt_pprincipe-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (22; 1% instances), <tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="pt_pprincipe-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_pprincipe-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 punct	color:blue
1	Representava	representar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
3	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	jibóia	jibóia	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
5	que	que	PRON	_	PronType=Rel	6	nsubj	_	_
6	engolia	engolir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	_
7	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	fera	fera	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Capítulo	capítulo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	1	1	NUM	_	NumType=Card	1	nmod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 punct	color:blue
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


