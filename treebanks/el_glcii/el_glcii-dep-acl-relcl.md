---
layout: base
title:  'Statistics of acl:relcl in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="el_glcii-dep-acl.html">acl</a></tt>.

84 nodes (1%) are attached to their parents as `acl:relcl`.

84 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.01190476190476.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (57; 68% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (13; 15% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="el_glcii-pos-ADV.html">ADV</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="el_glcii-pos-DET.html">DET</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	εργο	εργο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
3	που	που	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	4	obj	_	_
4	διαλεξαμε	διαλεγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
5	ξεκινουσε	ξεκινω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	σ	σε	ADP	ADP	_	8	case	_	_
7	της	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	επτα	επτα	NUM	NUM	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	5	obl	_	_
9	και	και	CCONJ	CCONJ	_	10	cc	_	_
10	μιση	μισος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	_
3	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
4	βασικό	βασικός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	3	amod	_	_
5	και	και	CCONJ	CCONJ	_	6	cc	_	_
6	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	3	conj	_	_
7	που	που	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Rel	9	nsubj	_	_
8	μας	εγώ	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	obj	_	_
9	ενώνει	ενώνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	12	punct	_	_
11	ως	ως	ADV	ADV	_	12	case	_	_
12	ανθρώπους	άνθρωπος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl:relcl	color:blue
1	Ξέρετε	ξέρω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	NewPar=Yes
2	ότι	ότι	SCONJ	SCONJ	_	7	mark	_	_
3	σ	σε	ADP	ADP	_	5	case	_	_
4	τις	ο	DET	DET	Case=Acc|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	μέρες	μέρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	_
6	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	5	nmod	_	_
7	υπάρχουν	υπάρχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
8	πολλά	πολύς	DET	DET	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	9	det	_	_
9	παιδιά	παιδί	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
10	που	που	PRON	PRON	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Rel	12	nsubj	_	_
11	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	12	cop	_	_
12	υπέρβαρα	υπέρβαρος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	9	acl:relcl	_	SpaceAfter=No
13	;	;	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No

~~~


