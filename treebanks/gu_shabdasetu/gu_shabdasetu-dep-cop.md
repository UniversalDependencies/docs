---
layout: base
title:  'Statistics of cop in UD_Gujarati-ShabdaSetu'
udver: '2'
---

## Treebank Statistics: UD_Gujarati-ShabdaSetu: Relations: `cop`

This relation is universal.

6 nodes (2%) are attached to their parents as `cop`.

6 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `cop`: <tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gu_shabdasetu-pos-AUX.html">AUX</a></tt> (3; 50% instances), <tt><a href="gu_shabdasetu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gu_shabdasetu-pos-AUX.html">AUX</a></tt> (2; 33% instances), <tt><a href="gu_shabdasetu-pos-ADV.html">ADV</a></tt>-<tt><a href="gu_shabdasetu-pos-AUX.html">AUX</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	ભારત	ભારત	PROPN	_	Case=Nom	3	nsubj	_	Gloss=india|GuGloss=ભારત
2	મારો	હું	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	nmod:poss	_	Gloss=my|GuGloss=મારો
3	દેશ	દેશ	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	Gloss=country|GuGloss=દેશ
4	છે	છે	AUX	_	_	3	cop	_	Gloss=is|GuGloss=છે
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	આજે	આજ	ADV	_	_	2	advmod	_	Gloss=today|GuGloss=આજે
2	મુશ્કેલ	મુશ્કેલ	ADV	_	_	0	root	_	Gloss=difficult|GuGloss=મુશ્કેલ
3	છે	છે	AUX	_	Mood=Ind	2	cop	_	Gloss=be.prs|GuGloss=છે
4	,	,	PUNCT	_	_	2	punct	_	_
5	પણ	પણ	CCONJ	_	_	8	cc	_	Gloss=but|GuGloss=પણ
6	કાલે	કાલ	ADV	_	_	8	advmod	_	Gloss=tomorrow|GuGloss=કાલે
7	જરૂર	જરૂર	ADV	_	_	8	advmod	_	Gloss=surely|GuGloss=જરૂર
8	આવીશ	આવવું	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	2	conj	_	Gloss=come-fut.1sg|GuGloss=આવીશ
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


