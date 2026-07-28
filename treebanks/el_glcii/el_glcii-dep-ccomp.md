---
layout: base
title:  'Statistics of ccomp in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `ccomp`

This relation is universal.

81 nodes (1%) are attached to their parents as `ccomp`.

79 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.32098765432099.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (55; 68% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (16; 20% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (8; 10% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Μας	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	2	iobj	_	_
2	βοηθαει	βοηθω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	AUX	AUX	_	4	aux	_	_
4	έχουμε	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	φίλοι	φίλος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	να	να	AUX	AUX	_	8	aux	_	_
8	αγαπούν	αγαπώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
9	και	και	CCONJ	CCONJ	_	11	cc	_	_
10	να	να	AUX	AUX	_	11	aux	_	_
11	ταξιδέψει	ταξιδεύω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	2	punct	_	NewPar=Yes

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Νομίζω	νομίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ότι	ότι	SCONJ	SCONJ	_	5	mark	_	_
3	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	cop	_	_
4	πολύ	πολύ	ADV	ADV	_	5	advmod	_	_
5	σημαντικό	σημαντικός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	1	ccomp	_	_
6	να	να	AUX	AUX	_	7	aux	_	_
7	μάθουν	μαθαίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	5	csubj	_	_
8	ξένες	ξένος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	9	amod	_	_
9	γλώσσες	γλώσσα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
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


