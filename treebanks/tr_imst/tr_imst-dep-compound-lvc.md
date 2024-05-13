---
layout: base
title:  'Statistics of compound:lvc in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="tr_imst-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="tr_imst-dep-compound-redup.html">compound:redup</a></tt>.

523 nodes (1%) are attached to their parents as `compound:lvc`.

523 instances of `compound:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03632887189293.

The following 15 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (408; 78% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (76; 15% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-X.html">X</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:lvc	color:blue
1	Çok	çok	ADV	Adverb	_	2	advmod:emph	_	_
2	yakışıklı	yakışıklı	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	ydı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	,	,	PUNCT	Punc	_	6	punct	_	_
5	hemen	hemen	ADV	Adverb	_	6	advmod	_	_
6	fark	fark	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	conj	_	_
7	etmiştim	et	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pqp	6	compound:lvc	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:lvc	color:blue
1	Sakin	sakin	ADJ	Adj	_	3	amod	_	_
2	olmaya	ol	VERB	Verb	Aspect=Perf|Case=Dat|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	1	compound:lvc	_	_
3	çalışın	çalış	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:lvc	color:blue
1	İnceleme	incele	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	0	root	_	_
2	yapılmış	yap	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	1	compound:lvc	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


