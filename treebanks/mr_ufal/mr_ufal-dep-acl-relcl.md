---
layout: base
title:  'Statistics of acl:relcl in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-acl.html">acl</a></tt>.

5 nodes (0%) are attached to their parents as `acl:relcl`.

4 instances of `acl:relcl` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	_	भाव	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	3	nmod:poss	_	_
2	_	चा	ADP	_	Gender=Fem|Number=Sing	1	case	_	_
3	रक्तबंबाळ	रक्तबंबाळ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	झालेली	होणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Part	5	acl:relcl	_	_
5	मांडी	मांडी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	पाहून	पहाणे	VERB	_	Aspect=Perf|VerbForm=Conv	10	advcl	_	_
7	_	बहिण	NOUN	_	Case=Abs|Gender=Fem|Number=Sing	9	nmod:poss	_	_
8	_	चा	ADP	_	Gender=Masc|Number=Plur	7	case	_	_
9	डोळे	डोळा	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
10	भरून	भरणे	VERB	_	Aspect=Perf|VerbForm=Conv	0	root	_	_
11	आले	येणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Fin	10	compound:svc	_	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl:relcl	color:blue
1	जो	जो	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	_
2	_	सत्य	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	5	obl	_	_
3	_	साठी	ADP	_	_	2	case	_	_
4	उभा	उभा	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	5	compound:lvc	_	_
5	राहतो	रहाणे	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
6	_	तो	PRON	_	Deixis=Remt|Gender=Masc|Number=Sing|Person=3	8	nmod:poss	_	_
7	_	चा	ADP	_	Gender=Masc|Number=Sing	6	case	_	_
8	देव	देव	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	मरत	मरणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	_
10	नाही	नाही	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


