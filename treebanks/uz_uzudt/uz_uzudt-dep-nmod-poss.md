---
layout: base
title:  'Statistics of nmod:poss in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="uz_uzudt-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="uz_uzudt-dep-nmod-part.html">nmod:part</a></tt>.

189 nodes (3%) are attached to their parents as `nmod:poss`.

189 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40740740740741.

The following 14 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (139; 74% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt> (27; 14% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="uz_uzudt-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-ADP.html">ADP</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-ADV.html">ADV</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-PART.html">PART</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	sen	zavqlantir	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	hayotning	hayot	NOUN	N	_	4	nmod:poss	_	_
3	aks	hayot	NOUN	N	_	4	amod	_	_
4	sadosi	sado	NOUN	N	_	0	root	_	_
5	.	sado	PUNCT	Y	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	ularning	ular	PRON	P	Case=Gen|Number=Plur|Person=3|PronType=Prs	2	nmod:poss	_	_
2	orasida	ora	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	nmod	_	_
3	oʻn	ora	NUM	M	Case=Nom|NumType=Ord	4	compound	_	_
4	ikki	ikki	NUM	M	_	5	nummod	_	_
5	ayol	ayol	NOUN	N	Case=Nom	6	nsubj	_	_
6	bor	bor	VERB	A	Mood=Imp|VerbForm=Fin	0	root	_	_
7	edi	edi	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
8	.	.	PUNCT	Y	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	sen	sado	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
2	orzu	orzu	NOUN	N	Case=Nom	4	compound:redup	_	_
3	-	orzu	PUNCT	Y	_	2	punct	_	_
4	armonning	armon	NOUN	N	Case=Gen	6	nmod:poss	_	_
5	pallada	palla	NOUN	N	_	6	obl	_	_
6	chaqnashi	chaqna	VERB	V	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	0	root	_	_
7	.	chaqna	PUNCT	Y	_	6	punct	_	_

~~~


