---
layout: base
title:  'Statistics of acl:relcl in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-acl.html">acl</a></tt>.

226 nodes (1%) are attached to their parents as `acl:relcl`.

226 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.76991150442478.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (162; 72% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (30; 13% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (17; 8% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	y	y	PRON	PRP	Person=3|PronType=Prs	3	expl:comp	_	_
3	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	encore	encore	ADV	RB	_	3	advmod	_	_
5	des	un	DET	DT	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	questions	question	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
7	qui	qui	PRON	WP	PronType=Rel	8	nsubj	_	_
8	demeurent	demeurer	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	sans	sans	ADP	IN	_	10	case	_	_
10	réponse	réponse	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	C'	ce	PRON	PDEM	PronType=Dem	3	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ce	ce	PRON	PDEM	PronType=Dem	0	root	_	_
4	qui	qui	PRON	WP	PronType=Rel	7	nsubj:caus	_	_
5	nous	le	PRON	PRP	Number=Plur|Person=1|PronType=Prs	7	obj:agent	_	_
6	fait	faire	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
7	revenir	revenir	VERB	VB	VerbForm=Inf	3	acl:relcl	_	_
8	encore	encore	ADV	RB	_	7	advmod	_	_
9	et	et	CCONJ	CC	_	10	cc	_	_
10	encore	encore	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Leur	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	3	det	_	wordform=leur
2	premier	premier	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	roi	roi	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
6	Ier	premier	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True|SpaceAfter=No|wordform=ier
7	,	,	PUNCT	,	_	9	punct	_	_
8	qui	qui	PRON	WP	PronType=Rel	9	nsubj	_	_
9	régna	régner	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
10	de	de	ADP	IN	_	11	case	_	_
11	830	830	NUM	CD	_	9	obl	_	_
12	à	à	ADP	IN	_	13	case	_	_
13	846	846	NUM	CD	_	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


