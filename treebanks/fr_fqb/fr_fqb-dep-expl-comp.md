---
layout: base
title:  'Statistics of expl:comp in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `expl:comp`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_fqb-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_fqb-dep-expl-pv.html">expl:pv</a></tt>, <tt><a href="fr_fqb-dep-expl-subj.html">expl:subj</a></tt>.

26 nodes (0%) are attached to their parents as `expl:comp`.

26 instances of `expl:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03846153846154.

The following 1 pairs of parts of speech are connected with `expl:comp`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (26; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:comp	color:blue
1	Combien	combien	ADV	_	PronType=Int	3	advmod	_	_
2	y	y	PRON	_	Person=3|PronType=Prs	3	expl:comp	_	_
3	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	-t-il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	de	de	ADP	_	_	6	case	_	_
6	mégaoctets	mégaoctet	NOUN	_	_	3	obj	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	gigaoctet	gigaoctet	NOUN	_	_	3	obl:mod	_	_
10	?	?	PUNCT	_	_	3	punct	_	_

~~~


