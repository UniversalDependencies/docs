---
layout: base
title:  'Statistics of acl in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="el_glcii-dep-acl-relcl.html">acl:relcl</a></tt>.

36 nodes (0%) are attached to their parents as `acl`.

36 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.25.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (28; 78% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Τωρα	τωρα	ADV	ADV	_	2	advmod	_	_
2	εχουμε	εχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	σκοπο	σκοπος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
4	για	για	ADP	ADP	_	6	mark	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	παμε	πηγαινω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	3	acl	_	_
7	σ	σε	ADP	ADP	_	9	case	_	_
8	το	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	θεατρο	θεατρο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 acl	color:blue
1	Σκοτόνονται	σκοτόνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	για	για	ADP	ADP	_	4	case	_	_
3	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	απόλαβη	απόλαβη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	_
5	μόνο	μόνο	ADV	ADV	_	4	advmod	_	_
6	και	και	CCONJ	CCONJ	_	11	cc	_	_
7	όχι	όχι	PART	PART	_	11	advmod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	επείδη	επείδη	SCONJ	SCONJ	_	11	mark	_	_
10	δεν	δεν	PART	PART	_	11	advmod	_	_
11	έχουμε	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
12	τίποτα	τίποτα	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind	11	obj	_	_
13	να	να	AUX	AUX	_	14	aux	_	_
14	τρώμε	τρώω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	_	_
15	ή	ή	CCONJ	CCONJ	_	17	cc	_	_
16	να	να	AUX	AUX	_	17	aux	_	_
17	φοράμε	φορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Ειμαι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	IntendedLemma=ειμαι
2	ενδοθσιασμενοσ	ενδοθσιαζω	VERB	VERB	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	να	να	AUX	AUX	_	4	aux	_	_
4	δο	βλεπω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	2	acl	_	_
5	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	οικογενια	οικογενια	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	4	obj	_	_
7	μου	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	γιατι	γιατι	SCONJ	SCONJ	_	10	mark	_	_
10	μενουν	μενω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	_
11	σ	σε	ADP	ADP	_	13	case	_	_
12	το	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	13	det	_	_
13	Καλιφορνια	Καλιφορνια	PROPN	PROPN	Case=Acc|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	17	punct	_	_
15	κε	κε	CCONJ	CCONJ	_	17	cc	_	_
16	εγο	εγο	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
17	μενω	μενω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	_	_
18	σ	σε	ADP	ADP	_	21	case	_	_
19	το	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	21	det	_	_
20	Νεα	νεα	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	17	obl	_	_
21	Υορκη	Υορκη	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	20	flat	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


