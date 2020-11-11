---
layout: base
title:  'Statistics of acl in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_fqb-dep-acl-relcl.html">acl:relcl</a></tt>.

145 nodes (1%) are attached to their parents as `acl`.

145 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18620689655172.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (138; 95% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	3	nsubj	_	_
2	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	étudiant	étudiant	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
4	et	et	CCONJ	_	_	6	cc	_	_
5	je	il	PRON	_	Number=Sing|Person=1	6	nsubj	_	_
6	cherche	chercher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
7	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	aide	aide	NOUN	_	Number=Sing	6	obj	_	_
9	pour	pour	ADP	_	_	10	mark	_	_
10	payer	payer	VERB	_	VerbForm=Inf	8	acl	_	_
11	mon	son	DET	_	Number=Sing|Poss=Yes	12	det	_	_
12	logement	logement	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 acl	color:blue
1	Il	il_y_a	PRON	_	Mood=Ind	0	root	_	ExtPos=V
2	y	_	PRON	_	_	1	fixed	_	_
3	a	_	VERB	_	Mood=Ind|VerbForm=Fin	1	fixed	_	_
4	combien	combien	ADV	_	PronType=Int	1	obj	_	_
5	d'	de	ADP	_	_	6	case	_	SpaceAfter=No
6	années	année	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	_
7	que	que	SCONJ	_	_	12	mark	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	vaisseau	vaisseau	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	_
10	Titanic	Titanic	PROPN	_	_	9	nmod	_	_
11	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	_
12	coulé	couler	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	_
13	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl	color:blue
1	Qui	qui	PRON	_	PronType=Int	2	nsubj	_	_
2	détient	détenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	record	record	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	artiste	artiste	NOUN	_	Number=Sing	4	nmod	_	_
8	enfant	enfant	NOUN	_	Number=Sing	7	nmod	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	mieux	mieux	ADV	_	_	7	advmod	_	_
11	payé	payer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	_
12	?	?	PUNCT	_	_	2	punct	_	_

~~~


