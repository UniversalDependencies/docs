---
layout: base
title:  'Statistics of nsubj:pass in UD_Cappadocian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-TueCL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cpg_tuecl-dep-nsubj.html">nsubj</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:pass`.

8 instances of `nsubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.375.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt> (7; 88% instances), <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-NUM.html">NUM</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	Στάθη	στέκουμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	το	το	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	3:det	_
3	λαχτόρι	λαχτόρι	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	1	nsubj:pass	1:nsubj:pass	_
4	σ	σε	ADP	ADP	_	6	case	6:case	_
5	ον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	αωπό	απός	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	1	obl	1:obl	_
7	γνέντα	γνέντα	ADP	ADP	_	6	case	6:case	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	΄Υπνωσανε	πνώνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	τα	το	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	3:det	_
3	τρία	τρείς	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	1	nsubj:pass	1:nsubj:pass	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


