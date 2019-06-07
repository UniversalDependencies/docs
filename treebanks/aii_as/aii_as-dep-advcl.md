---
layout: base
title:  'Statistics of advcl in UD_Assyrian-AS'
udver: '2'
---

## Treebank Statistics: UD_Assyrian-AS: Relations: `advcl`

This relation is universal.

11 nodes (2%) are attached to their parents as `advcl`.

7 instances of `advcl` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.54545454545455.

The following 5 pairs of parts of speech are connected with `advcl`: <tt><a href="aii_as-pos-VERB.html">VERB</a></tt>-<tt><a href="aii_as-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="aii_as-pos-VERB.html">VERB</a></tt>-<tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="aii_as-pos-ADJ.html">ADJ</a></tt>-<tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="aii_as-pos-PROPN.html">PROPN</a></tt>-<tt><a href="aii_as-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="aii_as-pos-VERB.html">VERB</a></tt>-<tt><a href="aii_as-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	ܐܸܢ	ܐܸܢ	SCONJ	_	_	2	nsubj	_	_
2	ܬܵܦܩܸܬ̇	ܬܵܦܩ	VERB	_	Gender=Masc|Number=Sing|Person=2	5	advcl	_	_
3	ܒܹܗ	ܒܹܗ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	2	acl:relcl	_	_
4	:	:	PUNCT	_	_	5	punct	_	_
5	ܕܵܪܸܝܬ̇	ܕܵܪܸܝ	VERB	_	Gender=Masc|Number=Sing|Person=2	0	root	_	_
6	ܠܸܗ	ܠܸܗ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	5	iobj	_	_
7	ܚܲܕ݇	ܚܲܕ݇	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	ܫܠܵܡܵܐ	ܫܠܵܡܵܐ	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl	color:blue
1	ܚܕ݇	ܚܕ݇	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	ܝܵܘܡܵܐ	ܝܵܘܡܵܐ	NOUN	_	Gender=Masc|Number=Sing	9	advcl	_	_
3	ܝܵܠܹ̈ܕ݇ܐ	ܝܵܠܵܕ݇ܐ	NOUN	_	Number=Plur	9	csubj	_	_
4	ܘ	ܘ	CCONJ	_	_	5	cc	_	_
5	ܒܢܵܬܹ̈ܐ	ܒܪܵܬܵܐ	NOUN	_	Number=Plur	3	conj	_	_
6	ܕ	ܕ	ADP	_	_	8	case	_	_
7	ܚܕܵܐ	ܚܕܵܐ	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	ܡܵܬܵܐ	ܡܵܬܵܐ	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	_
9	ܒܥܹܐܠܗ݇ܘܿܢ	ܒܵܥܹܐ	VERB	_	Number=Plur	0	root	_	_
10	ܕ	ܕ	PART	_	_	11	mark	_	_
11	ܛܲܐܠܝܼ	ܛܵܐܸܠ	VERB	_	Number=Plur	9	xcomp	_	_
12	ܛܲܫܝܵܐ	ܛܲܫܐ	VERB	_	_	13	compound	_	_
13	ܓܵܢܵܐ	ܓܵܢܵܐ	NOUN	_	_	11	obj	_	_
14	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	ܕ	ܕ	SCONJ	_	_	4	mark	_	_
2	ܬܲܚܡܲܢܝܵܬܸ̈ܗ	ܬܲܚܡܲܢܬܐ	NOUN	_	Number=Plur	4	nsubj	_	_
3	ܪܵܒܵܐ	ܪܵܒܵܐ	ADV	_	_	4	advmod	_	_
4	ܢܝܼܚܸܐ	ܢܝܼܚܸܐ	ADJ	_	Number=Plur	0	root	_	_
5	ܝܢܵܐ	ܗܵܘܹܐ	AUX	_	Number=Plur|Person=3|Tense=Pres	4	cop	_	Root=ܗܘܐ
6	ܡ̣ܢ	ܡܼܢ	ADP	_	_	8	case	_	_
7	ܗ̇ܘ	ܗܿܘ	DET	_	Definite=Def	8	det	_	_
8	ܓܸܢܒܵܐ	ܓܸܢܒܵܐ	NOUN	_	Number=Sing	4	advcl	_	_
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


