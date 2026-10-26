---
layout: base
title:  'Statistics of obl:arg in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="el_glcii-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="el_glcii-dep-obl-agent.html">obl:agent</a></tt>.

5 nodes (0%) are attached to their parents as `obl:arg`.

3 instances of `obl:arg` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 2 pairs of parts of speech are connected with `obl:arg`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:arg	color:blue
1	Σ	σε	ADP	ADP	_	3	case	_	_
2	τα	ο	DET	DET	Case=Acc|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
3	γενέθλια	γενέθλια	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	5	obl	_	_
4	μου	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
5	πήγανε	πηγαίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	εκδρομή	εκδρομή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	5	obl:arg	_	_
7	σ	σε	ADP	ADP	_	10	case	_	_
8	τα	ο	DET	DET	Case=Acc|Gender=Neut|Number=Plur|PronType=Art	10	det	_	_
9	αλβανικά	αλβανικός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	10	amod	_	_
10	βουνά	βουνό	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	6	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:arg	color:blue
1	Τους	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obl:arg	_	_
2	φαίνεται	φαίνομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	2	nsubj:pass	_	_
4	περίεργο	περίεργος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	3	conj	_	_
7	παράνομο	παράνομος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	αμαρτία	αμαρτία	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


