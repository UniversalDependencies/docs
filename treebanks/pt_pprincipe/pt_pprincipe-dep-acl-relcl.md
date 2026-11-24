---
layout: base
title:  'Statistics of acl:relcl in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pt_pprincipe-dep-acl.html">acl</a></tt>.

134 nodes (1%) are attached to their parents as `acl:relcl`.

134 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.44776119402985.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (88; 66% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (34; 25% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	Um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	carneiro	carneiro	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
4	come	comer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	tudo	tudo	PRON	_	PronType=Ind	4	obj	_	_
6	que	que	PRON	_	PronType=Rel	7	obj	_	_
7	encontra	encontrar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	Quando	quando	SCONJ	_	_	2	mark	_	_
2	achas	achar	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	13	advcl	_	_
3	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	diamante	diamante	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
5	que	que	PRON	_	PronType=Rel	9	nsubj	_	_
6	não	não	ADV	_	_	9	advmod	_	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	de	de	ADP	_	_	9	case	_	_
9	ninguém	ninguém	PRON	_	Number=Sing|PronType=Ind	4	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	2	punct	_	_
11	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	teu	teu	PRON	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronType=Prs	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


