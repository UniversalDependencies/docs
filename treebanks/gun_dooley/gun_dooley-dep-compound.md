---
layout: base
title:  'Statistics of compound in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="gun_dooley-dep-compound-svc.html">compound:svc</a></tt>.

32 nodes (0%) are attached to their parents as `compound`.

21 instances of `compound` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03125.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (14; 44% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (10; 31% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (8; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	_	_	NOUN	n	_	2	compound	_	_
2	_	_	NOUN	n	_	6	obl	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	2	acl	_	_
4	_	_	SCONJ	rel	_	3	mark	_	_
5	_	_	ADP	post	_	2	case	_	_
6	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	10	advcl	_	_
7	_	_	SCONJ	rel	_	6	mark	_	_
8	_	_	PART	discprt	_	6	dep:mod	_	_
9	_	_	PART	illocprt	_	6	dep:mod	_	_
10	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
11	_	_	PART	aspprt	_	10	dep:mod	_	_
12	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	10	compound:svc	_	_
13	_	_	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	SCONJ	rel	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	n:pred	Mood=Ind|Subcat=Int|VerbForm=Vnoun	0	root	_	_
6	_	_	VERB	n:pred	Mood=Ind|Subcat=Int|VerbForm=Vnoun	5	compound	_	_
7	_	_	PART	intprt	_	5	dep:mod	_	_
8	_	_	PART	aspprt	_	5	dep:mod	_	_
9	_	_	PART	illocprt	_	5	dep:mod	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	_	_	PUNCT	punct	_	8	punct	_	_
2	_	_	NOUN	n	_	8	obl	_	_
3	_	_	VERB	vi:a	Mood=Ind|Subcat=Int|VerbForm=Inf	2	compound	_	_
4	_	_	VERB	vt	Mood=Ind|Person[subj]=2|Subcat=Tran|VerbForm=Fin	2	acl	_	_
5	_	_	SCONJ	rel	_	4	mark	_	_
6	_	_	ADP	post	_	2	case	_	_
7	ke	ke	PART	illocprt	_	2	dep:mod	_	IMP
8	_	_	VERB	vi:a	Mood=Des|Person[subj]=2|Subcat=Int|VerbForm=Fin	10	parataxis:rep	_	_
9	_	_	PUNCT	punct	_	8	punct	_	_
10	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
11	_	_	PUNCT	punct	_	10	punct	_	_

~~~


