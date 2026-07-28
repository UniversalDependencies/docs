---
layout: base
title:  'Statistics of parataxis in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `parataxis`

This relation is universal.

77 nodes (1%) are attached to their parents as `parataxis`.

75 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.45454545454545.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (47; 61% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	νομίζω	νομίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	6	punct	_	_
3	θα	θα	AUX	AUX	_	6	aux	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	καλός	καλός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	6	amod	_	_
6	γιατρός	γιατρός	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	1	punct	_	_
8	που	που	ADV	ADV	PronType=Int	9	advmod	_	_
9	μένεις	μένω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
10	;	;	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 parataxis	color:blue
1	ωστόσο	ωστόσο	CCONJ	CCONJ	_	4	cc	_	NewPar=Yes|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	πώς	πώς	ADV	ADV	_	4	advmod	_	_
4	ξεχνάμε	ξεχνώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	τις	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
6	αμμμουδιές	αμμμουδιά	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	4	obj	_	_
7	παραλίες	παραλία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	6	parataxis	_	_
8	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	nmod	_	SpaceAfter=No
9	!	!	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	πολλά	πολύς	DET	DET	Case=Acc|Gender=Neut|Number=Plur|PronType=Ind	2	det	_	NewPar=Yes
2	φιλιά	φιλί	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	θα	θα	AUX	AUX	_	5	aux	_	_
5	γράψω	γράφω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	2	parataxis	_	_
6	σύντομα	σύντομα	ADV	ADV	_	5	advmod	_	_
7	αν	αν	SCONJ	SCONJ	_	8	mark	_	_
8	λειτούργησε	λειτουργώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	CorrectSpaceAfter=No
9	!	!	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


