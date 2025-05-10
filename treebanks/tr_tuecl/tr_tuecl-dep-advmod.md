---
layout: base
title:  'Statistics of advmod in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tr_tuecl-dep-advmod-emph.html">advmod:emph</a></tt>.

34 nodes (4%) are attached to their parents as `advmod`.

33 instances of `advmod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 6 pairs of parts of speech are connected with `advmod`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (19; 56% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (7; 21% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (5; 15% instances), <tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_tuecl-pos-DET.html">DET</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Onlar	o	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
2	kimin	kim	PRON	_	Case=Gen|Number=Sing|PronType=Int	3	nsubj	_	_
3	yazdığını	yaz	VERB	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	5	ccomp	_	_
4	hiç	hiç	ADV	_	_	5	advmod	_	_
5	bilmiyorlar	bil	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	araba	araba	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	aldı	al	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	ama	ama	CCONJ	_	_	6	cc	_	_
5	erkek	erkek	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	kardeşi	kardeş	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	conj	_	_
7	sadece	sadece	ADV	_	_	8	advmod	_	_
8	bisiklet	bisiklet	NOUN	_	Case=Nom|Number=Sing	6	orphan	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Benim	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	_
3	senin	sen	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kinden	ki	PRON	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	obl	_	_
5	daha	daha	ADV	_	_	6	advmod	_	_
6	harika	harika	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


