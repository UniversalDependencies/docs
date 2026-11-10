---
layout: base
title:  'Statistics of acl:relcl in UD_Gujarati-ShabdaSetu'
udver: '2'
---

## Treebank Statistics: UD_Gujarati-ShabdaSetu: Relations: `acl:relcl`

This relation is a language-specific subtype of .

3 nodes (1%) are attached to their parents as `acl:relcl`.

2 instances of `acl:relcl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gu_shabdasetu-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="gu_shabdasetu-pos-VERB.html">VERB</a></tt>-<tt><a href="gu_shabdasetu-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	આ	આ	DET	_	Number=Sing|PronType=Dem	2	det	_	Gloss=this|GuGloss=આ
2	પુસ્તક	પુસ્તક	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	Gloss=book|GuGloss=પુસ્તક
3	,	,	PUNCT	_	_	6	punct	_	_
4	જે	જે	PRON	_	Case=Nom|PronType=Rel	5	obj	_	Gloss=rel|GuGloss=જે
5	એને	એને	PRON	_	Case=Erg|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	Gloss=he.dat|GuGloss=એને
6	લીધી	લીધી	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	acl:relcl	_	Gloss=take-pst.ptcp|GuGloss=લીધી
7	,	,	PUNCT	_	_	6	punct	_	_
8	તે	તે	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	9	det	_	Gloss=that|GuGloss=તે
9	મોંઘી	મોંઘું	ADJ	_	_	0	root	_	Gloss=expensive|GuGloss=મોંઘી
10	છે	છે	AUX	_	Mood=Ind	9	cop	_	Gloss=be.prs|GuGloss=છે
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 acl:relcl	color:blue
1	હું	હું	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=i.nom|GuGloss=હું
2	આ	આ	DET	_	Number=Sing|PronType=Dem	4	det	_	Gloss=this|GuGloss=આ
3	જે	જે	PRON	_	Number=Sing|PronType=Rel	4	det	_	Gloss=rel|GuGloss=જે
4	છોકરાને	છોકરો	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	Gloss=boy-acc|GuGloss=છોકરાને
5	મળ્યો	મળવું	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	10	acl:relcl	_	Gloss=meet-pst.ptcp|GuGloss=મળ્યો
6	,	,	PUNCT	_	_	10	punct	_	_
7	તેની	તે	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nmod:poss	_	Gloss=he.gen|GuGloss=તેની
8	મા	મા	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Gloss=mother|GuGloss=મા
9	ત્યાં	ત્યાં	ADV	_	_	10	advmod	_	Gloss=there|GuGloss=ત્યાં
10	રહે	રહેવું	VERB	_	Aspect=Hab|Gender=Masc|Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=live|GuGloss=રહે
11	છે	છે	AUX	_	_	10	aux	_	Gloss=be.prs|GuGloss=છે
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


