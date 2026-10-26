---
layout: base
title:  'Statistics of acl:relcl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-acl.html">acl</a></tt>.

520 nodes (1%) are attached to their parents as `acl:relcl`.

520 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60576923076923.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (387; 74% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (47; 9% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (29; 6% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (20; 4% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (15; 3% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	association	association	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent
3	qui	qui	PRON	_	PronType=Rel	4	nsubj	_	_
4	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	aujourd'hui	aujourd'hui	ADV	_	_	4	advmod	_	_
6	39	39	NUM	_	Number=Plur|NumType=Card	7	nummod	_	Exponence[Number]=Inherent
7	passionnés	passionné	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	Exponence[Gender]=Inherent|SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Nous	nous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	pouvons	pouvoir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nous	nous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=1|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	demander	demander	VERB	_	VerbForm=Inf	3	xcomp	_	Subject=SubjRaising
6	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	obj	_	_
7	qu'	que	PRON	_	PronType=Rel	9	nsubj	_	SpaceAfter=No
8	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	expl:subj	_	_
9	adviendra	advenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	acl:relcl	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Kosovo	Kosovo	PROPN	_	_	9	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	si	si	SCONJ	_	_	5	mark	_	_
3	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	5	nsubj:pass	_	Polite=Yes
4	êtes	être	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	traité(e)	traiter	VERB	_	VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
6	par	par	ADP	_	_	7	case	_	_
7	Zometa	Zometa	PROPN	_	_	5	obl:mod	_	_
8	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	_
9	contient	contenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	même	même	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	Exponence[Gender]=Absent
12	substance	substance	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	Exponence[Gender]=Inherent
13	active	actif	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	_
14	qu'	que	SCONJ	_	_	15	case	_	SpaceAfter=No
15	Aclasta	Aclasta	PROPN	_	_	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


