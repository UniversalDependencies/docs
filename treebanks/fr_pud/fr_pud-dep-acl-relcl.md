---
layout: base
title:  'Statistics of acl:relcl in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-acl.html">acl</a></tt>.

226 nodes (1%) are attached to their parents as `acl:relcl`.

226 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.76106194690265.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (167; 74% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (26; 12% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (17; 8% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (8; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	_
2	y	_	PRON	PRP	Person=3	3	expl:comp	_	_
3	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	encore	_	ADV	RB	_	3	advmod	_	_
5	des	_	DET	DT	Gender=Fem|Number=Plur	6	det	_	_
6	questions	_	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
7	qui	_	PRON	WP	Gender=Fem|Number=Plur	8	nsubj	_	_
8	demeurent	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	acl:relcl	_	_
9	sans	_	ADP	IN	_	10	case	_	_
10	réponse	_	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	C'	_	PRON	PDEM	_	3	nsubj	_	SpaceAfter=No
2	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	ce	_	PRON	PDEM	_	0	root	_	_
4	qui	_	PRON	WP	_	7	nsubj:caus	_	_
5	nous	_	PRON	PRP	Number=Plur|Person=1	7	obj:agent	_	_
6	fait	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:caus	_	_
7	revenir	_	VERB	VB	_	3	acl:relcl	_	_
8	encore	_	ADV	RB	_	7	advmod	_	_
9	et	_	CCONJ	CC	_	10	cc	_	_
10	encore	_	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Leur	_	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
2	premier	_	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	roi	_	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	fut	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	Mojmír	_	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
6	Ier	_	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True|SpaceAfter=No
7	,	_	PUNCT	,	_	9	punct	_	_
8	qui	_	PRON	WP	Gender=Masc|Number=Sing	9	nsubj	_	_
9	régna	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	acl:relcl	_	_
10	de	_	ADP	IN	_	11	case	_	_
11	830	_	NUM	CD	_	9	obl	_	_
12	à	_	ADP	IN	_	13	case	_	_
13	846	_	NUM	CD	_	11	nmod	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


