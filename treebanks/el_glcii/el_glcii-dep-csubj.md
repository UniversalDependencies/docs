---
layout: base
title:  'Statistics of csubj in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="el_glcii-dep-csubj-pass.html">csubj:pass</a></tt>.

80 nodes (1%) are attached to their parents as `csubj`.

76 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.9375.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (43; 54% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (17; 21% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (5; 6% instances), <tt><a href="el_glcii-pos-ADV.html">ADV</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="el_glcii-pos-NUM.html">NUM</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Ιούνιο	Ιούνιος	PROPN	PROPN	Case=Acc|Gender=Masc|Number=Sing	5	obl	_	_
3	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	να	να	AUX	AUX	_	5	aux	_	_
5	γραψω	γραφω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	3	csubj	_	_
6	ενα	ενας	DET	DET	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	τεστ	τεστ	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
8	για	για	ADP	ADP	_	10	case	_	_
9	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
10	Πανεπιστημιο	πανεπιστημιο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	όνειρό	όνειρο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	μου	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	επισκεφθούν	επισκέπτομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Pass	2	csubj	_	_
7	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Ελλάδα	Ελλάδα	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	12	punct	_	_
10	ιδίως	ιδίως	ADV	ADV	_	12	advmod	_	_
11	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Ακρόπολη	Ακρόπολη	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	8	appos	_	_
13	και	και	CCONJ	CCONJ	_	15	cc	_	_
14	άλλα	άλλος	DET	DET	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Ind	15	det	_	_
15	αξιοθέατα	αξιοθέατο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	12	conj	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	_
17	υπέροχες	υπέροχος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	18	amod	_	_
18	πατρίδα	πατρίδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	8	appos	_	_
19	μου	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


