---
layout: base
title:  'Statistics of acl:relcl in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_fqb-dep-acl.html">acl</a></tt>.

77 nodes (0%) are attached to their parents as `acl:relcl`.

77 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.74025974025974.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (69; 90% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	état	état	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
5	indien	indien	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	qui	qui	PRON	_	PronType=Rel	7	nsubj	_	_
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
9	plus	plus	ADV	_	_	10	advmod	_	_
10	grand	grand	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
11	nombre	nombre	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	habitants	habitant	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	_
14	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Nommez	nommer	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	université	université	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
4	dont	dont	PRON	_	PronType=Rel	8	nmod	_	_
5	Woodrow	Woodrow	PROPN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
6	Wilson	Wilson	PROPN	_	Gender=Masc|Number=Sing	5	flat:name	_	_
7	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	2	det	_	_
2	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	produit	produire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	_
5	cigarettes	cigarette	NOUN	_	Gender=Fem|Number=Plur	3	obj	_	_
6	avec	avec	ADP	_	_	7	case	_	_
7	ce	ce	PRON	_	_	3	obl:mod	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj:pass	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	appelé	appeler	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	acl:relcl	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Y-1	Y-1	PROPN	_	_	10	xcomp	_	_
13	?	?	PUNCT	_	_	3	punct	_	_

~~~


