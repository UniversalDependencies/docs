---
layout: base
title:  'Statistics of compound:redup in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="as_aiw-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="as_aiw-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="as_aiw-dep-compound-svc.html">compound:svc</a></tt>.

9 nodes (1%) are attached to their parents as `compound:redup`.

9 instances of `compound:redup` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11111111111111.

The following 6 pairs of parts of speech are connected with `compound:redup`: <tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt>-<tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt> (3; 33% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="as_aiw-pos-ADP.html">ADP</a></tt>-<tt><a href="as_aiw-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="as_aiw-pos-ADV.html">ADV</a></tt>-<tt><a href="as_aiw-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="as_aiw-pos-INTJ.html">INTJ</a></tt>-<tt><a href="as_aiw-pos-INTJ.html">INTJ</a></tt> (1; 11% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:redup	color:blue
1	নতুন	নতুন	ADJ	_	_	2	compound:redup	_	_
2	নতুন	নতুন	ADJ	_	_	3	amod	_	_
3	ভাববোৰে	ভাব	NOUN	_	Number=Plur	7	nsubj	_	_
4	তাইৰ	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
5	মনটো	মন	NOUN	_	Case=Nom|Number=Sing	7	obj	_	_
6	ওপচাই	ওপচা	VERB	_	VerbForm=Conv	7	compound:svc	_	_
7	পেলালে	পেলা	VERB	_	Tense=Past	0	root	_	_
8	।	।	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:redup	color:blue
1	শহাটোৰ	শহা	NOUN	_	Case=Gen|Definite=Def|Number=Sing	3	nmod	_	_
2	পাছে	পাছ	NOUN	_	Case=Loc|Number=Sing	3	compound:redup	_	_
3	পাছে	পাছ	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
4	তায়ো	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
5	লৰ	লৰ	NOUN	_	Case=Nom	6	compound:lvc	_	_
6	মাৰিলে	মাৰা	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound:redup	color:blue
1	পূজা	পূজা	NOUN	_	Case=Nom|Number=Sing	2	compound	_	_
2	মণ্ডপৰ	মণ্ডপ	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
3	আশে	আশে	ADP	_	_	5	compound:redup	_	_
4	-	-	PUNCT	_	_	5	punct	_	_
5	পাশে	পাশে	ADP	_	_	9	obl	_	_
6	বিশুদ্ধ	বিশুদ্ধ	ADJ	_	_	7	amod	_	_
7	খোৱাপানীৰ	খোৱাপানী	NOUN	_	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	ব্যৱস্থা	ব্যৱস্থা	NOUN	_	Case=Acc|Number=Sing	9	obj	_	_
9	ৰাখিব	ৰাখা	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


