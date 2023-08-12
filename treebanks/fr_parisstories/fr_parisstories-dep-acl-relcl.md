---
layout: base
title:  'Statistics of acl:relcl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-acl.html">acl</a></tt>.

309 nodes (1%) are attached to their parents as `acl:relcl`.

309 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75404530744337.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (174; 56% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (81; 26% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (10; 3% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 acl:relcl	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	il	_	PRON	_	_	4	expl:subj	_	_
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	_
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	plein	plein	ADV	_	_	7	advmod	_	_
6	de	de	ADP	_	_	5	obl:arg	_	_
7	trucs	truc	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	_
8	qu'	que	PRON	_	PronType=Rel	14	obj	_	SpaceAfter=No
9	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	13	nsubj	_	_
10	n'	ne	ADV	_	Polarity=Neg	13	advmod	_	SpaceAfter=No
11	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
12	pas	pas	ADV	_	Polarity=Neg	13	advmod	_	_
13	pu	pouvoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	_
14	faire	faire	VERB	_	VerbForm=Inf	13	xcomp	_	SpaceAfter=No|Subject=SubjRaising
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl:relcl	color:blue
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=114541|AlignEnd=114737
2	d'	de	ADP	_	_	3	case	_	AlignBegin=114737|AlignEnd=114933|SpaceAfter=No
3	ailleurs	ailleurs	ADV	_	_	6	advmod	_	AlignBegin=114933|AlignEnd=115129|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=115129|AlignEnd=115129
5	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	AlignBegin=115129|AlignEnd=115325
6	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=115325|AlignEnd=115521|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	AlignBegin=115521|AlignEnd=115521
8	toi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	6	dislocated	_	AlignBegin=115521|AlignEnd=115717|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	AlignBegin=115717|AlignEnd=115717
10	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	obj	_	AlignBegin=115717|AlignEnd=115912
11	qu'	que	PRON	_	PronType=Rel	14	obj	_	AlignBegin=115912|AlignEnd=116108|SpaceAfter=No
12	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=116108|AlignEnd=116304
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	AlignBegin=116304|AlignEnd=116500
14	devenu	devenir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	acl:relcl	_	AlignBegin=116500|AlignEnd=116696
15	Paul	Paul	PROPN	_	_	14	dislocated	_	AlignBegin=116696|AlignEnd=116892
16	?	?	PUNCT	_	_	6	punct	_	AlignBegin=116892|AlignEnd=116892

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=5719|AlignEnd=6069|SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	AlignBegin=6069|AlignEnd=6069
3	là	là	ADV	_	_	6	advmod	_	AlignBegin=6069|AlignEnd=6418|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=6418|AlignEnd=6418
5	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	AlignBegin=6725|AlignEnd=6988
6	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=6988|AlignEnd=7250
7	Pauline	Pauline	PROPN	_	_	6	obj	_	AlignBegin=7250|AlignEnd=7513
8	qui	qui	PRON	_	_	9	nsubj	_	AlignBegin=7513|AlignEnd=7775
9	vient	venir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	AlignBegin=7775|AlignEnd=8038|SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	AlignBegin=8038|AlignEnd=8038

~~~


