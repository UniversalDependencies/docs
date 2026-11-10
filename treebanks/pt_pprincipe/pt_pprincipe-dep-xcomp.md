---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `xcomp`

This relation is universal.

304 nodes (2%) are attached to their parents as `xcomp`.

303 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.82565789473684.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (226; 74% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (62; 20% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Sabia	saber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	distinguir	distinguir	VERB	_	VerbForm=Inf	1	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	em	em	ADP	_	_	6	case	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	relance	relance	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	China	China	PROPN	_	_	2	obj	_	_
10	e	e	CCONJ	_	_	12	cc	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Arizona	Arizona	PROPN	_	_	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	E	e	CCONJ	_	_	2	cc	_	_
2	fiquei	ficar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	estupefato	estupefato	ADJ	_	Gender=Masc|Number=Sing	2	xcomp	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	ouvir	ouvir	VERB	_	VerbForm=Inf	3	acl	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	garoto	garoto	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	replicar	replicar	VERB	_	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
9	:	:	PUNCT	_	_	11	punct	_	_
10	-	-	PUNCT	_	_	11	punct	_	_
11	Não	não	ADV	_	_	8	ccomp:speech	_	SpaceAfter=No
12	!	!	PUNCT	_	_	11	punct	_	_
13	Não	não	ADV	_	_	11	conj	_	SpaceAfter=No
14	!	!	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Podia	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	ser	ser	AUX	_	VerbForm=Inf	5	cop	_	_
3	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	nova	novo	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
5	espécie	espécie	NOUN	_	Gender=Fem|Number=Sing	1	xcomp	_	_
6	de	de	ADP	_	_	7	case	_	_
7	baobá	baobá	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


