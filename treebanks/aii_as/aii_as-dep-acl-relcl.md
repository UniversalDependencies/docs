---
layout: base
title:  'Statistics of acl:relcl in UD_Assyrian-AS'
udver: '2'
---

## Treebank Statistics: UD_Assyrian-AS: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="aii_as-dep-acl.html">acl</a></tt>.

2 nodes (0%) are attached to their parents as `acl:relcl`.

2 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="aii_as-pos-PRON.html">PRON</a></tt>-<tt><a href="aii_as-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="aii_as-pos-VERB.html">VERB</a></tt>-<tt><a href="aii_as-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	ܗܵܘ̇	ܗܵܘ̇	PRON	_	Case=Nom|Person=3|PronType=Prs	7	nsubj	_	_
2	ܕ	ܕ	PRON	_	PronType=Int	3	nsubj	_	_
3	ܙܵܪܸܥ	ܙܵܪܸܥ	VERB	_	Gender=Masc|Number=Sing|Person=3	1	acl:relcl	_	_
4	ܜܵܒ̣ܬܐ	ܜܵܒ̣ܬܐ	NOUN	_	Gender=Fem	3	obj	_	_
5	:	:	PUNCT	_	_	7	punct	_	_
6	ܒ	ܒ	AUX	_	_	7	aux	_	_
7	ܚܵܨܸܕ	ܚܵܨܸܕ	VERB	_	Gender=Masc|Number=Sing|Person=3	0	root	_	_
8	ܫܠܵܡܵܐ	ܫܠܵܡܵܐ	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:relcl	color:blue
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


