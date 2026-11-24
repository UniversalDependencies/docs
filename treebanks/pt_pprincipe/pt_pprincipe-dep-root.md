---
layout: base
title:  'Statistics of root in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `root`

This relation is universal.

1527 nodes (9%) are attached to their parents as `root`.

1527 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.51538965291421.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (1116; 73% instances), -<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (166; 11% instances), -<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (146; 10% instances), -<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (37; 2% instances), -<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (33; 2% instances), -<tt><a href="pt_pprincipe-pos-INTJ.html">INTJ</a></tt> (18; 1% instances), -<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (7; 0% instances), -<tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Capítulo	capítulo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	1	1	NUM	_	NumType=Card	1	nmod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	muito	muito	ADV	_	_	3	advmod	_	_
3	útil	útil	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	quando	quando	SCONJ	_	_	8	mark	_	_
6	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	8	expl:impers	_	_
7	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	perdido	perdido	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl	_	_
9	em	em	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	noite	noite	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


