---
layout: base
title:  'Statistics of advcl in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `advcl`

This relation is universal.

150 nodes (0%) are attached to their parents as `advcl`.

150 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.33333333333333.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (118; 79% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (17; 11% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl	color:blue
1	Dallas'ta	dallas	PROPN	_	Case=Loc|Number=Sing	2	obl	_	_
2	durarak	dur	VERB	_	Aspect=Prog|Polarity=Pos|VerbForm=Conv	6	advcl	_	_
3	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	4	nmod	_	_
4	San	san	PROPN	_	Case=Nom|Number=Sing	6	obl	_	_
5	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	4	flat	_	_
6	gitmek	git	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	xcomp	_	_
7	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 advcl	color:blue
1	Bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
2	öğleden	öğle	NOUN	_	Case=Abl|Number=Sing	4	obl:tmod	_	_
3	sonra	sonra	ADP	_	_	2	case	_	_
4	varan	var	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	9	advcl	_	_
5	Boston	boston	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	_
6	-	-	PUNCT	_	_	5	punct	_	_
7	San	san	PROPN	_	Case=Nom|Number=Sing	9	nmod	_	_
8	Francisco	francisco	PROPN	_	Case=Nom|Number=Sing	7	flat	_	_
9	uçuşlarını	uçuş	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	obj	_	_
10	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	Dallas'tan	dallas	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Boston'a	boston	PROPN	_	Case=Dat|Number=Sing	6	nmod	_	_
3	alabileceğim	al	VERB	_	Aspect=Imp|Evident=Fh|Number[psor]=Sing|Person[psor]=1|Polarity=Pos|Tense=Fut|VerbForm=Part	5	advcl	_	_
4	en	en	ADV	_	Degree=Sup	5	advmod	_	_
5	son	son	ADJ	_	_	6	amod	_	_
6	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
7	nedir	ne	X	_	Number=Sing	0	root	_	_

~~~


