---
layout: base
title:  'Statistics of acl:relcl in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-acl.html">acl</a></tt>.

2114 nodes (1%) are attached to their parents as `acl:relcl`.

2114 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60596026490066.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1642; 78% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (191; 9% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (88; 4% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (88; 4% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (66; 3% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-X.html">X</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Menor	menor	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
2	número	número	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	perfilagem	perfilagem	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	que	que	PRON	_	Gender=Fem|Number=Sing|PronType=Rel	6	nsubj	_	_
6	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	ser	ser	AUX	_	VerbForm=Inf	8	aux:pass	_	_
8	executadas	executar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
2	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
3	poderá	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	acl:relcl	_	_
4	ser	ser	AUX	_	VerbForm=Inf	5	aux:pass	_	_
5	realizado	realizar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	xcomp	_	_
6	em	em	ADP	_	_	8	case	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
9	futuro	futuro	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Temperatura	temperatura	NOUN	_	Gender=Fem|Number=Sing	3	parataxis	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	região	região	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	onde	onde	ADV	_	Gender=Fem|Number=Sing|PronType=Rel	9	obl	_	_
5	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	hidratos	hidrato	NOUN	_	Gender=Masc|Number=Plur	9	nsubj	_	_
7	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	termodinamicamente	termodinamicamente	ADV	_	_	9	advmod	_	_
9	estáveis	estável	ADJ	_	Gender=Masc|Number=Plur	3	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


