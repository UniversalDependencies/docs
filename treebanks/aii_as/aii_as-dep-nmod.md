---
layout: base
title:  'Statistics of nmod in UD_Assyrian-AS'
udver: '2'
---

## Treebank Statistics: UD_Assyrian-AS: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="aii_as-dep-nmod-poss.html">nmod:poss</a></tt>.

17 nodes (4%) are attached to their parents as `nmod`.

16 instances of `nmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17647058823529.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt>-<tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt> (7; 41% instances), <tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt>-<tt><a href="aii_as-pos-PROPN.html">PROPN</a></tt> (5; 29% instances), <tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt>-<tt><a href="aii_as-pos-PRON.html">PRON</a></tt> (2; 12% instances), <tt><a href="aii_as-pos-PROPN.html">PROPN</a></tt>-<tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="aii_as-pos-ADJ.html">ADJ</a></tt>-<tt><a href="aii_as-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	ܡܘܼܕܝܼ	ܡܘܼܕܝܼ	PRON	_	_	3	nsubj	_	_
2	ܝܠܹܗ	ܗܵܘܹܐ	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Root=ܗܘܐ
3	ܫܸܡܵܐ	ܫܸܡܵܐ	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
4	ܕ	ܕ	ADP	_	_	5	case	_	_
5	ܒܵܒܘܼܟ̣	ܒܵܒܵܐ	NOUN	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes	3	nmod	_	_
6	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 36 nmod	color:blue
1	ܐܵܗܵܐ	ܐܵܗܵܐ	DET	_	Number=Sing|PronType=Dem	2	det	_	_
2	ܫܸܢ̄ܬܝܼ	ܫܸܢ̄ܬܐ	NOUN	_	Gender=Fem|Number=Sing|Poss=Yes	6	advcl	_	_
3	ܐ̄ܚܵܪܵܝܬܵܐ	ܐ̄ܚܵܪܵܝܐ	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	ܝܠܵܗܿ	ܗܵܘܹܐ	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Root=ܗܘܐ
5	ܕ	ܕ	PART	_	_	6	mark	_	_
6	ܒܸܩܪܵܝܵܐ	ܩܪܝܐ	VERB	_	Tense=Pres|VerbForm=Part	0	root	_	_
7	ܝܘܸܢ	ܗܵܘܹܐ	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
8	ܓܵܘ	ܓܵܘ	ADP	_	_	9	case	_	_
9	ܡܼܿܕܪܼܿܫܬܵܐ	ܡܼܿܕܪܼܿܫܬܵܐ	NOUN	_	Gender=Fem|Number=Sing	6	obl	_	_
10	ܕ	ܕ	PART	_	_	11	case	_	_
11	ܢܨܝܼܒ̣ܝܼܢ	ܢܨܝܼܒ̣ܝܼܢ	PROPN	_	Number=Sing	9	nmod	_	_
12	ܒܸ	ܒܸ	ADP	_	_	13	case	_	_
13	ܡܕܝܼܢ̄ܬܐ	ܡܕܝܼܢ̄ܬܐ	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	_
14	ܕ	ܕ	PART	_	_	15	case	_	_
15	ܐܼܿܪܒܹܝܠ	ܐܼܿܪܒܹܝܠ	PROPN	_	Number=Sing	13	nmod	_	_
16	ܘ	ܘ	CCONJ	_	_	28	cc	_	_
17	ܒ	ܒ	ADP	_	_	18	case	_	SpaceAfter=No
18	ܫܸܢ̄ܬܵܐ	ܫܸܢ̄ܬܵܐ	NOUN	_	Gender=Fem|Number=Sing	20	nsubj	_	_
19	ܕ	ܕ	PART	_	_	20	mark	_	_
20	ܒܸܐܬܵܝܵܐ	ܐܬܝܐ	VERB	_	Tense=Pres|VerbForm=Part	28	advcl	_	_
21	ܝܠܵܗܿ	ܗܵܘܹܐ	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	Root=ܗܘܐ
22	ܘ	ܘ	CCONJ	_	_	20	cc	_	_
23	ܒ	ܒ	ADP	_	_	24	case	_	SpaceAfter=No
24	ܚܲܝܠܵܐ	ܚܲܝܠܵܐ	NOUN	_	Gender=Masc|Number=Sing	20	advcl	_	_
25	ܕ	ܕ	PART	_	_	26	case	_	_
26	ܡܵܪܝܵܐ	ܡܵܪܝܵܐ	PROPN	_	Gender=Masc|Number=Sing	24	nmod	_	_
27	ܒܸܬ	ܒܸܬ	AUX	_	_	28	aux	_	_
28	ܥܵܒ̣ܪܸܢ	ܥܵܒ̣ܪ	VERB	_	Gender=Masc|Number=Sing|Person=1|Tense=Pres	6	conj	_	_
29	ܓܵܘ	ܓܵܘ	ADP	_	_	30	case	_	_
30	ܒܹܝܬܨܵܘܒܵܐ	ܒܹܝܬܨܵܘܒܵܐ	NOUN	_	Number=Sing	28	obl	_	_
31	ܕ	ܕ	PART	_	_	32	case	_	_
32	ܐܵܫܘܼܪ	ܐܵܫܘܼܪ	PROPN	_	Gender=Masc|Number=Sing	30	nmod	_	_
33	ܒܸ	ܒܸ	ADP	_	_	34	case	_	SpaceAfter=No
34	ܡܕܝܼܢ̄ܬܵܐ	ܡܕܝܼܢ̄ܬܵܐ	NOUN	_	Gender=Fem|Number=Sing	32	nmod	_	_
35	ܕ	ܕ	ADP	_	_	36	case	_	SpaceAfter=No
36	ܢܝܼܢܘܹܐ	ܢܝܼܢܘܹܐ	PROPN	_	Gender=Fem|Number=Sing	34	nmod	_	_
37	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	ܟܬܵܒܼܵܐ	ܟܬܵܒܼܵܐ	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
2	ܕܝܼܲܢ	ܕܝܼܲܢ	PRON	_	Person=1|Poss=Yes|PronType=Prs	1	nmod	_	_
3	ܝܘܼܗܒ̣ܸܠܲܢ	ܝܵܗܹܒ݂	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	_
4	ܩܵܐ	ܩܵܐ	ADP	_	_	5	case	_	_
5	ܡܲܠܦܵܢܵܐ	ܡܲܠܦܵܢܵܐ	NOUN	_	Number=Sing	3	obl	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


