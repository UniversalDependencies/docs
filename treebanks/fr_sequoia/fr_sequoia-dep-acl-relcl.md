---
layout: base
title:  'Statistics of acl:relcl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-acl.html">acl</a></tt>.

536 nodes (1%) are attached to their parents as `acl:relcl`.

536 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66231343283582.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (390; 73% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (46; 9% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (32; 6% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (29; 5% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (15; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	association	association	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	qui	qui	PRON	_	PronType=Rel	4	nsubj	_	_
4	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	aujourd'hui	aujourd'hui	ADV	_	_	4	advmod	_	_
6	39	39	NUM	_	NumType=Card	7	nummod	_	_
7	passionnés	passionné	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Nous	il	PRON	_	Number=Plur|Person=1	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	pouvons	pouvoir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nous	se	PRON	_	Number=Plur|Person=1|Reflex=Yes	5	expl:comp	_	_
5	demander	demander	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	ce	ce	PRON	_	_	5	obj	_	_
7	qu'	que	PRON	_	PronType=Rel	9	obj	_	SpaceAfter=No
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	9	expl:subj	_	_
9	adviendra	advenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	acl:relcl	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Kosovo	Kosovo	PROPN	_	_	9	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 acl:relcl	color:blue
1	Mais	mais	CCONJ	_	_	4	cc	_	_
2	il	il	PRON	_	Number=Sing|Person=3	4	expl:subj	_	_
3	y	y	PRON	_	Person=3	4	expl:comp	_	_
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
7	sur	sur	ADP	_	_	8	case	_	_
8	lequel	lequel	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	13	obl:mod	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Commission	commission	NOUN	_	Gender=Fem|Number=Sing	13	nsubj	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	en	en	ADP	_	_	13	case	_	_
13	désaccord	désaccord	NOUN	_	Gender=Masc|Number=Sing	6	acl:relcl	_	_
14	avec	avec	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Conseil	conseil	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


