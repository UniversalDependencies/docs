---
layout: base
title:  'Statistics of acl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_sequoia-dep-acl-relcl.html">acl:relcl</a></tt>.

1077 nodes (2%) are attached to their parents as `acl`.

1071 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.17270194986072.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (998; 93% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (44; 4% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (18; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	risque	risque	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
5	associé	associer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	acl	_	_
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	utilisation	utilisation	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
9	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
10	Aclasta	Aclasta	PROPN	_	_	8	nmod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 acl	color:blue
1	-	-	PUNCT	_	_	11	punct	_	_
2	^	^	PUNCT	_	_	11	punct	_	_
3	cf.	cf.	VERB	_	VerbForm=Inf	11	acl	_	_
4	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
5	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	conseil	conseil	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
7	démissionne	démissionner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	L'	L'	PROPN	_	_	11	det	_	SpaceAfter=No
11	Équipe	Équipe	PROPN	_	_	0	root	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	11	11	NUM	_	NumType=Card	14	nummod	_	_
14	mai	mai	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	_
15	2006	2006	NUM	_	NumType=Card	14	nummod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Voilà	voilà	VERB	_	Mood=Ind|VerbForm=Fin	0	root	_	_
2	qui	qui	PRON	_	PronType=Rel	1	obj	_	_
3	n'	ne	ADV	_	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	augure	augurer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
5	rien	rien	PRON	_	Number=Sing	4	obj	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	bon	bon	ADJ	_	Gender=Masc|Number=Sing	5	acl	_	_
8	selon	selon	ADP	_	_	9	case	_	_
9	moi	soi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


