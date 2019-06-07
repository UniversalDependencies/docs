---
layout: base
title:  'Statistics of nmod:poss in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_pud-dep-nmod-arg.html">nmod:arg</a></tt>.

719 nodes (4%) are attached to their parents as `nmod:poss`.

719 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18915159944367.

The following 18 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (429; 60% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (162; 23% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (40; 6% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (39; 5% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (26; 4% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Çevreciler	Çevreci	NOUN	NN	Case=Nom|Number=Plur	5	nsubj	_	_
2	komisyonun	komisyon	NOUN	NN	Case=Gen|Number=Sing	3	nmod:poss	_	_
3	açıklamasını	açıkla	NOUN	VN	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	5	xcomp	_	_
4	sevinçle	sevinç	NOUN	NN	Case=Ins|Number=Sing	5	obl	_	_
5	karşıladı	karşıla	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	Yeni	yeni	ADJ	JJ	Number=Sing	2	amod	_	_
2	bütçe	bütçe	NOUN	NN	Case=Nom|Number=Sing	7	nsubj	_	_
3	Clinton'un	Clinton	PROPN	PROPN	Case=Gen|Number=Sing	6	nmod:poss	_	Proper=True
4	kabarık	kabarık	ADJ	JJ	Number=Sing	6	amod	_	_
5	banka	banka	NOUN	NN	Number=Sing	6	compound	_	_
6	hesabından	hesab	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
7	sağlanıyor	sağla	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Bunların	bu	PRON	PRD	Case=Gen|Number=Plur|Polarity=Pos	3	nmod:poss	_	_
2	yalnızca	yalnızca	ADJ	JJ	_	3	amod	_	_
3	ellisi	elli	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
4	pazar	pazar	NOUN	NN	Number=Sing	5	compound	_	_
5	alanı	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
6	ydı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


